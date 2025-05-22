# ngrok Tunnel MCP Server Implementation Details

> Note: Delete the `d:/github/secure-store` directory and its contents, as encrypted codes will now reside in `D:/github/.venv`.

This document details the ngrok-based MCP server for exposing `localhost:3000`.

## 1. Encrypted Recovery Codes

Place your ngrok recovery codes into a plaintext file at `D:/github/.venv/ngrok_recovery_codes.txt` with one code per line:
```
QBAFHE227D
MMFJR625CT
RUAWZ9RWBY
U266XHQV8S
U4Z5FV583E
3G44PFF89E
FMP3JFGURM
PC9TSRW9XH
6JN2B9VHKJ
U7KKV4HNU7
```
Encrypt the file using AES-256-CBC and your recovery key:
```bash
export NGROK_RECOVERY_KEY=<your_recovery_key>
openssl enc -aes-256-cbc -salt \
  -in D:/github/.venv/ngrok_recovery_codes.txt \
  -out D:/github/.venv/ngrok_recovery_codes.enc \
  -pass env:NGROK_RECOVERY_KEY
```

## 2. ngrok Configuration

At `%USERPROFILE%\.ngrok2\ngrok.yml`, define:
```yaml
authtoken: <your-ngrok-oauth-token>
tunnels:
  web:
    proto: http
    addr: 3000
    subdomain: bri-web
  api:
    proto: http
    addr: 3000
    subdomain: bri-api
```

## 3. Node.js MCP Server (`src/mcp-servers/ngrok-tunnel.js`)

```js
#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

// 1) Decrypt recovery codes
const decrypt = spawn('openssl', [
  'enc','-d','-aes-256-cbc','-salt',
  '-in', 'D:/github/.venv/ngrok_recovery_codes.enc',
  '-pass','env:NGROK_RECOVERY_KEY'
]);
let codes = '';
decrypt.stdout.on('data', data => codes += data.toString());
decrypt.on('close', () => {
  const recoveryCodes = codes.trim().split(/\r?\n/);
  console.log('Recovery codes loaded:', recoveryCodes);

  // 2) Start ngrok tunnels
  const ngrok = spawn('ngrok', [
    'start','--all',
    '--config', path.join(os.homedir(), '.ngrok2', 'ngrok.yml'),
    '--log','stdout','--log-level','error','--json'
  ]);
  const tunnels = {};
  ngrok.stdout.on('data', buf => {
    buf.toString().split('\n').forEach(line => {
      if (!line) return;
      const evt = JSON.parse(line);
      if (evt.msg === 'started tunnel') {
        tunnels[evt.name] = evt.url;
      }
      if (evt.msg === 'ready') {
        console.log('All tunnels ready:', tunnels);
        // Expose the tool method to Claude via MCP:
        process.send?.({ tool: 'getTunnels', result: tunnels });
      }
    });
  });
});
```

### MCP Registration and Tools

- Tool name: `getTunnels`  
- Returns:  
  ```json
  { "web": "https://bri-web.ngrok.io", "api": "https://bri-api.ngrok.io" }
  ```

Ensure this file is executable and added to `updated_claude_config.json`:
```json
"tunnel": {
  "command": "node",
  "args": ["D:/github/Claude-MCP/src/mcp-servers/ngrok-tunnel.js"],
  "disabled": false,
  "autoApprove": []
}