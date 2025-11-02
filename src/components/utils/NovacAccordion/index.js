import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Styles from "./NovacAccordion.module.scss";

const NovacAccordion = ({ props }) => {
  const parse = require("html-react-parser");
  const collection =
    props?.data?.type == "collection-management" ? true : false;
  const theme = props?.data?.theme == "light" ? true : false;
  const collectionManagement =
    props?.data?.type == "collection-management"
      ? Styles.collection_management
      : "";
  const axle_accordion =
    props?.data?.type == "axle-inner" ||
    props?.data?.type == "kazito-inner" ||
    props?.data?.type == "insurtech" ||
    props?.data?.type == "digitallearning" ||
    props?.data?.type == "immersivetech"
      ? Styles.axle_accordian
      : "";

  return (
    <div
      className={`${Styles.accordion_wrapper} ${collectionManagement}  ${axle_accordion} `}
    >
      <Accordion defaultActiveKey="0">
        {props?.data?.accordion?.map((data, index) => {
          return (
            <Accordion.Item eventKey={`${index}`} key={index}>
              <Accordion.Header
                className={`${
                  collection || theme ? "text-black" : "text-white"
                }`}
              >
                <span>
                  0{index + 1}
                  {"."}
                </span>{" "}
                <div className={Styles.accordionHeader}>
                  {data?.text}
                </div>
              </Accordion.Header>
              <Accordion.Body
                className={`${
                  collection || theme ? "text-black" : "text-white"
                } ${Styles.accordion_content}`}
              >
                {data?.description && parse(data?.description)}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default NovacAccordion;
