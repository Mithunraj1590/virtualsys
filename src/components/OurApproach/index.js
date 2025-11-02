import Link from "next/link";
import { Accordion } from "react-bootstrap";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";
import { useState } from "react";
import Style from "./OurApproach.module.scss";


const OurApproach = ({ props }) => {
    const parse = require("html-react-parser");
    const { width } = useWindowSize();
    const [index, setIndex] = useState(0);

    const handleActive = (i) => {
      setIndex(i);
      
    };
    return (
        // <section className={` d-none ${Style.ourapproach}`}>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className={`h2 gradient-text-black ${Style.title}`}>{parse(props?.data?.title)}</h2>
                    </div>
                    <div className="col-lg-6">
                        <p>{props?.data?.description}</p>
                    </div>
                </div>
                <div className={Style.accordion_tech}>
                    <div className={`row ${Style.approach_wrap}`}>
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative">
                                <div className={Style.rightimage_wraper}>
                                    {props?.data?.card?.map((data, i) => {
                                        return (
                                            <div
                                                className={`${Style.right_image} ${i == index ? "active" : ""
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
                                                        sizes=""
                                                        alt="image"
                                                        priority={true}
                                                        quality={100}
                                                    />
                                                </figure>
                                            </div>
                                        );
                                    })}
                                </div>

                              
                            </div>
                        </div>

                        <div className="col-lg-6">

                          

                            <div className={`${Style.approach_left_wrap}`}>
                                {props?.data?.card?.map((data, i) => {
                                    return (
                                        <div
                                            className={`${i == index ? "active" : ""} ${Style.cont_wrap
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
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OurApproach;