import React, { useState } from "react";
import Styles from "./BrochuresList.module.scss";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Animate from "../Animate/animate";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postContent } from "./api";
import { useRouter } from "next/router";
import IntlTelInput from "react-intl-tel-input";

const ModalCenter = (props) => {
  const router = useRouter();
  const { title, description, document } = props;
  const parse = require("html-react-parser");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [defaultCountry, setDefaultCountry] = useState(["in"]);

  const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const phoneRegExp = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleChange = async (e) => {
    if (e.target.checked === true) {
      formik.setFieldValue("termsAndCondition", 1);
    } else {
      formik.setFieldValue("termsAndCondition", 0);
    }
  };

  const handlePhone = (status, phoneNumber, country) => {
    setCountryCode(country.dialCode);
    if (/^\d+$/.test(phoneNumber) || phoneNumber == "") {
      formik.setFieldValue("phone_no", phoneNumber);
      formik.setFieldTouched("phone_no", true);
    }
    if (Object.keys(country).length === 0) {
      setCountryCode("91");
    }
  };

  const onSelectFlag = (currentNumber, countryData, fullNumber) => {
    setCountryCode(countryData.dialCode);
  };

  if (formSubmitted) {
    const telInput = document.querySelector(".selected-dial-code");
    if (telInput) {
      telInput.textContent = "+91";
    }
  }

  const formik = useFormik({
    initialValues: {
      first_name: "",
      phone_no: "",
      business_email: "",
      company_website: "",
      termsAndCondition: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("Name is required")
        .matches(nameRegExp, "Leading space is not allowed"),
      phone_no: Yup.string()
        .matches(phoneRegExp, "Please enter a valid mobile number")
        .required("Please enter your mobile number")
        .min(6, "Mobile number must be greater than 6 digits ")
        .max(14, "Mobile number must be less than 14 digits"),
      business_email: Yup.string()
        .email("Please enter a valid email address")
        .matches(emailRegex, "Please enter a valid email address")
        .required("Email is required"),
      company_website: Yup.string().required("Company Website is required"),
      //   termsAndCondition: Yup.string().required("Company Name is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!loading) {
        setLoading(true);
        let obj = {
          first_name: values.first_name,
          phone_no: countryCode + values.phone_no,
          business_email: values.business_email,
          company_website: values.company_website,
        };

        postContent(obj).then((response) => {
          if (response?.status === 200) {
            submitForm(resetForm);
            router.push(document);
          }
          setError(response?.data?.status == "Not Found");
          setLoading(false);
          setTimeout(() => {
            setError(false);
          }, 3000);
        });
      }
    },
  });


  const submitForm = (resetForm) => {
    resetForm();
    setDefaultCountry(["in"]);
    setLoading(false);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setCountryCode("91");
    }, 3000);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={Styles.modalform}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-7">
            <div className="content">
              <h2 className={`h2 title gradient-text-black`}>{parse(title)}</h2>
              <p>  {description} </p>
            </div>
          </div>
          <div className="col-lg-5">
            <form className="modalform" onSubmit={formik.handleSubmit}>
              <Form.Group className="mb form-group">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  id="first_name"
                  {...formik.getFieldProps("first_name")}
                />
                {formik.errors.first_name && formik.touched.first_name ? (
                  <small className="error text-danger">
                    {formik.errors.first_name}
                  </small>
                ) : null}
              </Form.Group>

              <Form.Group className="mb form-group">
                <Form.Control
                  type="email"
                  placeholder="Business Email"
                  name="business_email"
                  id="business_email"
                  {...formik.getFieldProps("business_email")}
                />
                {formik.errors.business_email &&
                formik.touched.business_email ? (
                  <small className="error text-danger">
                    {formik.errors.business_email}
                  </small>
                ) : null}
              </Form.Group>

              <Form.Group className="mb form-group">
                <IntlTelInput
                  onSelectFlag={onSelectFlag}
                  numberType=""
                  separateDialCode
                  placeholder="Mobile Number*"
                  containerClassName="intl-tel-input w-100"
                  inputClassName="form-control"
                  preferredCountries={["in"]}
                  onPhoneNumberChange={handlePhone}
                  value={formik.values.phone_no}
                  onPhoneNumberBlur={(e) =>
                    formik.setFieldTouched("phone_no", true)
                  }
                  defaultCountry={defaultCountry}
                />
                {formik.errors.phone_no && formik.touched.phone_no ? (
                  <small className="error text-danger">
                    {formik.errors.phone_no}
                  </small>
                ) : null}
              </Form.Group>

              <Form.Group className="mb form-group">
                <Form.Control
                  type="text"
                  placeholder="Company Website"
                  name="company_website"
                  id="company_website"
                  {...formik.getFieldProps("company_website")}
                />
                {formik.errors.company_website &&
                formik.touched.company_website ? (
                  <small className="error text-danger">
                    {formik.errors.company_website}
                  </small>
                ) : null}
              </Form.Group>

              <Form.Group
                className="checkbox form-group"
                // controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  id="termsAndCondition"
                  name="termsAndCondition"
                  label="I agree to the terms and conditions as set out by the user agreement."
                  className="form-group"
                  onChange={(e) => handleChange(e)}
                  checked={formik.values.termsAndCondition}
                />
                {/* <div>
                      {formik.errors.termsAndCondition &&
                      formik.touched.termsAndCondition ? (
                        <small className="error text-danger">
                          {formik.errors.termsAndCondition}
                        </small>
                      ) : null}
                    </div> */}
              </Form.Group>
              <div className=" form-group mb-0 mt-2">
                {/* <Link href={`/${document}`} target="_blank" className={`btn btn-primary  ${
                    loading ? "submitting" : ""
                  }`}>
                  Download
                </Link> */}
                <button
                  type="submit"
                  className={`btn btn-retailtech   ${loading ? "submitting" : ""}`}
                >
                  Download
                </button>
              </div>
              {formSubmitted && (
                <small className="mt-3 text-success success_message text-center d-block">
                  Succussfully submitted.
                </small>
              )}
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const BrochuresList = ({ props }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = React.useState(false);
  const [title, setTitle] = React.useState();
//  console.log(props,'.....props')
  return (
    <section className={Styles.brochure_section}>
      <div className="container">
        <div className={`row ${Styles.brochure_wrapper}`}>
          {props?.data?.brochures?.map((data, i) => {
            return (
              <Animate
                className=" animate-fadein col-lg-4 col-6"
                key={i}
                style={{ "--anim-index": `${i * 0.1}s` }}
              >
                <div className={Styles.brochure_items}>
                  <div className={`${Styles.img_wrapper} ms-auto me-auto`}>
                    <figure>
                      <Image
                        src={data?.image?.url}
                        fill
                        alt="Image"
                        quality={100}
                        sizes="(max-width: 768px) 100vw"
                      />
                    </figure>
                  </div>
                  <h4 className={Styles.brochure_title}>{data?.title}</h4>
                  <p className={Styles.brochure_subtitle}>
                    {data?.description}
                  </p>
                  <div
                    className="btn btn-primary"
                    onClick={() => {
                      setTitle(data?.description)
                      setModalShow(true);
                      setModalData(data?.button?.url?.url);
                    }}
                  >
                    {data?.button?.text}
                  </div>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
      <ModalCenter
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title? title:props?.data?.popup?.title}
        description={props?.data?.popup?.text}
        document={modalData}
      ></ModalCenter>
    </section>
  );
};
export default BrochuresList;
