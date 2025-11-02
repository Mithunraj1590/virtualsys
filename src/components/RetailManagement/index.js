import ZivaImage from "../utils/ZivaImage";
import ZivaThreeListCard from "../utils/ZivaThreeListCard";
import Style from "./RetailManagment.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";

const RetailManagement = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  return (
    <section className={Style.rtl_mnt}>
      <div className="container">
        <h2 className={`${Style.title} h2 gradient-text-black`}>
          {parse(props?.data?.title)}
        </h2>

        <div className={Style.rtl_mnt_body}>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              {width <= 992 && (
                <ZivaImage props={props?.data?.image} flag={"image_right"} />
              )}
              <h3 className={`${Style.subtitle} h3 gradient-text-black`}>
                {parse(props?.data?.subtitle)}
              </h3>
              <div className={Style.desc}>
                {parse(props?.data?.description)}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {width >= 992 && (
                <ZivaImage props={props?.data?.image} flag={"image_right"} />
              )}
            </div>
          </div>
        </div>
        <div className={`row  ${Style.management}`}>
          {props?.data?.cards?.map((data, i) => {
            return <ZivaThreeListCard props={data} flag={"width35"} key={i} />;
          })}
        </div>

        {props?.data?.link?.url && (
          <Link className="btn btn-retailtech" href={props?.data?.link?.url}>
            {props?.data?.link?.title}
          </Link>
        )}
      </div>
    </section>
  );
};
export default RetailManagement;
