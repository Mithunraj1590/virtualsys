import ComponentFunc from "../src/components";
import Head from "next/head";
import { aboutData } from "../src/data/aboutData";
import { headerFooterData } from "../src/data/headerFooterData";

const AboutPage = ({ data, menu }) => {
  // Structured Data JSON-LD for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Sys Technologies",
    "url": "https://www.virtualsys.tech",
    "logo": "https://www.virtualsys.tech/images/logo.png",
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
      "email": "info@virtualsys.tech"
    },
    "sameAs": [
      "https://twitter.com/virtualsys",
      "https://www.linkedin.com/company/virtualsys"
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

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={aboutData.seo.metaTwitterCard} />
        <meta name="twitter:title" content={aboutData.seo.metaTwitterTitle} />
        <meta name="twitter:description" content={aboutData.seo.metaTwitterDescription} />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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

