import React from "react";
import Style from "./FeatureCard.module.scss";
import Animate from "../../Animate/animate";

const FeatureCard = ({ props, flag, dataAnime }) => {
  const parse = require("html-react-parser");
  return (
    <Animate
      className={`animate-fadein ${Style.feature_card_wrapper} ${
        flag == "fintech" && Style.fintech
      }`}
      style={{ "--anim-index": `${dataAnime * 0.1}s` }}
    >
      <h2 className={`${Style.title}`}>
        {props?.text && parse(props?.text)}
      </h2>
      <p className={`${Style.description}`}>{props?.description}</p>
    </Animate>
  );
};
export default FeatureCard;
