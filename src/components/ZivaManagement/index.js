import ZivaIconTextCard from "../utils/ZivaIconTextCard";
import Style from "./ZivaManagement.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Animate from "../Animate/animate";

const ZivaManagement = ({ props }) => {
    const parse = require("html-react-parser");
 return (
 <Animate  className={`${Style.ziva_management}`}>

      <div className={Style.top_right_bg}><Image fill  src={Assets.manage_bg2} alt={"background Image"}  sizes="(max-width: 768px) 100vw"/></div>
      <div className={Style.bottom_right_bg}><Image fill  src={Assets.manage_bg1} alt={"background Image"}  sizes="(max-width: 768px) 100vw"/></div>

        <div className="container">
                <h2 className={`${Style.title} `}>{parse(props?.data?.title)}</h2>

                <div className="row overflow-hidden">
                    {props?.data?.cards?.map((data, i) =>{
                        return(
                                <ZivaIconTextCard props={data}  flag="ziva"  key={i} dataAnime={i}/>
                        )
                    })}
                </div>
        </div>
</Animate>
);
 };
export default ZivaManagement;