#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { ListToolsRequestSchema, CallToolRequestSchema, ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { spawn } from 'child_process';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class NgrokTunnelServer {
  constructor() {
    this.server = new Server(
      { name: 'ngrok-tunnel', version: '0.1.0' },
      { capabilities: { tools: {} } }
    );
    this.tunnels = {};
    this.startNgrok();
    this.setupToolHandlers();
    this.server.onerror = (err) => console.error('[MCP Error]', err);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  startNgrok() {
    const ngrokCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    const ngrok = spawn(ngrokCmd, [
      'ngrok', 'start', '--all',
      '--config', path.join(os.homedir(), '.ngrok2', 'ngrok.yml'),
      '--log', 'stdout', '--log-level', 'error', '--json'
    ]);
    ngrok.stdout.on('data', (buf) => {
      buf.toString().split('\n').forEach((line) => {
        if (!line) return;
        try {
          const evt = JSON.parse(line);
          if (evt.msg === 'started tunnel') {
            this.tunnels[evt.name] = evt.url;
          }
        } catch {}
      });
    });
    ngrok.on('close', (code) => console.error('ngrok exited:', code));
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'getTunnels',
          description: 'Get current ngrok tunnel URLs',
          inputSchema: { type: 'object', properties: {}, required: [] },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      if (request.params.name === 'getTunnels') {
        if (Object.keys(this.tunnels).length === 0) {
          throw new McpError(ErrorCode.InternalError, 'Tunnels not ready');
        }
        return { content: [{ type: 'json', data: this.tunnels }] };
      }
      throw new McpError(
        ErrorCode.MethodNotFound,
        `Unknown tool: ${request.params.name}`
      );
    });
  }

  async run() {
    await this.server.connect(new StdioServerTransport());
    console.error('ngrok-tunnel MCP server running');
  }
}

const server = new NgrokTunnelServer();
server.run().catch(console.error);
