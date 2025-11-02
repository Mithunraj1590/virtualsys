import Style from "./HomeDiscovernew.module.scss";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";

import { useState } from "react";
import Animate from "../Animate/animate";

const HomeDiscover = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  const [index, setIndex] = useState(0);

  const handleActive = (i) => {
    setIndex(i);
    
  };

  // console.log(props, "Image");


  return (
    <section className={Style.home_discover}>
      <div className="position-relative">
        <div className={`round-bg ${Style.top_right_bg}`}></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">{width >= 992 && (
              <Animate className={`${Style.left} animate-fadein` }>
                  <h2 className={`h2 ${Style.title} gradient-text-black`}>
                    {parse(props?.data?.title)}
                  </h2>
              </Animate>
          )
          }</div>
        </div>

        <div className={Style.accordion_tech}>
          <Animate className={`row animate-fadein ${Style.discover_wrap}`}>
            <div className="col-lg-6 order-lg-2">
              <Animate className="position-relative animate-fadein">
                <div className={Style.rightimage_wraper}>
                  {props?.data?.cards?.map((data, i) => {
                    return (
                      <div
                        className={`${Style.right_image} ${
                          i == index ? "active" : ""
                        }`}
                        style={{
                          transform: `translatex(${100 * (i - index)}%)`,
                        }}
                        key={i}
                      >
                        <figure className={`mb-0 ${Style.figure_wrap}`}>
                          <Image
                            className={Style.figure_right}
                            src={data?.image?.url}
                            fill
                            sizes="(max-width: 992px) 100vw, 40vw"
                            alt={data?.title}
                            priority={true}
                            quality={100}
                          />
                        </figure>
                      </div>
                    );
                  })}
                </div>

                {width >= 992 && (
                  <div className={Style.discover_btn}>
                    {props?.data?.cards?.map((data, i) => {
                      return (
                        <Link
                          href={`${data?.url}`}
                          className={`${Style.circle_box} ${
                            i == index ? "active" : ""
                          }`}
                          key={i}
                        >
                          <Image
                            className={Style.circle_discover}
                            src={Assets.circle_discover}
                            fill
                            alt={data?.title}
                            sizes="(max-width: 992px) 100vw, 40vw"
                            quality={100}
                          />
                          <div className={Style.arrow_sticked}></div>
                          <div className={Style.hover_circle}>
                            <span>{props?.data?.links?.text}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </Animate>
            </div>

            <div className="col-lg-6">

              {width < 992 && (
                    <div className={ `${Style.left} pb-3` }>
                        <h2 className={`h2 ${Style.title} gradient-text-black`}>
                          {parse(props?.data?.title)}
                        </h2>
                    </div>
              ) }

              <Animate className={`${Style.discover_left_wrap} animate-fadein`}>
                {props?.data?.cards?.map((data, i) => {
                  return (
                    <div
                      className={`${i == index ? "active" : ""} ${
                        Style.cont_wrap
                      }`} key={i}
                    >
                      <div
                        className={Style.cont_head}
                        onClick={() => handleActive(i)}
                      >
                        <h3>{data?.title}</h3>
                      </div>
                      <div className={Style.cont_text}>
                        <p>
                          {data?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Animate>
            </div>

            {width < 992 && (
              <div className="mt-4 pt-md-3 pt-2 text-center">
                <Link
                  href={`${props?.data?.links?.url}`}
                  className="btn btn-gradient"
                >
                  {props?.data?.links?.text}
                </Link>
              </div>
            )}
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default HomeDiscover;
