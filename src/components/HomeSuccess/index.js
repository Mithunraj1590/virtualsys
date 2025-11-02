import Style from "./HomeSuccess.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";

const HomeSuccess = ({ props }) => {
 return (
 <section className={Style.homesuccess}>
    <div className="container">
        <div className={Style.success_wrap}>
            <figure className={`mb-0 ${Style.figure_wrap}`}>
                <Image  src={Assets.homesuccess} fill sizes="" alt="novac"  />
            </figure>
            <div className={Style.cont_wrap}>
                <h2 className="h2 pe-xl-5 mb-3">{props?.data?.title}</h2>
                <p className="fw5">{props?.data?.text}</p>
                <div className="mt-4 pt-2">
                    <Link href={`${props?.data?.links?.url}`} className="btn btn-secondary">
                            {props?.data?.links?.text}
                    </Link>
                </div>
            </div>
         </div>
    </div>
</section>
);
 };
export default HomeSuccess;