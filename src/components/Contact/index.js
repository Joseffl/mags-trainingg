import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const publicKey = "your_public_key";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setOpen(true);
        formRef.current.reset(); // Reset form fields
        setPhone(""); // Reset phone input
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="First Name" required />
        <input type="text" name="last_name" placeholder="Last Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <PhoneInput
          country="us"
          value={phone}
          onChange={(value) => setPhone(value)}
          inputProps={{
            name: "phone",
            required: true,
          }}
        />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Submit</button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Message sent successfully!"
      />
    </div>
  );
};

export default Contact;
