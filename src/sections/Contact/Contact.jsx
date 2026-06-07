import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastId, setToastId] = useState(0);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setToastId((currentId) => currentId + 1);

    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setSubmitted(false), 3500);

    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  const inputFields = [
    { name: "name", type: "text", label: "Your Name", required: true },
    { name: "email", type: "email", label: "Your Email", required: true },
    { name: "subject", type: "text", label: "Subject" },
    { name: "phone", type: "tel", label: "Your Phone (Optional)" },
  ];

  const renderInput = (field) => (
    <fieldset
      key={field.name}
      className="rounded-lg border border-[#b8b8b8]/70 px-3 pb-2 transition-colors duration-300 focus-within:border-blue-400/60"
    >
      <legend className="px-2 text-xs font-medium tracking-wide text-[#b8b8b8]">
        {field.label}
      </legend>
      <input
        type={field.type}
        name={field.name}
        value={formData[field.name]}
        onChange={handleChange}
        required={field.required}
        className="w-full bg-transparent pt-1 text-[#b8b8b8] outline-none"
      />
    </fieldset>
  );

  return (
    <section id="contact" className="section-surface-primary section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
      {submitted && (
        <div
          key={toastId}
          role="status"
          aria-live="polite"
          className="toast-enter fixed top-24 right-4 z-9999 w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-lg 
                     border border-blue-400/60/40 bg-gray-900 text-[#b8b8b8] shadow-2xl shadow-black/30"
        >
          <div className="flex items-start gap-3 px-4 py-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
              <FiCheckCircle className="text-xl" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-base font-semibold text-white">Message sent</p>
              <p className="mt-1 text-sm leading-relaxed text-[#b8b8b8]">
                Thanks for reaching out. I will get back to you soon.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              aria-label="Close notification"
              className="rounded-md p-1 text-[#b8b8b8] transition hover:bg-white/10 hover:text-white"
            >
              <FiX className="text-lg" />
            </button>
          </div>
          <div className="h-1 bg-gray-800">
            <div className="toast-progress h-full bg-blue-500"></div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <ContactLeft />

        <form
          onSubmit={handleSubmit}
          className="bg-[#111827]/85 border border-white/5 p-4 sm:p-6 rounded-lg shadow-lg shadow-black/20 space-y-5 w-full"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            {inputFields.slice(0, 2).map(renderInput)}
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {inputFields.slice(2, 4).map(renderInput)}
          </div>

          <fieldset className="rounded-lg border border-[#b8b8b8]/70 px-3 pb-2 transition-colors duration-300 focus-within:border-blue-400/60">
            <legend className="px-2 text-xs font-medium tracking-wide text-[#b8b8b8]">
              Your Message
            </legend>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full resize-none bg-transparent pt-1 text-[#b8b8b8] outline-none"
              required
            ></textarea>
          </fieldset>

          <button
            type="submit"
            className="relative overflow-hidden border-2 border-blue-400/60 text-white px-6 py-3 rounded-lg
                       font-medium transition-all duration-500 group flex items-center gap-2 mx-auto"
          >
            <span className="relative z-10">Send Message -&gt;</span>
            <span
              className="absolute top-0 left-0 w-full h-full bg-accent-gradient origin-bottom-left 
                         -rotate-90 group-hover:rotate-0 transition-transform duration-500
                         ease-in-out z-0"
            ></span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
