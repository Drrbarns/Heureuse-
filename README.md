# Heureuse Logistics Website

A premium corporate website for Heureuse Logistics, a Ghana-based bulk fuel supply company. Built with Next.js 14, Tailwind CSS, and Shadcn UI.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

## Project Structure

-   `app/`: App Router pages and layouts.
-   `components/`: Reusable UI components and sections.
    -   `ui/`: Shadcn UI primitives.
    -   `layout/`: Navbar, Footer.
    -   `sections/`: Specific page sections (Hero, TrustBar, etc.).
-   `lib/`: Utilities, constants, form schemas, seo helpers.
-   `public/`: Static assets.

## Key Features

-   **Multi-step Quote Request Form**: Located at `/request-quote`.
-   **Referral Partner System**: Located at `/referral-partners`.
-   **SEO Optimized**: Metadata, Sitemap, JSON-LD Schema.
-   **Premium Design**: Custom Tailwind colors (Navy & Gold), Glassmorphism, Animations.

## Configuration

### Company Details
Edit `lib/constants.ts` to update:
-   Company Name
-   Phone Number
-   Email
-   Address
-   Social Links

### Environment Variables
Create a `.env.local` file for production keys:

```bash
# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification (Optional)
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
