import Style from "./LetsTalk.module.scss";
import Link from "next/link";
import ContactForm from "../utils/ContactForm";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const LetsTalk = ({ props }) => {
  const statimPage = props?.data?.type == "statim" ? Style.statim_page : "";
  const kazitoPage = props?.data?.type == "kazito" ? Style.kazito_page : "";
  const axlePage = props?.data?.type == "axle" ? Style.axle_page : "";
  const zivaLoanPage = (props?.data?.type == "ziva-loan" || props?.data?.type == "statim-inner" || props?.data?.type == "kazito-inner") ? Style.ziva_loan_page : "";

  const FintechPage = (props?.data?.type == "fintech" || props?.data?.type == "insurtech" || props?.data?.type == "retailtech"  ) ? Style.solution_details_page : "";
  const digitallearning = props?.data?.type == "digitallearning" ? Style.digitallearning_page : "";
  
  const parse = require("html-react-parser"); 
  return (
    <section className={`${axlePage} ${statimPage} ${kazitoPage} ${Style.home_letstalk} ${zivaLoanPage} ${FintechPage} ${digitallearning}`} id="scrollTocontact">

      {/* {props?.data?.type == "kazito" && (
        <>
          <div className={Style.talk_top_right1}><figure><Image fill src={Assets.talk_top_right1}/></figure></div>
          <div className={Style.talk_bottom_left2}><figure><Image fill src={Assets.talk_bottom_left2}/></figure></div>
        </>
      )} */}


      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className={Style.left}>
              <h2 className={`h2 ${Style.title} ${props?.data?.type == "ziva-loan" && "gradient-text-green"}
               ${props?.data?.type == "statim-inner" && "gradient-text-light-orange-title"} `}>{parse(props?.data?.title)}</h2>
              {props?.data?.text &&
                <p className={`ff-secondary mb-0 ${Style.sub_title}`}>
                  {props?.data?.text}
                </p>
              }
            </div>
          </div>
          <div className="col-lg-7 ">
            <div className={`${Style.right}`}>
              <ContactForm props={props}></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LetsTalk;
