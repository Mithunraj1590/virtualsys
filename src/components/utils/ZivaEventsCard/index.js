import Style from "./ZivaEventsCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import { useWindowSize } from "../../../logic/useDimension";
const ZivaEventsCard = ({ props, flag, themecolor }) => {
  const darkTheme = themecolor == "dark" ||  themecolor == "orange" ? Style.dark_theme : "";
  const flag_realtedtopics = flag == "relatedTopics" ? Style.realtedtopics : "";
  return (
    <div className={`col-lg-4 ${darkTheme} ${flag_realtedtopics}`}>
      <Link href={`${props?.url}`} className={Style.right_news_card}>
        <div className={` ${Style.figure_left}`}>
          <div className={Style.category}> Event</div>
          <figure className={`mb-0 image-load ${Style.figure_wrap}`}>
            <Image
              src={props?.image?.url}
              fill
              sizes="(max-width: 768px) 100vw"
              alt="image"
              quality={100}
              priority={true}
            />
          </figure>
        </div>
        <div className={` ${Style.right_cont_wrap}`}>
          <span className={Style.date}>{props?.date}</span>
          {/* {props?.subtitle} */}
          <span className={Style.subtitle}>{props?.category}</span>
          <div className={`mt-3 ${Style.title}`}>
            <h3 className="h5 ">{props?.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ZivaEventsCard;
