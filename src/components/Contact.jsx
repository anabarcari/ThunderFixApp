import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(form.email)) {
      setErrors({
        email: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_y61nyqi', // Replace with your service ID
        'template_w7411k6', // Replace with your template ID
        {
          from_name: form.name,
          to_name: "Thunder Fix Auto Hail Repair",
          from_email: form.email,
          to_email: "20rcauto21@gmail.com",
          message: form.message,
        },
        'oFuV_6_VBLHga1RUA' // Replace with your public key
      )
      .then(
        (response) => {
          setLoading(false);
          console.log('EmailJS Response:', response);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
          setErrors({
            email: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl  shadow-neon'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Please, enter your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Confirm email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Please, re-enter your email"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${errors.email && 'border-red-500'}`}
            />
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Please, leave us a message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    
    </div>
     );
  
};

export default SectionWrapper(Contact, "contact");
