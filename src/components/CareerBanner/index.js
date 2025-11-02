import Link from "next/link";
import Style from "./CareerBanner.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate/animate";
import { useRouter } from "next/router";

const CareerBanner = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  const router = useRouter();
  const handleScroll = () => {
    if (typeof document !== "undefined") {
      var scrollDiv = document.getElementById("career-role").offsetTop;
      window.scrollTo({ top: scrollDiv - 80, behavior: "smooth" });
    }
  };

  const aboutpage = props?.data?.page == "about" && Style.aboutpage;
  return (
    <section className={`${Style.careerbanner} ${aboutpage}`}>
      {props?.data?.page == "career" && (
        <div className={Style.top_bg}>
          <Image
            fill
            src={Assets.career_bg}
            alt={"background Image"}
            quality={100}
             sizes="(max-width: 768px) 100vw"
            priority={true}
          />
        </div>
      )}
      {props?.data?.page == "about" && (
        <div className={Style.top_bg}>
          <Image
            fill
            src={Assets.about_career_bg}
            alt={"background Image"}
            quality={100}
            priority={true}
             sizes="(max-width: 768px) 100vw"
          />
        </div>
      )}
      <Animate className="container position-relative">
        <div className={Style.head}>
          <h1 className={`h2 ${Style.title} gradient-text`}>
            {parse(props?.data?.title)}
          </h1>
          {props?.data?.text && <p>{parse(props?.data?.text)}</p>}


          {/* Career Page */}
          {width >= 992 && router.asPath.includes("career") ? (
            <button className=" btn btn-gradient" onClick={handleScroll}>
              {props?.data?.link?.text}
            </button>
          ) : (
            // <Link className=" btn btn-gradient" href={props?.data?.link?.url}>
            //   {props?.data?.link?.text}
            // </Link>
            ""
          )}


            {/* About Page */}
          {width >= 992 && router.asPath.includes("about") ? (
            <Link className=" btn btn-gradient" href={props?.data?.link?.url}>
              {props?.data?.link?.text}
            </Link>
          ) : (
            // <Link className=" btn btn-gradient" href={props?.data?.link?.url}>
            //   {props?.data?.link?.text}
            // </Link>
            ""
          )}

        </div>
        <div className={Style.images_grid}>
          {width >= 992 && (
            <div className={Style.image_wrap}>
              <div className="row">
                <div className="col-lg-2">
                  <div className={Style.image_box}>
                    <div className={Style.image_box_inner}>
                      <figure>
                        <Image
                          src={props?.data?.cards[0]?.image?.url}
                          fill
                          alt="image"
                          quality={100}
                           sizes="(max-width: 768px) 100vw"

                        ></Image>
                      </figure>
                    </div>
                    <div className={Style.image_box_inner}>
                      <figure>
                        <Image
                          src={props?.data?.cards[1]?.image?.url}
                          fill
                          alt="image"
                          quality={100}
                           sizes="(max-width: 768px) 100vw"
                        ></Image>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className={Style.image_lgbox}>
                    <div className={Style.image_lgbox_inner}>
                      <figure>
                        <Image
                          src={props?.data?.cards[2]?.image.url}
                          fill
                          alt="image"
                          quality={100}
                           sizes="(max-width: 768px) 100vw"
                        ></Image>
                      </figure>
                    </div>
                    <div className={Style.image_lgbox_innerlg}>
                      <figure>
                        <Image
                          src={props?.data?.cards[3]?.image?.url}
                          fill
                          alt="image"
                          quality={100}
                           sizes="(max-width: 768px) 100vw"
                        ></Image>
                      </figure>
                    </div>
                    <div className={Style.image_lgbox_inner}>
                      <figure>
                        <Image
                          src={props?.data?.cards[4]?.image?.url}
                          fill
                          alt="image"
                          quality={100}
                           sizes="(max-width: 768px) 100vw"
                        ></Image>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className={Style.image_box}>
                    <div className={Style.image_box_inner}>
                      <figure>
                        <Image
                          src={props?.data?.cards[5]?.image?.url}
                          fill
                          alt="image"
                          quality={100}
                           sizes="(max-width: 768px) 100vw"
                        ></Image>
                      </figure>
                    </div>
                    <div className={Style.image_box_inner}>
                      <figure>
                        <Image
                          src={props?.data?.cards[6]?.image?.url}
                          fill
                          alt="image"
                          quality={100}
                           sizes="(max-width: 768px) 100vw"
                        ></Image>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {width < 992 && (
            <div className={Style.mobile_wraper}>
              <div className="row">
                <div className="col-4">
                  <div className={Style.mobile_box_inner}>
                    <figure>
                      <Image
                        src={props?.data?.cards[2]?.image.url}
                        fill
                        alt="image"
                        quality={100}
                         sizes="(max-width: 768px) 100vw"
                      ></Image>
                    </figure>
                  </div>
                  <div className={Style.mobile_box_inner}>
                    <figure>
                      <Image
                        src={props?.data?.cards[0]?.image?.url}
                        fill
                        alt="image"
                        quality={100}
                         sizes="(max-width: 768px) 100vw"
                      ></Image>
                    </figure>
                  </div>
                </div>
                <div className="col-4">
                  <div className={Style.mobile_lgbox_inner}>
                    <figure>
                      <Image
                        src={props?.data?.cards[3]?.image?.url}
                        fill
                        alt="image"
                        quality={100}
                         sizes="(max-width: 768px) 100vw"
                      ></Image>
                    </figure>
                  </div>
                  <div className={Style.mobile_lgbox_inner}>
                    <figure>
                      <Image
                        src={props?.data?.cards[1]?.image?.url}
                        fill
                        alt="image"
                        quality={100}
                         sizes="(max-width: 768px) 100vw"
                      ></Image>
                    </figure>
                  </div>
                </div>
                <div className="col-4">
                  <div className={Style.mobile_box_inner}>
                    <figure>
                      <Image
                        src={props?.data?.cards[4]?.image?.url}
                        fill
                        alt="image"
                        quality={100}
                         sizes="(max-width: 768px) 100vw"
                      ></Image>
                    </figure>
                  </div>
                  <div className={Style.mobile_box_inner}>
                    <figure>
                      <Image
                        src={props?.data?.cards[6]?.image?.url}
                        fill
                        alt="image"
                        quality={100}
                         sizes="(max-width: 768px) 100vw"
                      ></Image>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {width < 992 &&  router.asPath.includes("career") ? (
          <div className={Style.bottom_button}>
            <div
              className={`btn btn-gradient ${Style.mobile_button}`}
              href={props?.data?.link?.url}
              onClick={handleScroll}
            >
              {props?.data?.link?.text}
            </div>
          </div>
        ) :""}



        {width < 992 &&  router.asPath.includes("about") ? (
            <div className="text-center"> 
            <Link className=" btn btn-gradient" href={props?.data?.link?.url}>
                  {props?.data?.link?.text}
                </Link>
            </div>
        ) :""}

        
      
        
      </Animate>
    </section>
  );
};
export default CareerBanner;
