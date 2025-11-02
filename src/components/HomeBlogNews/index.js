import Style from "./HomeBlogNews.module.scss";
import Link from "next/link";
import Icons from "../Layout/Icons";
import UpdateCard from "../utils/UpdateCard";
import HomeNewsCard from "../utils/HomeNewsCard";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate/animate";

const HomeBlogNews = ({ props }) => {

  const { width } = useWindowSize();

  return (
    <section className={Style.home_blog_news}>
      <div className="position-relative">
        <div className={`round-bg ${Style.top_right_bg}`}></div>
      </div>

      <div className="position-relative">
        <div className={`round-bg ${Style.top_left1_bg}`}></div>
      </div>

      <div className="position-relative">
        <div className={`round-bg ${Style.top_left2_bg}`}></div>
      </div>

      <div className="container">

        <Animate className={`${Style.markettop} animate-fadein`}>
          <h2 className={`h2  ${Style.title}`}>{props?.data?.title}</h2>


          {width >= 992 && (

            <div>
              <Link
                href={`${props?.data?.links?.url}`}
                className={`arrow_text ${Style.arrow_text}`}
              >
                <span>{props?.data?.links?.text}</span>
                <div className={`arrow_links ${Style.arrow_bottom}`}>
                  <Icons className={"link-arrow"} icon="arrow-link" size={12} />
                </div>
              </Link>
            </div>
          
          )}

        </Animate>

        <div className="row">
          <Animate className={`col-lg-7 animate-fadein`}>
            <UpdateCard props={props}></UpdateCard>
          </Animate>

          <Animate className={`col-lg-5  animate-fadein`}>
            {props?.data?.cards?.slice(0, 3).map((data, i) => {
              return <HomeNewsCard key={i} props={data}></HomeNewsCard>;
            })}
          </Animate>
        </div>

        {width < 992 && (
          <div className="text-center mt-4 pt-2">
            <Link
              href={`${props?.data?.links?.url}`}
              className={`arrow_text ${Style.arrow_text}`}
            >
              <span>{props?.data?.links?.text}</span>
              <div className={`arrow_links ${Style.arrow_bottom}`}>
                <Icons className={"link-arrow"} icon="arrow-link" size={12} />
              </div>
            </Link>
          </div>
          )}

      </div>
    </section>
  );
};
export default HomeBlogNews;
