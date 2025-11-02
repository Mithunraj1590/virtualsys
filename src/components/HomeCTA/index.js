import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Style from "./HomeCTA.module.scss";
import Animate from "../Animate/animate";

const HomeCTA = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  const imagecard = (
    <Animate className={` py-4 py-lg-0 ${Style.img_section}`}>
      <div className={` ${Style.img_wrapper}`}>
        <figure>
          <Image src={props?.data?.image?.url} fill alt="image" quality={100} sizes="(max-width: 768px) 100vw"/>

          <span className={Style.points_left_right}></span>
          <span className={Style.points_top_bottom}></span>
        </figure>
      </div>
    </Animate>
  );

  return (
    <section className={Style.home_cta}>
  

      <div className="container">
        <div className={`row ${Style.content_wrapper}`}>
          <div className={`col-12 col-lg-6 `}>{width >= 992 && imagecard}</div>
          <div className="col-12 col-lg-6">
            <h2 className={`${Style.title} h2`}>{parse(props?.data?.title)}</h2>
            {width < 992 && imagecard}
            {parse(props?.data?.description)}
            {props?.data?.link?.url && (
              <Link
                className="mt-3 btn btn-fintech text-white"
                href={`${props?.data?.link?.url}`}
              >
                {props?.data?.link?.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeCTA;
