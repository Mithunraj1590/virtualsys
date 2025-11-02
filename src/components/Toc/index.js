import Table from "react-bootstrap/Table";
import Style from "./Toc.module.scss";
import Link from "next/link";

const Toc = ({prop}) => {
  return (
    <section className={Style.toc}>
      <div className="container">
       
        <div className="StyleGuide_card__ui7q2 pt-5">
          <div className="StyleGuide_card_head__TGy7B">T O C</div>
          <div className="StyleGuide_card_body__kGaWs">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Home</td>
                  <td>
                    <Link target="_blank" href="/">
                      /
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td>
                   
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>Ziva</td>
                  <td>
                    <Link target="_blank" href="/ziva">
                      /ziva
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Axle</td>
                  <td>
                    <Link target="_blank" href="/axle">
                      /axle
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Statim</td>
                  <td>
                    <Link target="_blank" href="/statim">
                      /statim
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Kazito</td>
                  <td>
                    <Link target="_blank" href="/kazito">
                      /kazito
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td>
                   
                  </td>
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td>Ziva Loan Organization</td>
                  <td>
                    <Link target="_blank" href="/ziva-loan-organization">
                      /ziva-loan-organization
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Ziva Product Management</td>
                  <td>
                    <Link target="_blank" href="/product-management">
                      /product-management
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Ziva Collection Management</td>
                  <td>
                    <Link target="_blank" href="/collection-management">
                      /collection-management
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Ziva Loan Servicing</td>
                  <td>
                    <Link target="_blank" href="/loan-servicing">
                      /loan-servicing
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Axle Corporates</td>
                  <td>
                    <Link target="_blank" href="/corporates">
                      /corporates
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Axle Institutes</td>
                  <td>
                    <Link target="_blank" href="/institutes">
                      /institutes
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Statim GI</td>
                  <td>
                    <Link target="_blank" href="/statim-gi">
                      /statim-gi
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>Statim LI</td>
                  <td>
                    <Link target="_blank" href="/statim-li">
                      /statim-li
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Kazito Unified Retail POS</td>
                  <td>
                    <Link target="_blank" href="/kazito-unified-retail-pos">
                      /kazito-unified-retail-pos
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>Kazito Inventory Management System</td>
                  <td>
                    <Link target="_blank"
                     
                      href="/kazito-inventory-management-system"
                    >
                      /kazito-inventory-management-system
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">16</th>
                  <td>Kazito Warehouse Operations</td>
                  <td>
                    <Link target="_blank" href="/kazito-warehouse-operations">
                      /kazito-warehouse-operations
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td>
                   
                  </td>
                </tr>

                <tr>
                  <th scope="row">17</th>
                  <td>FinTech</td>
                  <td>
                    <Link target="_blank" href="/fintech_solutions">
                      /fintech_solutions
                    </Link>
                  </td>
                </tr>

              

                <tr>
                  <th scope="row">18</th>
                  <td>InsurTech Solutions</td>
                  <td>
                    <Link target="_blank" href="/insurtech-solutions">
                      /insurtech-solutions
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">19</th>
                  <td>RetailTech Solutions</td>
                  <td>
                    <Link target="_blank" href="/retailtech-solutions">
                      /retailtech-solutions
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">20</th>
                  <td>ImmersiveTech Solutions</td>
                  <td>
                    <Link target="_blank" href="/immersivetech-solutions">
                      /immersivetech-solutions
                    </Link>
                  </td>
                </tr>


                <tr>
                  <th scope="row">21</th>
                  <td>Digital learning Solutions</td>
                  <td>
                    <Link target="_blank" href="/digitallearning-solutions">
                      /digitallearning-solutions
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td>
                   
                  </td>
                </tr>

                <tr>
                  <th scope="row">22</th>
                  <td>Leadership</td>
                  <td>
                    <Link target="_blank" href="/leadership">
                      /leadership
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">23</th>
                  <td>Careers</td>
                  <td>
                    <Link target="_blank" href="/careers">
                      /careers
                    </Link>
                  </td>
                </tr>



                <tr>
                  <th scope="row">24</th>
                  <td>Brochure</td>
                  <td>
                    <Link target="_blank" href="/brochure">
                      /brochure
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">25</th>
                  <td>Blog</td>
                  <td>
                    <Link target="_blank" href="/blog">
                      /blog
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">26</th>
                  <td>News</td>
                  <td>
                    <Link target="_blank" href="/news">
                      /news
                    </Link>
                  </td>
                </tr>
                

               

                <tr>
                  <th scope="row">27</th>
                  <td>Blog Details</td>
                  <td>
                    <Link target="_blank" href="/blog-details">
                      /blog-details
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">28</th>
                  <td>News Details</td>
                  <td>
                    <Link target="_blank" href="/news-details">
                      /news-details
                    </Link>
                  </td>
                </tr>

               

                <tr>
                  <th scope="row">29</th>
                  <td>Locate Us</td>
                  <td>
                    <Link target="_blank" href="/locate-us">
                      /locate-us
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">30</th>
                  <td>About Us</td>
                  <td>
                    <Link target="_blank" href="/about">
                      /about
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">31</th>
                  <td>Book a Demo</td>
                  <td>
                    <Link target="_blank" href="/book-a-demo">
                      /book-a-demo
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">32</th>
                  <td>Career Listing</td>
                  <td>
                    <Link target="_blank" href="/career-listing">
                      /career-listing
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">33</th>
                  <td>Career Details</td>
                  <td>
                    <Link target="_blank" href="/career-details">
                      /career-details
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">34</th>
                  <td>Coming Soon</td>
                  <td>
                    <Link target="_blank" href="/comming-soon">
                      /comming-soon
                    </Link>
                  </td>
                </tr>

                <tr>
                  <th scope="row">35</th>
                  <td>Tech Brew</td>
                  <td>
                    <Link target="_blank" href="/techbrew">
                      /techbrew
                    </Link>
                  </td>
                </tr>



                

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Toc;

