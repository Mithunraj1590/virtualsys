import { useState } from "react";
import Link from "next/link";
import Style from "./KazitoProducts.module.scss";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import NovacImageAccordion from "../utils/NovacImageAccordion";
import { Tab, Tabs } from "react-bootstrap";
import Animate from "../Animate/animate";

const KazitoProducts = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  const [activeTab, setActiveTab] = useState(0); // Add state to track active tab
  const handleTabSelect = (index) => setActiveTab(index); // Function to handle tab selection

  return (
    <section className={Style.kzt_products}>
      <div className="container">
        <div className={Style.kzt_products_head}>
          <div className="row text-white">
            <div className="col-lg-3">
              <h2 className={`${Style.title} h2 gradient-text`}>
                {parse(props?.data?.title)}
              </h2>
            </div>
            <div className="col-lg-9">{parse(props?.data?.description)}</div>
          </div>
        </div>
        {width >= 992 && (
          <div className={Style.kzt_products_tabs}>
            <Tabs
              activeKey={activeTab} // Set activeKey prop to track active tab
              onSelect={handleTabSelect} // Set onSelect prop to handle tab selection
              id="uncontrolled-tab-example"
            >
              {props?.data?.list?.map((data, i) => {
                return (
                  <Tab eventKey={i} title={parse(data?.title)} key={i}>
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className={Style.left}>
                          <Animate className={Style.shape}>
                            <figure className={Style.shape_figure}>
                              <Image
                                src={data?.image?.url}
                                fill
                                sizes="(max-width: 768px) 100vw"
                                alt="image"
                                priority={true}
                                quality={100}
                              />
                            </figure>
                          </Animate>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={`${Style.right} text-white`}>
                          <h3 className={`${Style.title} h3`}>
                            {parse(data?.title)}
                          </h3>
                          {parse(data?.description.replace(/<\/?p[^>]*>/g, ""))}
                        </div>
                      </div>
                    </div>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        )}
        {width <= 992 && (
          <div className={Style.acordian}>
            <NovacImageAccordion
              props={props?.data?.list}
            ></NovacImageAccordion>
          </div>
        )}
      </div>
    </section>
  );
};
export default KazitoProducts;
