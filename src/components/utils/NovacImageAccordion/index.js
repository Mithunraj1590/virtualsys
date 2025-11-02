import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Styles from "./NovacImageAccordion.module.scss";
import Image from "next/image";

const NovacImageAccordion = ({props}) => {
  const parse = require("html-react-parser");
  return (
    <div className={Styles.accordion_wrapper}>
      <Accordion defaultActiveKey="0">
        {props?.map((data,index)=>{
          return(
            <Accordion.Item eventKey={`${index}`} key={index}>
              <Accordion.Header>{data?.title}</Accordion.Header>
              <Accordion.Body className={Styles.accordion_content}>
                <div className={Styles.image_wrap}>
                  <figure>
                    <Image src={data?.image?.url} fill alt="image"  quality={100}></Image>
                  </figure>
                </div>
                <p>{parse(data?.description.replace(/<\/?p[^>]*>/g, ""))}</p>
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </div>
  );
}

export default NovacImageAccordion;