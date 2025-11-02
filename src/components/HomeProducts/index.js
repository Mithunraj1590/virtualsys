import Style from "./HomeProducts.module.scss";
import ProductLinkCard from "../utils/ProductLinkCard";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate/animate";
import { useEffect } from "react";


const HomeProducts = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();


    useEffect(() => {
      const handleMouseMove = (e) => {
        const sqrs = document.querySelectorAll('.item');

        const mouseX = e.pageX;
        const mouseY = e.pageY;

        sqrs.forEach((sqr) => {
          const sqrX = sqr.offsetLeft + 0;
          const sqrY = sqr.offsetTop + 0;

          const diffX = mouseX - sqrX;
          const diffY = mouseY - sqrY;

          const radians = Math.atan2(diffY, diffX);

          const angle = (radians * 360) / Math.PI;

          sqr.style.transform = `rotate(${angle}deg)`;
        });
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
     <section className={`${Style.home_product}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-4">
            <Animate className={`${Style.top_head} animate-fadein`}>
              <h2 className={`h2 mb-lg-4 mb-3 gradient-text-black`}>
              {parse(`${props?.data?.title}`)}
              </h2>
              <p>{parse(`${props?.data?.sub_title}`)}</p>
            </Animate>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className={Style.wraper_boxes}>
              {width >= 768 && (
                <div className={`${Style.colm1} ${Style.colm}`}>
                  {props?.data?.products?.[0]?.map((data, i) => {
                    return <ProductLinkCard key={i} props={data} flag={`colm1${i}`}/>;
                  })}

                  <span className={`${Style.square_box} item`}></span>
                </div>
              )}

              <div className={`${Style.colm2} ${Style.colm}`}>
                {width < 768 && (
                  <>
                    {props?.data?.products?.[0]?.map((data, i) => {
                      return <ProductLinkCard key={i} props={data} flag={`colm10`} dataAnime={i}/>;
                    })}
                  </>
                )}

                {props?.data?.products?.[1]?.map((data, i) => {
                  return (
                    <ProductLinkCard key={i} props={data} flag={`colm2${i}`} dataAnime={i}></ProductLinkCard>
                  );
                })}
              </div>

              <div className={`${Style.colm3} ${Style.colm}`}>
                <span
                  className={`${`${Style.square_box} item`} ${Style.white_box}`}
                ></span>
                {props?.data?.products?.[2]?.map((data, i) => {
                  return (
                    <ProductLinkCard key={i} props={data} flag={`colm3${i}`} dataAnime={i}></ProductLinkCard >
                  );
                })}

                {width < 768 && <span className={`item ${Style.square_box}`}></span>}
              </div>
            </div>
            {/* {props?.data?.cards?.map((data, i) => {
                return <ProductLinkCard key={i} props={data}></ProductLinkCard>;
              })} */}
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className={`round-bg ${Style.bottom_left_bg}`}></div>
      </div>
    </section>

  );
};
export default HomeProducts;
