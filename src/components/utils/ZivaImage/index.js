import React from "react";
import Style from "./ZivaImage.module.scss"
import Image from "next/image";
import Animate from "../../Animate/animate";

const ZivaImage = ({props,flag}) =>{
    const imgWidth = props?.width ? props?.width : 557;
    const imgHeight = props?.height ? props?.height : 606;
    const imgRatio = (imgHeight / imgWidth) * 100;

    return(
        <Animate className={`${Style.img_wrapper} ziva_img_wrapper ${flag == "image_right" ? "ms-auto":""}`} style={{ "--img-max-width": `${imgWidth}px` }}>
            <figure className="mb-0" style={{ "--bs-aspect-ratio": `${imgRatio}%` }}>
                <Image src={props?.url} fill alt="image"  quality={100}  sizes="(max-width: 768px) 100vw" priority={true}/>
            </figure>
        </Animate>
    )
}
export default ZivaImage;