import { useState } from "react";
import DiscoverCard from "../utils/LocateCard";
import Style from "./LocateUs.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import BreadCrumbs from "../utils/BreadCrumbs";
import { Tab, Tabs } from "react-bootstrap";

const LocateUs = ({ props }) => {
  const [activeTab, setActiveTab] = useState(0); // Add state to track active tab
  const handleTabSelect = (index) => setActiveTab(index); // Function to handle tab selection
  const parse = require("html-react-parser");
  
  return (
    <section className={Style.locateus}>
      <div className="container">
        <div className={Style.BreadCrumbs_wrap}>
          <BreadCrumbs props={props} />
        </div>
        <Tabs
          activeKey={activeTab} // Set activeKey prop to track active tab
          onSelect={handleTabSelect} // Set onSelect prop to handle tab selection
          id="uncontrolled-tab-example"
        >
          {props?.data?.cards?.map((data, i) => {
            return (
              <Tab eventKey={i} title={parse(data?.title)} key={i}>
                <div className="row">
                  {data?.address_card?.map((data, i) => {
                    return (
                      <div className="col-lg-4 col-sm-6" key={i}>
                        <DiscoverCard props={data} dataAnime={i}></DiscoverCard>
                      </div>
                    );
                  })}
                </div>
              </Tab>
            );
          })}
        </Tabs>
        <div className={Style.kazito_bottom_right_bg}>
          <Image fill src={Assets.locate_bg} alt={"background Image"} priority={true}/>
        </div>
      </div>
    </section>
  );
};
export default LocateUs;
