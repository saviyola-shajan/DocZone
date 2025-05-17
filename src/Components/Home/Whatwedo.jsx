import React from "react";
import Image from "../../assets/images/PROCESS.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
const steps = [
  {
    num: "01",
    title: "Prepare",
    desc: "We help gather and organize your documents.",
  },
  {
    num: "02",
    title: "Verify",
    desc: "Multi-step checks ensure accuracy and security.",
  },
  {
    num: "03",
    title: "Submit",
    desc: "Experts handle government submissions for you.",
  },
];

const flowingCard = {
  hidden: { opacity: 0, backgroundPosition: "200% center" },
  visible: (i) => ({
    opacity: 1,
    backgroundPosition: "0% center",
    transition: {
      opacity: { duration: 0.6, delay: i * 0.3 },
      backgroundPosition: { duration: 1.2, delay: i * 0.3, ease: "easeInOut" },
    },
  }),
};

function Whatwedo() {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-10 md:py-20">
      {/* Top heading & paragraph */}
      <div className="flex flex-col md:flex-row gap-10 text-[#FFFFFF]">
        <div className="w-full md:w-1/2">
          <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            What We do
          </h1>
          <h3 className="font-normal text-3xl sm:text-4xl md:text-5xl mt-2 tracking-wide ml-1 sm:ml-2">
            For You
          </h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="font-light text-base sm:text-lg md:text-xl text-justify">
            From gathering and preparing your documents to ensuring secure
            verification, seamless government submissions, and timely delivery,
            we handle every step of the process with expertise and efficiency,
            making document clearing and visa services hassle-free for you.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pt-12 md:pt-20 gap-10 lg:pl-16">
        <motion.div
          className="space-y-6 w-full lg:w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={flowingCard}
              className={`px-4 py-2 rounded-2xl w-full sm:w-96 min-h-[140px]
        text-white flex items-center justify-between shadow
        bg-gradient-to-r from-[#003D3B] via-[#00796B] to-[#003D3B]
        bg-[length:200%_100%] bg-[position:200%_center] transition-all duration-1000`}
            >
              <div className="flex items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-normal">
                  {step.num}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="bg-[#22EEBF] hover:bg-white p-2 rounded-full shrink-0 ml-4"
              >
                <GoArrowUpRight className="text-black w-6 h-6" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto">
          <div className="hidden md:block w-full lg:w-72 h-auto sm:h-[480px]">
            <img
              src={Image}
              alt="City"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <motion.div
            className="space-y-4 w-full lg:w-96"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              custom={3}
              variants={flowingCard}
              className="p-6 rounded-2xl w-full h-auto md:min-h-[200px] text-white flex items-center justify-between
               bg-gradient-to-r from-[#003D3B] via-[#00796B] to-[#003D3B]
               bg-[length:200%_100%] bg-[position:200%_center] transition-all duration-1000"
            >
              <div className="flex items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-normal">
                  04
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-xl sm:text-2xl md:text-3xl mb-1">
                    Process
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-light">
                    Efficient and timely handling of approvals.
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="bg-[#22EEBF] hover:bg-white p-2 rounded-full ml-4"
              >
                <GoArrowUpRight className="text-black w-6 h-6" />
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={flowingCard}
              className="p-6 rounded-2xl w-full h-auto md:min-h-[220px] text-white flex items-center justify-between
               bg-gradient-to-r from-[#003D3B] via-[#00796B] to-[#003D3B]
               bg-[length:200%_100%] bg-[position:200%_center] transition-all duration-1000"
            >
              <div className="flex items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-normal">
                  05
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-xl sm:text-2xl md:text-3xl mb-1">
                    Deliver
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-light">
                    Your documents or visas, ready on time.
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="bg-[#22EEBF] hover:bg-white p-2 rounded-full ml-4"
              >
                <GoArrowUpRight className="text-black w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;
