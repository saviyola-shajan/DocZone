import React from "react";
import why1 from "../../assets/images/why1.png";
import why2 from "../../assets/images/why2.png";
import why3 from "../../assets/images/why3.png";

const cardData = [
    {
      title: "A Decade of Mastery:",
      content:
        "Our tenure in the document clearing industry has been nothing short of a journey of continuous learning and refinement. Spanning over a decade, this journey has allowed us to not only hone our craft but also to develop a deep understanding of the intricacies involved in document management. We've faced a myriad of challenges, each of which has contributed to our growth and expertise.",
        content2:"Through years of dedicated service, we've cultivated a team of specialists who are well-versed in the latest regulations, industry standards, and best practices. This has equipped us with the seasoned expertise necessary to handle even the most complex document scenarios with precision and finesse. Our team's ability to adapt to changing requirements and navigate through intricate bureaucratic processes is a testament to our commitment to excellence.",
      image: why1
    },
    {
        title: "A Reputation for Dependability:",
        content:
          "At Doczone Dubai, our commitment to reliability is the cornerstone of our service philosophy. Our success stories, which span across numerous satisfied clients and seamlessly cleared documents, serve as a living testament to our unwavering dependability. We take pride in consistently delivering on our promises, ensuring that each client's expectations are not just met, but often exceeded",
          content2:" Our record of document processing excellence is more than just a series of accomplishments; it's a guarantee of the care and precision we invest in every document that crosses our path. We understand the critical importance of your documents and the potential impact they can have on your personal or business endeavors. This understanding fuels our dedication to providing services that are not only efficient but also secure and reliable.",
          image: why2
      },
      {
        title: "Tailored to You:",
        content:
          "In a world where one-size-fits-all solutions often fall short, we at Doczone Dubai champion the power of personalization. We understand that every client, every document, and every visa application comes with its own unique set of circumstances and requirements. This understanding is the driving force behind our commitment to tailor our services to fit you perfectly",
          content2:"  Our team takes the time to listen to your needs, to understand the intricacies of your situation, and to craft a solution that is as unique as you are. We don't believe in a cookie-cutter approach; instead, we focus on delivering a service experience that is customized to your specific goals and challenges. Whether you're an individual seeking visa assistance or a business navigating the complexities of company formation, our personalized approach ensures that you receive the attention and care that your situation demands.",
          image: why3
      },
  ];
function WhyDoczone() {
  return (
<div className="px-24 py-16 min-h-screen bg-[#FFFFFF]">
    <h1 className="text-center text-[#008364] font-semibold text-5xl">Why Select Doczone Dubai for Your</h1>
    <h1 className="text-center text-[#000000] font-semibold text-5xl mt-2">Document Needs?</h1>
  <div className="p-8 space-y-6">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="flex items-center p-6 bg-white shadow-lg rounded-lg  relative"
        >
          {/* Image Section */}
          <div className="w-1/3 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-2/3 pl-6">
            <h2 className="text-xl font-bold text-green-700">{item.title}</h2>
            <p className="mt-2 text-gray-700 text-justify">{item.content}</p>
            <p className="mt-2 text-gray-700 text-justify">{item.content2}</p>

          </div>
        </div>
      ))}
    </div>
</div>
  );
}

export default WhyDoczone;
