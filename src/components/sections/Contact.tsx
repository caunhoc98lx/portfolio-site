import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null,
  });

  useEffect(() => {
    const publicKey = import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const containerVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const itemVariants = {
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
    hidden: { opacity: 0, y: 30 },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("test env", import.meta.env.VITE_USEBASIN_URL);

  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 className="contact-title" variants={itemVariants} custom={0}>
        What&apos;s Next?
      </motion.h2>
      <motion.h2 className="contact-sub-title" variants={itemVariants} custom={1}>
        Get In Touch
      </motion.h2>
      <motion.p className="contact-text" variants={itemVariants} custom={2}>
        I&apos;m always looking for new opportunities, and my inbox is always open. Whether you have
        a question or just want to say hi, I&apos;ll try my best to get back to you!
      </motion.p>

      <motion.form
        action="https://usebasin.com/f/b1b0e89a9ba4"
        method="POST"
        className="contact-form"
        variants={itemVariants}
        custom={3}
      >
        <div className="form-group">
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-input"
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        <div className="form-group">
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="form-input"
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        <div className="form-group">
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="form-textarea"
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        <motion.div className="contact-cta" variants={itemVariants} custom={4}>
          <motion.button
            type="submit"
            className="btn"
            disabled={status.submitting}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.div>

        {status.submitted && (
          <motion.div className="success-message" initial={{ scale: 0 }} animate={{ scale: 1 }}>
            Message sent successfully!
          </motion.div>
        )}

        {status.error && (
          <motion.div className="error-message" initial={{ scale: 0 }} animate={{ scale: 1 }}>
            {status.error}
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
