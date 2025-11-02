import React from "react";
import Style from "./RecentNewsBlocks.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";

const RecentNewsBlocks = ({props}) =>{

    const { width } = useWindowSize();
    return(
        <Link href={props?.url} className={Style.news_block}>
            <div className={`row ${Style.news_block_wrapper}`}>
                <div className={`col-12 col-md-6 col-lg-5 ${Style.img_section}`}>
                    <div className={`${Style.img_wrapper} image-load`}>
                        <figure>
                            <Image className={Style.main_image}  fill src={props?.image?.url} alt="image" quality={100}  sizes="(max-width: 768px) 100vw"  priority={true}/>
                        </figure>
                    </div>
                </div>
                <div className={`col-12 col-md-6 col-lg-7 mt-3 mt-md-0 ${Style.content_section}`}>
                    <div className="align-items-start d-flex flex-column h-100 justify-content-between">
                        <div>
                            {width >= 992 && (
                                 <span className={`${Style.date}`}>{props?.date}</span> 
                                 )}
                            {width < 991 && (
                                 <h5 className={Style.category}>{props?.category}</h5>
                                )}
                            <h3 className={Style.title}>{props?.title}</h3>
                        </div>
                        <div className="pt-md-3 pt-2">
                        {width >= 992 && (
                            <h5 className={Style.category}>{props?.category}</h5>
                        )}

                        {width < 991 && (
                           <span className={`${Style.date}`}>{props?.date}</span>
                        )}

                            <p className={Style.name}>{props?.name}</p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default RecentNewsBlocks;