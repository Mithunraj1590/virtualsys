import { useState, useEffect } from "react";
import Style from "./InnerCommonBanner.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate/animate";

const InnerCommonBanner = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  const [anim, setAnim] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setAnim(true);
    }, 300);
  }, []);


  return (
    <section
      className={`${Style.commonbanner} 
      ${props?.data?.type == "ziva" && Style.ziva_banner} 
      ${props?.data?.type == "axle" && Style.axle_banner}  
      ${props?.data?.type == "statim" && Style.statim_banner} 
      ${props?.data?.type == "statim-inner" && Style.statim_inner_banner} 
      ${props?.data?.type == "kazito" && Style.kazito_banner} 
      ${props?.data?.type == "kazito-inner" && Style.kazito_inner_banner}  
      ${props?.data?.type == "axle-inner" && Style.axle_inner}
      ${props?.data?.category == "solution" && Style.solutions_banner}
      ${props?.data?.type == "fintech" && Style.fintech_sec}
      ${props?.data?.type == "insurtech" && Style.insurtech_sec}
      ${props?.data?.type == "retailtech" && Style.retailtech_sec}
      ${props?.data?.type == "digitallearning" && Style.digitallearning_sec}
      ${props?.data?.type == "leadership" && Style.leadership_sec}
      ${props?.data?.type == "brochure" && Style.brochure_sec}
      ${props?.data?.type == "locateus" && Style.locate_sec}
      ${props?.data?.type == "techbrew" && Style.techbrew_sec}
      ${anim && Style.inview}
      `}
    >
      {props?.data?.image_desktop?.url && (
           <div className={Style.banner_img}>
        
           {width >= 768 && (
             <figure className={`${Style.image_wraper} mb-0`}>
               <Image
                 fill
                 src={props?.data?.image_desktop?.url}
                 alt="image"
                 priority
                 quality={100}
                 sizes="(max-width: 768px) 100vw"
               />
             </figure>
           )}
   
           {width < 768 && (
             <figure className={`${Style.image_wraper} mb-0`}>
               <Image
                 fill
                 src={props?.data?.image_mobile?.url}
                 alt="image"
                 priority
                 quality={100}
                 sizes="(max-width: 768px) 100vw"
               />
             </figure>
           )}
   
         </div>
      )}

      <div className="container ">
        <Animate className={`${Style.cont_wrapper}`}>
          {props?.data?.subtitle && (
            <div className={`overflow-hidden ${Style.wrapsubtitle}`}>
              <h1 className={Style.subtitle}>{props?.data?.subtitle}</h1>
            </div>
          )}
          <div className={`overflow-hidden ${Style.wrapheading}`}>
            <h2 className={Style.heading}>{props?.data?.heading &&  parse(props?.data?.heading) }</h2>
          </div>
          {props?.data?.text && (
            <div className={`overflow-hidden ${Style.wraptext}`}>
              <p className={Style.text}>{parse(props?.data?.text)}</p>
            </div>
          )}
          {props?.data?.links?.text && (
            <div className="overflow-hidden">
              <Link
                href={`${props?.data?.links?.url}`}
                className={`btn 
              ${props?.data?.type == "ziva" ? "btn-ziva" : ""}
              ${
                props?.data?.type == "axle" || props?.data?.type == "axle-inner"
                  ? "btn-axle"
                  : ""
              }
              ${
                props?.data?.type == "statim" ||
                props?.data?.type == "statim-inner"
                  ? "btn-statim"
                  : ""
              }
              ${props?.data?.type == "kazito" ? "btn-kazito" : ""}
              ${props?.data?.type == "fintech" ? "btn-fintech" : ""}
              ${props?.data?.type == "insurtech" ? "btn-insurtech" : ""}
              ${props?.data?.type == "retailtech" ? "btn-retailtech" : ""}
              ${
                props?.data?.type == "digitallearning"
                  ? "btn-digitallearning"
                  : ""
              }
              ${props?.data?.type == "locateus" ? "btn-outline-secondary" : ""}
              

            `}
              >
                {props?.data?.links?.text}
              </Link>
            </div>
          )}
        </Animate>
      </div>
    </section>
  );
};
export default InnerCommonBanner;
