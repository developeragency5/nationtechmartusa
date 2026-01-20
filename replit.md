# NationTechMart

## Overview
NationTechMart is an e-commerce website for technology products (printers, scanners, office equipment). This is a React/TypeScript frontend application built with Vite.

## Project Structure
- `src/` - Main source code
  - `components/` - React components (UI components, layout, shared components)
  - `pages/` - Page components (Index, Shop, About, Contact, etc.)
  - `lib/` - Utility functions
  - `hooks/` - Custom React hooks
- `public/` - Static assets

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation

## Running the Project
The development server runs on port 5000:
```bash
npm run dev
```

## Deployment
Configured for static deployment. Build output goes to `dist/` directory.

## Compliance Guidelines (CRITICAL)
- **Shipping**: NEVER use "Free Shipping" - always use "Shipping details are shown at checkout"
- **Warranty**: Use conditional language: "Products include applicable manufacturer standard warranty coverage where offered; terms vary by product and brand"
- **No endorsement language**: Avoid "curated", "hand-picked", "official", "authorized", "certified", "partner", "approved"
- **Guides**: We do NOT offer guides - use "Clear Product Information" instead
- **Trademark Notice**: Required in footer

## Recent Changes
- January 20, 2026: Compliance overhaul for Google/Bing Ads and HP trademark safety
  - Removed ALL "Free Shipping" → "Shipping details are shown at checkout" (Ecwid compatible)
  - Trust Bar: Shipping Details Shown at Checkout | Secure Checkout – SSL encrypted | Easy Returns – 30-day policy (eligibility applies)
  - "Genuine Products" → "Authentic Products" with conditional warranty language
  - "Professional Guides" → "Clear Product Information"
  - "curated selection" → "wide selection", "Hand-picked" → "Popular"
  - Added Trademark Notice to footer
  - Added return policy disclaimers (eligibility applies, exclusions may apply)
  - Homepage order: Hero → About Us → Printer Guide → Featured Products → Shop by Category → Why NationTechMart → Our Commitment → Our Approach → Who We Serve → Transparency → FAQ
- January 17, 2026: Added "Find the Right Printer" category guide section to homepage
  - New PrinterCategoryGuide component with 5 category cards (Home, Office, Inkjet, Laser, Scanners)
  - Each card includes description, highlights, and link to category page
  - Updated About page banner to 21:9 aspect ratio
  - Updated 2nd carousel banner heading to "Home, Office, Inkjet & Laser Printers"
- January 15, 2026: Imported from Lovable to Replit environment
  - Updated Vite config to use port 5000 and allow all hosts
  - Configured static deployment

## User Preferences
(To be added as user expresses preferences)
