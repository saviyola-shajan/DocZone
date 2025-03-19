import React from "react";
import Image from "../../assets/images/whatwedo image.png"
import { GoArrowUpRight } from "react-icons/go";
function Whatwedo() {
  return (
    <div className="min-h-screen px-24 py-20">
        <div className="flex">
      <div className="w-1/2 text-[#FFFFFF]">
        <h1 className="font-normal text-7xl" >What We do</h1>
        <h3 className="font-normal text-5xl mt-2 tracking-wide ml-2">For You</h3>
      </div>
      <div className="w-1/2 text-[#FFFFFF]">
        <p className="font-light text-xl text-justify">
          From gathering and preparing your documents to ensuring secure
          verification, seamless government submissions, and timely delivery, we
          handle every step of the process with expertise and efficiency, making
          document clearing and visa services hassle-free for you.
        </p>
      </div>
      </div>
      <div className="flex pt-20 pl-16">
      <div className="space-y-6">
        {[
          { num: "01", title: "Prepare", desc: "We help gather and organize your documents." },
          { num: "02", title: "Verify", desc: "Multi-step checks ensure accuracy and security." },
          { num: "03", title: "Submit", desc: "Experts handle government submissions for you." }
        ].map((step, index) => (
          <div key={index} className="bg-[#5A89FD26] px-4 py-2 rounded-2xl w-96 h-36 text-white flex items-center">
            <div className="text-5xl font-normal">{step.num}</div>
            <div className="ml-5">
              <h3 className="font-medium text-3xl mb-2">{step.title}</h3>
              <p className="text-lg font-light">{step.desc}</p>
            </div>
            <a href="/contact" className="bg-[#FFFFFF] p-2 rounded-full"><span><GoArrowUpRight className="text-[#000000] w-6 h-6"/></span></a>
          </div>
        ))}
      </div>
      <div className="w-72 h-[480px] mx-6">
        <img
          src={Image}
          alt="City"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <div className="bg-[#5A89FD26] p-4 rounded-lg w-72 h-56 text-white flex items-center relative">
          <div className="text-5xl font-normal">04</div>
          <div className="ml-5">
            <h3 className="font-medium text-3xl mb-2">Process</h3>
            <p className="text-lg font-light">Efficient and timely handling of approvals.</p>
          </div>
          <a href="/contact" className="bg-[#FFFFFF] p-2 rounded-full"><span><GoArrowUpRight className="text-[#000000] w-6 h-6"/></span></a>
        </div>

        <div className="bg-[#5A89FD26] p-4 rounded-lg w-72 h-60 text-white flex items-center">
          <div className="text-5xl font-normal">05</div>
          <div className="ml-4">
            <h3 className="font-medium text-3xl mb-2">Deliver</h3>
            <p className="text-lg font-light">Your documents or visas, ready on time.</p>
          </div>
          <a href="/contact" className="bg-[#FFFFFF] p-2 rounded-full"><span><GoArrowUpRight className="text-[#000000] w-6 h-6"/></span></a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Whatwedo;
