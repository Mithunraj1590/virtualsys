import ComponentFunc from "../src/components";
import Head from "next/head";
import { homeData } from "../src/data/homeData";
import { headerFooterData } from "../src/data/headerFooterData";

const HomePage = (props) => {
  // Structured Data JSON-LD for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Sys Technologies",
    "url": "https://virtualsys.vercel.app",
    "logo": "https://virtualsys.vercel.app/images/logo.png",
    "description": "Leading offshore development company providing dedicated teams for web design, custom applications, e-commerce solutions, and cloud hosting.",
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
      "email": "info@virtualsys.tech"
    },
    "sameAs": [
      "https://twitter.com/virtualsys",
      "https://www.linkedin.com/company/virtualsys"
    ]
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Virtual Sys Technologies"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Hosting & DevOps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Software Development"
          }
        }
      ]
    }
  };

  return (
    <>
    <Head>
    <title>{props?.data?.seo?.metaTitle}</title>
        <meta name="description" content={props?.data?.seo?.metaDescription} />
        <meta name="keywords" content={props?.data?.seo?.metaKeywords} />
        <meta name="distribution" content={props?.data?.seo?.metaDistribution} />
        <meta name="city" content={props?.data?.seo?.metaCity} />
        <meta name="geo.region" content={props?.data?.seo?.metaGeoRegion}/>
        <meta name="state" content={props?.data?.seo?.metaState}/>
        <meta name="key-phrases" content={props?.data?.seo?.metaKeyPhrases}/>
        <meta name="classification" content={props?.data?.seo?.metaClassification}/>
        <meta name="topic" content={props?.data?.seo?.metaTopic}/>
        <meta name="subject" content={props?.data?.seo?.metaSubject}/>
        <meta name="publisher" content={props?.data?.seo?.metaPublisher}/>
        <meta name="author" content={props?.data?.seo?.metaAuthor}/>
        <meta name="copyright" content={props?.data?.seo?.metaCopyright}/>
        <meta name="rating" content={props?.data?.seo?.metaRating}/>
        <meta name="audience" content={props?.data?.seo?.metaAudience}/>
        <meta name="resource-type" content={props?.data?.seo?.metaResourceType}/>
        <meta name="doc-type" content={props?.data?.seo?.metaDocType}/>
        <meta name="doc-class" content={props?.data?.seo?.metaDocClass}/>
        <meta name="doc-rights" content={props?.data?.seo?.metaDocRights}/>
        <meta name="Email" content={props?.data?.seo?.metaEmail}/>

        <meta property="og:locale" content={props?.data?.seo?.metaOgLocale}/>
        <meta property="og:type" content={props?.data?.seo?.metaOgType}/>
        <meta property="og:title" content={props?.data?.seo?.metaOgTitle}/>
        <meta property="og:description" content={props?.data?.seo?.metaOgDescription}/>
        <meta property="og:url" content={props?.data?.seo?.metaOgUrl}/>
        <meta property="og:site_name" content={props?.data?.seo?.metaOgSiteName}/>
        <meta property="og:image" content={props?.data?.seo?.metaOgImage?.url}/>
        <meta property="og:image:alt" content={props?.data?.seo?.metaOgImage?.alt}/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content={props?.data?.seo?.metaTwitterCard}/>
        <meta name="twitter:description" content={props?.data?.seo?.metaTwitterDescription}/>
        <meta name="twitter:title" content={props?.data?.seo?.metaTwitterTitle}/>
        <meta name="twitter:image" content={props?.data?.seo?.metaOgImage?.url}/>
        <meta name="twitter:image:alt" content={props?.data?.seo?.metaOgImage?.alt}/>
        <meta name="twitter:creator" content={props?.data?.seo?.metaTwitterCreator}/>
        <meta name="twitter:site" content={props?.data?.seo?.metaTwitterSite}/>

        <meta name="robots" content={props?.data?.seo?.metaRobots}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="canonical" href={props?.data?.seo?.canonicalURL}/>

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
        />
    </Head>
    <div>
      {props && (
        <>{props?.data?.widgets?.map((block) => ComponentFunc(block))}</>
      )}
    </div>
    </>
  );
};

export async function getStaticProps() {
  // Using static data directly in code - no API or db.json needed
  return {
    props: {
      data: homeData,
      menu: {
        data: headerFooterData.data
      }
    },
  };
}

export default HomePage;
