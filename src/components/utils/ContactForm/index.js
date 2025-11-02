import Style from "./ContactForm.module.scss";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState, useId, useEffect, useRef } from "react";
import Select from "react-select";
import { postContent, solutionDataList } from "./api";
import { useRouter } from "next/router";
import IntlTelInput from "react-intl-tel-input";

// import Styles from "./SelectBox.module.scss";

const ContactForm = ({ props }) => {
  const formRef = useRef(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [solutionList, setSolutionList] = useState([]);
  const [countryCode, setCountryCode] = useState("+91");
  const [defaultCountry, setDefaultCountry] = useState(["in"]);
  const solutionRef = useRef(null);
  const router = useRouter();
  const pathname = router.asPath;

  const nameRegExp = /^[^\s].*$/;
  // const phoneRegExp = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
  const phoneRegExp = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const weburlRegex =
    /^(?:(?:https?|ftp):\/\/)?(?:[-a-zA-Z0-9@:%._\+~#=]{2,256}\.)+[a-zA-Z]{2,6}(?::\d{2,5})?(?:\/.*)?$/;

  const handleFocus = () => {
    const inputField = formRef.current.querySelectorAll(
      '.form-control[value=""], #react-select-3-input, #message'
    );

    inputField[0]?.focus();
    const dataerror = formik.errors;
    const keysArray = Object.keys(dataerror);

    if (keysArray.length > 0) {
      const inputField1 = formRef.current.querySelectorAll(
        `.form-control[name="${keysArray[0]}"]`
      );
      inputField1[0]?.focus();
    }
  };

  const handleChange = async (e) => {
    if (e.target.checked === true) {
      formik.setFieldValue("wish_to_receive", 1);
    } else {
      formik.setFieldValue("wish_to_receive", 0);
    }
  };

  // const handlePhone = (status, phoneNumber, country) => {
  //   setCountryCode(country.dialCode);
  //   if (/^\d+$/.test(phoneNumber) || phoneNumber == "") {
  //     formik.setFieldValue("phone_no", phoneNumber);
  //     formik.setFieldTouched("phone_no", true);
  //   }

  //   if (Object.keys(country).length === 0) {
  //     setCountryCode("91");
  //   }
  // };

  const handlePhone = (status, phoneNumber, country) => {
    setCountryCode(country.dialCode);
    if (phoneNumber == "") {
      formik.setValues({
        ...formik.values,
        company_website: "", // Reset job_title
        prefered_solution: "",
        city: "",
        message: "",
        wish_to_receive: "", // Reset business_email
      });
      formik.setTouched({
        ...formik.touched,
        company_website: false, // Clear touched for job_title
        prefered_solution: false,
        city: false,
        message: false,
        wish_to_receive: false, // Clear touched for business_email
      });
      // If phone number is empty, show an error message
      formik.setFieldError("phone_no", "Please enter your mobile number");
      formik.setFieldValue("phone_no", "");
    } else if (/^\d+$/.test(phoneNumber)) {
      // If the phone number is numeric, update the formik values
      if (
        phoneNumber.length < 6 ||
        (phoneNumber.length > 14 && phoneNumber.length > 0)
      ) {
        formik.setValues({
          ...formik.values,
          company_website: "", // Reset job_title
          prefered_solution: "",
          city: "",
          message: "",
          wish_to_receive: "", // Reset business_email
        });
        formik.setTouched({
          ...formik.touched,
          company_website: false, // Clear touched for job_title
          prefered_solution: false,
          city: false,
          message: false,
          wish_to_receive: false, // Clear touched for business_email
        });
      }
      formik.setFieldValue("phone_no", phoneNumber);
      // formik.setFieldTouched("phone_no", true);
    }
    if (Object.keys(country)?.length === 0) {
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
      last_name: "",
      phone_no: "",
      business_email: "",
      job_title: "",
      company_name: "",
      company_website: "",
      city: "",
      prefered_solution: "",
      message: "",
      wish_to_receive: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      // position: Yup.string().required("Position name is required"),
      first_name: Yup.string()
        .required("First Name is required")
        .matches(nameRegExp, "Leading space is not allowed"),
      last_name: Yup.string()
        .required("Last Name is required")
        .matches(nameRegExp, "Leading space is not allowed"),
      phone_no: Yup.string()
        .min(6, "Minimum 6 digits is required")
        .max(14, "Maximum 14 digits is allowed")
        .matches(phoneRegExp, "Please enter a valid Mobile Number")
        .required("Please enter your Mobile Number"),

      // phone_no: Yup.string()
      //   .required("Please enter your mobile number")
      //   .matches(phoneRegExp, "Please enter a valid mobile number")
      //   .max(14, "Mobile number must be less than 14 digits")
      //   .min(10, "Phone number must be 10 digits"),

      business_email: Yup.string()
        .matches(nameRegExp, "Leading space is not allowed")
        .email("Please enter a valid email address")
        .matches(emailRegex, "Please enter a valid email address")
        .required("Email is required"),

      job_title: Yup.string()
        .required("Job Title required")
        .matches(nameRegExp, "Leading space is not allowed"),
      company_name: Yup.string()
        .required("Company Name is required")
        .matches(nameRegExp, "Leading space is not allowed"),
      company_website: Yup.string()
        .matches(nameRegExp, "Leading space is not allowed")
        .url("Please enter a valid Url")
        .matches(weburlRegex, "Please enter a valid Url")
        .required("Company Website is required"),

      city: Yup.string()
        .required("City is required")
        .matches(nameRegExp, "Leading space is not allowed"),
      prefered_solution: Yup.string().required(
        "Preferred Solution is required"
      ),
      message: Yup.string()
        .required("Message is required")
        .matches(nameRegExp, "Leading space is not allowed"),
      // wish_to_receive: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!loading) {
        setLoading(true);
        let obj = {
          first_name: values.first_name,
          last_name: values.last_name,
          phone_no: countryCode + values.phone_no,
          business_email: values.business_email,
          job_title: values.job_title,
          company_name: values.company_name,
          company_website: values.company_website,
          city: values.city,
          prefered_solution: values.prefered_solution,
          message: values.message,
        };
        postContent(obj).then((response) => {
          if (response?.status === 200) {
            solutionRef.current.setValue([], "clear");
            submitForm(resetForm);
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

  useEffect(() => {
    const asPathParts = router.asPath.split("/");
    const lastName = asPathParts[asPathParts.length - 1];
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const capitalizedString = capitalizeFirstLetter(lastName);
    solutionDataList().then((response) => {
      const solutionListData = response?.data;
      const selectedOption = solutionListData?.find((option) => {
        const includes = option.title.includes(capitalizedString.slice(0, 3));
        return includes;
      });
      setSolutionList(solutionListData);

      if (selectedOption) {
        formik.setFieldValue("prefered_solution", selectedOption.id);
      }
    });
    // }, [router.asPath, formik]);
  }, []);

  return (
    <>
      <form
        className={`${Style.form_grp_wrap}`}
        onSubmit={formik.handleSubmit}
        ref={formRef}
      >
        <div className="row">
          <Form.Group className="mb form-group col-lg-6">
            <Form.Control
              type="text"
              placeholder="First Name"
              name="first_name"
              id="first_name"
              // required
              // {...formik.getFieldProps("first_name")}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                // console.log(e, ".........eeeeeeeeeeeee");
                if (e.target.value === "") {
                  formik.setValues({
                    ...formik.values,
                    company_website: "", // Reset job_title
                    prefered_solution: "",
                    city: "",
                    message: "",
                    wish_to_receive: "", // Reset business_email
                  });
                  formik.setTouched({
                    ...formik.touched,
                    company_website: false, // Clear touched for job_title
                    prefered_solution: false,
                    city: false,
                    message: false,
                    wish_to_receive: false, // Clear touched for business_email
                  });
                }
                formik.setFieldValue("first_name", e.target.value);
              }}
            />
            {formik.errors.first_name && formik.touched.first_name ? (
              <small className="error text-danger">
                {formik.errors.first_name}
              </small>
            ) : null}
          </Form.Group>

          <Form.Group className="mb form-group col-lg-6">
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="last_name"
              id="last_name"
              // required
              // {...formik.getFieldProps("last_name")}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                // console.log(e, ".........eeeeeeeeeeeee");
                if (e.target.value === "") {
                  formik.setValues({
                    ...formik.values,
                    company_website: "", // Reset job_title
                    prefered_solution: "",
                    city: "",
                    message: "",
                    wish_to_receive: "", // Reset business_email
                  });
                  formik.setTouched({
                    ...formik.touched,
                    company_website: false, // Clear touched for job_title
                    prefered_solution: false,
                    city: false,
                    message: false,
                    wish_to_receive: false, // Clear touched for business_email
                  });
                }
                formik.setFieldValue("last_name", e.target.value);
              }}
            />
            {formik.errors.last_name && formik.touched.last_name ? (
              <small className="error text-danger">
                {formik.errors.last_name}
              </small>
            ) : null}
          </Form.Group>

          <Form.Group className="mb form-group col-lg-6">
            <IntlTelInput
              onSelectFlag={onSelectFlag}
              numberType=""
              separateDialCode="true"
              placeholder="Mobile Number"
              containerClassName="intl-tel-input w-100"
              inputClassName="form-control"
              preferredCountries={["in"]}
              onPhoneNumberChange={handlePhone}
              maxLength="20"
              value={formik.values.phone_no}
              onPhoneNumberBlur={() => formik.setFieldTouched("phone_no", true)}
              defaultCountry={defaultCountry}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone_no && formik.touched.phone_no ? (
              <small className="error text-danger">
                {formik.errors.phone_no}
              </small>
            ) : null}
          </Form.Group>

          <Form.Group className="mb form-group col-lg-6">
            <Form.Control
              type="text"
              placeholder="Business Email"
              name="business_email"
              id="business_email"
              // required
              // {...formik.getFieldProps("business_email")}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                // console.log(e, ".........eeeeeeeeeeeee");
                if (e.target.value === "") {
                  formik.setValues({
                    ...formik.values,
                    company_website: "", // Reset job_title
                    prefered_solution: "",
                    city: "",
                    message: "",
                    wish_to_receive: "", // Reset business_email
                  });
                  formik.setTouched({
                    ...formik.touched,
                    company_website: false, // Clear touched for job_title
                    prefered_solution: false,
                    city: false,
                    message: false,
                    wish_to_receive: false, // Clear touched for business_email
                  });
                }
                formik.setFieldValue("business_email", e.target.value);
              }}
            />
            {formik.errors.business_email && formik.touched.business_email ? (
              <small className="error text-danger">
                {formik.errors.business_email}
              </small>
            ) : null}
          </Form.Group>
          <Form.Group className="mb form-group col-lg-6">
            <Form.Control
              type="text"
              placeholder="Job Title"
              name="job_title"
              id="job_title"
              // required
              // {...formik.getFieldProps("job_title")}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                // console.log(e, ".........eeeeeeeeeeeee");
                if (e.target.value === "") {
                  formik.setValues({
                    ...formik.values,
                    company_website: "", // Reset job_title
                    prefered_solution: "",
                    city: "",
                    message: "",
                    wish_to_receive: "", // Reset business_email
                  });
                  formik.setTouched({
                    ...formik.touched,
                    company_website: false, // Clear touched for job_title
                    prefered_solution: false,
                    city: false,
                    message: false,
                    wish_to_receive: false, // Clear touched for business_email
                  });
                }
                formik.setFieldValue("job_title", e.target.value);
              }}
            />
            {formik.errors.job_title && formik.touched.job_title ? (
              <small className="error text-danger">
                {formik.errors.job_title}
              </small>
            ) : null}
          </Form.Group>

          <Form.Group className="mb form-group col-lg-6">
            <Form.Control
              type="text"
              placeholder="Company Name"
              name="company_name"
              id="company_name"
              // {...formik.getFieldProps('company_name')}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                // console.log(e, ".........eeeeeeeeeeeee");
                if (e.target.value === "") {
                  formik.setValues({
                    ...formik.values,
                    company_website: "", // Reset job_title
                    prefered_solution: "",
                    city: "",
                    message: "",
                    wish_to_receive: "", // Reset business_email
                  });
                  formik.setTouched({
                    ...formik.touched,
                    company_website: false, // Clear touched for job_title
                    prefered_solution: false,
                    city: false,
                    message: false,
                    wish_to_receive: false, // Clear touched for business_email
                  });
                }
                formik.setFieldValue("company_name", e.target.value);
              }}
            />
            {formik.errors.company_name && formik.touched.company_name ? (
              <small className="error text-danger">
                {formik.errors.company_name}
              </small>
            ) : null}
          </Form.Group>
          {formik.values.first_name &&
            !formik.errors.first_name &&
            formik.values.last_name &&
            !formik.errors.last_name &&
            formik.values.phone_no &&
            !formik.errors.phone_no &&
            formik.values.business_email &&
            !formik.errors.business_email &&
            formik.values.job_title &&
            !formik.errors.job_title &&
            formik.values.company_name &&
            !formik.errors.company_name && (
              <Form.Group className="mb form-group col-lg-6">
                <Form.Control
                  type="text"
                  placeholder="Company Website"
                  name="company_website"
                  id="company_website"
                  // required
                  {...formik.getFieldProps("company_website")}
                />
                {formik.errors.company_website &&
                formik.touched.company_website ? (
                  <small className="error text-danger">
                    {formik.errors.company_website}
                  </small>
                ) : null}
              </Form.Group>
            )}

          {formik.values.first_name &&
            !formik.errors.first_name &&
            formik.values.last_name &&
            !formik.errors.last_name &&
            formik.values.phone_no &&
            !formik.errors.phone_no &&
            formik.values.business_email &&
            !formik.errors.business_email &&
            formik.values.job_title &&
            !formik.errors.job_title &&
            formik.values.company_name &&
            !formik.errors.company_name && (
              <Form.Group className="mb form-group col-lg-6">
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  id="city"
                  // required
                  {...formik.getFieldProps("city")}
                />
                {formik.errors.city && formik.touched.city ? (
                  <small className="error text-danger">
                    {formik.errors.city}
                  </small>
                ) : null}
              </Form.Group>
            )}

          {formik.values.first_name &&
            !formik.errors.first_name &&
            formik.values.last_name &&
            !formik.errors.last_name &&
            formik.values.phone_no &&
            !formik.errors.phone_no &&
            formik.values.business_email &&
            !formik.errors.business_email &&
            formik.values.job_title &&
            !formik.errors.job_title &&
            formik.values.company_name &&
            !formik.errors.company_name && (
              <Form.Group
                className={`mb form-group col-lg-12 ${
                  pathname !== "/book-a-demo"
                    ? Style.notbookdemopage
                    : "cursor-pointer"
                }`}
              >
                {/* <Form.Control type="text" placeholder="Preferred solutions" /> */}
                <Select
                  ref={solutionRef}
                  // id="prefered_solution"
                  name="prefered_solution"
                  // isClearable={true}
                  options={solutionList}
                  value={solutionList?.find(
                    (option) => option.id === formik.values.prefered_solution
                  )}
                  getOptionValue={(option) => option?.id}
                  getOptionLabel={(option) => option?.title}
                  onChange={(selectedOption) => {
                    formik.setFieldValue(
                      "prefered_solution",
                      selectedOption?.id
                    );
                  }}
                  placeholder="Preferred solution"
                  classNamePrefix={"selected"}
                  onBlur={formik.handleBlur}
                  // onBlur={() => {
                  //   formik.handleBlur({
                  //     target: { name: "prefered_solution" },
                  //   });
                  // }}
                  // classNamePrefix={"selected"}
                  isDisabled={pathname !== "/book-a-demo"}

                  // instanceId={useId()}
                />
                {formik.errors.prefered_solution &&
                formik.touched.prefered_solution ? (
                  <small className="error text-danger">
                    {formik.errors.prefered_solution}
                  </small>
                ) : null}
              </Form.Group>
            )}

          {/* {formik.values.first_name && formik.values.last_name && formik.values.phone_no && !formik.errors.phone_no
            && formik.values.business_email && formik.values.job_title && formik.values.company_name && ( */}
          {formik.values.first_name &&
            !formik.errors.first_name &&
            formik.values.last_name &&
            !formik.errors.last_name &&
            formik.values.phone_no &&
            !formik.errors.phone_no &&
            formik.values.business_email &&
            !formik.errors.business_email &&
            formik.values.job_title &&
            !formik.errors.job_title &&
            formik.values.company_name &&
            !formik.errors.company_name && (
              <Form.Group className="mb form-group col-lg-12">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Message"
                  name="message"
                  id="message"
                  {...formik.getFieldProps("message")}
                />
                {formik.errors.message && formik.touched.message ? (
                  <small className="error text-danger">
                    {formik.errors.message}
                  </small>
                ) : null}
              </Form.Group>
            )}
          {formik.values.first_name &&
            !formik.errors.first_name &&
            formik.values.last_name &&
            !formik.errors.last_name &&
            formik.values.phone_no &&
            !formik.errors.phone_no &&
            formik.values.business_email &&
            !formik.errors.business_email &&
            formik.values.job_title &&
            !formik.errors.job_title &&
            formik.values.company_name &&
            !formik.errors.company_name && (
              <Form.Group
                className="checkbox form-group"
                // controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  id="wish_to_receive"
                  name="wish_to_receive"
                  label="By submitting this form, I consent Novac Technology Solutions to use my data for contacting through Call/SMS/Email."
                  className="form-group"
                  onChange={(e) => handleChange(e)}
                  checked={formik.values.wish_to_receive}
                />
                <div>
                  {formik.errors.wish_to_receive &&
                  formik.touched.wish_to_receive ? (
                    <small className="error text-danger">
                      {formik.errors.wish_to_receive}
                    </small>
                  ) : null}
                </div>
              </Form.Group>
            )}

          <div className=" form-group mb-0">
            {/* <Link
              href="/"
              className={`btn  btn-${props?.data?.type} 
                ${props?.data?.type == "statim-inner" && "btn-statim"} 
                ${props?.data?.type == "kazito-inner" && "btn-kazito"} 
                ${props?.data?.type == "ziva-loan" && "btn-axle"}`}
            >
              Submit
            </Link> */}
            <button
              type="submit"
              onClick={handleFocus}
              className={`btn btn-${props?.data?.type} 
              ${props?.data?.type == "statim-inner" && "btn-statim"} 
              ${props?.data?.type == "kazito-inner" && "btn-kazito"} 
              ${props?.data?.type == "ziva-loan" && "btn-axle"} ${
                loading ? "submitting" : ""
              }`}
            >
              Submit
            </button>
          </div>
        </div>
        {formSubmitted && (
          <small className="mt-3 d-block text-success success_message ">
            {/* <Icons icon="checkmark-outline" size={"1rem"} /> */}
            Successfully submitted. We will connect soon!
          </small>
        )}
      </form>
    </>
  );
};

export default ContactForm;
