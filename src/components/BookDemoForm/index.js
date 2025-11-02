import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Style from "./BookDemoForm.module.scss";
import { useState } from "react";
import ContactForm from "../utils/ContactForm";
import BreadCrumbs from "../utils/BreadCrumbs";

const BookDemoForm = ({ props }) => {
  const [activeTab, setActiveTab] = useState(0); // Add state to track active tab
  const handleTabSelect = (index) => setActiveTab(index); // Function to handle tab selection
  const parse = require("html-react-parser");

  return (
    <section className={Style.bookdemoform}>
      <div className="container">
        <BreadCrumbs props={props} />

        <div className="row pt-5">
          <div className="col-lg-5">
            <div className={Style.left}>
              <h2
                className={`h2 ${Style.title} ${
                  props?.data?.type == "ziva-loan" && "gradient-text-green"
                }`}
              >
                {props?.data?.title}
              </h2>
              {props?.data?.text && (
                <p className={`ff-secondary mb-0 ${Style.sub_title}`}>
                  {props?.data?.text}
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-7 ">
            <div className={`${Style.right}`}>
              <ContactForm props={props}></ContactForm>
            </div>
          </div>
        </div>

        {/* <div className={Style.tabsection}>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={activeTab} // Set activeKey prop to track active tab
                        onSelect={handleTabSelect} // Set onSelect prop to handle tab selection
                        className="mb-3"

                    >
                        {props?.data?.tabs?.map((data, i) => {
                            return (
                                <Tab eventKey={i} title={data?.title} key={i}>
                                    <div className={Style.form_field}>
                                        <ContactForm props={props} preferredSolution={data?.title}></ContactForm>
                                    </div>
                                </Tab>
                            )
                        })}
                    </Tabs>


                </div> */}
      </div>
    </section>
  );
};
export default BookDemoForm;
