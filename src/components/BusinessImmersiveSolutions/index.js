import Style from "./BusinessImmersiveSolutions.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import ZivaImage from "../utils/ZivaImage";
import Link from "next/link";
import FeatureCard from "../utils/FeatureCard";

const BusinessImmersiveSolutions = ({ props }) => {
    const { width } = useWindowSize();
    const parse = require("html-react-parser");
    return (
        <section className={Style.mtv_service}>
            <div className="container">
                <div className={Style.mtv_service_body}>
                    <div className="row">
                        <div className="col-12">
                            <h3 className={`${Style.title} h3 gradient-text-black`}>{parse(props?.data?.title)}</h3>
                        </div>
                    </div>
                </div>
                <div className={Style.mtv_service_services}>
                    <div className={`row ${Style.features_wrapper} position-relative pt-xxl-4`}>
                        {props?.data?.cards?.map((data, i) => {
                            return(
                                <div className={`col-12 col-md-6 col-lg-4 ${Style.features_card}`} key={i} >
                                    <FeatureCard props={data}  flag="fintech"/>
                                </div>
                            )
                        })}
                    </div>

                    {(props?.data?.button && width < 768) &&
                        <div className={`${Style.button_wrapper} mt-4 pt-3`}>
                                <Link
                                href={`${props?.data?.button?.url}`}
                                className={`btn btn btn-outline-primary d-block`}
                                > 
                                <span>{props?.data?.button?.text} </span>
                                </Link>
                        </div>
                        }

                </div>
            </div>
        </section>
    );
};
export default BusinessImmersiveSolutions;