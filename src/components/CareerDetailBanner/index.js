import Link from "next/link";
import BreadCrumbs from "../utils/BreadCrumbs";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./CareerDetailBanner.module.scss";
import Icons from "../Layout/Icons";
import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const CareerDetailBanner = ({ props }) => {

  const { width } = useWindowSize();
  const handleClick = () => {
    if (typeof window !== undefined) {
      window.scrollTo(
        0,
        document.getElementById("applynow")?.offsetTop - 40
      );
    }
  };

  const [copied, setCopied] = useState(false);

  return (
    <section className={Style.detail_banner}>
      <div className="container">
        <BreadCrumbs props={props} />
        <h2 className={`h1 ${Style.title}`}>{props?.data?.title}</h2>
        <ul className={Style.position}>
          <li>{props?.data?.department}</li>
          <li>{props?.data?.experience}</li>
          <li>{props?.data?.location}</li>
        </ul>
        {/* <Link className={`btn btn-gradient ${Style.button}`} data-type="button" href={props?.data?.link?.url}>{props?.data?.link?.text}</Link> */}
        <button
          className={`btn btn-gradient ${Style.button}`}
          data-type="button"
          onClick={handleClick}
        >
          {props?.data?.link?.text}
        </button>
        {width < 992 && (
          <div className={Style.share}>
            <p>Share</p>
            <ul>
                  <li>
                    {/* <Link href="https://twitter.com" target="_blank" className={Style.sharelink}>
                      {" "}
                      <Icons icon="twitter-icon" size={13} />
                    </Link>
                    
                  </li> */}
                          <TwitterShareButton
                      id="twitter"
                      url={typeof window != "undefined" && window.location.href}
                      className={Style.sharelink}
                      description={"Twitter Share"}
                    >
                      <Icons icon="twitter-icon" size={13} />
                    </TwitterShareButton>
                  </li>
                  <li>
                    {/* <Link href="https://www.facebook.com" target="_blank" className={Style.sharelink}>
                      {" "}
                      <Icons icon="facebook-icon" size={13} />
                    </Link> */}
                     <FacebookShareButton
                      id="facebook"
                      url={typeof window !== "undefined" && window.location.href}
                      description={"Facebook Share"}
                      className={Style.sharelink}
                      >
                      <Icons icon="facebook-icon" size={13} />
                    </FacebookShareButton>
                  </li>
                   <li>
                      {/* <Link href="https://www.linkedin.com" target="_blank" className={Style.sharelink}>   <Icons icon="linkedin-icon" size={14} /></Link> */}
                      <LinkedinShareButton
                      id="linkedin"
                      url={typeof window != "undefined" && window.location.href}
                      description={"Linkedin Share"}
                      className={Style.sharelink}
                    >
                      <Icons icon="linkedin-icon" size={13} />
                    </LinkedinShareButton>
                      </li>
                  <li
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${
                          typeof window !== "undefined" && window.location.href
                        }`
                      );
                      setCopied(true);
                      setInterval(() => {
                        setCopied(false);
                      }, 2000);
                    }}
                  >
                    <div className={Style.sharelink}>
                    {" "}
                    <Icons icon="Icon-metro-link" size={14} />{" "}
                    </div>
                    {copied ? <div className={Style.clipboard}>Copied</div> : ""}
                  </li>
                </ul>
          </div>
        )}
      </div>
    </section>
  );
};
export default CareerDetailBanner;
