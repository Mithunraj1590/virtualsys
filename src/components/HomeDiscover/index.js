import Style from "./HomeDiscover.module.scss";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate/animate";

const HomeDiscover = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  return (
    <section className={Style.home_discover}>
      <div className="position-relative">
        <div className={`round-bg ${Style.top_right_bg}`}></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Animate className={`${Style.left} animate-fadein`}>
              <h2 className={`h2 ${Style.title} gradient-text-black`}>
                {parse(`${props?.data?.title}`)}
              </h2>
            </Animate>
          </div>
        </div>

        <div className={`row ${Style.discover_wrap}`}>

          <Animate className={`${Style.accordion_tech}  `}>
            <Accordion defaultActiveKey="0">
                {props?.data?.cards?.map((data,i)=>{
                  return(
                  <Accordion.Item eventKey={`${i}`}  key={i}>
                    <Accordion.Header>{data?.title}</Accordion.Header>
                    <Accordion.Body>
                      <div className={Style.cont_wrap}>
                        <p>
                         {data?.text}
                        </p>
                      </div>

                      <div className={Style.right_image}>
                        <figure className={`mb-0 ${Style.figure_wrap}`}>
                          <Image
                            className={Style.figure_right}
                            src={data?.image?.url}
                            fill
                            sizes=""
                            alt="novac"
                          />
                        </figure>
                        <Link href={`${props?.data?.links?.url}`} className={Style.circle_box}>
                          <Image
                            className={Style.circle_discover}
                            src={Assets.circle_discover}
                            fill
                            sizes=""
                            alt="novac"
                          />
                          <div className={Style.hover_circle}>
                            {" "}
                            <span>{props?.data?.links?.text}</span>
                          </div>
                        </Link>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                )
                })}
            </Accordion>

            {width < 992 && (
              <div className="mt-4 pt-md-3 pt-2 text-center">
                <Link
                  href={`${props?.data?.links?.url}`}
                  className="btn btn-gradient"
                >
                  {props?.data?.links?.text}
                </Link>
              </div>
            )}
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default HomeDiscover;
