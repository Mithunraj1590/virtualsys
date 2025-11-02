
import Style from "./UpdateCard.module.scss";
import Link from "next/link";
import Image from "next/image"; 
import Assets from "../../Layout/CommonLayout/assets";

const UpdateCard = ({ props }) => {
  return (
    <Link href={"/"} className={Style.update_card}>
        <div className={Style.update_title}>Updates</div>
        <figure className={`mb-0 ${Style.figure_wrap}`}>
            <Image src={Assets.updates} fill sizes="" alt="novac" 
/>
        </figure>
        <div className={Style.title}>
          <h4 className="ff-secondary h4">Awardss for the Best  Customer Engagement</h4>
        </div>
        <div className={Style.hover_wrap}>
            <h4 className="h4 ff-secondary  mb-3">Awards for the Best  Customer Engagement</h4>
            <p className="mb-0">With the unwavering tenacity of our employees who have worked diligently to win the acclaimed ETBFSI Excellence Awards for the Best Customer Engagement Initiative of the Year - by a Fintech.</p>
        </div>
    </Link>
  );
};

export default UpdateCard;
