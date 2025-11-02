import Style from "./ComingSoon.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Icon from "../Layout/Icons";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Animate from "../Animate/animate";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postContent } from "./api";
import { useState } from "react";


const ComingSoon = ({ props }) => {

  const [formSubmitted, setFormSubmitted] = useState(false);

 
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .matches(emailRegex, "Please enter a valid email address")
        .required("Email is required"),
    }),
    onSubmit: async(values) => {
        try {
          const response = await postContent(values.email);
          
           formik.resetForm();
           setFormSubmitted(true); 
           setTimeout(() => {
            setFormSubmitted(false);
          }, 500); 

        } catch (error) {
        }
      
      },
      
    })
  
  return (
    <section className={Style.comming_soon}>
      <div className="container text-center">
        <Animate className={`${Style.topWrap}  animate-fadein`}>
          <div className={Style.shape_fixed}>
            <figure className={Style.shape_figure2}>
              <Image
                src={Assets.coming_soonN}
                fill
                sizes="(max-width: 768px) 100vw"
                alt="Virtual Sys"
                priority={true}
              />
            </figure>
          </div>

          <h1 className={Style.title}>Coming Soon</h1>
          <p className={Style.text}>We&apos;re currently working on creating something fantastic</p>
         
            <Form onSubmit={formik.handleSubmit}>
              <div className={Style.FormWrap}>
                <Form.Group className="mb me-md-3 form-group">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <small className="error text-danger">{formik.errors.email}</small>
                  ) : null}
                </Form.Group>
                <button type="submit" className={`btn btn-primary`}>
                  Notify Me
                </button>


            </div>
            {formSubmitted && (
          <small className="mt-3 d-block text-success success_message ">
            Email send successfully!
          </small>
        )}
          </Form>

          

          <div className={Style.LinkWraper}>


            <div className={Style.addressnumber}>
              <div className={Style.top_icon}>
                <Icon
                  className={Style.topicon}
                  icon={"mail-icon"}
                  size={20}
                />
              </div>
              <Link href="mailto:info@virtualsys.tech">info@virtualsys.tech</Link>
            </div>


            <div className={Style.addressnumber}>
              <div className={Style.top_icon}>
                <Icon className={Style.topicon} icon={"phone-icon"} size={20} />
              </div>
              <Link href="tel:044 429 130 00">044 429 130 00</Link>
            </div>


          </div>
        </Animate>
      </div>
    </section>
  );
};
export default ComingSoon;
