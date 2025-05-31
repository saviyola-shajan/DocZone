import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RxCross2 } from "react-icons/rx";
import emailjs from "@emailjs/browser";

const connectUs =
  "https://wpcms.doczonedubai.com/wp-content/uploads/2025/05/popup-low-scaled.jpg";

function PopUp() {
  const [showPopup, setShowPopup] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too short!").required("Name is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
      location: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm("service_x7gyyl8", "template_aslz3fx", form.current, {
          publicKey: "kDLDQ_xNAdA2eDU9K",
        })
        .then(
          () => {
            setIsSuccess(true);
            setSubmitMessage("Message sent successfully...!");
            resetForm();
          },
          (error) => {
            console.error("EmailJS Error:", error);
            setIsSuccess(false);
            setSubmitMessage("Failed to send message,! Try again.");
          }
        );
    },
  });

  if (!showPopup) return null;

  return (
    <div className="hidded md:fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-white text-black w-full max-w-6xl h-[70vh] rounded-xl shadow-lg p-4 sm:p-6 md:p-6 relative overflow-y-auto">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-red-500"
        >
          <RxCross2 />
        </button>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 h-full">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={connectUs}
              alt="contact"
              className="rounded-xl w-full object-cover h-[66vh]"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 overflow-y-auto pr-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
              Connect With Us For More Enquiry
            </h1>
            <form ref={form} onSubmit={formik.handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  className="bg-white border-b border-black w-full pb-2 focus:outline-none"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-600 text-sm">{formik.errors.name}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number*"
                    className="bg-white border-b border-black w-full pb-2 focus:outline-none"
                    {...formik.getFieldProps("mobile")}
                  />
                  {formik.touched.mobile && formik.errors.mobile && (
                    <p className="text-red-600 text-sm">{formik.errors.mobile}</p>
                  )}
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    className="bg-white border-b border-black w-full pb-2 focus:outline-none"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600 text-sm">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  className="bg-white border-b border-black w-full pb-2 focus:outline-none"
                  {...formik.getFieldProps("location")}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  className="bg-white border-b border-black w-full pb-2 focus:outline-none"
                  {...formik.getFieldProps("message")}
                ></textarea>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <button
                  type="submit"
                  className="w-3/4 sm:w-1/2 md:w-[40%] bg-[#22EEBF] hover:bg-white hover:border hover:border-[#22EEBF] text-black text-lg md:text-xl font-medium py-2 rounded-full transition-all"
                >
                  Submit
                </button>
                {submitMessage && (
                  <p
                    className={`mt-3 text-xl font-medium ${
                      isSuccess ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
