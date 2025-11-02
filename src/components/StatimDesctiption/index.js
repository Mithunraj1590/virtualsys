import React from "react";
import Styles from "./StatimDesctiption.module.scss";
import Link from "next/link";

const StatimDescription = ({props}) =>{
    const parse = require("html-react-parser");
    return(
        <div>
            <h4 className={`${Styles.content_title} gradient-text-light-orange-title`}>{parse(props?.content?.title)}</h4>
            <p className={Styles.content_description}>{props?.content?.content}</p>
            <div className={Styles.btn_wrapper}>
                <Link href={props?.content?.button_url}className="btn btn-statim">Know More</Link>
            </div>
        </div>
    )
}

export default StatimDescription;