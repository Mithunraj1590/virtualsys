import ComponentFunc from "../src/components";
import Head from "next/head";
import { aboutData } from "../src/data/aboutData";
import { headerFooterData } from "../src/data/headerFooterData";

const AboutPage = ({ data, menu }) => {
  // Structured Data JSON-LD for better SEO
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Sys Technologies",
    "alternateName": "Virtual Sys",
    "url": "https://virtualsys.vercel.app",
    "logo": "https://virtualsys.vercel.app/images/logo.png",
    "description": "Leading offshore development company with 17+ years of experience providing dedicated development teams for web design, custom applications, e-commerce solutions, and cloud hosting.",
    "foundingDate": "2007",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50+"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "Customer Service",
      "email": "info@virtualsys.tech",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://twitter.com/virtualsys",
      "https://www.linkedin.com/company/virtualsys"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us | Virtual Sys Technologies",
    "description": "Learn about Virtual Sys Technologies - a leading offshore development company with 17+ years of experience. We provide dedicated development teams, web design, custom applications, and cloud hosting services.",
    "url": "https://virtualsys.vercel.app/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Virtual Sys Technologies",
      "foundingDate": "2007",
      "description": "Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. For over 17 years, we've helped companies across the UAE, USA, and India accelerate their digital transformation."
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://virtualsys.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://virtualsys.vercel.app/about"
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://virtualsys.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://virtualsys.vercel.app/about"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{aboutData.seo.metaTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={aboutData.seo.metaDescription} />
        <meta name="keywords" content={aboutData.seo.metaKeywords} />
        <meta name="robots" content={aboutData.seo.metaRobots} />
        <link rel="canonical" href={aboutData.seo.canonicalURL} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={aboutData.seo.metaOgTitle} />
        <meta property="og:description" content={aboutData.seo.metaOgDescription} />
        <meta property="og:type" content={aboutData.seo.metaOgType} />
        <meta property="og:url" content={aboutData.seo.metaOgUrl} />
        <meta property="og:site_name" content={aboutData.seo.metaOgSiteName} />
        <meta property="og:locale" content={aboutData.seo.metaOgLocale} />
        <meta property="og:image" content={aboutData.seo.metaOgImage.url} />
        <meta property="og:image:alt" content={aboutData.seo.metaOgImage.alt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={aboutData.seo.metaTwitterCard} />
        <meta name="twitter:title" content={aboutData.seo.metaTwitterTitle} />
        <meta name="twitter:description" content={aboutData.seo.metaTwitterDescription} />
        <meta name="twitter:image" content={aboutData.seo.metaOgImage.url} />
        <meta name="twitter:image:alt" content={aboutData.seo.metaOgImage.alt} />
        <meta name="twitter:creator" content={aboutData.seo.metaTwitterCreator} />
        <meta name="twitter:site" content={aboutData.seo.metaTwitterSite} />

        {/* Additional Meta Tags */}
        <meta name="city" content={aboutData.seo.metaCity} />
        <meta name="state" content={aboutData.seo.metaState} />
        <meta name="geo.region" content={aboutData.seo.metaGeoRegion} />
        <meta name="distribution" content={aboutData.seo.metaDistribution} />
        <meta name="key-phrases" content={aboutData.seo.metaKeyPhrases} />
        <meta name="classification" content={aboutData.seo.metaClassification} />
        <meta name="topic" content={aboutData.seo.metaTopic} />
        <meta name="subject" content={aboutData.seo.metaSubject} />
        <meta name="publisher" content={aboutData.seo.metaPublisher} />
        <meta name="author" content={aboutData.seo.metaAuthor} />
        <meta name="copyright" content={aboutData.seo.metaCopyright} />
        <meta name="rating" content={aboutData.seo.metaRating} />
        <meta name="audience" content={aboutData.seo.metaAudience} />
        <meta name="resource-type" content={aboutData.seo.metaResourceType} />
        <meta name="doc-type" content={aboutData.seo.metaDocType} />
        <meta name="doc-class" content={aboutData.seo.metaDocClass} />
        <meta name="doc-rights" content={aboutData.seo.metaDocRights} />
        <meta name="Email" content={aboutData.seo.metaEmail} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <div>
        {data?.widgets?.map((block, index) => (
          <ComponentFunc key={index} {...block} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Using static data directly in code - no API or db.json needed
  return {
    props: {
      data: aboutData,
      menu: {
        data: headerFooterData.data
      }
    },
  };
}

export default AboutPage;

