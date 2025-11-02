import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Style from "./Footer.module.scss";
import { useWindowSize } from "../../../../logic/useDimension";
import Icon from "../../Icons";
import Assets from "../assets";
import Image from "next/image";
import { useRouter } from "next/router";


function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

const Footer = ({ props, footer_bgcolour }) => {
  const { width } = useWindowSize();
  const router = useRouter();
  const pathname = router.asPath;

  const [currentYear, setCurrentYear] = useState(getCurrentYear());


  useEffect(() => {
    // Optionally, you can update the year at a certain interval (e.g., every minute).
    // This is useful if the page is kept open for a long time.
    const intervalId = setInterval(() => {
      setCurrentYear(getCurrentYear());
    }, 60000); // Update every 60 seconds

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

 const  footerbgcolor = footer_bgcolour  ? footer_bgcolour : "var(--footerbg)"

  return (
    <footer className={Style.footer} style={{"--footerbackground":`${footerbgcolor}`}}>
      <div className="container">
        {/* {width>=1200?"": <SubscribeForm/>} */}

        <div className={Style.links_wrap}>
          <div className="row ">
            {width >= 1200 ? (
              <>
                <div className="col-xxl-7 col-lg-9">
                  <div
                    className={`col-lg-12 d-flex flex-wrap pe-xxl-3 ${Style.bottom_links} `}
                  >
                    {props?.menu?.map((item, index) => {
                      return (
                        <div className={`${Style.links} col-lg-4`} key={index}>
                          <div className={`h6 ${Style.foottitle}`}>{item?.title}</div>

                          <ul>
                            {item?.content?.map((data, i) => {
                              return (
                                <li key={i}
                                  className={`${(pathname.slice(1)) === data?.url ? "active" : ""
                                    } nav-link `}
                                >
 

                                  <Link href={`${data?.url}`}>
                                    {data?.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}

                    <div className={`col-lg-12 ${Style.foot_logo}`}>
                      <Link href={`${props?.logo?.url}`}>
                        <figure className={`mb-0 ${Style.footerlogo}`}>
                          <Image
                            src={props?.logo?.image?.url}
                            fill
                            sizes=""
                            alt="Virtual Sys Logo"
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={`col-xxl-5 col-lg-3 ${Style.foot_right_wrap}`}>
                  <div className={`${Style.address_links} col-lg-12`}>
                    <div className={Style.addresstitle}>Address</div>

                    <div className={`${Style.links_box} col-lg-12`}>
                      <address className={Style.addresstext}>
                        <p>{props?.contact?.address}</p>
                      </address>
                      <div className={Style.addressnumber}>
                        <div className={Style.top_icon}>
                          <Icon
                            className={Style.topicon}
                            icon={"mail-icon"}
                            size={20}
                          />
                        </div>
                        <Link href={`mailto:${props?.contact?.email}`}>
                          {props?.contact?.email}
                        </Link>
                      </div>

                      <div className={Style.addressnumber}>
                        <div className={Style.top_icon}>
                          <Icon
                            className={Style.topicon}
                            icon={"phone-icon"}
                            size={20}
                          />
                        </div>
                        <Link href={`tel:${props?.contact?.phone}`}>
                          {props?.contact?.phone}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className={`  col-lg-12`}>
                    <div className={`${Style.social_links}`}>
                      <ul className={Style.social_wrap}>
                        {props?.social?.map((item, i) => {
                          return (
                            <li key={i} className={`${(pathname.slice(1)) === item?.url ? "active" : ""}`}>
                              <Link
                                href={`${item?.url}`}
                                aria-label="linkedin"
                                target="_blank"
                              >
                                {" "}
                                <Icon icon={item?.title} size={20} />{" "}
                              </Link>{" "}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Accordion className={Style.accordion} defaultActiveKey="0">
                {props?.menu?.map((item, index) => {
                  return (
                    <Accordion.Item eventKey={`${index}`} key={index}>
                      <Accordion.Header key={index} as="div">
                        {item?.title}
                      </Accordion.Header>

                      <Accordion.Body className={`${Style.links_acd}`}>
                        <ul>
                          {item?.content?.map((data, i) => {
                            return (
                              <li key={i} className={`${(pathname.slice(1)) === data?.url ? "active" : ""}`}>
                                <Link href={`${data?.url}`}>{data?.title}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}


                <Accordion.Item eventKey="4">
                  <Accordion.Header as="div">Address </Accordion.Header>
                  <Accordion.Body className={`${Style.links_acd}`}>
                    <div className={`${Style.address_links} col-lg-12`}>
                      <div className="d-flex flex-wrap justify-content-between">
                        <div className={`${Style.links_box} col-lg-6 pb-3`}>
                          <address className={Style.addresstext}>
                            <span>
                              {props?.contact?.address}
                            </span>
                          </address>

                          <div className={Style.addressnumber}>
                            <div className={Style.top_icon}>
                              <Icon
                                className={Style.topicon}
                                icon={"mail-icon"}
                                size={20}
                              />
                            </div>
                            <Link href={`mailto:${props?.contact?.email}`}>
                              {props?.contact?.email}
                            </Link>
                          </div>

                          <div className={Style.addressnumber}>
                            <div className={Style.top_icon}>
                              <Icon
                                className={Style.topicon}
                                icon={"phone-icon"}
                                size={20}
                              />
                            </div>
                            <Link href={`tel:${props?.contact?.phone}`}>
                              {props?.contact?.phone}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <div className={` ${Style.social_links}`}>
                  <ul
                    className={`pt-5 pb-4 py-xl-0 justify-content-center ${Style.social_wrap}`}
                  >
                    {props?.social?.map((item, i) => {
                      return (
                        <li key={i} className={`${(pathname.slice(1)) === item?.url ? "active" : ""}`}>
                          <Link
                            href={`${item?.url}`}
                            aria-label="linkedin"
                            target="_blank"
                          >
                            {" "}
                            <Icon icon={item?.title} size={20} />{" "}
                          </Link>{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Accordion>
            )}
          </div>
        </div>

        <div className={Style.credit}>
          <div className="row">
            <div className="col-xl-9 text-center text-xl-start d-flex flex-column-reverse flex-xl-row">
              <p>
                ©{currentYear}
                <Link href="/"> Virtual Sys Technology Solutions. </Link>{" "}
                <span className={Style.all_right_reserved}>
                  All rights reserved.{" "}
                </span>
              </p>
              <p className={Style.termcond}>
                <Link href={`${props?.terms_and_condition?.url}`}>
                 Privacy Policy{" "}
                </Link>
              </p>
              <p className={Style.termcond}>
                <Link href={`${props?.terms_and_condition?.url}`}>
                 Terms and Conditions{" "}
                </Link>
              </p>
            </div>
            <div className="col-xl-5 ">
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
