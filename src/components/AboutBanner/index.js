import { useEffect, useRef, useState } from "react";
import Style from "./AboutBanner.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

gsap.registerPlugin(ScrollTrigger);

const AboutBanner = ({ props }) => {
  const main = useRef(null);
  const parse = require("html-react-parser");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
  };

  useEffect(() => {
    const main1 = main.current;
    let mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      gsap.set(main1, { scale: 0.5, opacity: 1 });
      gsap.to(main1, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: main1,
          pin: true,
          start: "18% 35%",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <section className={Style.aboutbanner}>
        <div className="container">
          <h1 className={`${Style.title} text-white h1 gradient-text`}>
            {parse(props?.data?.title)}
          </h1>
        </div>
        <div className={Style.video_banner} ref={main} >
          <div className={Style.play_button} onClick={handleShow}>
            <figure>
              <Image src={Assets.play} fill alt="play"></Image>
            </figure>
          </div>

          <div className={Style.AboutvideoImg} onClick={handleShow}>
            <figure>
              <Image
                src={props?.data?.video?.poster?.url}
                fill
                alt="play"
              ></Image>
            </figure>
          </div>
        </div>
        <div></div>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        className={Style.aboutModal}
        centered
        data-lenis-prevent
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className={`${Style.aboutvideobox}`}>
            <video
              poster={props?.data?.video?.poster?.url}
              controls={true}
              playsInline
              autoPlay
              muted
              loop
              className="video"
            >
              <source src={props?.data?.video?.url?.url} type="video/mp4" />
            </video>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AboutBanner;
