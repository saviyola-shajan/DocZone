import whatsappIcon from "../assets/images/social.png";
import callIcon from "../assets/images/call.png";
import instaIcon from "../assets/images/instagram.png";

function Icons() {
  return (
    <div className="fixed bottom-6 right-6 sm:bottom-12 sm:right-8 md:bottom-16 md:right-10 lg:right-12 z-50 flex flex-col items-end space-y-3">
       <a href="" target="_blank" rel="noopener noreferrer">
        <img 
          src={instaIcon} 
          alt="WhatsApp" 
          className="w-8 h-8 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-300"
        />
      </a>
      {/* WhatsApp Icon */}
      <a href="https://wa.me/91" target="_blank" rel="noopener noreferrer">
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-8 h-8 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-300"
        />
      </a>

      {/* Call Icon */}
      <a href="tel:+919562978418" target="_blank" rel="noopener noreferrer">
        <img 
          src={callIcon} 
          alt="Call" 
          className="w-8 h-8 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
}

export default Icons;
