import Image from "next/image";
import Style from "./SteadFastValues.module.scss";
import Animate from "../Animate/animate";

const SteadFastValues = ({ props }) => {
    const parse = require("html-react-parser");
    const Imagecard = (
        <Animate className={` py-lg-0  ${Style.img_section}`}>
            <div className={` ${Style.img_wrapper}`}>
                <figure>
                    <Image src={props?.data?.image?.url} fill alt="image" priority={true} sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 40vw" />
                </figure>
            </div>
        </Animate>
    )

    return (
        // <section className={` ${Style.steadfast} d-none`}>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        {Imagecard}
                    </div>
                    <div className="col-lg-7">
                        <div className={Style.steadfast_content}>
                            <h2 className={`h2 text-white gradient-text ${Style.title}`}>{parse(props?.data?.title)}</h2>
                        <ul className={Style.value_list}>
                            {props?.data?.list?.map((data, i) => {
                                return (
                                    <li key={i}>{data?.value}</li>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default SteadFastValues;