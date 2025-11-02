import Style from "./ZivaWhiteCard.module.scss";
import Image from "next/image";
import Animate from "../../Animate/animate";
import { useRef, useState } from 'react';



const ZivaWhiteCard = ({ props, flag, dataAnime }) => {


  const [followerPosition, setFollowerPosition] = useState({ left: `${-100}px`, top: `${-100}px` });

  const handleMouseEnter = (e) => {
    const cellRect = e.target.getBoundingClientRect();
    const initX = e.clientX;
    const initY = e.clientY;

    const left = ((initX - cellRect.left) / cellRect.width) * 100;
    const top = ((initY - cellRect.top) / cellRect.height) * 100;

    setFollowerPosition({ left, top });
  };

  const handleMouseMove = (e) => {
    const cellRect = e.target.getBoundingClientRect();
    const left = ((e.clientX - cellRect.left) / cellRect.width) * 100;
    const top = ((e.clientY - cellRect.top) / cellRect.height) * 100;

    setFollowerPosition({ left, top });
  };

  const handleMouseLeave = () => {
    setFollowerPosition({ left: `${-100}px`, top: `${-100}px` });
  };


  
const Follower = ({ left, top }) => (
  <aside className="follower" style={{ left: `${left}%`, top: `${top}%` }}></aside>
);

  
const parse = require("html-react-parser"); 
  
  return (
    <Animate className={`col-lg-4  pb-4 animate-fadein`} style={{"--anim-index":`${dataAnime*0.2}s`}}>
      <div   onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave} className={ `cell ${Style.ziva_whiteCard_wrapper} ${flag=='bestpractice' ? Style.bestpractice_border:""}`}>
        <div className={ `${Style.ziva_whiteCard} ${flag=='bestpractice' ? Style.bestpractice:""}`} >
          <figure>
            <Image fill src={props?.image?.url} alt="image" sizes="(max-width: 768px) 100vw"/>
          </figure>
          <div className={Style.cont_wrap}>
            <h3 className={Style.title}>{props?.title}</h3>
          
              {parse(props?.text)}
         
          </div>
        </div>

        <Follower left={followerPosition.left} top={followerPosition.top} />

      </div>

   

    </Animate>
  );
};



export default ZivaWhiteCard;
