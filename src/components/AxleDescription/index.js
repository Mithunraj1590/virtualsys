import React from "react";
import Styles from "./AxleDescription.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const AxleDescription = ({ props }) => {
  return (
    //
    <section className={Styles.axle_desc_section}>
      <div className={Styles.top_right_img}>
        <figure>
          <Image fill src={Assets.top_right_img} alt="addon-img" sizes="(max-width: 768px) 100vw" />
        </figure>
      </div>
      <div className={Styles.bottom_left_img}>
        <figure>
          <Image fill src={Assets.bottom_left_img} alt="addon-img" sizes="(max-width: 768px) 100vw" />
        </figure>
      </div>
      <div className="container">
        <h2 className={`h2 ${Styles.title}`}>{props?.data?.title}</h2>

        <div className={`row ${Styles.description_wrapper}`}>
          <div className="col-12 col-lg-5">
            <div className={Styles.image_wrapper}>
              <figure>
                <Image
                  fill
                  src={props?.data?.image?.url}
                  alt="image"
                  quality={100}
                  sizes="(max-width: 768px) 100vw"
                />
              </figure>
            </div>
          </div>
          <div className="col-12 col-lg-7 pt-5 pt-lg-0">
            <div className={Styles.content_wrapper}>
              {props?.data?.cards?.map((data, i) => {
                return (
                  <div className={Styles.content_item} key={i}>
                    <h5 className={Styles.content_title}>{data?.title}</h5>
                    <p className={Styles.content_description}>
                      {data?.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AxleDescription;
