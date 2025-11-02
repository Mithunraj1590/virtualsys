import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Assets from "../assets";
import Style from "./Menu.module.scss";
import { useWindowSize } from "../../../../logic/useDimension";
import Icons from "../../Icons";
import Accordion from "react-bootstrap/Accordion";

const Menu = ({ props }) => {
  const { width } = useWindowSize();

  const [scroll, setScroll] = useState(false);
  const [anim, setAnim] = useState(false);
  const [paths, setPaths] = useState("");
  const [minHeader, setMinHeader] = useState("");
  const router = useRouter();
  const pathname = router.asPath;

  const [menuOpen, setMenuOpen] = useState(false);

  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    setTimeout(() => {
      setAccordionOpen(null);
    }, 500);
  };

  const handleLogoClickMenuClose = () => {
    // Close the menu when the logo is clicked
    setMenuOpen(false);
  };

  const navRef = useRef(null);

  const handleNoClick = (event) => {
    event.preventDefault();
    // You can add any custom logic here if needed
  };
  // const handleMouseEnter = (e) => {
  //   e?.target?.parentNode?.classList.remove(`${Style.Menuactive}`);
  //   e?.target?.parentNode?.classList.add(`${Style.Menuactive}`);
  // };
  // const handleMouseLeave = (e) => {
  //   e?.target?.parentNode?.classList.remove(`${Style.Menuactive}`);
  // };

  // Call on click ouside of div click close call
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsCall(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("tap", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("tap", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // End Call on click ouside of div click close call

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setScroll(true);
      setTimeout(() => {
        setAnim(true);
      }, 100);
    } else {
      setScroll(false);
      setAnim(false);
    }
  };

  const [isCall, setIsCall] = useState(false);
  const handleCall = () => {
    setIsCall(!isCall);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Cleanup menu timeout on unmount
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  // Mega Menu Hover
  const [activeIndex, setActiveIndex] = useState(null);
  const menuTimeoutRef = useRef(null);

  function handleMouseEnterOnMenu(i) {
    // Clear any existing timeout
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setActiveIndex(i);
  }

  function handleMouseLeaveFromMenu() {
    // Add a small delay before closing to prevent flickering
    menuTimeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
      setAnim(false);
    }, 150);
  }

  function handleMouseEnterOnSubmenu() {
    // Clear timeout if mouse enters submenu area
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  }

  const [menuanim, setmenuAnim] = useState(false);
  // useEffect(() => {
  //   const checkInnerOrHome = document.querySelector("body").classList;

  //   const handleRouteChange = (url) => {
  //     setTimeout(() => {
  //       setPaths(url);
  //       const isHt2 = checkInnerOrHome?.contains("header-change");
  //       if (!isHt2 && document.querySelector("header")) {
  //         document.querySelector("header")?.classList.add("header-2");
  //         setMinHeader(true);
  //       } else {
  //         document.querySelector("header")?.classList.remove("header-2");
  //         setMinHeader(false);
  //       }
  //     }, 10);
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   handleRouteChange("/");

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [paths, minHeader, router.events]);

  return (
    <>
      <header
        className={`${Style.header} ${scroll ? Style.header_scrolled : ""} ${
          anim ? Style.anim_header : ""
        }  ${!minHeader ? "rm-space" : "header-2"}`}
      >
        <Navbar
          className={`${Style.header_nav}`}
          // bg={`${width >= 992 ? "" : "dark"}`}
          expand={"xl"}
        >
          <Container>
            <Link href="/" className="navbar-brand">
              <div
                className={Style.nav_brand}
                onClick={handleLogoClickMenuClose}
              >
                <div className={Style.img_wrap}>
                  <Image
                    className={Style.white_logo}
                    src={props?.header_icon?.url}
                    priority={true}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    alt="Novac logo"
                    quality={100}
                  />
                </div>
              </div>
            </Link>

            {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle> */}

            {width < 1200 && (
              <div
                className={`${Style.menu_mob_right} ${
                  menuOpen ? Style.menu_open_closecall : ""
                }`}
              >
                <div
                  className={` ${Style.call_btn} ${
                    isCall ? Style.isopen : ""
                  } `}
                  onClick={handleCall}
                  ref={containerRef}
                >
                  <div className={Style.call_icon}>
                    <Icons
                      className={"phone-header"}
                      icon="phone-header"
                      size={15}
                    />
                  </div>
                  <div className={Style.close_icon}>
                    <Icons
                      className={"phone-header"}
                      icon="close-call"
                      size={15}
                    />
                  </div>

                  <div className={Style.callheadwrap}>
                    <div className={Style.callclipshape}>
                      <div className={Style.call_title}>
                        {props?.get_in_touch?.text}
                      </div>
                      <p>{props?.get_in_touch?.description}</p>
                      <Link
                        href={`tel:${props?.get_in_touch?.number}`}
                        className={Style.call_box}
                      >
                        <Icons
                          className={"phone-header"}
                          icon="phone-header"
                          size={16}
                        />{" "}
                        {props?.get_in_touch?.number}
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className={`${Style.hamburg} ${
                    menuOpen ? Style.menu_open : ""
                  }`}
                  onClick={toggleMenu}
                >
                  <span></span>
                  <span></span>
                  {/* <span></span> */}
                </div>
              </div>
            )}

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className={Style.offcanvas}
            >
              <Offcanvas.Body>
                {width >= 1200 && (
                  <ul
                    className={`justify-content-end align-items-center align-items-start flex-grow-1  navbar-nav `}
                  >
                    {props?.nav?.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <li
                            className={` ${
                              item?.submenu ? Style.submenu_li : ""
                            } `}
                            ref={navRef}
                            onClick={handleNoClick}
                            onMouseEnter={() => {
                              if (item?.submenu) {
                                handleMouseEnterOnMenu(index);
                                setTimeout(() => {
                                  setAnim(true);
                                }, 50);
                              }
                            }}
                            onMouseLeave={() => {
                              if (item?.submenu) {
                                handleMouseLeaveFromMenu();
                              }
                            }}
                          >
                            {/* Checking if main Links have Click/page */}
                            {item?.url ? (
                              <Link
                                href={`${item?.url}`}
                                // className="nav-link"
                                className={`${
                                  (pathname.slice(1) ||
                                    router.asPath ||
                                    "/") === item?.url
                                    ? "active"
                                    : ""
                                } nav-link`}
                                data-link={item?.title}
                              >
                                {item?.title}
                              </Link>
                            ) : (
                              <>
                                <Link
                                  href={`${item?.url}`}
                                  className={`${
                                    pathname.slice(1) === item?.url
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                  data-link={item?.title}
                                  onClick={(event) => event.preventDefault()}
                                >
                                  {item?.title}
                                </Link>
                              </>
                            )}

                            {item?.submenu &&
                            activeIndex === index &&
                            width >= 1200 ? (
                              <div
                                className={`${Style.submenu} ${
                                  anim ? Style.activemenu : ""
                                }`}
                                onMouseEnter={handleMouseEnterOnSubmenu}
                                onMouseLeave={handleMouseLeaveFromMenu}
                              >
                                <div className={Style.menuconatiner}>
                                  <div className={Style.menuWrapper}>
                                    <div className={Style.menuContentLeft}>
                                      <div className={Style.lefttitle}>
                                        {item?.menu_title}
                                      </div>
                                      <p>{item?.menu_text}</p>
                                    </div>

                                    <div className={Style.menuContentRight}>
                                      <ul>
                                        {item?.sub_menu.map((data, i) => (
                                          <li
                                            key={i}
                                            className={`${
                                              data?.icon ? "" : Style.nomarginli
                                            } `}
                                          >
                                            <Link
                                              href={`${data?.url}`}
                                              onClick={() => {
                                                handleMouseEnterOnMenu(null);
                                              }}
                                            >
                                              {/* Active menu class to be added */}
                                              <div
                                                className={`${Style.menu_box} ${
                                                  pathname.slice(1) ===
                                                  data?.url
                                                    ? "active"
                                                    : ""
                                                }`}
                                              >
                                                {data?.icon && (
                                                  <div className={Style.left}>
                                                    <figure>
                                                      <Image
                                                        className={
                                                          Style.white_logo
                                                        }
                                                        src={data?.icon?.url}
                                                        priority={true}
                                                        fill
                                                        alt="image"
                                                        sizes="(max-width: 768px) 100vw"
                                                      />
                                                    </figure>
                                                  </div>
                                                )}

                                                <div
                                                  className={`${Style.right} ${
                                                    data?.icon
                                                      ? ""
                                                      : Style.nospan
                                                  }  `}
                                                >
                                                  <span
                                                    className={Style.icon_title}
                                                  >
                                                    {data?.title}
                                                  </span>
                                                  <p>
                                                    {data?.text}{" "}
                                                    {data?.description}
                                                  </p>
                                                </div>
                                              </div>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                        </React.Fragment>
                      );
                    })}
                    {/* 
                    <div className="mx-xl-3  mt-xl-0">
                      <Link href="/search">
                        <Icons
                          className={"icon-arrow"}
                          icon="search"
                          size={16}
                        />
                      </Link>
                    </div> */}
                    <li
                      className={` ${Style.call_btn} ${
                        isCall ? Style.isopen : ""
                      } `}
                      onClick={handleCall}
                      ref={containerRef}
                    >
                      <div className={Style.call_icon}>
                        <Icons
                          className={"phone-header"}
                          icon="phone-header"
                          size={18}
                        />
                      </div>
                      <div className={Style.close_icon}>
                        <Icons
                          className={"phone-header"}
                          icon="close-call"
                          size={18}
                        />
                      </div>

                      <div className={Style.callheadwrap}>
                        <div className={Style.callclipshape}>
                          <div className={Style.call_title}>
                            {" "}
                            {props?.get_in_touch?.text}
                          </div>
                          <p>{props?.get_in_touch?.description}</p>
                          <Link
                            // href="tel:044 4291 3000"
                            href={`tel:${props?.get_in_touch?.number}`}
                            className={Style.call_box}
                          >
                            <Icons
                              className={"phone-header"}
                              icon="phone-header"
                              size={16}
                            />{" "}
                            {props?.get_in_touch?.number}
                          </Link>
                        </div>
                      </div>
                    </li>

                    <li className="ms-xl-4 mt-3 mt-xl-0">
                      <Link
                        href={`${props?.demo_btn?.url}`}
                        className={`btn btn btn-primary`}
                      >
                        {props?.demo_btn?.title}
                        {/* <Icons className={"icon-arrow"} icon="arrow-right-long" size={20} /> */}
                      </Link>
                    </li>
                  </ul>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>

                      
            {width < 1200 && (
              <div
                className={`${Style.mobile_menu} ${
                  menuOpen ? Style.menu_open : ""
                }`}
              >
                <Accordion
                  className={Style.menu_accordian}
                  defaultActiveKey="0"
                  activeKey={accordionOpen}
                  onSelect={(key) => setAccordionOpen(key)}
                >
                  <ul>
                    {props?.nav?.map((item, mobindex) => {
                      return (
                        <React.Fragment key={mobindex}>
                          {item?.submenu == true ? (
                            <Accordion.Item as="li"
                              className={`${
                                (pathname.slice(1) || router.asPath || "/") ===
                                item?.url
                                  ? "active"
                                  : ""
                              }`}
                              eventKey={`${mobindex}`}
                              key={mobindex}
                            >
                              <Accordion.Header  as="div" >{item?.title}</Accordion.Header>
                              <Accordion.Body className={`${Style.links}`}>
                                <ul className={Style.ListAccordian}>
                                  {item?.sub_menu?.map((data, index1) => {
                                    return (
                                      <li
                                        key={index1}
                                        // className={Style.ListAccordian}
                                        className={`${Style.ListAccordian} ${
                                          pathname.slice(1) === data?.url
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        <Link
                                          href={`${data?.url}`}
                                          onClick={toggleMenu}
                                        >
                                          {data?.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                          ) : (
                            <li
                              key={mobindex}
                              className={`${Style.NoSubmenu} ${
                                (pathname.slice(1) || router.asPath || "/") ===
                                item?.url
                                  ? "active "
                                  : ""
                              }`}
                            >
                              <Link href={`${item?.url}`} onClick={toggleMenu}>
                                {item?.title}
                              </Link>
                            </li>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </Accordion>

                <div className={`ms-xl-4 ${Style.mob_menu_btn}`}>
                  <Link
                    href={`${props?.demo_btn?.url}`}
                    className={`btn btn-outline-primary`}
                    onClick={toggleMenu}
                  >
                    <span> {props?.demo_btn?.title}</span>
                  </Link>
                </div>
              </div>
            )}
          </Container>
        </Navbar>
      </header>

      <div className={"spacer"}></div>
    </>
  );
};

export default Menu;
