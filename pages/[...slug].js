import ComponentFunc from "../src/components";
import { getPageContent } from "../lib/pages";
import ComingSoon from "../src/components/ComingSoon";
import Page404 from "../src/components/Page404";
import Head from "next/head";
const db = require("./../db.json");


const Slug = (props) => {
  return (
<>
   <Head>
   <title>{props?.data?.data?.seo?.metaTitle}</title>
        <meta name="viewport" content="width=device-width"/>
        <meta name="description" content={props?.data?.data?.seo?.metaDescription} />
        <meta name="distribution" content={props?.data?.data?.seo?.metaDistribution} />
        <meta name="city" content={props?.data?.data?.seo?.metaCity} />
        <meta name="geo.region" content={props?.data?.data?.seo?.metaGeoRegion}/>
        <meta name="state" content={props?.data?.data?.seo?.metaState}/>
        <meta name="key-phrases" content={props?.data?.data?.seo?.metaKeyPhrases}/>
        <meta name="classification" content={props?.data?.data?.seo?.metaClassification}/>
        <meta name="topic" content={props?.data?.data?.seo?.metaTopic}/>
        <meta name="subject" content={props?.data?.data?.seo?.metaSubject}/>
        <meta name="publisher" content={props?.data?.data?.seo?.metaPublisher}/>
        <meta name="author" content={props?.data?.data?.seo?.metaAuthor}/>
        <meta name="copyright" content={props?.data?.data?.seo?.metaCopyright}/>
        <meta name="rating" content={props?.data?.data?.seo?.metaRating}/>
        <meta name="audience" content={props?.data?.data?.seo?.metaAudience}/>
        <meta name="resource-type" content={props?.data?.data?.seo?.metaResourceType}/>
        <meta name="doc-type" content={props?.data?.data?.seo?.metaDocType}/>
        <meta name="doc-class" content={props?.data?.data?.seo?.metaDocClass}/>
        <meta name="doc-rights" content={props?.data?.data?.seo?.metaDocRights}/>
        <meta name="Email" content={props?.data?.data?.seo?.metaEmail}/>

        <meta property="og:locale" content={props?.data?.data?.seo?.metaOgLocale}/>
        <meta property="og:type" content={props?.data?.data?.seo?.metaOgType}/>
        <meta property="og:title"content={props?.data?.data?.seo?.metaOgTitle}/>
        <meta property="og:description" content={props?.data?.data?.seo?.metaOgDescription}/>
        <meta property="og:url" content={props?.data?.data?.seo?.metaOgUrl}/>
        <meta property="og:site_name" content={props?.data?.data?.seo?.metaOgSiteName}/>
        <meta property="og:image" content={props?.data?.data?.seo?.metaOgImage?.url}/>

        <meta name="twitter:card" content={props?.data?.data?.seo?.metaTwitterCard}/>
        <meta name="twitter:description" content={props?.data?.data?.seo?.metaTwitterDescription}/>
        <meta name="twitter:title" content={props?.data?.data?.seo?.metaTwitterTitle}/>
        <meta name="twitter:creator" content={props?.data?.data?.seo?.metaTwitterCreator}/>
        <meta name="twitter:site" content={props?.data?.data?.seo?.metaTwitterSite}/>

        <meta name="keywords" content={props?.data?.data?.seo?.keywords}/>
        <meta name="robots" content={props?.data?.data?.seo?.metaRobots}/>
        <meta name="structuredData" content={props?.data?.data?.seo?.structuredData}/>
       
        <meta name="canonical" content={props?.data?.data?.seo?.canonicalURL}/>
        <meta property="og:image:alt" content={props?.data?.data?.seo?.metaImage?.url}/>
        <meta name="metaSocial" content={props?.data?.data?.seo?.metaSocial}/>


      </Head>
  

    <div>
      {props?.data?.data?.widgets?.length > 0 ? (
        <>
          {props?.data?.data?.widgets?.map((block) => ComponentFunc(block))}
        </>
      ) : (
        <>
          {props?.data?.data?.status === "Not Found" ? (
             <Page404 />
          ) : props?.data?.data?.widgets? "" : <ComingSoon /> 
          }
        </>
      )}
    </div>

</>

  );
};


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    let route = params.slug.join("/");
    const pageContent = await getPageContent(`general/${route}`);
    const menu = await getPageContent(`general/header-and-footer`);
    // const pageContent = await getPageContent(route);
    // const pageContent = db[route];

    return {
      props: {
        data: { ...pageContent, menu },
      },
      revalidate: 300,
    };
  } catch (error) {
    return {
      props: {
        apiError: true,
      },
    };
  }
}

export default Slug;
