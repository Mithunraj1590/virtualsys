import React, { useEffect, useState } from "react";
import Style from "./MantraCard.module.scss";
import Image from "next/image";

const MantraCard = ({ props,  isActive, handleCardClick }) =>{
    const parse = require("html-react-parser");

    return(
        <div className={`${Style.mantracard} ${
            isActive ? Style.responsive_class : ""
          }`}  onClick={handleCardClick}>
           <figure>
            <Image src={props?.image?.url} fill alt="image"></Image>
           </figure>
           <h5 className={`${Style.title} h5`}>{parse(props?.title)}</h5>
           <div className={Style.text_content}>
           {parse(props?.text)}
           </div>
        </div>
    )
}
export default MantraCard;