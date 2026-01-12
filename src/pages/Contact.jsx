import React, { useState } from "react";
import { useWhatsAppNumber } from "../WhatsAppNumberContext";
import { useGlobalContext } from '../GlobalContext'

export default function Contact() {
  const { locale, phoneNumbers } = useGlobalContext()
  const whatsappNumber = useWhatsAppNumber();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const phoneCallNumber = phoneNumbers?.find(phone => phone.name === "Appel")
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-gray-100 py-12 px-4">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-0 md:p-0 flex flex-col md:flex-row gap-8">
        {/* Info Section */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800" data-aos="fade-right" data-aos-duration="700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6" data-aos="fade-up" data-aos-duration="700">
            {locale.contact_title}
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
            {locale.contact_intro}
          </p>
          <div className="space-y-3 mb-6">
            <div data-aos="fade-up" data-aos-delay="200"><strong className="text-secondary-light dark:text-secondary-dark">{locale.contact_email}</strong> <a href="mailto:ferdmbonimpa@gmail.com" className="text-orange-500">ferdmbonimpa@gmail.com</a></div>
            <div data-aos="fade-up" data-aos-delay="250"><strong className="text-secondary-light dark:text-secondary-dark">{locale.contact_phone}</strong> <a href={`tel:${phoneCallNumber?.phone}`} className="text-orange-500">+{phoneCallNumber?.phone}</a></div>
            <div data-aos="fade-up" data-aos-delay="300"><strong className="text-secondary-light dark:text-secondary-dark">{locale.contact_address}</strong> <span className="text-gray-600 dark:text-white">123 Ferdinand Global St, City, Country</span></div>
            <div data-aos="fade-up" data-aos-delay="350"><strong className="text-secondary-light dark:text-secondary-dark">{locale.contact_hours}</strong> <span className="text-gray-600 dark:text-white">{locale.contact_hours_value}</span></div>
            <div data-aos="fade-up" data-aos-delay="400"><strong className="text-secondary-light dark:text-secondary-dark">{locale.contact_whatsapp}</strong> <a href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`} className="text-orange-500">{locale.contact_chat_whatsapp}</a></div>
            <div data-aos="fade-up" data-aos-delay="450"><strong className="text-secondary-light dark:text-secondary-dark">{locale.contact_social}</strong> <a href="#" className="text-orange-500">Facebook</a> | <a href="#" className="text-orange-500">Twitter</a> | <a href="#" className="text-orange-500">Instagram</a></div>
          </div>
        </div>
        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12" data-aos="fade-left" data-aos-duration="700">
          {submitted ? (
            <div className="text-center text-green-600 dark:text-green-400 text-lg font-semibold" data-aos="fade-up" data-aos-duration="700">
              {locale.contact_thanks}
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="700">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={locale.contact_input_name}
                required
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                data-aos="fade-up" data-aos-delay="100"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={locale.contact_input_email}
                required
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                data-aos="fade-up" data-aos-delay="150"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={locale.contact_input_phone}
                required
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                data-aos="fade-up" data-aos-delay="200"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder={locale.contact_input_subject}
                required
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                data-aos="fade-up" data-aos-delay="250"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={locale.contact_input_message}
                required
                rows={5}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                data-aos="fade-up" data-aos-delay="300"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                data-aos="zoom-in" data-aos-delay="350"
              >
                {locale.contact_btn_send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
