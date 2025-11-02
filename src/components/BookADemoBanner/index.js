import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./BookADemoBanner.module.scss";
import BreadCrumbs from "../utils/BreadCrumbs";
import Animate from "../Animate/animate";

const BookADemoBanner = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <section className={Style.bookdemo}>
      <div className="container">
        <BreadCrumbs props={props} />
        <Animate className={`${Style.bookdemo_banner} d-none`}>
          <div className={Style.bookdemo_banner_head}>
            {width > 992 && (
              <h1 className={`${Style.title}`}>{props?.data?.title}</h1>
            )}
          </div>
          <figure>
            <Image src={props?.data?.image?.url} fill alt="image"></Image>
          </figure>
        </Animate>
        {/* {width < 992 && (
          <h1 className={`${Style.title}`}>{props?.data?.title}</h1>
        )} */}
      </div>
    </section>
  );
};
export default BookADemoBanner;