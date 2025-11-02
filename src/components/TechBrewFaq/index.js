import Style from "./TechBrewFaq.module.scss";
import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const TechBrewFaq = ({ props }) => {

    const parse = require("html-react-parser");

  return (
    <section className={Style.techbrewfaq}>
      <div className="container">
        <h2 className={`h2 text-center pb-lg-5 pb-2 ${Style.title} `}>
          {props?.data?.title}
        </h2>

        <div className="col-12 ">
          <div
            className={`${Style.accordion_wrapper}  `}
          >
            <Accordion defaultActiveKey="0">
              {props?.data?.accordion?.map((data, index) => {
                return (
                  <Accordion.Item eventKey={`${index}`} key={index}>
                    <Accordion.Header
                      className={``}
                    >
                      <div className={Style.accordionHeader}>
                        {data?.title}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body
                      className={` ${Style.accordion_content}`}
                    >
                      {parse(`${data?.description}`)}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechBrewFaq;
