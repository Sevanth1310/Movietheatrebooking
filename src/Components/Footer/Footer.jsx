import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-200 py-8">
      <div className="container mx-auto w-full h-96 flex justify-center items-center">

        <div className="w-full lg:w-3/4 xl:w-2/3 h-96 bg-white shadow-lg rounded-lg border border-gray-300 flex items-center justify-between p-8">
          <textarea  type="text"
            placeholder="Feedback"
            className="w-1/3 px-4 py-10  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ">
              
          </textarea>
          <button className="text-1.5xl font-bold text-gray-600 bg-customGreen py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300 ">Submit</button>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2470837917904!2d77.5828861749181!3d12.956034987357935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15dd45e0db9b%3A0x519dc22172ae221b!2sUrvashi%20Cinema!5e0!3m2!1sen!2sin!4v1716849801001!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
