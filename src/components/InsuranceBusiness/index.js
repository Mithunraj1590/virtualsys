import Image from "next/image";
import Style from "./InsuranceBusiness.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import ProductLinkCard from "../utils/ProductLinkCard";
import Link from "next/link";

const InsuranceBusiness = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  const imagecard = (
    <div className={Style.right_wrapper}>
      <div className={`${Style.colm1} ${Style.colm}`}>
        {props?.data?.products[0]?.map((data, i) => {
          return (
            <ProductLinkCard
              key={i}
              props={data}
              flag={`${props?.data?.type}`}
              dataAnime={i}
            ></ProductLinkCard>
          );
        })}
      </div>

      <div className={`${Style.colm2} ${Style.colm}`}>
        {props?.data?.products[1]?.map((data, i) => {
          return (
            <ProductLinkCard
              key={i}
              props={data}
              flag={`${props?.data?.type}`}
              dataAnime={i}
            ></ProductLinkCard>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className={Style.ins_business}>
      <div className="container">
        <div className={`row ${Style.content_wrapper}`}>
          <div className={`col-12 col-lg-6 `}>{width >= 992 && imagecard}</div>
          <div className="col-12 col-lg-6">
            <h2 className={`${Style.title} h2`}>{parse(props?.data?.title)}</h2>
            {width < 992 && imagecard}
            {parse(props?.data?.description)}
            <Link
              className="mt-3 me-3 btn btn-statim text-white"
              href={props?.data?.link?.url}
            >
              {props?.data?.link?.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InsuranceBusiness;
