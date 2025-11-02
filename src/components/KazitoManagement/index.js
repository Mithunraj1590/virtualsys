import ZivaIconTextCard from "../utils/ZivaIconTextCard";
import Style from "./KazitoManagement.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const KazitoManagement = ({ props }) => {
    const parse = require("html-react-parser");
 return (
 <section className={Style.kazito_management}>

      <div className={Style.top_right_bg}><Image fill  src={Assets.kazito_mange_bg1} alt={"background Image"} sizes="(max-width: 768px) 100vw"/></div>
      <div className={Style.bottom_left_bg}><Image fill  src={Assets.kazito_mange_bg2} alt={"background Image"} sizes="(max-width: 768px) 100vw" /></div>

        <div className="container">
                <h2 className={`${Style.title} h2`}>{parse(props?.data?.title)}</h2>
            
                <div className="row">
                    {props?.data?.cards?.map((data, i) =>{
                        return(
                                <ZivaIconTextCard props={data}  flag="kazito"  key={i}  dataAnime={i}/>
                        )
                    })}

                    {props?.data?.other_cards?.map((data, index) =>{
                        return(
                                <ZivaIconTextCard props={data}  flag="kazito"  key={index}  dataAnime={index}/>
                        )
                    })}

                </div>
        </div>
</section>
);
 };
export default KazitoManagement;