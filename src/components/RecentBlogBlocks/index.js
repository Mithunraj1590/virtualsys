import React from "react";
import Style from "./RecentBlogBlocks.module.scss";
import Image from "next/image";
import Link from "next/link";

const RecentBlogBlocks = ({props}) =>{
    return(
        <Link href={props?.url} className={Style.news_block}>
            <div className={`row ${Style.news_block_wrapper}`}>
                <div className={`col-12 col-md-6 col-lg-5 ${Style.img_section}`}>
                    <div className={`${Style.img_wrapper} image-load`}>
                        <figure>
                            <Image  className={Style.main_image} fill src={props?.mainImage?.url || props?.image?.url} alt="image" quality={100}  sizes="(max-width: 768px) 100vw" priority={true}/>
                        </figure>
                    </div>
                </div>
                <div className={`col-12 col-md-6 col-lg-7 mt-3 mt-md-0 ${Style.content_section}`}>
                    <div className="align-items-start d-flex flex-column h-100 justify-content-between">
                        <div >
                            <h5 className={Style.category}>{props?.category}</h5>
                            <h3 className={Style.title}>{props?.title}</h3>
                        </div>
                        <div className="pt-md-3 pt-2">
                            <p className={Style.name}>{props?.name}</p>
                            <span className={`mb-0 ${Style.date}`}>{props?.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default RecentBlogBlocks;