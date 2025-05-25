# Plan for Service Detail Pages with Content Backend Integration

## Introduction
The goal is to build comprehensive "Learn more" content for each service, starting with Advisory Services. Instead of directly embedding content in markdown files within the repository, we will integrate a content backend (Headless CMS) for improved content management, collaboration, and scalability. This document outlines the considerations for using Notion or a dedicated Headless CMS (like Vercel CMS) and the overall plan for implementing dynamic service detail pages.

## Content Backend Options

### 1. Notion as a Content Backend

**Pros:**
*   **User-Friendly Interface:** Notion provides a highly flexible and intuitive interface for content creators, familiar to many teams.
*   **Collaborative Editing:** Excellent real-time collaboration features for content drafting and review.
*   **Flexible Database Structure:** Easily adaptable to various content types and relationships.
*   **Existing Tool:** If the team already uses Notion, it leverages an existing toolset.

**Cons:**
*   **API Limitations:** While Notion has an API, it might not be as optimized for content delivery as dedicated CMS platforms (e.g., rate limits, query capabilities).
*   **Performance:** Data fetching might introduce slight latency compared to pre-built content or highly optimized CMS APIs. Requires careful caching strategies.
*   **Custom Integration:** Requires custom code to interact with the Notion API, parse its rich text format, and manage data synchronization.
*   **Not a "True" CMS:** Lacks dedicated content workflows (e.g., versioning, publishing states) that are standard in purpose-built CMS solutions, though workarounds exist.

**Integration Considerations:**
*   Use the official Notion API (`@notionhq/client` npm package).
*   Implement `getStaticProps` or `getServerSideProps` in Next.js to fetch data from Notion.
*   Map Notion's rich text blocks to React components for rendering.
*   Potentially use a caching layer or incremental static regeneration (ISR) to improve performance.

### 2. Vercel CMS (or other Headless CMS like Contentful, Sanity, Strapi)

**Pros:**
*   **Dedicated Content Management:** Built specifically for managing content, offering robust features like versioning, publishing workflows, user roles, and internationalization.
*   **Optimized for Next.js:** Vercel CMS is designed for seamless integration with Next.js, and many headless CMS platforms offer excellent SDKs and plugins for Next.js.
*   **Scalability & Performance:** Generally highly optimized for content delivery via APIs, ensuring fast loading times. Often includes CDN capabilities.
*   **Structured Content:** Enforces a structured content model, making it easier to manage and query content consistently.

**Cons:**
*   **Learning Curve:** Content creators might need to learn a new interface if they are not familiar with headless CMS platforms.
*   **External Dependency:** Adds another external service to the project architecture.
*   **Cost:** While many offer free tiers, advanced features or higher usage might incur subscription costs (for hosted solutions).
*   **Setup:** Initial setup involves defining content models and configuring API access.

**Integration Considerations:**
*   Choose a specific headless CMS (e.g., Vercel CMS, Contentful, Sanity).
*   Install relevant SDKs (e.g., `@vercel/cms`, `contentful`).
*   Define a "Service Detail Page" content model in the chosen CMS.
*   Implement `getStaticProps` (with `getStaticPaths` for dynamic routes) to fetch content at build time, ensuring optimal performance.
*   Utilize webhooks for automatic re-deployment on content updates (ISR).

## Proposed Data Flow/Architecture

```mermaid
graph TD
    A[Content Creators] --> B(Headless CMS <br/> (e.g., Notion, Vercel CMS))
    B -- API --> C[Next.js Application <br/> (src/app/[locale]/services/[serviceId]/page.tsx)]
    C -- Fetches Basic Service Info --> D[src/data/services.ts]
    C -- Renders Detailed Content --> E[Service Detail Page (Client)]
```

## Content Model (Conceptual)

A "Service Detail Page" content type in the CMS would include the following key fields:

*   **`serviceId` (Text, Required, Unique):** Matches the `id` in `src/data/services.ts` (e.g., `executive-communication-framework`). This will be the primary key for fetching content.
*   **`locale` (Text, Required):** Language of the content (e.g., `en`, `de`).
*   **`title` (Text, Required):** The full title of the service page (e.g., "Executive Communication Framework: Detailed Insights").
*   **`heroImage` (Asset/Media, Optional):** The image for the hero section of the page. Reusing a default image is the current plan.
*   **`fullDescription` (Rich Text/Markdown, Required):** A comprehensive overview of the service.
*   **`keyOfferings` (Rich Text/Markdown, Required):** Detailed points on what the service provides. (Prioritized as per user's request)
*   **`ourApproach` (Rich Text/Markdown, Optional):** Methodology or process used.
*   **`benefits` (Rich Text/Markdown, Optional):
*   **`whyChooseUs` (Rich Text/Markdown, Optional):** Differentiators and unique selling points.
*   **`callToAction` (Rich Text/Markdown, Optional):** Section for contact information or next steps.

## Initial Content Focus

As per your request, the initial focus will be on setting up content for the "Key Offerings" section for Advisory Services. Placeholders for "Our Approach," "Benefits," and "Why Choose Us" can be included in the content model for future expansion.

## Image Strategy

We will reuse a default image for all service detail pages to simplify the initial implementation. This can be updated to unique images per service later if desired.

## High-Level Implementation Steps

1.  **Select & Configure CMS:** Based on your feedback, choose either Notion or Vercel CMS (or another headless CMS) and set up the content model.
2.  **Populate Initial Content:** Add content for Advisory Services in the CMS, focusing on "Key Offerings."
3.  **Implement Dynamic Route:** Create `src/app/[locale]/services/[serviceId]/page.tsx`.
4.  **CMS Integration:** Write code to fetch content from the chosen CMS using its API/SDK within `page.tsx`.
5.  **Render Content:** Parse and render the fetched content (rich text/markdown) on the page.
6.  **Navigation:** Ensure the "Learn more" links from `ServiceCard` correctly point to these new dynamic pages.

I await your feedback on this detailed planning document. Please let me know if this plan aligns with your vision, and which content backend you would prefer to proceed with.