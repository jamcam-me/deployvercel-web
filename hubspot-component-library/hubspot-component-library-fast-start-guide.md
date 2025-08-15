# Fast Start Guide: Building and Integrating HubSpot Templates

This guide will walk you through the process of developing custom HubSpot components using the existing `hubspot-component-library` and integrating them into your HubSpot theme.

**Prerequisites:**
*   Node.js and npm/yarn installed.
*   Access to your HubSpot portal with "Design Tools" permissions.
*   **HubSpot CLI** installed and and configured. If not, install it globally:
    ```bash
    npm install -g @hubspot/cli
    ```

**1. Local Development Setup**

*   **Clone or navigate to your project:** Ensure you are in the root of your project where the `hubspot-component-library` is located.
*   **Install dependencies for the component library:**
    ```bash
    cd hubspot-component-library
    npm install # or yarn install
    ```
    (Note: While the `package.json` is minimal, this is a standard step for any Node.js project.)

**2. Building Your HubSpot Template (Component)**

This involves creating two key files for each new component: a React component and its HubSpot field definition.

*   **Define Component Props in `hubspot-component-library/src/types/index.ts`**:
    Add the TypeScript interface for your component's properties. For example:
    ```typescript
    // hubspot-component-library/src/types/index.ts
    export interface YourNewComponentProps extends HubSpotModuleProps {
      title: string;
      imageUrl?: string;
      // Add other properties as needed
    }
    ```
*   **Create the React Component (`hubspot-component-library/src/components/YourNewComponent/index.tsx`)**:
    Develop your React component using TypeScript. Leverage `BaseComponent` for foundational styling and `ThemeAdapter` if your component needs to respond to theme changes.
    ```typescript
    // hubspot-component-library/src/components/YourNewComponent/index.tsx
    import React from 'react';
    import { BaseComponent } from '../BaseComponent';
    import { YourNewComponentProps } from '../../types';

    export const YourNewComponent: React.FC<YourNewComponentProps> = ({
      title,
      imageUrl,
      ...props
    }) => {
      return (
        <BaseComponent customClasses="your-component-class" {...props}>
          {imageUrl && <img src={imageUrl} alt={title} />}
          <h2>{title}</h2>
          {/* Add more JSX based on your props */}
        </BaseComponent>
      );
    };
    ```
*   **Create the JSON Field Definition (`hubspot-component-library/src/fields/your-new-component.json`)**:
    Define the editable fields for your component. The `"id"` and `"name"` in JSON should match your component's prop names.
    ```json
    // hubspot-component-library/src/fields/your-new-component.json
    [
      {
        "id": "title",
        "name": "title",
        "label": "Component Title",
        "required": true,
        "type": "text",
        "default": "New Component Title"
      },
      {
        "id": "image_url",
        "name": "image_url",
        "label": "Image",
        "type": "image"
      }
    ]
    ```

**3. Integrating into HubSpot Themes**

This ensures your custom components and styles are recognized and applied within your HubSpot theme.

*   **CSS Variables and Styling (`hubspot-component-library/src/styles/themes.css`)**:
    The `themes.css` file contains your brand's CSS variables and foundational styles. To integrate these into your HubSpot theme, ensure this stylesheet is uploaded to your HubSpot design manager and linked within your theme's `theme.json` or included in a global stylesheet your theme utilizes. HubSpot's design manager can then leverage these variables for theme settings and options.
*   **Theme Adapter Usage (`hubspot-component-library/src/themes/ThemeAdapter.tsx`)**:
    The `ThemeAdapter` component allows your custom components to apply theme-specific classes dynamically. In your main HubSpot theme's template files (e.g., `layout.html`, `main.html`), you can wrap your overall page content or specific sections with a component that utilizes this `ThemeAdapter`'s logic to control the active visual theme.

**4. Deploying to HubSpot (Using HubSpot CLI)**

This is the final step to push your local development work to your HubSpot portal.

*   **Authenticate with HubSpot CLI (if not already)**:
    ```bash
    hs init
    ```
    Follow the command-line prompts to connect your local environment to your HubSpot account.
*   **Upload your component and fields**:
    Navigate to the root of your project (where `hubspot-component-library` is located) and use the HubSpot CLI to upload your new component. The exact paths depend on your HubSpot theme's module structure, but typically you would upload the component folder and the field definition file.

    For example, for the `FeatureCard` component we created:
    ```bash
    hs upload hubspot-component-library/src/components/FeatureCard # Uploads the component folder
    hs upload hubspot-component-library/src/fields/feature-card.json # Uploads the field definition
    ```
    If your HubSpot theme is structured to accept all modules from a specific directory, you might use a broader upload command or a build script that compiles and moves files to a designated `dist` folder.

*   **Upload/Sync your theme (including CSS)**:
    To ensure your `themes.css` and any other theme-related assets are updated, upload your entire HubSpot theme folder.
    ```bash
    hs upload [path-to-your-hubspot-theme-folder]
    ```
    For continuous development, you can use `hs watch` to automatically sync changes:
    ```bash
    hs watch [path-to-your-hubspot-theme-folder]
    ```

After these steps, your new HubSpot component and theme styles will be available in your HubSpot portal for use in pages, blogs, and emails.