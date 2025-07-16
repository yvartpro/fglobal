import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-gray-100 py-12 px-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Us</h2>
        {submitted ? (
          <div className="text-center text-green-600 dark:text-green-400">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
