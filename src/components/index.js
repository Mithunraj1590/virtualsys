import React from "react";
import Page404 from "./Page404";
import ComingSoon from "./ComingSoon";
import HomeBanner from "./HomeBanner";
import HomeDigital from "./HomeDigital";
import HomeProcess from "./HomeProcess";
import HomeDiscovernew from "./HomeDiscovernew";
import HomeBlogNews from "./HomeBlogNews";
import HomeCTA from "./HomeCTA";
import InnerCommonBanner from "./InnerCommonBanner";

const Components = {
  HomeBanner,
  HomeDigital,
  HomeProcess,
  HomeDiscovernew,
  HomeBlogNews,
  HomeCTA,
  InnerCommonBanner,
  ComingSoon,
  Page404,
};

const ComponentFunc = (block) => {
  if (typeof Components[block.slug] !== "undefined") {
    return React.createElement(Components[block.slug], {
      key: Math.random(),
      props: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.slug} has not been created yet.</div>,
    { key: Math.random() }
  );
};
export default ComponentFunc;
