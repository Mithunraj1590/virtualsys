import Style from "./ZivaBeliefInAction.module.scss";
import Icon from "../Layout/Icons";
import Link from "next/link";
import ZivaEventsCard from "../utils/ZivaEventsCard";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";

const ZivaBeliefInAction = ({ props }) => {
  const { width } = useWindowSize();
  const darkTheme = props?.data?.theme == "dark" ? Style.dark_bg : "";
  const orangeTheme = props?.data?.theme == "orange" ? Style.orange_bg : "";
  const fintech = props?.data?.type == "fintech" ? Style.fintech_sec : "";
  const insurtech = props?.data?.type == "insurtech" ? Style.insurtech_sec : "";
  const retailtech =
    props?.data?.type == "retailtech" ? Style.retailtech_sec : "";
  const digitallearning =
    props?.data?.type == "digitallearning" ? Style.digitallearning_sec : "";

  return (
    <section
      className={` ${Style.ziva_events} ${darkTheme} ${orangeTheme} ${fintech} ${insurtech} ${retailtech} ${digitallearning} position-relative overflow-hidden`}
    >
      {/* Addon Image for kazito Page */}
      {props?.data?.type == "kazito" && (
        <div className={Style.addon_img_wrapper}>
          <figure>
            <Image fill src={Assets.belief_glow_img} alt="belief-addon-img" sizes="(max-width: 768px) 100vw"/>
          </figure>
        </div>
      )}
      {/* Addon Image for Statim Inner Page */}
      {props?.data?.type == "statim-inner" && (
        <div className={`${Style.statim_addon_img} ${Style.bottom_right}`}>
          <figure>
            <Image fill src={Assets.bottom_right_img} alt="belief-addon-img" sizes="(max-width: 768px) 100vw"/>
          </figure>
        </div>
      )}

      {/* Addon Image for Fintech Solutions Page */}
      {props?.data?.type == "fintech" && (
        <div className={`${Style.fintech_bg_belief}`}>
          <Image
            fill
            src={Assets.fintech_bg_belief_action}
            alt="belief-addon-img"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      )}

      {/* Addon Image for Insurtech Solutions Page */}
      {props?.data?.type == "insurtech" && (
        <div className={`${Style.insuretech_bg_belief}`}>
          <Image
            fill
            src={Assets.insuretech_bg_belief_action}
            alt="belief-addon-img"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      )}

      {/* Addon Image for Retailtech Solutions Page */}
      {props?.data?.type == "retailtech" && (
        <div className={`${Style.retailtech_bg_belief}`}>
          <Image
            fill
            src={Assets.retailtech_bg_belief_action}
            alt="belief-addon-img"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      )}

      {/* Addon Image for DigitalLearning  Solutions Page */}
      {props?.data?.type == "digitallearning" && (
        <div className={`${Style.digitallearning_bg_belief}`}>
          <Image
            fill
            src={Assets.digitallearning_bg_belief_action}
            alt="belief-addon-img"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      )}

      <div className="container">
        <div className={`${Style.markettop} `}>
          <h2
            className={`h2 ${
              props?.data?.theme == "dark" || props?.data?.theme == "orange"
                ? "text-white"
                : "text-black"
            }
          ${Style.title}`}
          >
            {props?.data?.title}
          </h2>

          {width > 992 && (
            <div
              className={`${Style.button_wrapper} ${
                props?.data?.theme == "white" ? Style.white_theme : ""
              }`}
            >
              <Link
                href={`${props?.data?.links?.url}`}
                className={`arrow_text ${Style.arrow_text}`}
              >
                <span
                  className={`${
                    props?.data?.theme == "white" ? "text-black" : "text-white"
                  }`}
                >
                  {props?.data?.links?.text}
                </span>
                <div className={`arrow_links ${Style.arrow_bottom}`}>
                  <Icon className={"link-arrow"} icon="arrow-link" size={12} />
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className="row">
          {props?.data?.cards?.slice(0, 3).map((data, i) => {
            return (
              <ZivaEventsCard
                key={i}
                props={data}
                themecolor={props?.data?.theme}
              ></ZivaEventsCard>
            );
          })}
        </div>

        {width < 992 && (
          <>
            {props?.data?.category == "solutions" ? (
              <div className={Style.solution_btn}>
                <Link
                  href={`${props?.data?.links?.url}`}
                  className={`btn btn-outline-secondary d-block`}
                >
                  <span className={`text-white `}>
                    {props?.data?.links?.text}
                  </span>
                </Link>
              </div>
            ) : (
              <div
                className={`${Style.button_wrapper} text-center ${
                  props?.data?.theme == "white" ? Style.white_theme : ""
                }`}
              >
                <Link
                  href={`${props?.data?.links?.url}`}
                  className={`arrow_text ${Style.arrow_text}`}
                >
                  <span
                    className={`${
                      props?.data?.theme == "white"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {props?.data?.links?.text}
                  </span>
                  <div className={`arrow_links ${Style.arrow_bottom}`}>
                    <Icon
                      className={"link-arrow"}
                      icon="arrow-link"
                      size={12}
                    />
                  </div>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
export default ZivaBeliefInAction;
