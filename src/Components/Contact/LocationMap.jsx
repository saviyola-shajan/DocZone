import React from 'react'

function LocationMap() {
  return (
    <div className='bg-white py-10'>
    <div className="w-[80%] h-[60vh] rounded-lg overflow-hidden shadow-md mx-auto mb-10 bg-white">
    <iframe
      className="w-full h-full border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.967291984513!2d55.314013499999994!3d25.2716857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e53acc655b%3A0xf840c9fe39a3c218!2sDoc%20Zone%20Documents%20Clearing%20Services%20LLC%20-%20Deira!5e0!3m2!1sen!2sin!4v1747373482846!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div> 
  </div> )
}

export default LocationMap