import React, { useState, useRef } from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = ({ theme }) => {
  const form = useRef();
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.email.value;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    emailjs.sendForm('service_fnzporp', 'template_sbj5wdj', form.current, '7pQTIDrFG3Z9aeQET');
    e.target.reset();
  };

  return (
    <section className={theme} id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>maurizioguerrero@hotmail.com</h5>
            <a href="mailto:maurizioguerrero@hotmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=573205285432">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input className="input-contact" type="text" name="name" placeholder="Your Name" required />
          <input className="input-contact" type="email" name="email" placeholder="Your Email" required />
          <p className="error">{emailError}</p>
          <textarea className="input-contact" name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
