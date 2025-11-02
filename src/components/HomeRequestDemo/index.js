import Style from "./HomeRequestDemo.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";
import Icons from "../Layout/Icons";
import Animate from "../Animate/animate";

const HomeRequestDemo = ({ props }) => {
  return (
    <section className={Style.home_requestdemo}>
      <div className="container">
        <div className={`row ${Style.row_top}`}>
          <div className="col-lg-6 order-lg-2">
            <Animate className={`animate-fadein ${Style.right}`}>
              <h2 className={`h2 fw4 ${Style.title}`}>{props?.data?.title}</h2>
              <p>{props?.data?.text}</p>

              <div className="mt-4 pt-md-3 pt-2">
                <Link
                  href={`${props?.data?.links?.url}`}
                  className="btn btn-gradient"
                >
                  {props?.data?.links?.text}
                </Link>
              </div>
            </Animate>
          </div>

          <div className="col-lg-6 position-relative">
            <Animate className={`${Style.left} `}>
              <div className={Style.shape}>
                <figure className={Style.shape_figure}>
                  <Image
                    src={Assets.req_demo_bg}
                    fill
                    alt={props?.data?.title}
                    className={Style.req_demo_bg}
                    quality={100}
                    sizes="(max-width: 992px) 100vw, 50vw"
                  />

                  <div className={Style.shape_fixed}>
                    <figure className={Style.shape_figure2}>
                      <Image
                        src={props?.data?.image?.url}
                        fill
                        alt={props?.data?.title}
                        quality={100}
                        sizes="(max-width: 992px) 100vw, 50vw"
                      />
                    </figure>
                  </div>
                  
                </figure>
              </div>

              <div className="position-relative">
                <div className={`round-bg ${Style.top_box_bg}`}></div>
              </div>

              <div className="position-relative">
                <div className={`round-bg ${Style.left_box_bg}`}></div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeRequestDemo;
