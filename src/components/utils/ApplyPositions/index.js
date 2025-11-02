import Style from "./ApplyPosition.module.scss";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState, useId, useEffect, useRef } from "react";
import Select from "react-select";
import { postContent } from "./api";
import IntlTelInput from "react-intl-tel-input";
import { useRouter } from "next/router";
// import Styles from "./SelectBox.module.scss";

const ApplyPosition = ({ props }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [placeholder, setPlaceholder] = useState(["Upload Resume"]);
  const [countryCode, setCountryCode] = useState("+91");
  const [defaultCountry, setDefaultCountry] = useState(["in"]);
  const [positionName, setPositionName] = useState("");
  const [files, setFiles] = useState([]);
  const fileData = useRef();
  const router = useRouter();
  const fileRef = useRef();

  const [isFileUploaded, setIsFileUploaded] = useState(false);

  useEffect(() => {
    const asPathParts = router.asPath.split("/");
    const lastName = asPathParts[asPathParts.length - 1];
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const capitalizedString = capitalizeFirstLetter(lastName);
    const finalPosition = capitalizedString.replace(/-/g, " ").trim();
    setPositionName(finalPosition);
  }, [router.asPath]);

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
  // const handleFileInputChange = (event, index) => {
  //   const newFiles = [...files];
  //   newFiles[index] = event.target.files[0];
  //   setFiles(newFiles);
  //   setPlaceholder((prev) => {
  //     const newPlaceholder = [...prev];
  //     newPlaceholder[index] = event?.target.files[0]?.name ?? "Upload Resume";
  //     return newPlaceholder;
  //   });
  //   setIsFileUploaded(!!event.target.files[0]);
  // };

  const handleFileInputChange = (event, index) => {
    const selectedFile = event?.target?.files[0];

    if (selectedFile) {
      formik.setFieldValue("document", selectedFile);
      const newFiles = [...files];
      newFiles[index] = selectedFile;
      setFiles(newFiles);
      setPlaceholder((prev) => {
        const newPlaceholder = [...prev];
        newPlaceholder[index] = selectedFile.name;
        return newPlaceholder;
      });
    } else {
      const previousFile = files[index];
      formik.setFieldValue("document", previousFile);
      const newFiles = [...files];
      newFiles[index] = previousFile;
      setFiles(newFiles);
      setPlaceholder((prev) => {
        const newPlaceholder = [...prev];
        newPlaceholder[index] = previousFile.name;
        return newPlaceholder;
      });
    }
  };

  const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const phoneRegExp = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const weburlRegex =
    /^(?:(?:https?|ftp):\/\/)?(?:[-a-zA-Z0-9@:%._\+~#=]{2,256}\.)+[a-zA-Z]{2,6}(?::\d{2,5})?(?:\/.*)?$/;

  const handleChange = async (e) => {
    if (e.target.checked === true) {
      formik.setFieldValue("wish_to_receive", 1);
    } else {
      formik.setFieldValue("wish_to_receive", 0);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_no: "",
      experience: "",
      position: positionName,
      website: "",
      resume: "",
      cover_letter: "",
      wish_to_receive: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(nameRegExp, "Leading space is not allowed"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .matches(emailRegex, "Please enter a valid email address")
        .required("Email is required"),
      phone_no: Yup.string()
        .matches(phoneRegExp, "Please enter a valid mobile number")
        .required("Please enter your phone number")
        .min(6, "Phone number must be greater than 6 digits ")
        .test(
          "max-digits",
          "Phone number must be less than 14 digits",
          (value) => {
            const digitsOnly = value.replace(/\D/g, ""); // Remove non-digit characters
            return digitsOnly.length < 13;
          }
        ),
      website: Yup.string()
        .url("Please enter a valid Url")
        .matches(weburlRegex, "Please enter a valid Url")
        .notRequired(),

      experience: Yup.string()
        .required("Experience is required")
        .max(2, "experience must be at most 2 digits")
        .matches(/^(0*[1-9]\d*|0+)$/, "Please enter a positive number"),
      // resume: Yup.string()
      // .required("Resume is required")
      resume: Yup.mixed()
        .required("File is required") // Ensure the file is required
        .test("fileType", "Unsupported File Format", (value) => {
          // Perform the file type check
          if (value) {
            // If a value exists (non-null), check the file type
            return (
              value.type === "application/pdf" || // Allow PDF documents
              value.type === "application/msword" || // Allow MS Word documents
              value.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // Allow DOCX documents
            );
          } else {
            // If no value is provided (null), consider it valid
            return true;
          }
        }),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!loading) {
        setLoading(true);
        let obj = {
          name: values.name,
          email: values.email,
          phone_no: countryCode + values.phone_no,
          experience: values.experience,
          position: values.position,
          website: values.website,
          resume: values.resume,
          cover_letter: values.cover_letter,
          // check_box: values.check_box
        };
        let formData = new FormData();
        Object.keys(obj).map((key) => {
          formData.append(key, obj[key]);
        });
        postContent(formData).then((response) => {
          if (response?.status === 200) {
            submitForm(resetForm);
            setPlaceholder(["Upload Resume"]);
            fileData.current.value = "";
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
    document.getElementById("resume").value = "";
    setTimeout(() => {
      setFormSubmitted(false);
      setCountryCode("91");
    }, 3000);
  };

  return (
    <>
      <form className={`${Style.form_grp_wrap}`} onSubmit={formik.handleSubmit}>
        <div className="row">
          <Form.Group className="mb form-group col-lg-6">
            <Form.Label>Full Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              id="name"
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name ? (
              <small className="error text-danger">{formik.errors.name}</small>
            ) : null}
          </Form.Group>

          <Form.Group className="mb form-group col-lg-6">
            <Form.Label>Your e-mail*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter e-mail"
              name="email"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? (
              <small className="error text-danger">{formik.errors.email}</small>
            ) : null}
          </Form.Group>

          <Form.Group className="mb form-group col-lg-6">
            <Form.Label>Phone number*</Form.Label>
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

          <Form.Group className="mb form-group col-lg-6">
            <Form.Label>Work experience*</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              name="experience"
              id="experience"
              {...formik.getFieldProps("experience")}
            />
            {formik.errors.experience && formik.touched.experience ? (
              <small className="error text-danger">
                {formik.errors.experience}
              </small>
            ) : null}
          </Form.Group>

          <Form.Group className="mb form-group col-lg-6">
            <Form.Label>Position*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Position"
              name="position"
              id="position"
              disabled
              {...formik.getFieldProps("position")}
            />
          </Form.Group>

          <Form.Group className="mb form-group col-lg-6">
            <Form.Label>Website (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL (Linkedin, Portfolio website)"
              name="website"
              id="website"
              {...formik.getFieldProps("website")}
            />
            {formik.errors.website && formik.touched.website ? (
              <small className="error text-danger">
                {formik.errors.website}
              </small>
            ) : null}
          </Form.Group>

          <Form.Group
            className="mb form-group col-lg-12 upload-form"
            id="resume"
          >
            <div
              className={`file-upload ${isFileUploaded && Style.fileuploaded}`}
            >
              <Form.Control
                type="file"
                placeholder="Upload CV/Resume"
                name="resume"
                id="resume"
                accept=".pdf, .doc, .docx"
                onChange={(event) => {
                  handleFileInputChange(event, 0),
                    formik.setFieldValue("resume", event?.target?.files[0]);
                }}
                ref={fileData}
              />
              <div className="d-flex align-items-center">
                {/* <Icons icon="attach" size={25} className="me-2"></Icons> */}
                <div>
                  <Form.Label className="fs-16 m-0">
                    <span>
                      {placeholder[0] === "Upload Resume" ? (
                        <>{placeholder[0]}</>
                      ) : placeholder[0]?.length > 25 ? (
                        placeholder[0]?.slice(0, 22) +
                        "..." +
                        placeholder[0]?.slice(-3)
                      ) : (
                        placeholder[0]
                      )}
                    </span>
                  </Form.Label>
                </div>
              </div>
            </div>
            <div className={`fs-14 ${Style.file_input_note}`}>
              (Pdf,doc,docx)
            </div>
            {formik.errors.resume && formik.touched.resume ? (
              <small className="error text-danger">
                {formik.errors.resume}
              </small>
            ) : null}
          </Form.Group>

          <Form.Group className="mb form-group col-lg-12">
            <Form.Label>Cover Letter (optional) </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Cover Letter (optional) "
              name="cover_letter"
              id="cover_letter"
              {...formik.getFieldProps("cover_letter")}
            />
            {formik.errors.cover_letter && formik.touched.cover_letter ? (
              <small className="error text-danger">
                {formik.errors.cover_letter}
              </small>
            ) : null}
          </Form.Group>

          <Form.Group
            className="checkbox"
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
            {/* <div>
              {formik.errors.wish_to_receive &&
              formik.touched.wish_to_receive ? (
                <small className="error text-danger">
                  {formik.errors.wish_to_receive}
                </small>
              ) : null}
            </div> */}
          </Form.Group>

          <div className=" form-group mb-0 mt-3">
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
              className={`btn btn-gradient  ${loading ? "submitting" : ""}`}
            >
              Submit
            </button>
          </div>
        </div>
        {formSubmitted && (
          <small className="mt-1 text-success success_message d-flex align-items-center">
            {/* <Icons icon="checkmark-outline" size={"1rem"} /> */}
            Succussfully submitted. We will connect soon!
          </small>
        )}
      </form>
    </>
  );
};

export default ApplyPosition;
