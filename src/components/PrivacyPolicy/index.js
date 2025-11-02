import Style from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section className={Style.disclaimer}>
      <div className="container">
        <div
          className={`${Style.sm_container}  
        }`}
        >
          <h2 className={`title_clr fw4 ${Style.title}`}>
            {props?.data?.title}
          </h2>
          <div className={Style.details}>
            {parse(props?.data?.description)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default PrivacyPolicy;
