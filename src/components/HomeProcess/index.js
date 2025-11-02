import Style from "./HomeProcess.module.scss";
import Animate from "../Animate/animate";

const HomeProcess = ({ props }) => {
  return (
    <section className={Style.home_process}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className={`h2 text-center mb-5 ${Style.title_head}`}>
              {props?.data?.title}
            </h2>
          </div>
        </div>

        <div className={`row ${Style.steps_wrapper}`}>
          {props?.data?.cards?.map((data, i) => {
            return (
              <Animate
                className={`col-6 col-lg-auto ${Style.step_card} animate-fadein`}
                key={i}
                style={{ "--anim-index": `${i * 0.1}s` }}
              >
                <div className={Style.card_wrapper}>
                  <div className={Style.number}>0{i + 1}</div>
                  <h3 className={Style.title}>{data?.title}</h3>
                  <p className={Style.text}>{data?.text}</p>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default HomeProcess;
