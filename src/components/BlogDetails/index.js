import { useState } from "react";
import Link from "next/link";
import BlogDetailBanner from "../BlogDetailBanner";
import BlogDetailDescription from "../BlogDetailDescription";
import TrendingTopic from "../utils/TrendingTopic";
import Style from "./BlogDetails.module.scss";
import Icons from "../Layout/Icons";
import BreadCrumbs from "../utils/BreadCrumbs";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const BlogDetails = ({ props }) => {
  const blog_detail =
    props?.data?.page == "blog-detail" ? Style.blog_detail : "";
  const news_detail =
    props?.data?.page == "news-detail" ? Style.news_detail : "";

  const [copied, setCopied] = useState(false);

  return (
    <section className={`${Style.blogdetail} ${blog_detail} ${news_detail}`}>
      <div className="container">
        <div className={` ${Style.blogdetail_wrap} row`}>
          <div
            className={`col-lg-8  ${
              props?.data?.page == "news-detail" && "col-xl-9 col-lg-12"
            }`}
          >
            <div className={`${Style.blogdetail_details} `}>
              {props?.data?.breadcrumbs && <BreadCrumbs props={props} />}
              <div className={Style.banner}>
                <BlogDetailBanner
                  props={props?.data?.banner}
                ></BlogDetailBanner>
              </div>
              <div className={Style.content}>
                {/* <div className={Style.share}>
                                    <p>Share</p>
                                    <ul>
                                        <li><Link href="https://twitter.com" target="_blank">   <Icons icon="twitter-icon" size={12} /></Link></li>
                                        <li><Link href="https://www.facebook.com" target="_blank">   <Icons icon="facebook-icon" size={12} /></Link></li>
                                        <li><Link href="https://www.linkedin.com" target="_blank">   <Icons icon="linkedin-icon" size={12} /></Link></li>
                                        <li><Link href="/" target="_blank">   <Icons icon="Icon-metro-link" size={12} /></Link></li>
                                    </ul>
                                </div> */}

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
                    <li
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${
                            typeof window !== "undefined" &&
                            window.location.href
                          }`
                        );
                        setCopied(true);
                        setInterval(() => {
                          setCopied(false);
                        }, 2000);
                      }}
                    >
                      {" "}
                      <div className={Style.sharelink}>
                        <Icons icon="Icon-metro-link" size={14} />{" "}
                      </div>{" "}
                      {copied ? (
                        <div className={Style.clipboard}>Copied</div>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </div>

                <div className={Style.descriptions}>
                  <BlogDetailDescription props={props}></BlogDetailDescription>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-4`}>
            <div className={Style.blogdetail_trending}>
              <TrendingTopic props={props?.data?.trending}></TrendingTopic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogDetails;
