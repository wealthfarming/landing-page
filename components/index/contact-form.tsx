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
      className="flex flex-col gap-[20px] h-[408px] border border-[var(--other-border)] p-9 text-sm bg-[var(--canvas-bg)]  w-[400px] max-md:w-full"
    >
      <div className="w-full flex flex-col gap-[10px]">
        <label htmlFor="name" className="">
          Họ tên
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nhập tên của bạn"
          className="gap-1 self-stretch p-4 w-full bg-[var(--base-bg)] border border-[var(--other-border)] border-solid h-[48px]"
        />
      </div>
      <div className="w-full flex flex-col gap-[10px]">
        <label htmlFor="phone" className="">
          Email
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Nhập email của bạn"
          className="gap-1 self-stretch p-4 w-full bg-[var(--base-bg)] border border-[var(--other-border)] border-solid h-[48px]"
        />
      </div>
      <div className="w-full flex flex-col gap-[10px]">
        <label htmlFor="email" className="!text-[#000000] re-small-mobile-index">
          SDT
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Nhập SDT của bạn (Zalo / Tele)"
          className="gap-1 self-stretch p-4 w-full bg-[var(--base-bg)] border border-[var(--other-border)] border-solid h-[48px]"
        />
      </div>
      <button
        type="submit"
        className="self-stretch px-4 w-full font-medium tracking-wider bg-[linear-gradient(90deg,_var(--primary)_0%,_var(--primary-gradient)_100%)] border border-[var(--primary-border)] min-h-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] button"
      >
        GỬI THÔNG TIN
      </button>
    </form>
  );
};

export default ContactForm;
