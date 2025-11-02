import Style from "./FintechAbout.module.scss";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import Icons from "../Layout/Icons";
import Animate from "../Animate/animate";
import BreadCrumbs from "../utils/BreadCrumbs";
import { useWindowSize } from "../../logic/useDimension";

const FintechAbout = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  const insuretech = props?.data?.type == "insurtech" && Style.insuretechabout;
  const retailtech = props?.data?.type == "retailtech" && Style.retailtechabout;
  const digitallearning =
    props?.data?.type == "digitallearning" && Style.digitallearningabout;

  const handleScrolToId = (event) => {
    event.preventDefault(); // Prevents the default scroll behavior
    const scrolItem = document.getElementById("scrollTocontact");
    if (scrolItem) {
      scrolItem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // const handleClick = () => {
  //   if (typeof window !== undefined) {
  //     window.scrollTo(
  //       0,
  //       document.getElementById("scrollTocontact")?.offsetTop 
  //     );
  //   }
  // };

  const imageWrapper = (
    <Animate className={Style.left}>
      <div className={Style.shape}>
        <figure className={Style.shape_figure}>
          <Image
            src={props?.data?.image?.url}
            fill
            sizes="(max-width: 768px) 100vw"
            alt="image"
            priority={true}
            quality={100}
          />
        </figure>
      </div>
    </Animate>
  );

  return (
    <section
      className={`${Style.fintechabout} ${insuretech} ${retailtech} ${digitallearning} `}
    >

{props?.data?.type == "insurtech" ? (
          <div className={Style.bg_about_insurtech}>
            <Image
              fill
              src={Assets.bg_about_insurtech}
              alt={"background Image"}
              sizes="(max-width: 768px) 100vw"
              quality={100}
              priority={true}
            />
          </div>
        ) : (
          ""
        )}

        {props?.data?.type == "retailtech" ? (
          <div className={Style.bg_about_insurtech}>
            <Image
              fill
              src={Assets.bg_about_retailtech}
              alt={"background Image"}
              sizes="(max-width: 768px) 100vw"
              quality={100}
              priority={true}
            />
          </div>
        ) : (
          ""
        )}

        {props?.data?.type == "digitallearning" ? (
          <div className={Style.bg_about_insurtech}>
            <Image
              fill
              src={Assets.bg_about_digitallearning}
              alt={"background Image"}
              sizes="(max-width: 768px) 100vw"
              quality={100}
              priority={true}
            />
          </div>
        ) : (
          ""
        )}

      <div className="container">


        <BreadCrumbs props={props} />

        {width < 992 && imageWrapper}

        <div className={Style.top_wrapper}>
          <div className={Style.top_head}>
            <h2 className={`${Style.title_heading} h2`}>
              {parse(props?.data?.title)}
            </h2>
          </div>
        </div>

        <div className={`row ${Style.row_top}`}>
          <div className="col-lg-5">{width >= 992 && imageWrapper}</div>
          <div className="col-lg-7">
            <div className={`mt-2 ms-lg-5 ${Style.right}`}>
              {parse(props?.data?.description)}
              {props?.data?.links?.title &&(props?.data?.links?.url !== null ? (
                <div className="overflow-hidden mt-4 pt-1">
                  <Link
                    href={`${props?.data?.links?.url}`}
                    className={`btn 
                      ${props?.data?.type == "fintech" ? "btn-fintech" : ""}
                      ${
                        props?.data?.type == "insurtech" ? "btn-insurtech" : ""
                      }
                      ${
                        props?.data?.type == "retailtech"
                          ? "btn-retailtech"
                          : ""
                      }
                      ${
                        props?.data?.type == "digitallearning"
                          ? "btn-digitallearning"
                          : ""
                      }
                    `}
                  >
                    {props?.data?.links?.title}
                  </Link>
                </div>
              ): (
              // <button onClick={handleClick}>{props?.data?.links?.title}</button>
               
              <div className="overflow-hidden  mt-4 pt-1">
              <div
                onClick={(e) => handleScrolToId(e)}
                className={`btn 
                ${props?.data?.type == "fintech" ? "btn-fintech" : ""}
                ${props?.data?.type == "insurtech" ? "btn-insurtech" : ""}
                ${props?.data?.type == "retailtech" ? "btn-retailtech" : ""}
                ${
                  props?.data?.type == "digitallearning"
                    ? "btn-digitallearning"
                    : ""
                }
              `}
              >
                {/* {props?.data?.scrolllinks?.text} Know more */}
                {props?.data?.links?.title}
              </div>
            </div>

              ))}
              {/* {props?.data?.scrolllinks && ( */}
           
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FintechAbout;
