import Style from "./HomeCertificationAndStandards.module.scss";
import Image from "next/image";
import Animate from "../Animate/animate";

const HomeCertificationAndStandards = ({ props }) => {
    const parse = require("html-react-parser");

 return (
    <section className={Style.axle_learning_section}>
        <div className="container">
            <div className={Style.section_header}>
                <h2 className={`h2 ${Style.section_title}`}>{parse(props?.data?.title)}</h2>
                <p className={Style.section_sub_title}>{props?.data?.subtitle}</p>
            </div>
            <div className={`row ${Style.column_wrapper}`}>
                {props?.data?.cards?.map((data,i)=>{
                    return(
                        <Animate className={`col-12 col-lg-6 mb-4  animate-fadein ${Style.column_item}`} key={i} style={{"--anim-index":`${i*0.2}s`}}>
                            <div className={`h-100 ${Style.column_item_inner} d-flex flex-column justify-content-between`}>
                                <figure className={`${Style.img_wrapper}`}>
                                    <Image src={data?.image?.url} fill  sizes="(max-width: 768px) 100vw" alt="image"/>
                                </figure>
                                <h3 className={Style.column_heading}>{data?.title}</h3>
                                <p className={Style.column_title}>{data?.text}</p>
                            </div>
                        </Animate>
                    )
                })}
            </div>
        </div>
    </section>
);
 };
export default HomeCertificationAndStandards;