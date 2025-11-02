import Style from "./ZivaThreeListCard.module.scss";
import Image from "next/image";

const ZivaThreeListCard = ({ props, flag , click }) => {
  return (
    <div className={`col-lg-4 col-md-6 ${Style.ListCard}  ${flag=="width35" && Style.width35} ${flag=="nolimitinshowing" && Style.showallbbox} ${click}`}>
      <div className={Style.ListCardWrapper}>
        <div className={Style.image_wrapper}>
        <figure className={Style.image_box}>
          <Image fill src={props?.image?.url} alt="image" sizes="(max-width: 768px) 100vw"/>
        </figure>
        </div>
        <h5>{props?.title}</h5>
      </div>
    </div>
  );
};

export default ZivaThreeListCard;
