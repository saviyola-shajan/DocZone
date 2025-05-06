import React from "react";
import visioimg from "../../assets/images/visionimg.png";
import Mission1 from "../../assets/images/mission1.png";
import Mission2 from "../../assets/images/mission2.png";
import Mission3 from "../../assets/images/mission3.png";

function MissionVision() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-20 bg-[#FFFFFF] min-h-screen">
      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#121212]">
            Vision
          </h1>
          <p className="mt-4 text-[#161616] text-base sm:text-lg font-normal text-justify">
            Doczone Dubai is committed to providing unparalleled document
            clearing and visa services with an unwavering focus on client
            satisfaction. Our mission is to simplify the complexities of
            paperwork and bureaucratic processes, allowing our clients to
            navigate the system with ease and confidence. We are dedicated to
            delivering our services with the highest standards of efficiency,
            accuracy, and professionalism.
          </p>
          <p className="mt-4 text-[#161616] text-base sm:text-lg font-normal text-justify">
            Our goal is to ensure that each client interaction results in a
            successful outcome, thereby building trust and fostering long-term
            relationships. By continuously refining our processes and staying
            ahead of industry trends, we aim to exceed expectations and set new
            benchmarks for excellence in our field.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={visioimg}
            alt="Vision Image"
            className="w-full sm:w-[90%] h-72 sm:h-96 rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
            <div className="rounded-lg overflow-hidden">
              <img
                src={Mission1}
                alt="High Five"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={Mission2}
                  alt="Man Working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={Mission3}
                  alt="City View"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#121212]">
            Mission
          </h1>
          <p className="mt-4 text-[#161616] text-base sm:text-lg font-normal text-justify">
            Our goal is to ensure that each client interaction results in a
            successful outcome, thereby building trust and fostering long-term
            relationships. By continuously refining our processes and staying
            ahead of industry trends, we aim to exceed expectations and set new
            benchmarks for excellence in our field.
          </p>
          <p className="mt-4 text-[#161616] text-base sm:text-lg font-normal text-justify">
            Doczone Dubai is committed to providing unparalleled document
            clearing and visa services with an unwavering focus on client
            satisfaction. Our mission is to simplify the complexities of
            paperwork and bureaucratic processes, allowing our clients to
            navigate the system with ease and confidence. We are dedicated to
            delivering our services with the highest standards of efficiency,
            accuracy, and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
