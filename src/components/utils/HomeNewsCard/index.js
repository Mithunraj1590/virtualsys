import Style from "./HomeNewsCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import { useWindowSize } from "../../../logic/useDimension";
const HomeNewsCard = ({ props , flag }) => {
  const { width } = useWindowSize();
  return (
    <Link href={`${props?.url}`} className={`${Style.right_news_card} ${flag== "blogpage" && Style.blogpage} ${flag== "blogdetailspage" && Style.blogdetailspage}`}>
      <div className= {`mb-0 ${Style.figure_left}`}>
        <figure className={`mb-0 image-load ${Style.figure_wrap}`}>
          <Image src={props?.image?.url} fill     sizes="(max-width: 992px) 50vw, 33vw" alt= {props?.title}  quality={100}  priority={true}/>
        </figure>
      </div>
      <div className={` ${Style.right_cont_wrap}`}>
      {width >= 992 && (
          <span>{props?.date}</span>
          )}
          {props?.category && <span className={Style.category}>{props?.category}</span>}
        <div className={`mt-xl-4 mt-2 ${Style.title}`}>
          <h4 className="h5">
           {props?.title}
          </h4>
        </div>
        {width < 992 && (
          <span className={Style.date}>{props?.date}</span>
          )}
      </div>
    </Link>
  );
};

export default HomeNewsCard;
