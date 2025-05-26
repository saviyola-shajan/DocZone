import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import connectUs from "../assets/images/popup.jpg";
import { RxCross2 } from "react-icons/rx";

function PopUp() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);
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
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Form submitted successfully!");
      setShowPopup(false);
    },
  });

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-16 md:pt-0 z-50 px-4 sm:px-6 lg:px-12">
      <div className="bg-white text-black w-full max-w-6xl rounded-xl shadow-lg p-6 sm:p-8 md:p-10 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-1 right-1 md:top-3 md:right-4 text-2xl font-bold text-gray-700 hover:text-red-500"
        >
          <RxCross2 />
        </button>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={connectUs}
              alt="contact"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
              Connect With Us For More Enquiry
            </h1>
            <form onSubmit={formik.handleSubmit} className="space-y-5 sm:space-y-6">
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

              <div className="flex justify-center sm:justify-start">
                <button
                  type="submit"
                  className="w-3/4 sm:w-1/2 md:w-[40%] bg-[#22EEBF] hover:bg-white hover:border hover:border-[#22EEBF] text-black text-lg md:text-xl font-medium py-2 rounded-full transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
