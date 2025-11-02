
import { useState } from "react";
import Icons from "../../Layout/Icons";
import HomeNewsCard from "../HomeNewsCard";
import Style from "./TrendingTopic.module.scss";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const TrendingTopic = ({ props }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className={Style.tr_topic}>
      <h4 className={`h4 ${Style.title}`}>{props?.title}</h4>
      <div className={Style.tr_topic_card}>
        {props?.card?.map((item, i) => {
          return (
            <HomeNewsCard key={i} props={item} flag="blogdetailspage"></HomeNewsCard>
          )
        })}
      </div>
      <div className={Style.share}>
        <p>Share</p>
        <ul>
          <li>
            {/* <Link href="https://twitter.com" target="_blank" className={Style.sharelink}>   <Icons icon="twitter-icon" size={14} /></Link> */}
            <TwitterShareButton
              id="twitter"
              url={typeof window != "undefined" && window.location.href}
              className={Style.sharelink}
              description={"Twitter Share"}
            >
              <Icons icon="twitter-icon" size={14} />
            </TwitterShareButton>
          </li>
          <li>
            {/* <Link href="https://www.facebook.com" target="_blank" className={Style.sharelink}>   <Icons icon="facebook-icon" size={14} /></Link> */}
            <FacebookShareButton
              id="facebook"
              url={typeof window !== "undefined" && window.location.href}
              description={"Facebook Share"}
              className={Style.sharelink}
              >
               <Icons icon="facebook-icon" size={14} />
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
            <Icons icon="linkedin-icon" size={14} />
          </LinkedinShareButton>
            </li>
          <li onClick={() => {
            navigator.clipboard.writeText(
              `${typeof window !== "undefined" && window.location.href}`
            );
            setCopied(true);
              setInterval(() => {
                setCopied(false);
              }, 2000);
          }}>  <div className={Style.sharelink}><Icons icon="Icon-metro-link" size={14} /> </div> {copied ? <div className={Style.clipboard}>Copied</div> : ""}</li>
        </ul>
      </div>
    </div >
  );
};

export default TrendingTopic;
