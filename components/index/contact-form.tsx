"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 text-sm bg-white rounded-lg min-w-60 shadow-[0px_4px_32px_rgba(0,0,0,0.06)] w-[297px]"
    >
      <div className="w-full">
        <label htmlFor="name" className="text-black">
          Họ tên
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nhập tên của bạn"
          className="gap-1 self-stretch p-4 mt-2 w-full bg-gray-100 border border-gray-200 border-solid min-h-12 text-slate-500"
        />
      </div>
      <div className="mt-6 w-full">
        <label htmlFor="phone" className="text-black">
          SDT
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Nhập SDT của bạn"
          className="gap-1 self-stretch p-4 mt-2 w-full bg-gray-100 border border-gray-200 border-solid min-h-12 text-slate-500"
        />
      </div>
      <div className="mt-6 w-full">
        <label htmlFor="email" className="text-black">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Nhập SDT của bạn (Zalo / Tele)"
          className="gap-1 self-stretch p-4 mt-2 w-full bg-gray-100 border border-gray-200 border-solid min-h-12 text-slate-500"
        />
      </div>
      <button
        type="submit"
        className="self-stretch px-4 mt-6 w-full font-medium tracking-wider bg-orange-300 rounded min-h-10 shadow-[0px_2px_2px_rgba(0,0,0,0.12)] text-zinc-800"
      >
        Gửi thông tin
      </button>
    </form>
  );
};

export default ContactForm;
