const whatsappIcon = "https://wpcms.doczonedubai.com/wp-content/uploads/2025/05/social.png";
const callIcon = "https://wpcms.doczonedubai.com/wp-content/uploads/2025/05/call.png";
const instaIcon = "https://wpcms.doczonedubai.com/wp-content/uploads/2025/05/instagram.png";

function Icons() {
  return (
    <div className="fixed bottom-6 right-6 sm:bottom-12 sm:right-8 md:bottom-16 md:right-10 lg:right-12 z-50 flex flex-col items-end space-y-3">
       <a href="https://www.instagram.com/doczone.dubai?igsh=NHR6Z2V0bXczanBs" target="_blank" rel="noopener noreferrer">
        <img 
          src={instaIcon} 
          alt="WhatsApp" 
          className="w-8 h-8 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-300"
        />
      </a>
      {/* WhatsApp Icon */}
      <a href="https://wa.me/+971545840594" target="_blank" rel="noopener noreferrer">
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-8 h-8 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-300"
        />
      </a>

      {/* Call Icon */}
      <a href="tel:+97143302526" target="_blank" rel="noopener noreferrer">
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
