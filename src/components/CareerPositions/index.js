import { useState, useEffect } from "react";
import ReactSelect from "react-select";
import dynamic from 'next/dynamic';
import Style from "./CareerPositions.module.scss";
import Link from "next/link";
import Icons from "../Layout/Icons";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";
import Image from "next/image";

import { getAxiosInstance } from "../../../pages/api";

const CareerPositions = ({ props }) => {
  const [careerRoles, setCareerRoles] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchValue, setSearchValue] = useState("");
  
  const handleDepartmentChange = (selectedOption) => {
    setSelectedDepartment(selectedOption?.value);
  };
 
  const Select = dynamic(() => import('react-select'), { ssr: false });

  const handleLocationChange = (location) => {
    setSelectedLocation(location?.value);
  };
  const { width } = useWindowSize();

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };


  useEffect(() => {

    const getData = async () => {
      const api = await getAxiosInstance();
      const res = await api.get(
        `/career/search?location=${selectedLocation}&department=${selectedDepartment}&search_term=${searchValue}`
      );
      setCareerRoles(res?.data?.job);
    };

    
    getData();
  }, [selectedLocation, selectedDepartment, searchValue]);

  return (
    <section className={Style.position} id="career-role">
      <div className={Style.positions_bg}>
        <Image fill src={Assets.positions_bg} alt={"background Image"} />
      </div>

      <div className="container position-relative">
        <div className={Style.position_head}>
          <h2 className={`h2 ${Style.title} text-white`}>
            {props?.data?.title}
          </h2>
          <div className={Style.filterfield}>
            <ReactSelect
               id="departments-id"
              options={props?.data?.department_options}
              classNamePrefix="selected"
              components={{ IndicatorSeparator: () => null }}
              placeholder="Department"
              onChange={handleDepartmentChange}
              
            />
            <ReactSelect
              id="location-id"
              options={props?.data?.location_options}
              classNamePrefix="selected"
              components={{ IndicatorSeparator: () => null }}
              placeholder="Location"
              onChange={handleLocationChange}
            />
            {/* <div className={Style.search}>
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
                <Icons icon="searchs" size={20} />{" "}
              </Link>
            </div> */}
          </div>
        </div>
        <div className={Style.position_body}>
          {width < 992 && (
            <div className="overflow-hidden">
              {careerRoles.slice(0,4)?.map((data, i) => {
                return (
                  <div className={`${Style.position_box} text-white`} key={i}>
                    <div className="inner">
                      <h4 className={Style.title}>{data?.title}</h4>
                      <p className={Style.dept}>{data?.department.title}</p>
                      <p
                        className={Style.location}
                      >{`${data?.location?.state}, ${data?.location?.country}`}</p>
                    </div>
                    <Link href={`${data?.url}`}>
                      {" "}
                      <Icons icon="arrow-link" size={12} />{" "}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
          {width > 992 && (
            <table className="text-white">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Experience</th>
                  <th>Location</th>
                  <th>  </th>
                </tr>
              </thead>
              <tbody>
              {careerRoles?.length > 0 ? (
                <>
                {careerRoles.slice(0,4)?.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <span>{data?.title}</span>
                      </td>
                      <td>{data?.department.title}</td>
                      <td>{data?.experience}</td>
                      <td>{`${data?.location?.state}, ${data?.location?.country}`}</td>
                      <td>
                        <Link href={`${data?.url}`}>
                          {" "}
                          <Icons icon="arrow-link" size={12} />{" "}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
                </>
              ): <h6 className=" d-block py-5 error_message ">No Result Found</h6>}
              </tbody>
            </table>
          )}

          <div className="text-center mt-5">
            {width > 992 && (
              <Link
                href={props?.data?.link?.url}
                className={`arrow_text ${Style.arrow_text}`}
              >
                <span>{props?.data?.link?.text}</span>
                <div className={`arrow_links ${Style.arrow_bottom}`}>
                  <Icons className={"link-arrow"} icon="arrow-link" size={12} />
                </div>
              </Link>
            )}
  
            {width < 992 && (
                <Link
                href={props?.data?.link?.url}
                className={`btn btn-outline-secondary ${Style.button}`}>{props?.data?.link?.text}</Link>
            )}

          </div> 
        </div>
      </div>
    </section>
  );
};
export default CareerPositions;
