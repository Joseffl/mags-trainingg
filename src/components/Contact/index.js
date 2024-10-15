import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactSelect = styled.select`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: black;  /* Text color for better visibility */
  background-color: white;  /* Background color */
  border-radius: 12px;
  padding: 12px 16px;
  appearance: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_txl95xo', 'template_q6iinar', form.current, 'hWAiFxCtIcUV1ChT2')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>For Enquiries</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Send us an email</ContactTitle>

          <ContactLabel htmlFor="first_name">First Name</ContactLabel>
          <ContactInput id="first_name" name="first_name" required />

          <ContactLabel htmlFor="last_name">Last Name</ContactLabel>
          <ContactInput id="last_name" name="last_name" required />

          <ContactLabel htmlFor="company">Company</ContactLabel>
          <ContactInput id="company" name="company" required />

          <ContactLabel htmlFor="work_email">Work Email</ContactLabel>
          <ContactInput id="work_email" name="work_email" type="email" required />
          
          <ContactLabel htmlFor="phone">Phone number</ContactLabel>
          <ContactInput id="phone" name="phone" required />

          {/* <ContactLabel htmlFor="phone">Phone Number (with country code)</ContactLabel>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{
              width: '100%',
              fontSize: '18px',
              borderRadius: '12px',
              padding: '12px',
              border: '1px solid #aaa',
              backgroundColor: 'transparent',
              color: '#000',
            }}
            dropdownStyle={{
              color: '#000',
            }}
            required
          /> */}

          <ContactLabel htmlFor="region">Region</ContactLabel>
          <ContactSelect id="region" name="region" required>
            <option value="">Select Region</option>
            <option value="North America">North America</option>
            <option value="Asia Pacific">Asia Pacific</option>
            <option value="UK/Europe">UK/Europe</option>
            <option value="Middle East">Middle East</option>
            <option value="Africa">Africa</option>
            <option value="Others">Others</option>
          </ContactSelect>

          <ContactLabel htmlFor="courses">Which course are you interested in?</ContactLabel>
          <ContactSelect id="courses" name="courses" required>
            <option value="">Select a course</option>
            <option value="Commissioning and Start-up">Commissioning and Start-up</option>
            <option value="Control Sizing">Control Sizing</option>
            <option value="HAZID">HAZID</option>
            <option value="HAZOP">HAZOP</option>
            <option value="I & CD1">I & CD 1</option>
            <option value="I & CD2">I & CD 2</option>
            <option value="Basic Line Sizing">Basic Line Sizing</option>
            <option value="Gas Line Sizing">Gas Line Sizing</option>
            {/* Add more courses as needed */}
          </ContactSelect>

          <ContactLabel htmlFor="enquiry">Summary of your enquiry</ContactLabel>
          <ContactInputMessage id="enquiry" name="enquiry" rows="4" required />

          <ContactButton type="submit" value="Send" />
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
