import React from "react";
import Style from "./BreadCrumbs.module.scss";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import Icons from "../../Layout/Icons";
import { useWindowSize } from "../../../logic/useDimension";

const BreadCrumbs = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <div className={`${Style.breadcrumbs_wrap} pt-lg-5 pt-4`}>
      <Breadcrumb>
        {/* {props?.data?.breadcrumbs?.map((data, index) => {
          return (
            <Breadcrumb.Item key={index}>
              <div className={Style.bread_wrap} >
                {data?.url !== null ? (
                <Link href={`${data?.url}`}>
                {data?.title === "Home" && (
                  <Icons
                    className={Style.bottomicon}
                    icon={"home_icon"}
                    size={width < 768 ? "12" : "15"}
                  />
                )}
                {data?.title === "Home" ? "" : data?.title && data?.title}
                </Link>
                ): <div className={`${data?.url} ? "yes" : "no"`}>{data?.title}</div>}
              </div>
            </Breadcrumb.Item>
          );
        })} */}

       
        
        {props?.data?.breadcrumbs?.map((data, index) => {
          return (
            <React.Fragment key={index}> 
              {data?.url !== null ? (

                
                <Breadcrumb.Item key={index} href={` ${data?.title === "Home" ?  `${data?.url}` :`/${data?.url}` }`}>
                  <div className={Style.bread_wrap}>
                    
                      {data?.title === "Home" && (
                        <Icons
                          className={Style.bottomicon}
                          icon={"home_icon"}
                          size={width < 768 ? "12" : "15"}
                        />
                      )}
                      {data?.title === "Home" ? "" : data?.title && data?.title}

                  </div>
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={index} className={`${data?.url ?  "yes" : Style.linkclose } `}>
                    {data?.title}
                </Breadcrumb.Item>
              )}
            </React.Fragment>
          );
        })}

        {/* {props?.data?.breadcrumbs?.map((data, index) => {
    return (
     
      <Breadcrumb.Item href={`${data?.url}`} key={index} className={`${data?.url? Style.linkopen : Style.linkclose}`}>
              {data?.title === "Home" ?  (
                  <Icons
                    className={` ${Style.bottomicon} `}
                    icon={"home_icon"}
                    size={width < 768 ? "12" : "15"}
                  />
                ):data?.title}

      </Breadcrumb.Item>
      
      

      );
    })}   */}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;
