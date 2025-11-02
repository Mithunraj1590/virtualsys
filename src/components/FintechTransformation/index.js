import ZivaIconTextCard from "../utils/ZivaIconTextCard";
import Style from "./FintechTransformation.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const FintechTransformation = ({ props }) => {
  const parse = require("html-react-parser");
  const insuretech =
    props?.data?.type == "insuretech" && Style.insuretech_transform;
  const retailtech =
    props?.data?.type == "retailtech" && Style.retailtech_transform;
  const digitallearning =
    props?.data?.type == "digitallearning" && Style.digitallearning_transform;
  return (
    <section
      className={`${Style.fintech_transform} ${insuretech} ${retailtech} ${digitallearning}`}
    >
      <div className="container">
        {props?.data?.subtitle ? (
          <>
            <div className={`row ${Style.contentWraper}`}>
              <div className="col-lg-6">
                <h2 className={`${Style.title} `}>
                  {parse(props?.data?.title)}
                </h2>
              </div>
              <div className="col-lg-6 ps-lg-3 pt-xxl-3 pt-2">
                <div className="ps-lg-5"> {parse(props?.data?.subtitle)} </div>
              </div>
            </div>
          </>
        ) : (
          <h2 className={`${Style.title} `}>{parse(props?.data?.title)}</h2>
        )}

        <div className="row">
          {props?.data?.cards?.map((data, i) => {
            return (
              <ZivaIconTextCard
                props={data}
                flag="fintech"
                key={i}
                dataAnime={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FintechTransformation;
