import Image from "next/image";
import React from "react";
import Styles from "./StatimImage.module.scss";
import Animate from "../Animate/animate";

const StatimImage = ({props}) =>{
    return(
        <Animate className={`${Styles.image_wrapper} ${props?.image_position=="right" && Styles.image_right}`} >
            <figure>
                <Image src={props?.content?.image?.url} fill alt="image"  quality={100} sizes="(max-width: 768px) 100vw"  priority={true}/>
            </figure>
        </Animate>
        
    )
}

export default StatimImage;