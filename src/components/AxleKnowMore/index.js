import React from "react";
import Styles from "./AxleKnowMore.module.scss";
import Image from "next/image";
import Icons from "../Layout/Icons";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Animate from "../Animate/animate";

const AxleKnowMore = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  const rowReverse =
    props?.data?.type == "statim" || props?.data?.type == "statim-inner"
      ? "flex-row-reverse"
      : "";
  const btnClass = props?.data?.type == "statim" ? "btn-statim" : "";
  const kazitoClass = props?.data?.type == "kazito" ? Styles.kazito_page : "";

  const hide_section = props?.data?.hide && "d-none";

  const image_wrapper = (
    <Animate className={`${Styles.img_wrapper} pt-4 pt-lg-0 `}>
      <figure>
        <Image
          fill
          src={props?.data?.image?.url}
          alt="image"
          quality={100}
          sizes="(max-width: 768px) 100vw"
        />
      </figure>
    </Animate>
  );

  return (
    <section
      className={`${hide_section} ${kazitoClass} ${
        Styles.axle_know_more_section
      }  ${props?.data?.type == "ziva" && Styles.ziva_know_more} ${
        props?.data?.type == "statim" && Styles.statim_know_more
      }`}
    >
      {/* Addon Images for Ziva Page */}
      {props?.data?.type == "ziva" && (
        <>
          <div className={Styles.top_left_img}>
            <figure>
              <Image fill src={Assets.download_top_left_img} alt="addon-img" sizes="(max-width: 768px) 100vw"/>
            </figure>
          </div>
          <div className={Styles.bottom_right_img}>
            <figure>
              <Image
                fill
                src={Assets.download_bottom_right_img}
                alt="addon-img"
                sizes="(max-width: 768px) 100vw"
              />
            </figure>
          </div>
        </>
      )}

      {/* Addon Images for Statim Page */}
      {props?.data?.type == "statim" && (
        <div className={Styles.statim_bottom_right_img}>
          <figure>
            <Image fill src={Assets.statim_img} alt="addon-img" sizes="(max-width: 768px) 100vw"/>
          </figure>
        </div>
      )}

      {/* Addon Images for Statim Inner Page */}
      {props?.data?.type == "statim-inner" && (
        <div
          className={`${Styles.statim_bottom_right_img} ${Styles.inner_page}`}
        >
          <figure>
            <Image fill src={Assets.bottom_right_img} alt="addon-img" sizes="(max-width: 768px) 100vw"/>
          </figure>
        </div>
      )}

      {/* Addon Images for Kazito Page */}
      {props?.data?.type == "kazito" && (
        <>
          <div className={Styles.know_more_img_1}>
            <figure>
              <Image fill src={Assets.know_more_img} alt="Image" sizes="(max-width: 768px) 100vw"/>
            </figure>
          </div>
          <div className={Styles.know_more_img_2}>
            <figure>
              <Image fill src={Assets.know_more_img_2} alt="Image" />
            </figure>
          </div>
        </>
      )}

      <div className="container">
        <div
          className={`row ${Styles.know_more_wrapper} align-items-center ${rowReverse}`}
        >
          <div className="col-12 col-lg-7 position-relative">
            <h2
              className={`${Styles.title} ${
                props?.data?.type == "kazito"
                  ? "gradient-text-blue-title"
                  : "gradient-text-orange-title"
              }`}
            >
              {props?.data?.title && parse(props?.data?.title)}
            </h2>

            {width < 992 && image_wrapper}

            <div
              className={`d-block d-md-flex align-items-center ${Styles.btn_wrapper} justify-content-center justify-content-lg-start`}
            >
              {props?.data?.schedule_btn?.text ? (
                <Link
                  href={`${props?.data?.schedule_btn?.url}`}
                  className={`btn ${btnClass}
                    ${props?.data?.type == "ziva" ? "btn-ziva" : ""}
                    ${props?.data?.type == "axle" ? "btn-axle" : ""}
                    ${
                      props?.data?.type == "statim" ||
                      props?.data?.type == "statim-inner"
                        ? "btn-statim"
                        : ""
                    }
                    `}
                >
                  {props?.data?.schedule_btn?.text}
                </Link>
              ) : (
                ""
              )}

              {props?.data?.download_btn ? (
                <a
                  href={`${props?.data?.download_btn?.url}`}
                  className="btn btn-download"
                  // download
                  // target="_blank"
                >
                  {" "}
                  <Icons icon="download_icon" className="me-2" size={20} />{" "}
                  {props?.data?.download_btn?.text}
                </a>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col-12 col-lg-5 ">
            {width >= 992 && image_wrapper}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AxleKnowMore;
