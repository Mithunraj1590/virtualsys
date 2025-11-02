import Image from "next/image";
import Style from "./ImmersiveSolution.module.scss";
import Animate from "../Animate/animate";

const ImmersiveSolution = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section className={Style.imm_solution}>
      <div className="container">
        <h2 className={`${Style.title}  text-white h2 gradient-text`}>
          {parse(props?.data?.title)}
        </h2>
        <div className={Style.imm_solution_items}>
          <div className={`row   text-white ${Style.ContWraper}`}>
            {props?.data?.cards?.map((data, i) => {
              return (
                <Animate
                  className="animate-fadein col-lg-4"
                  key={i}
                  style={{ "--anim-index": `${i * 0.1}s` }}
                >
                  <div className={Style.card}>
                    <div className={Style.card_inner}>
                      <div className={Style.image_wrapper}>
                        <figure className={Style.image_box}>
                          <Image
                            fill
                            src={`${data?.image?.url}`}
                            alt="image"
                          />
                        </figure>
                      </div>
                      <h5 className={Style.card_title}>{data?.title}</h5>
                    </div>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ImmersiveSolution;
