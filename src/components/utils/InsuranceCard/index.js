
import Style from "./InsuranceCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Image from "next/image";

const InsuranceCard = ({ props }) => {
  return (

    <div className={ `${Style.ins_card_wrapper}`}>
      <div className={ `${Style.ins_card} text-white`} >
          <h3 className={Style.title}>{props?.title}</h3>
          <p>
            {props?.text}
          </p>
      </div>
    </div>
  );
};

export default InsuranceCard;
