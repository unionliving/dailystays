'use client';

import React, { useState } from 'react';
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(
    form
    )
    if(form.name?.length === 0 || form.email?.length === 0 || form.phone?.length === 0){
      alert("Fill all the details")
    }
    else{
      e.preventDefault();
      console.log(form);
      // Submit logic (API, email, etc.)
      const emailParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        from_phn: form.phone,
      
      };
      emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          emailParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        )
  
        .then((res) => {
         
          setTimeout(() => window.location.reload(), 5000); // Add a delay before reload to allow the toast to display
        })
        .catch((error) => {
      
          console.error(error);
        });
    }
    

  };

  return (
    <div className="min-h-screen w-full bg-white px-6 md:px-10 py-16 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-[PlayfairDisplay] text-black mb-10 text-center">
        Contact Us
      </h1>

      {/* Form */}
      <div className="w-full max-w-2xl space-y-6">
        {/* First & Last Name */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border  border-gray-200 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone No*"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="How we can help?*"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-3 text-sm h-40 resize-none outline-none focus:ring-1 focus:ring-black"
        />

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full border border-black py-3 text-sm tracking-widest font-medium hover:bg-black hover:text-white transition"
        >
          SEND
        </button>
      </div>

      {/* Footer Note */}
      <p className="mt-16 text-center text-sm text-black max-w-xl">
        If you need immediate help or need access to a property, please call  <a href="tel:7021654226" className="text-black"> <span className="cursor-pointer underline">7021654226</span></a>
      </p>
    </div>
  );
};

export default ContactUs;
