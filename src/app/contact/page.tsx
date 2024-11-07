"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-12 px-5 md:py-16">
      <h2 className="text-4xl text-center mb-8 text-orange-500">Contact Us</h2>
      <form
        className="max-w-lg mx-auto bg-[#312d2d] p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="name" className="block mb-1 text-black font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md  text-gray-800 "
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-1 text-black font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block mb-1 text-black font-bold">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-gray-800 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-black font-semibold rounded-md transition-colors duration-300 hover:bg-gray-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;