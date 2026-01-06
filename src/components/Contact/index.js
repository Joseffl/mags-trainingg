import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f0fdf4 0%, #e6f9ef 100%);
  position: relative;
  padding: 20px;
  overflow: hidden;
`;

const BackgroundShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  background: url('/path-to-your-blobs-or-pattern.svg') no-repeat center/cover;
  opacity: 0.1;
`;

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 700px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 128, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
    border-radius: 12px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #28ac30;
  background: linear-gradient(90deg, #28ac30, #85d67f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f8f8f8;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #0a8650;
    box-shadow: 0 0 10px rgba(10, 134, 80, 0.2);
    outline: none;
    background: white;
  }
`;

const StyledPhoneInput = styled(PhoneInput)`
  .react-tel-input {
    width: 100%;
    background: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 12px;

    &:focus-within {
      border-color: #0a8650;
      box-shadow: 0 0 10px rgba(10, 134, 80, 0.2);
    }

    input {
      width: 100%;
      padding: 15px;
      font-size: 16px;
      border: none;
      outline: none;
      background: transparent;
    }

    .flag-dropdown {
      background: transparent;
      border: none;
      margin-left: 10px;
    }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f8f8f8;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #0a8650;
    box-shadow: 0 0 10px rgba(10, 134, 80, 0.2);
    outline: none;
    background: white;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(90deg, #0a8650, #32cd32);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(50, 205, 50, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID ,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
      )
      .then(() => {
        setOpen(true);
        formRef.current.reset();
        setPhone("");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  };

  return (
    <Container id="contact">
      <BackgroundShapes />
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>Have any questions or feedback? We’re here to help!</Desc>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <Input type="text" name="first_name" placeholder="First Name" required />
          <Input type="text" name="last_name" placeholder="Last Name" required />
          <Input type="email" name="user_email" placeholder="Email" required />
          <StyledPhoneInput
            country="ng"
            value={phone}
            onChange={(value) => setPhone(value)}
            inputProps={{
              name: "user_phone",
              required: true,
            }}
          />
          <Textarea name="message" rows="5" placeholder="Your Message" required />
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} message="Message sent successfully!" />
      </Wrapper>
    </Container>
  );
};

export default Contact;
