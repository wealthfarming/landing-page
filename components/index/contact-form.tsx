"use client";

import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { API_URL } from "@/lib/config";
import { toast } from "sonner";
import ButtonPrimary from "@/components/custom-button/button-primary";

interface ErrorResponse {
  errors?: Array<{
    name: string;
    data: {
      collection: string;
      errors: Array<{
        field: string;
        message: string;
      }>;
    };
    message: string;
  }>;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      toast.success(`${t('submit_contact')}`)
      setFormData({ fullName: "", phoneNumber: "", email: "" });
    } catch (error) {
      // Ép kiểu error thành AxiosError với ErrorResponse
      const axiosError = error as AxiosError<ErrorResponse>;
      console.error(
        "Error submitting form:",
        axiosError.response?.data || axiosError.message || "An unexpected error occurred"
      );

      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data;

        if (errorData.errors && Array.isArray(errorData.errors)) {
          const error = errorData.errors[0];
          if (error.message === "The following field is invalid: email") {
            toast.error(t("email_invalid"));
            return;
          }
        } 
      }
      toast.error(t("submit_error"));
    }
  };

  const { t } = useTranslation();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[20px] h-[408px] border border-[var(--other-border)] p-9 text-sm bg-[var(--canvas-bg)] w-[400px] max-md:w-full"
    >
      <div className="w-full flex flex-col gap-[10px]">
        <label htmlFor="fullName" className="">
          {t('fullname')}
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder={t("enter_fullname")}
          className="gap-1 self-stretch p-4 w-full bg-[var(--base-bg)] border border-[var(--other-border)] border-solid h-[48px]"
        />
      </div>
      <div className="w-full flex flex-col gap-[10px]">
        <label htmlFor="phoneNumber" className="">
          {t("number")}
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder={t("enter_number")}
          className="gap-1 self-stretch p-4 w-full bg-[var(--base-bg)] border border-[var(--other-border)] border-solid h-[48px]"
        />
      </div>
      <div className="w-full flex flex-col gap-[10px]">
        <label htmlFor="email" className="!text-[#000000] re-small-mobile-index">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("enter_email")}
          className="gap-1 self-stretch p-4 w-full bg-[var(--base-bg)] border border-[var(--other-border)] border-solid h-[48px]"
        />
      </div>
      <ButtonPrimary
        type="submit"
        className="self-stretch px-4 w-full font-medium tracking-wider bg-[linear-gradient(90deg,_var(--primary)_0%,_var(--primary-gradient)_100%)] border border-[var(--primary-border)] min-h-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] button"
      >
        {t("submit_information")}
      </ButtonPrimary>
    </form>
  );
};

export default ContactForm;