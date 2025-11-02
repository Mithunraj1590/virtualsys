import React, { useEffect, useState } from "react";
import Style from "./RecentNewsCategoryList.module.scss";
import Link from "next/link";
import RecentNewsBlocks from "../RecentNewsBlocks";
import Icon from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";
import { getPageContent } from "../../../lib/pages";

const RecentNewsCategoryList = ({ props }) => {
  const { width } = useWindowSize();

  const activeTab = props?.data?.topics?.[0]?.id;
  const [InitialLoading, setInitialLoading] = useState(false);
  const [loading, setloading] = useState(false);
  const [result, setResult] = useState();
  const [state, setstate] = useState(activeTab);
  const [offSet, setOffSet] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    selectedTopic(0,0);
  }, []);

  const selectedTopic = async (value, page) => {
    setInitialLoading(true);
    const data = await getPageContent(`news/filter?offset=${page}&limit=3&category=${value}`);
    setInitialLoading(false);
    setResult(data?.data);
    setCount(data?.count);
  };

  const getDataLoadMore = async (value, page) => {
    setloading(true);
    const data = await getPageContent(
      `news/filter?offset=${page}&limit=3&category=${value}`
    );
    setloading(false);
    setResult([...result, ...data?.data]);
    setCount(data?.count);
  };

  const handleLoadMore = (value, offSet) => {
    setOffSet(offSet + 3);
    getDataLoadMore(value, offSet + 3);
  };


  return (
    <section className={Style.recent_news_section}>
      <div className="container">
        <h4 className={Style.title}>{props?.data?.title}</h4>
        <ul className={`d-flex ${Style.topics_list}`}>
          {props?.data?.topics?.map((data, i) => {
            return (
              <li
                className={`${Style.topics_list_item} ${
                  data?.id === state ? "active" : ""
                }`}
                key={i}
              >
                <button
                  onClick={(e) => {
                    setOffSet(0);
                    setstate(data?.id);
                    selectedTopic(data?.id,0);
                  }}
                >
                  {data?.title}
                </button>
              </li>
            );
          })}
        </ul>
        <div >

  

          {InitialLoading ? (
              <div  className={`${Style.news_blockshimmer}`}>
                <div className={`row ${Style.news_block_wrapper}`}>
                    <div className={`col-12 col-md-6 col-lg-5 ${Style.img_section}`}>
                        <div className={`${Style.img_wrapper} image-load`}>
                            
                        </div>
                    </div>
                    <div className={`col-12 col-md-6 col-lg-7 mt-3 mt-md-0 ${Style.content_section}`}>
                        <div className="align-items-start d-flex flex-column h-100 justify-content-between">
                            <div className="w-100">
                            <h5 className={`image-load w-25 p-3 ${Style.category}`}>{props?.category}</h5>
                              <h3 className={`image-load w-100  m-0 p-4 ${Style.title}`}>{props?.title}</h3>
                                  </div>
                            <div className="pt-md-3 pt-2">
                                <p className={`image-load p-2 ${Style.name}`}>{props?.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
          ) : (
            <>
              {result?.length > 0 ? (
                <>
                <div className={Style.recent_news_wrapper}>
                  {result?.map((value, t) => {
                    return <RecentNewsBlocks props={value} key={t} />;
                  })}
                  </div>

                  {count > result?.length && (
                    <button
                    className={`d-block m-auto ${Style.loadmorebtn}`}
                      onClick={() => handleLoadMore(state, offSet)}
                    >
                      {!loading ? (
                        <>
                          <div
                          className={`arrow_text text-center mt-3 ${Style.arrow_text}`}
                            >
                              <span className={`text-black`}>Load More </span>
                              <div className={`arrow_links ${Style.arrow_bottom}`}>
                                <Icon className={"link-arrow"} icon="arrow-link" size={12} />
                              </div>
                          </div>


                        </>
                        
                      ) : (
                       <>
                       {/* <span> Loading</span> */}
                       </>

                      )}
                    </button>
                  )}
                </>
              ) : (
                <div className="text-center py-5 error error_message">
                    &quot; No Result Found &quot;
                  </div>
              )}
            </>
          )}
        </div>
        {/* <div className={Style.recent_news_wrapper}>
          {props?.data?.recentNews?.map((data, i) => {
            return <RecentNewsBlocks props={data} key={i} />;
          })}
        </div> */}

        {/* <div className={`${Style.button_wrapper} text-center py-md-5 py-3`}>
          {width >= 992 && (
            <Link
              href={`${props?.data?.links?.url}`}
              className={`arrow_text ${Style.arrow_text}`}
            >
              <span className={`text-black`}>{props?.data?.links?.text} </span>
              <div className={`arrow_links ${Style.arrow_bottom}`}>
                <Icon className={"link-arrow"} icon="arrow-link" size={12} />
              </div>
            </Link>
          )}

          {width < 992 && (
            <Link
              href={`${props?.data?.links?.url}`}
              className={`btn btn btn-outline-primary d-block `}
            >
              <span>{props?.data?.links?.text}</span>
            </Link>
          )}
        </div> */}
      </div>
    </section>
  );
};
export default RecentNewsCategoryList;
