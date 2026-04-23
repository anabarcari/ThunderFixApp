import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_y61nyqi",
        "template_w7411k6",
        {
          from_name: form.name,
          to_name: "Thunder Fix Auto Hail Repair",
          from_email: form.email,
          to_email: "20rcauto21@gmail.com",
          phone: form.phone,
          message: form.message,
        },
        "oFuV_6_VBLHga1RUA"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will contact you within 24 hours.");
          setForm({ name: "", email: "", phone: "", message: "" });
          setErrors({ email: "" });
        },
        () => {
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex justify-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full max-w-2xl p-8 rounded-2xl"
        style={{
          background: "rgba(15,15,15,0.6)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 0 25px rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h2
          className={`${styles.sectionHeadText} text-center mb-8`}
          style={{
            textShadow:
              "0 0 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.95)",
          }}
        >
          Contact Us
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-black/60 border border-white/10 text-white px-6 py-4 rounded-lg outline-none focus:border-white/30 transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Confirm Email"
            className={`bg-black/60 border border-white/10 text-white px-6 py-4 rounded-lg outline-none focus:border-white/30 transition ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email}
            </span>
          )}

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="bg-black/60 border border-white/10 text-white px-6 py-4 rounded-lg outline-none focus:border-white/30 transition"
          />

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-black/60 border border-white/10 text-white px-6 py-4 rounded-lg outline-none focus:border-white/30 transition"
          />

          <button
            type="submit"
            className="mt-4 py-3 rounded-lg font-semibold transition"
            style={{
              background: "white",
              color: "black",
              boxShadow: "0 0 15px rgba(255,255,255,0.2)",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");