import Style from "./BlogBanner.module.scss";
import Link from "next/link";
import Icons from "../Layout/Icons";
import Image from "next/image";
import HomeNewsCard from "../utils/HomeNewsCard";
import { useWindowSize } from "../../logic/useDimension";
import BreadCrumbs from "../utils/BreadCrumbs";

const BlogBanner = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <section className={Style.home_blog_news}>
      <div className="container">
        {props?.data?.breadcrumbs && <BreadCrumbs props={props} />}

        <div className={`${Style.markettop} `}>
          <h2 className={`h2  ${Style.title}`}>{props?.data?.title}</h2>
        </div>

        <div className="row">
          <div className={`col-lg-7 `}>
            <Link
              href={`${props?.data?.leftcard?.link?.url}`}
              className={Style.update_card}
            >
              <figure className={`mb-0 image-load ${Style.figure_wrap}`}>
                <Image
                  src={props?.data?.leftcard?.image?.url}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  alt="image"
                  quality={100}
                  priority={true}

                />
              </figure>
              <div className={Style.content}>
                <span  className={Style.article_time} >{props?.data?.leftcard?.read}</span>

                <h4 className={` h4 ${Style.title_head}`}>
                  {props?.data?.leftcard?.title}
                </h4>

                <h3 className={` h4 ${Style.link_text}`}>{props?.data?.leftcard?.link?.text}</h3>
              </div>

            </Link>
          </div>

          <div className={`col-lg-5`}>
            <div className={Style.trending_topics}>
              <h3 className={Style.right_title}> {props?.data?.title_right} </h3>
              {props?.data?.cards?.slice(0, 3).map((data, i) => {
                return <HomeNewsCard key={i} props={data} flag="blogpage"></HomeNewsCard>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogBanner;
