import Style from "./HomeDigital.module.scss";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import Icons from "../Layout/Icons";
import Animate from "../Animate/animate";
import NumberCounter from "../utils/NumberCounter";

const HomeDigital = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section className={Style.home_digital}>
   
      <div className="container">
        <div className={`row ${Style.row_top}`}>
          <div className="col-lg-5">
            <Animate className={`${Style.left} animate-fadein`}>
              <div className={Style.shape}>
                <figure className={Style.shape_figure}>
                  <Image
                    src={props?.data?.image?.url}
                    fill
                    sizes="(max-width: 992px) 100vw, 40vw"
                    alt={props?.data?.title}
                    priority={true}
                    quality={100}
                  />
                </figure>
              </div>

           
            </Animate>
          </div>
          <div className="col-lg-7">
            <Animate className={`mt-2 ms-lg-5 ${Style.right} animate-fadein`}>
              {/* <div className="title_box">{props?.data?.sub_title}</div> */}
              <h2 className={`h3 ${Style.title}`}>
              {parse(`${props?.data?.title}`)}
              </h2>
              {parse(`${props?.data?.description}`)}
              <div className="mt-4 pt-2">
                <Link href={`${props?.data?.links?.url}`} className="orange-arrow">
                  {props?.data?.links?.text}
                  <div className={"link-arrow ms-3"}>
                    <Icons icon="orange-icon" size={16} />
                  </div>
                </Link>
              </div>
            </Animate>
          </div>
        </div>

        <div className={`row ${Style.counter_wrap}`}>
          {props?.data?.cards?.map((data, i) => {
            return (
              <Animate
                className={`col-lg-auto col-6 animate-fadein ${Style.numwrap}`}
                key={i}
              >
                <div className={Style.box_wrap}>
                  <h3 className={Style.number}>
                    {" "}
                    <NumberCounter props={data} /> 
                    {/* <span> {data?.icon} </span> */}
                  </h3>
                  <h4 className={Style.label}>{data?.label}</h4>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default HomeDigital;
