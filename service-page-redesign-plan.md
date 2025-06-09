# Detailed Plan for Big Rock-Intel Service Subpage Redesign

**Problem:** Big Rock-Intel's service subpages contain placeholder text and require a consistent, elegant, and professional layout aligned with the BRI Brand Style and Vibe Guide, building upon the existing page structure.

**Solution:** Adapt the service subpage content and rendering to fit the established visual structure, eliminating placeholder text, and enhancing content within existing sections to articulate value clearly. This will involve updating the markdown content and potentially refining the rendering components to ensure visual consistency and adherence to the implied BRI style.

**Business Impact:** A unified, professional, and consistent presentation of services will improve brand perception, enhance user experience, and clearly articulate the value proposition of each service, leading to increased engagement and potential client conversions, while maintaining the established visual identity.

### Revised Detailed Plan for Service Subpage Redesign

**1. Content Standardization and Cleanup:**
    *   **Automated Placeholder Removal:** Develop a script (in Code mode) to identify and remove common placeholder text patterns (e.g., "(PLACEHOLDER)", "PLACEHOLDER", "LOREM IPSUM", "ADD CONTENT HERE") from all `.md` files in `src/content/services/en/` and `src/content/services/de/`. This will specifically target the placeholder headings like "OUR APPROACH (PLACEHOLDER)", "BENEFITS (PLACEHOLDER)", and "WHY CHOOSE US (PLACEHOLDER)".
    *   **Content Migration/Enhancement:**
        *   The existing content within the `.md` files will be structured to fit the defined sections.
        *   For "KEY OFFERINGS", ensure each offering is clearly presented with a title and description. Where applicable, integrate the Apogee Insights Components (AI-Plan, AI-Capture, AI-Insight, AI-Portal, AI-Action) as *descriptions* of specific capabilities within the offerings. For example: "AI Risk Assessment: Identify and evaluate unique security risks associated with AI model development... leveraging **AI-Insight (TAG)** for expert-augmented defect detection."
        *   The sections currently marked with "(PLACEHOLDER)" will be populated with relevant content.

**2. Mapping to Existing Page Structure (Component-Based Approach):**
    The current visual structure will be maintained and enhanced.

    *   **Hero Section:**
        *   **Current Elements:** Service Title (e.g., "AI SECURITY STRATEGY"), concise tagline/description.
        *   **Action:** Ensure the markdown files provide sufficient data for these elements. The existing rendering logic in `src/app/[locale]/services/[serviceId]/page.tsx` likely handles this.

    *   **KEY OFFERINGS:**
        *   **Current Elements:** List of specific service offerings with titles and descriptions.
        *   **Action:** This section will house the core capabilities. Each "Key Offering" will be a distinct item. When relevant, the Apogee Insights Components will be organically woven into the descriptions of these key offerings, explaining *how* Big Rock-Intel delivers that offering.
            *   *Example Integration:*
                *   "AI Risk Assessment: Identify and evaluate unique security risks associated with AI model development, deployment, and operation, including data poisoning, model evasion, and privacy concerns. This process leverages **AI-Insight (TAG)** for expert-augmented defect detection and comprehensive risk profiling, reducing overall risk posture."
                *   "Secure AI Lifecycle Integration: Integrate security best practices across the entire AI lifecycle, from data ingestion and model training to deployment and monitoring, utilizing **AI-Capture (SPOT)** for high-resolution, structured data capture and **AI-Action (LINK - 2025)** for GenAI decision support."

    *   **OUR APPROACH:**
        *   **Current Elements:** Currently a placeholder section.
        *   **Action:** This section will describe Big Rock-Intel's methodology or process for delivering the service. It could include steps, phases, or the unique aspects of their service delivery. This is where **AI-Plan (ATLAS)** would be most naturally integrated if it describes the planning methodology.

    *   **BENEFITS:**
        *   **Current Elements:** Currently a placeholder section.
        *   **Action:** This section will clearly articulate the advantages and positive outcomes clients gain from using the service.

    *   **WHY CHOOSE US:**
        *   **Current Elements:** Currently a placeholder section.
        *   **Action:** This section will highlight Big Rock-Intel's unique selling propositions, expertise, and competitive advantages, potentially including client testimonials or case study highlights. **AI-Portal (SCOPE)**, representing the end-to-end visual inspection and asset analysis, could be mentioned here as a differentiator for client access if applicable to the specific service.

**3. Implementation Considerations:**
    *   **Markdown Content Update:** The `.md` files will be modified to remove placeholders and structured with appropriate markdown headings and content for each section (`## KEY OFFERINGS`, `## OUR APPROACH`, `## BENEFITS`, `## WHY CHOOSE US`).
    *   **Rendering Logic:** The existing `src/app/[locale]/services/[serviceId]/page.tsx` will need to parse these markdown files and render them into the corresponding visual sections, ensuring the "BRI Style and Vibe Guide" (as seen in the provided images) is maintained through consistent component usage and styling.
    *   **Styling Consistency:** Ensure that text styles, spacing, and visual elements (like icons or background patterns in the hero section) remain consistent with the provided images, leveraging existing CSS (likely Tailwind) and components.

### Revised Proposed Page Structure (Mermaid Diagram)

```mermaid
graph TD
    A[Service Subpage] --> B(Hero Section);
    B --> C(KEY OFFERINGS);
    C --> C1[Offering 1 (Integrate AI Components)];
    C --> C2[Offering 2 (Integrate AI Components)];
    C --> C3[Offering 3 (Integrate AI Components)];
    C --> D(OUR APPROACH);
    D --> E(BENEFITS);
    E --> F(WHY CHOOSE US);

    style C fill:#f9f,stroke:#333,stroke-width:2px;
    classDef component fill:#d8f3dc,stroke:#3c9;
    class C1,C2,C3 component;