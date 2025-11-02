import ZivaImage from "../utils/ZivaImage";
import Style from "./CareerNovacFamily.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";
import Image from "next/image";

const CareerNovacFamily = ({ props }) => {
    const { width } = useWindowSize();
    const parse = require("html-react-parser");
    return (
        <section className={Style.careerfamily}>
            <div className={Style.top_bg}>
                <Image fill src={Assets.careerfamily_bg} alt={"background Image"} quality={100}  sizes="(max-width: 768px) 100vw"/>
            </div>
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={Style.content}>
                            <h2 className={`h2 ${Style.title}`}>{parse(props?.data?.title)}</h2>
                            {width < 992 && (
                                <div className={Style.imagewrap}>
                                    <ZivaImage props={props?.data?.image} flag={"image_right"} />
                                </div>
                            )}
                             {props?.data?.description}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {width >= 992 && (
                            <div className={Style.imagewrap}>
                                <ZivaImage props={props?.data?.image} flag={"image_right"} />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section >
    );
};
export default CareerNovacFamily;