import React from "react";
import getinTouch from "../../assets/images/getintouchimg.png";
import { useFormik } from "formik";
import * as Yup from "yup";

function GetIntouch() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Only digits allowed")
        .min(10, "Must be at least 10 digits")
        .required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="p-24 min-h-screen bg-[#FFFFFF] flex">
      <div className="w-[40%]">
        <img src={getinTouch} alt="image" />
      </div>
      <div className="w-[60%] px-8">
        <h1 className="font-medium text-5xl text-[#16244F]">Contact & Get in touch with us</h1>
        <p className="font-normal text-lg text-[#000000] mt-2">
          A document clearing and visa services company simplifies complex
          administrative processes for individuals and businesses.{" "}
        </p>
        <div className="mx-auto pr-10 py-10">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Name and Phone in One Line */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 border-[#001C67] border rounded-xl focus:outline-none placeholder-black"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>

              <div className="w-1/2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 border-[#001C67] border rounded-xl focus:outline-none placeholder-black"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border-[#001C67] border rounded-xl focus:outline-none placeholder-black"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            {/* Message Field */}
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

            <button
              type="submit"
              className="bg-[#41BEA1] text-[#000000] text-2xl font-semibold px-8 py-2 rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetIntouch;
