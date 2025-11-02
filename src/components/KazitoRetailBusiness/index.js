import Style from "./KazitoRetailBusiness.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import ZivaThreeListCard from "../utils/ZivaThreeListCard";


const KazitoRetailBusiness = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section className={`${Style.kazito_retail} ${props?.data?.type  == "col5x7" && Style.col5x7 } `}>
      <div className={Style.bottom_left_bg}>
        <Image fill src={Assets.kazito_mange_bg2} alt={"background Image"} sizes="(max-width: 768px) 100vw"/>
      </div>

      <div className="container">
        {props?.data?.type == "col6x6" && (
          <>
            <div className="row">
              <div className="col-lg-6">
                <h2 className={`${Style.title}  h2 `}>
                  {parse(props?.data?.title)}
                </h2>
              </div>
              <div className="col-lg-6 ">
                <div className="ps-xl-5 pe-xl-4">
                  <p>{props?.data?.text}</p>
                </div>
              </div>
            </div>
          </>
        )}

         
      {props?.data?.type == "col5x7" && (
         
          <>
            <div className="row">
              <div className="col-lg-5">
                <h2 className={`${Style.title}  h2 `}>
                  {parse(props?.data?.title)}
                </h2>
              </div>
              <div className="col-lg-7">
                <div className="px-xl-5 pt-lg-3">
                  <p>{props?.data?.text}</p>
                </div>
              </div>
            </div>
          </>
        )}



        <div className={`row  ${Style.ziva_loanwrapper}`}>
          {props?.data?.business_cards?.map((data, i) => {
            return <ZivaThreeListCard props={data} key={i}  flag={"nolimitinshowing"}/>;
          })}
        </div>
      </div>
    </section>
  );
};
export default KazitoRetailBusiness;
