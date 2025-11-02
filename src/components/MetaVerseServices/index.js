import { useState } from "react";
import Style from "./MetaVerseServices.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import ZivaImage from "../utils/ZivaImage";
import Link from "next/link";
import FeatureCard from "../utils/FeatureCard";

const MetaVerseServices = ({ props }) => {
    const { width } = useWindowSize();
    const parse = require("html-react-parser");


    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
    };
  
    const clickedClass = isClicked ? Style.btnClicked : '';

    return (
        <section className={Style.mtv_service}>
            <div className="container">
                <div className={Style.mtv_service_body}>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            {width >= 992 && (<ZivaImage props={props?.data?.image} />)}
                        </div>
                        <div className="col-12 col-lg-6">
                            <h3 className={`${Style.title} h3 gradient-text-black`}>{parse(props?.data?.title)}</h3>
                            {width <= 992 && (<ZivaImage props={props?.data?.image} />)}
                            <div className={Style.desc}>{parse(props?.data?.description)}</div>
                            <Link className=" me-3 btn btn-gradient" href={props?.data?.link?.url}>{props?.data?.link?.text}</Link>
                        </div>
                    </div>
                </div>
                <div className={Style.mtv_service_services}>
                    <div className={`row ${Style.features_wrapper} position-relative ${clickedClass}`}>
                        {props?.data?.cards?.map((data, i) => {
                            return(
                                <div className={`col-12 col-md-6 col-lg-4 ${Style.features_card}`} key={i} >
                                    <FeatureCard props={data}  flag="fintech" dataAnime={i}/>
                                </div>
                            )
                        })}
                    </div>

                    {( width < 768) &&
                        <div className={`${Style.button_wrapper} mt-lg-4 pt-3 ${Style.viewallbtn} ${clickedClass}`}>
                                <div onClick={handleClick}
                                href={`${props?.data?.button?.url}`} 
                                className={`btn btn btn-outline-primary d-block`}
                                > 
                                <span> View All</span>
                                </div>
                        </div>
                        }

                </div>
            </div>
        </section>
    );
};
export default MetaVerseServices;