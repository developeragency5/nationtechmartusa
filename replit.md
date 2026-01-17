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

## Recent Changes
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
