import BreadCrumbs from "../utils/BreadCrumbs";
import dynamic from 'next/dynamic';
import ReactSelect from "react-select";
import Style from "./CareerListing.module.scss";
import Link from "next/link";
import Icons from "../Layout/Icons";
import { useState, useEffect, useCallback  } from "react";
import { getAxiosInstance } from "../../../pages/api";

const CareerListing = ({ props }) => {
  const Select = dynamic(() => import('react-select'), { ssr: false });

  const [careerRoles, setCareerRoles] = useState(props?.data?.card);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const handleDepartmentChange = (selectedOption) => {
    setSelectedDepartment(selectedOption?.value);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location?.value);
  };

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

 
  const getData = useCallback(async () => {
    const api = await getAxiosInstance();
    const res = await api.get(
      `/career/search?location=${selectedLocation}&department=${selectedDepartment}&search_term=${searchValue}&limit=4&offset=0`
    );
    setTotalCount(res?.data?.count);
    setCareerRoles(res?.data?.job);
  }, [selectedLocation, selectedDepartment, searchValue]);


  useEffect(() => {
    getData();
  }, [selectedLocation, selectedDepartment, searchValue, getData]);

  const handleLoadMore = async () => {
    setOffset((state) => state + 4);
    const api = await getAxiosInstance();
    const res = await api.get(
      `/career/search?location=&department=&search_term=&limit=4&offset=${
        offset + 4
      }`
    );
    setTotalCount(res?.data?.count);
    setCareerRoles((state) => [...state, ...res?.data?.job]);
  };

  return (
    <section className={Style.careerlisting}>
      <div className={Style.top_gradient}></div>
      <div className={Style.bottom_gradient}></div>
      <div className="container">
        <BreadCrumbs props={props} />
        <h2 className={`h2 ${Style.title} text-lg-center`}>
          {props?.data?.title}
        </h2>
        <div className={Style.search_tab}>
          <div className={Style.search}>
            <input
              value={searchValue}
              type="text"
              className="form-control"
              aria-describedby="search"
              placeholder="Search"
              onChange={(e) => handleChangeSearch(e)}
            />
            <Link href="/" aria-label="search">
              {" "}
              <Icons icon="searchs" size={16} />{" "}
            </Link>
          </div>
          <div className={Style.filter_space}>
            <ReactSelect
              options={props?.data?.department_options}
              classNamePrefix={"selected"}
              components={{ IndicatorSeparator: () => null }}
              placeholder="Department"
              onChange={handleDepartmentChange}
            />
            <ReactSelect
              options={props?.data?.location_options}
              classNamePrefix={"selected"}
              components={{ IndicatorSeparator: () => null }}
              placeholder="Location"
              onChange={handleLocationChange}
            />
          </div>
        </div>
        <div className={Style.listing_wrap}>
          {careerRoles?.length > 0 ? (
            <>
              {careerRoles?.map((data, i) => {
                return (
                  <div className={Style.listing_box} key={i}>
                    <div className={Style.listing_box_title}>
                      <h3 className={`${Style.title}`}>{data.title}</h3>
                    </div>
                    <div className={Style.listing_box_text}>
                      <p>{data?.overview}</p>
                      <ul>
                        <li>{data?.department.title}</li>
                        <li>{data?.experience}</li>
                        <li>{`${data?.location?.state}, ${data?.location?.country}`}</li>
                      </ul>
                    </div>
                    <div className={Style.listing_box_link}>
                      <Link href={`${data?.url}`}>
                        <span className={Style.text}>Apply Now</span>
                        <span className={Style.icon}>
                          <Icons icon="arrow-link" size={12} />
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <h2 className="text-center py-5">No Result Found</h2>
          )}
        </div>
        {selectedDepartment === "" &&
          selectedLocation === "" &&
          searchValue === "" &&
          totalCount > careerRoles?.length && (
            <div className={Style.load_btn}>
              <button className={`${Style.load_more}`} onClick={handleLoadMore}>
                Load More{" "}
                <span className={Style.icon}>
                  <Icons icon="arrow-link" size={12} />
                </span>
              </button>
            </div>
          )}
      </div>
    </section>
  );
};
export default CareerListing;
