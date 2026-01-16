import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  noIndex?: boolean;
  breadcrumbs?: { name: string; url: string }[];
}

const SITE_NAME = "NationTechMart";
const BASE_URL = "https://www.nationtechmart.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

// Organization JSON-LD - shared across all pages
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NationTechMart",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.png`,
  "description": "Independent online retailer specializing in home printers, office printers, laser printers, inkjet printers, and document scanners.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Technology Drive, Suite 100",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-1234",
    "contactType": "sales",
    "email": "contact@nationtechmart.com",
    "availableLanguage": "English",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  }
};

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  breadcrumbs,
}: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullUrl = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;

  // Breadcrumb JSON-LD
  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${BASE_URL}${item.url}`,
        })),
      }
    : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;