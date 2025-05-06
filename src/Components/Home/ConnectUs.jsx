import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import connectUs from "../../assets/images/connectus.jpg";

function ConnectUs() {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too short!").required("Name is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    // location: Yup.string().required("Location is required"),
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
    },
  });

  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 sm:py-16 md:py-24 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
        <img src={connectUs} alt="contact" className="max-w-full h-auto" />
      </div>
      <div className="w-full lg:w-1/2 px-2 sm:px-6 text-white mt-4 lg:mt-8">
        <h1 className="text-2xl sm:text-3xl font-medium mb-6">
          Connect With Us For More Enquiry
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-8">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              className="bg-[#030612] border-b w-full pb-3 focus:outline-none"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number*"
                className="bg-[#030612] border-b w-full pb-3 focus:outline-none"
                {...formik.getFieldProps("mobile")}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
              )}
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                className="bg-[#030612] border-b w-full pb-3 focus:outline-none"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              className="bg-[#030612] border-b w-full pb-3 focus:outline-none"
              {...formik.getFieldProps("location")}
            />
            {formik.touched.location && formik.errors.location && (
              <p className="text-red-500 text-sm">{formik.errors.location}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              className="bg-[#030612] border-b w-full pb-3 focus:outline-none"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-[60%] sm:w-[40%] bg-[#22EEBF] text-[#000000] text-xl font-medium py-2 rounded-full text-center justify-center items-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConnectUs;
