import Style from "./ZivaThreeBlockBox.module.scss";
import Image from "next/image";
import ZivaWhiteCard from "../utils/ZivaWhiteCard";
import Assets from "../Layout/CommonLayout/assets";

const ZivaThreeBlockBox = ({ props }) => {
    const parse = require("html-react-parser");
 return (
 <section className={Style.ziva_platforms}>

      <div className={Style.platform_top_left}><Image fill  src={Assets.platform_top_left} alt={"background Image"} sizes="(max-width: 768px) 100vw" /></div>
      <div className={Style.platform_bottom_left}><Image fill  src={Assets.platform_bottom_left} alt={"background Image"} sizes="(max-width: 768px) 100vw" /></div>
      <div className={Style.platform_bottom_right}><Image fill  src={Assets.platform_bottom_right} alt={"background Image"} sizes="(max-width: 768px) 100vw" /></div>

    <div className="container">
        <h2 className={`${Style.title} gradient-text-green-title`}>{parse(props?.data?.title)}</h2> 
        <div className="row pt-lg-5 pt-4">

                {props?.data?.cards?.map((data,i)=>{
                    return(
                        <ZivaWhiteCard props={data} key={i} dataAnime={i}/>
                    )
                })}
                
        </div>
    </div>
 </section>
);
 };
export default ZivaThreeBlockBox;