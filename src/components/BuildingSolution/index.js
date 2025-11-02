import Image from "next/image";
import Style from "./BuildingSolution.module.scss";
import BreadCrumbs from "../utils/BreadCrumbs";
import Link from "next/link";

const BuildingSolution = ({ props }) => {
    const parse = require("html-react-parser");
    return (
        <section className={Style.buldingsolution}>
            <div className="container">
                <BreadCrumbs props={props} />
                <div className={Style.buldingsolution_head}>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className={`${Style.title} h2`}>{parse(props?.data?.title)}</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className={Style.content_wrapper}>
                             {parse(props?.data?.description)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.solution_wrap}>
                    {props?.data?.card?.map((data, i) => {
                        return (
                            <Link href={`${data?.url}`} className={Style.solution_box} key={i}>
                                <figure>
                                    <Image src={data?.image?.url} alt="image" fill quality={100}></Image>
                                </figure>
                                <p>{data?.title}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
export default BuildingSolution;