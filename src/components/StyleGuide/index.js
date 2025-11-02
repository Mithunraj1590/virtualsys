import Link from "next/link";
import Style from "./StyleGuide.module.scss";
import Icons from "../Layout/Icons";
const StyleGuide = (props) => {


  const links = [{
    title: "Home",
    link: "/",
  }, {
    title: "Ziva",
    link: "/ziva"
  }, {
    title: "Axle",
    link: "/axle"
  }, {
    title: "Statim",
    link: "/statim"
  }, 
  {
    title: "Kazito",
    link: "/kazito"
  },

  {
    title: "Ziva Loan Organization",
    link: "/ziva-loan-organization"
  },
  {
    title: "Ziva Product Management",
    link: "/product-management"
  },

  {
    title: "Ziva Collection Management",
    link: "/collection-management"
  },
  
  {
    title: "Ziva Loan Servicing",
    link: "/loan-servicing"
  },

  
  {
    title: "Axle Corporates",
    link: "/corporates"
  },
  {
    title: "Axle Institutes",
    link: "/institutes"
  },
  {
    title: "Statim GI",
    link: "/statim-gi"
  },
  {
    title: "Statim LI",
    link: "/statim-li"
  },
  {
    title: "Kazito Unified Retail POS",
    link: "/kazito-unified-retail-pos"
  },
  {
    title: "Kazito Inventory Management System",
    link: "/kazito-inventory-management-system"
  },
  {
    title: "Kazito Warehouse Operations",
    link: "/kazito-warehouse-operations"
  },
  {
    title: "Brochure",
    link: "/brochure"
  },
 

]



  const buttons = [{
    class: "btn btn-primary"
  }, {
    class: "btn btn-outline-primary"
  },
  {
    class: "btn btn-secondary"
  }, {
    class: "btn btn-outline-secondary"
  },
  {
    class: "btn btn-gradient"
  },

  {
    class: "btn btn-ziva"
  },
  {
    class: "btn btn-axle"
  },
  {
    class: "btn btn-kazito"
  },
  {
    class: "btn btn-statim"
  },
]


  let value
  let type
  const handleCopy = (e) => {
    type = e.target.getAttribute("data-type")
    if (e.target.getAttribute("data-type") == "button") {
      value = `<button className="${e.target.getAttribute("data-class")}">${e.target.getAttribute("data-class")}</button>`
    }
    navigator.clipboard.writeText(value);
  }


  const BASE_URL = process.env.BASE_URL;
  return (
    <section className={`${Style.banner_sec} pt-5 mt-5`} >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className={Style.card}>
              <div className={Style.card_head}>T O C</div>
              <div className={Style.card_body}>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Link</th>
                      {/* <th scope="col">Json Data</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {links.map((item, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{item.title}</td>
                          <td>
                            <Link href={`${item.link}`} target={"_blank"}>{item.link}</Link>
                          </td>
                          {/* <td>
                          <Link href={`${BASE_URL}${item.title}`} target={"_blank"}>{`${BASE_URL}${item.title}`}</Link>
                          </td> */}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>


            <div className={Style.card}>
              <div className={Style.card_head}>Color Pallette</div>
              <div className={Style.card_body}>
                <h5>Colors</h5>
                <div className={`${Style.circle} bg-primary`}>primary</div>
                <div className={`${Style.circle} bg-secondary`}>secondary</div>
              </div>
            </div>


            <div className={Style.card}>
              <div className={Style.card_head}>UI Components.
                <p >Click on Elements to Copy </p></div>
              <div className={Style.card_body}>
                <h5>Buttons</h5>
                {buttons.map((button, i) => {
                  return (
                    <button key={i} className={`mb-3 me-3 ${button.class}`} data-class={button.class} data-type="button" onClick={(e) => handleCopy(e)}>{button.class}</button>
                  )
                })}

                <hr />

                <h5>Card</h5>
              </div>

            </div>


            <div className={Style.card}>
              <div className={Style.card_head}>Typography</div>
              <div className={Style.card_body}>
                <h5>Heading</h5>
                <h3 className="h1">Aa</h3>
                <h3 className="h2">Aa</h3>
                <h3 className="h3">Aa</h3>
                <h3 className="h4">Aa</h3>
                <h3 className="h5">Aa</h3>
                <h3 className="h6">Aa</h3>

                <hr />

                <h5>Card</h5>

                <Link
                  href={`/`}
                  className={`arrow_text ${Style.arrow_text}`}
                >
                <p className="mb-0" data-replace="ViewAll"><span>View All</span></p>
                  <div className={`arrow_links ${Style.arrow_bottom}`}>
                    <Icons className={"link-arrow"} icon="arrow-link" size={12} />
                  </div>
                </Link>


                <div className="mt-4 pt-2">
                  <Link
                    href={''}
                    className="orange-arrow"
                  >
                    Know More
                    <div className={"link-arrow ms-3"}><Icons  icon="orange-icon" size={15} /></div>
                  </Link>
                </div>

                <div className="mt-4 pt-2">
                  <Link
                    href={''}
                    className="white-arrow"
                  >
                    Know More
                    <div className={"link-arrow ms-3"}><Icons  icon="arrow-link" size={15} /></div>
                  </Link>
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>
    </section>


    
  );
};

export default StyleGuide;
