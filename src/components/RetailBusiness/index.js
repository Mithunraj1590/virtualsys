import React from "react";
import Style from "./RetailBusiness.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import ZivaThreeListCard from "../utils/ZivaThreeListCard";

const RetailBusiness = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section
      className={`${Style.retail_section} position-relative overflow-hidden`}
    >
      {props?.data?.type == "kazito-inner" && (
        <figure className={`${Style.addon_img} mb-0 position-absolute`}>
          <Image src={Assets.retail_colors} alt="Addon-image" fill />
        </figure>
      )}
      <div className="container">
        <div className={`row z-1 position-relative ${Style.header_wrapper}`}>
          <div className="col-12 col-lg-7">
            <h2 className={`${Style.title} mb-0 text-black`}>
              {props?.data?.title}
            </h2>
          </div>
          <div className="col-12 col-lg-5 pt-lg-3">
            <p className={`${Style.content} mb-0 text-black`}>
              {parse(`${props?.data?.description}`)}
            </p>
          </div>
        </div>

        {/* <div className={`${Style.varieties_wrapper} position-relative z-1`}>
                    <ul className={`${Style.varieties_list} ps-0 list-unstyled mb-0`}>
                        {props?.data?.varieties?.map((data,index) => {
                            return(
                                <li className={`${Style.varieties_list_item}`}>
                                    <Image 
                                        className={Style.img_item}
                                        src={data?.image?.url} 
                                        alt={data?.image?.alt} 
                                        width={data?.image?.width} 
                                        height={data?.image?.height}/>
                                        {data?.point}
                                </li>
                            )
                        })}
                    </ul>
                </div> */}

        <div className={`${Style.varieties_wrapper} position-relative z-1`}>
          <div className={`row  ${Style.ziva_loanwrapper}`}>
            {props?.data?.cards?.map((data, i) => {
              return <ZivaThreeListCard props={data} key={i} flag={"nolimitinshowing"} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default RetailBusiness;
