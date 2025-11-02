import Style from "./CareerDetailDescription.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Icons from "../Layout/Icons";
import ApplyPosition from "../utils/ApplyPositions";
import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const CareerDetailDescription = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const [copied, setCopied] = useState(false);
  return (
    <section className={Style.description}>
      <div className="container">
        <div className={Style.content_wrap}>
          <div className={Style.left_bar}>
            {width > 992 && (
              <div className={Style.share}>
                <p>Share</p>
                <ul>
                  <li>
                    {/* <Link href="https://twitter.com" target="_blank" className={Style.sharelink}>
                      {" "}
                      <Icons icon="twitter-icon" size={13} />
                    </Link> */}
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
                      url={
                        typeof window !== "undefined" && window.location.href
                      }
                      description={"Facebook Share"}
                      className={Style.sharelink}
                    >
                      <Icons icon="facebook-icon" size={13} />
                    </FacebookShareButton>
                  </li>
                  <li>
                    {/* <Link href="https://www.linkedin.com" target="_blank" className={Style.sharelink}>
                      {" "}
                      <Icons icon="linkedin-icon" size={13} />
                    </Link> */}
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
                    {copied ? (
                      <div className={Style.clipboard}>Copied</div>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={Style.right_bar}>
            <div className={Style.overview}>
              <h3 className={`h3 ${Style.title}`}>
                {props?.data?.overview?.title}
              </h3>
              <p>{props?.data?.overview?.description}</p>
            </div>
            <div className={Style.details}>
              {parse(props?.data?.description)}
            </div>
            <div className={Style.apply_form} id="applynow">
              <h4 className={`h4 ${Style.title}`}>{props?.data?.title}</h4>
              <ApplyPosition></ApplyPosition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CareerDetailDescription;
