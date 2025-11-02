import Style from "./NewsBanner.module.scss";
import Link from "next/link";
import Icons from "../Layout/Icons";
import Image from "next/image";
import HomeNewsCard from "../utils/HomeNewsCard";
import { useWindowSize } from "../../logic/useDimension";
import BreadCrumbs from "../utils/BreadCrumbs";

const NewsBanner = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  return (
    <section className={Style.home_blog_news}>
      <div className="container">
        {props?.data?.breadcrumbs && <BreadCrumbs props={props} />}

        <div className={`${Style.markettop} `}>
          <h2 className={`h2  ${Style.title}`}>{props?.data?.title}</h2>
        </div>

        <Link href={`${props?.data?.leftcard?.link?.url}`} className={`row ${Style.update_card}`}>
          <div className={`col-lg-6`}>
            <figure className={`mb-0 image-load ${Style.figure_wrap}`}>
              <Image
                src={props?.data?.leftcard?.image?.url}
                fill
                sizes="(max-width: 768px) 100vw"
                alt="image"
                quality={100}
                priority={true}
              />
            </figure>
          </div>

          <div className={`col-lg-6 ps-lg-5`}>
            <div className={Style.content}>
              <div className={`mb-2 ${Style.dateWrap}`}>
                <span className={Style.datedot}>{props?.data?.leftcard?.date}</span>
                <span className={Style.category}>{props?.data?.leftcard?.category}</span>
              </div>

              <h4 className={` h4 ${Style.title_head}`}>
                {parse(props?.data?.leftcard?.title)}
              </h4>

              <div className={Style.descrp}>{parse(props?.data?.leftcard?.text)}</div>

              <h3 className={` h4 ${Style.link_text}`}>
                {props?.data?.leftcard?.link?.text}
              </h3>
            </div>
          </div>

        </Link>


        <div className={Style.bottom_wrapper}>
          <div className={`row`} >
              {props?.data?.cards.slice(0, 3).map((data,i)=>{
                  return(

                    <div className={`col-lg-4 ${Style.bot_card}`} key={i}> 
                      <Link href={data?.url} className={Style.bottom_card}>
                        <h4 className={` h4 ${Style.title_head}`}>
                          {parse(data?.title)}
                        </h4>

                        <div className={`mb-2 ${Style.dateWrap}`}>
                          <span className={Style.datedot}>{data?.date}</span>
                          <span className={Style.category}>{data?.category}</span>
                        </div>
                      </Link>
                    </div>
                    
                  )
              })}
          
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsBanner;
