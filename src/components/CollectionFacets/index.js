    import React from "react";
import Style from "./CollectionFacets.module.scss";
import NovacAccordion from "../utils/NovacAccordion";
import ZivaImage from "../utils/ZivaImage";
import { useWindowSize } from "../../logic/useDimension";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const CollectionFacets = ({props}) =>{
    const parse = require("html-react-parser");
    const { width } = useWindowSize();
    return(
        <section className={`position-relative ${Style.facets_section}`}>
            <div className={Style.addon_img}>
                <figure>
                    <Image src={Assets.facets_top_light} fill alt="facets-addon-img" sizes="(max-width: 768px) 100vw"/>
                </figure>
            </div>
            <div className="container">
                <div className={`row ${Style.content_wrapper}`}>
                    { width < 992 &&
                        <div className="col-12">
                            <h2 className={`gradient-text-green h2 ${Style.title}`}>{parse(props?.data?.title)}</h2>
                        </div>
                    }
                    <div className="col-12 col-lg-6">
                        <div className={Style.stickyclass}>
                             <ZivaImage props={props?.data?.image}/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        { width >= 992 &&
                            <h2 className={`gradient-text-green h2 ${Style.title}`}>{props?.data?.title && parse(props?.data?.title)}</h2>
                        }
                        <NovacAccordion props={props}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CollectionFacets;