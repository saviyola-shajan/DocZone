import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const getinTouch =
  "https://wpcms.doczonedubai.com/wp-content/uploads/2025/05/getintouchimg.png";

function GetIntouch() {
  const form = useRef();
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      location: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is required"),
      mobile: Yup.string()
        .matches(/^[0-9]+$/, "Only digits allowed")
        .min(10, "Must be at least 10 digits")
        .required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          "service_x7gyyl8",
          "template_aslz3fx",
          form.current,
          "kDLDQ_xNAdA2eDU9K"
        )
        .then(
          () => {
            setIsSuccess(true);
            setSubmitMessage("Message sent successfully.! We will contact soon.");
            resetForm();
          },
          (error) => {
            console.error("EmailJS Error:", error);
            setIsSuccess(false);
            setSubmitMessage("There was an error submitting the form.! Try once more.");
          }
        );
    },
  });

  return (
    <div className="px-4 py-8 sm:p-12 md:p-16 lg:p-24 min-h-screen bg-[#FFFFFF] flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="w-full lg:w-[40%] mb-8 lg:mb-0">
        <img src={getinTouch} alt="image" className="w-full h-auto" />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-[60%] sm:px-8 lg:px-8">
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#16244F]">
          Contact & Get in touch with us
        </h1>
        <p className="font-normal text-base sm:text-lg md:text-xl text-[#000000] mt-2">
          Reach out to DocZone for expert document clearing and visa services in Dubai —
          quick support, clear guidance, and reliable solutions for all your needs.
        </p>

        <div className="pr-10 py-10">
          <form ref={form} onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Name and Phone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className="w-full p-3 border-[#001C67] border rounded-xl focus:outline-none placeholder-black"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Phone Number*"
                  className="w-full p-3 border-[#001C67] border rounded-xl focus:outline-none placeholder-black"
                  {...formik.getFieldProps("mobile")}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full p-3 border-[#001C67] border rounded-xl focus:outline-none placeholder-black"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full p-3 border-[#001C67] border rounded-xl focus:outline-none placeholder-black"
                {...formik.getFieldProps("location")}
              />
              {formik.touched.location && formik.errors.location && (
                <p className="text-red-500 text-sm">{formik.errors.location}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                className="w-full p-4 border-[#001C67] border rounded-xl focus:outline-none placeholder-black"
                placeholder="Message"
                rows="4"
                {...formik.getFieldProps("message")}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-[#22EEBF] hover:bg-[#ffffff] border border-[#22EEBF] text-[#000000] text-xl sm:text-2xl font-semibold px-8 py-2 rounded-xl"
              >
                Submit
              </button>

              {/* Alert Message */}
              {submitMessage && (
                <p className={`mt-4 text-xl font-medium ${isSuccess ? "text-green-600" : "text-red-600"}`}>
                  {submitMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetIntouch;
