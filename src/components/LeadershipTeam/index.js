import { useState } from "react";
import Style from "./LeadershipTeam.module.scss";
import Image from "next/image";
import Icons from "../Layout/Icons";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import TeamPopup from "./../utils/TeamPopup";

const LeadershipTeam = ({ props }) => {
    const parse = require("html-react-parser");

 return (

    <section className={Style.about_management}>
    <div className="container">
        <h2 className={`py-5 h4 text-lg-center ${Style.title_head}`}>{props?.data?.title}</h2>
      {props?.data?.cards.map((data, i) => {
        return (
          <div className={`row fade-in ${Style.managementWrap}`} key={i}>
            <div className="col-lg-6">
              <div className={`mb-4 ${Style.image_wrap} image-load`}>
                <TeamPopup props={data}>
                  <figure className={`mb-0 ${Style.shape_figure}`}>
                    <Image src={data?.image?.url} fill sizes="(max-width: 768px) 100vw" alt="Leadership"  priority={true}  quality={100} />
                  </figure>
                </TeamPopup>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div className={`${Style.top_wrap}`}>
                <h3 className={`title_clr h4 ${Style.title}`}>
                  {data?.name}
                </h3>
                <h4 className={` ${Style.subtitle} fw4`}>
                  {data?.designation}
                </h4>
              </div>
              
              <div className={`pt-3 ${Style.cont_box}`}>

                {data?.description.length > 400
                  ?  parse(`${data?.description.substring(0, 400)}...`)
                  : parse(data?.description)}

                  {/* {parse(data?.description)} */}
              </div>
              {data?.description.length > 400 && (
                  <div className="pt-1 pt-lg-3">
                    <TeamPopup props={data}>
                        <div className={`arrow_text ${Style.arrow_text}`} >
                            {/* <span>{data?.poptext}</span> */}
                            <span>Know More</span>
                            <div className={`arrow_links ${Style.arrow_bottom}`}>
                            <Icons className={"link-arrow"} icon="arrow-link" size={12} />
                            </div>
                        </div>
                    </TeamPopup>
                  </div>
                )}
                
            </div>
          </div>
        );
      })}

    
    </div>
  </section>

);
 };
export default LeadershipTeam;