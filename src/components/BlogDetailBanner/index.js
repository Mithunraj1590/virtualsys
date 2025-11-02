import Image from "next/image";
import Style from "./BlogDetailBanner.module.scss";
import { useWindowSize } from "../../logic/useDimension";

const BlogDetailBanner = ({ props }) => {
    const { width } = useWindowSize();
    return (
        <div className={Style.detailbanner}>
            <div className={`${Style.detailbanner_wrap} image-load`}>
                <figure>
                    <Image src={props?.image?.url} fill alt="image" quality={100} priority={true}  sizes="(max-width: 768px) 100vw"></Image>
                </figure>
            </div>


            {width < 992 &&(   
                <div className={`${Style.details} mb-2`}>
                        {props?.category && <p className={Style.category}>{props?.category}</p>  }
                        {props?.date && <p className={Style.date}>{props?.date}</p> }
                        {props?.length && <p>{props?.length}</p> }
                </div>
            )}

            <h3 className={`h3 ${Style.title}`}>{props?.title}</h3>


            {width >= 992 &&(   
                <div className={`${Style.details} mb-2`}>
                        {props?.category && <p className={Style.category}>{props?.category}</p>  }
                        {props?.date && <p className={Style.date}>{props?.date}</p> }
                        {props?.length && <p>{props?.length}</p> }
                </div>
            )}

            {/* <div className={Style.details}>
                {props?.author ||  props?.category  && <p className={Style.author}>{props?.author} {props?.category}</p>}
                {props?.date && <p className={Style.date}>{props?.date}</p> }
                {props?.length &&  <p className={`d-none d-lg-block ${Style.details}`}>{props?.length}</p> }
            </div> */}
        </div>
    );
};
export default BlogDetailBanner;