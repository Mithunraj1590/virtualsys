import Image from "next/image";
import Style from "./WorkPlaceCulter.module.scss";
import Animate from "../Animate/animate";
import Link from "next/link";

const WorkPlaceClutter = ({ props }) => {
    const parse = require("html-react-parser");
    return (
        <section className={Style.culture}>
            <div className="container">
                <h2 className={`h2  text-white gradient-text ${Style.title}`}>{parse(props?.data?.title)}</h2>
                <div className={Style.culture_body}>
                    <div className="row">
                        <div className="col-lg-5">
                            <Animate className={Style.img_wrapper}>
                                <figure>
                                    <Image fill src={props?.data?.image?.url} alt="image" quality={100}  sizes="(max-width: 768px) 100vw"/>
                                </figure>
                            </Animate>
                        </div>
                        <div className="col-lg-7">
                            <div className={`${Style.content_wraper} text-white`}>
                                {parse(props?.data?.description)}
                                <div className="mt-4">
                                    <Link className=" btn btn-gradient" href={`${props?.data?.button?.url}`}>{props?.data?.button?.title}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WorkPlaceClutter;