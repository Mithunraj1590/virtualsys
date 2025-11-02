import { useState, useEffect } from "react";
import React from "react";
import Styles from "./ZivaBanner.module.scss";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Animate from "../Animate/animate";

const ZivaBanner = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnim(true);
    }, 300);
  }, []);

  const right_content = (
    <>
       <div className="overflow-hidden"><h4 className={Styles.banner_title}>{props?.data?.bannerTitle}</h4></div>
       <div className="overflow-hidden"><p className={Styles.banner_sub_title}>{props?.data?.bannerSubTitle}</p></div>
    </>
  );

  return (
    <section 
      className={`${Styles.ziva_banner_section}  ${anim && Styles.inview}`}
    >
      <div className={Styles.banner_img_section}>
        <figure>
          <Image
            src={props?.data?.image?.url}
            fill
            alt="image"
            quality={100}
            sizes="(max-width: 768px) 100vw"
            priority={true}
          /> 
        </figure>
      </div>
      <div className="container">
        <Animate className={Styles.banner_content_wrapper}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="overflow-hidden">
                <h1 className={Styles.banner_main_title}>
                  {parse(props?.data?.title)}
                </h1> 
              </div>

              {width < 768 && (
                    right_content
            )}


              <div className={Styles.btn_wrapper}>
                <Link
                  className="btn btn-ziva"
                  href={props?.data?.button?.buttonUrl}
                >
                  {props?.data?.button?.buttonText}
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-5">
            {width >= 768  && (
                    right_content
            )}
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default ZivaBanner;
