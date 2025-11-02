import React from "react";
import { useState } from "react";
import Style from "./TeamPopup.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { useEffect } from "react";
import Icons from "../../Layout/Icons";
import Link from "next/link";


const TestimonialPopupModal = ({ children, props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
  };
  const parse = require("html-react-parser");

  return (
    <>
      <div onClick={handleShow} className={Style.testipop}>
        {children}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className={Style.testimonial_popup}
        centered
        data-lenis-prevent
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className={`row fade-in ${Style.managementWrap}`}>
            <div className="col-lg-4">
              <div className={` ${Style.image_wrap}`}>
                <figure className={`mb-4  mb-lg-0 ${Style.shape_figure}`}>
                  <Image
                    src={props?.image?.url}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    alt="Leadership"
                    priority={true}
                    quality={100}
                  />
                </figure>
              </div>

              {/* <div className={`${Style.social_icons} py-lg-3 py-2`}>
                <Link href="" className={Style.links_icon}>
                  <Icons className={"link-arrow"} icon="facebook" size={37} />{" "}
                </Link>
                <Link href="" className={Style.links_icon}>
                  <Icons className={"link-arrow"} icon="linkedin" size={37} />{" "}
                </Link>
                <Link href="" className={Style.links_icon}>
                  <Icons className={"link-arrow"} icon="twitter" size={37} />{" "}
                </Link>
              </div> */}
            </div>
            <div className="col-lg-8 position-relative ps-lg-5 pe-lg-3">
              <div className={`${Style.top_wrap}`}>
                <h3 className={`title_clr h4 ${Style.title}`}>{props?.name}</h3>
                <h4 className={`${Style.subtitle} fw4`}>
                  {props?.designation}
                </h4>
              </div>

              <div className={`${Style.cont_box}`}>
                {parse(props?.description)}

              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TestimonialPopupModal;
