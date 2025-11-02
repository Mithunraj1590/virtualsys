
import Style from "./UpdateCard.module.scss";
import Link from "next/link";
import Image from "next/image"; 
import Assets from "../../Layout/CommonLayout/assets";

const UpdateCard = ({ props }) => {
  return (
    <Link href={ `${props?.data?.leftcard?.link?.url}`} className={Style.update_card}>
        <div className={Style.update_title}>{props?.data?.leftcard?.category}</div>
        <figure className={`mb-0 ${Style.figure_wrap}`}>
            <Image src={props?.data?.leftcard?.image?.url} fill     sizes="(max-width: 992px) 100vw, 50vw" alt={props?.data?.leftcard?.title}  quality={100}/>
        </figure>
        <div className={Style.title}>
        <span>{props?.data?.leftcard?.date}</span>
          <h3 className={` h4 ${Style.title_head}`}>{props?.data?.leftcard?.title}</h3>
        </div>
        {/* <div className={Style.hover_wrap}>
            <h4 className="h4 ff-secondary  mb-3">{props?.data?.leftcard?.title}</h4>
            <p className="mb-0 fw5">{props?.data?.leftcard?.text}</p>
        </div> */}
    </Link>
  );
};

export default UpdateCard;
