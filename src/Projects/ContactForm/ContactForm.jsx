import React, { useState } from 'react';

const ContactForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted Successfully:", userDetails);
      setUserDetails({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col p-4 m-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              value={userDetails.name} 
              onChange={handleChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="John Doe" 
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              
              value={userDetails.email} 
              onChange={handleChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="john.doe@example.com" 
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea 
              id="message" 
              value={userDetails.message} 
              onChange={handleChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Your message here..." 
              rows={4} 
              required
            />
          </div>

          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
