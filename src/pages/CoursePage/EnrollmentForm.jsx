import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import emailjs from '@emailjs/browser';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const FormContainer = styled.div`
  max-width: 500px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 768px) {
    gap: 12px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f8f8f8;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const FormButton = styled.button`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 2px solid ${({ theme }) => theme.text_primary};
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin: 0 auto;
  animation: ${spin} 1s linear infinite;
`;

const EnrollmentForm = ({ isOpen, onClose, course }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: course?.title || '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const detectCurrencyAndAmount = (costString) => {
    if (!costString) return { amount: 0, currency: 'NGN' };
    const costParts = costString.split('/');

    if (costParts.length === 1) {
      const cleaned = parseFloat(costParts[0].replace(/[^0-9.]/g, '')) || 0;
      const isNGN = costString.includes('₦') || costString.toLowerCase().includes('ngn');
      return { amount: cleaned, currency: isNGN ? 'NGN' : 'USD' };
    }

    let amount, currency;
    if (costParts[0].includes('₦')) {
      amount = parseFloat(costParts[0].replace(/[^0-9.]/g, ''));
      currency = 'NGN';
    } else {
      amount = parseFloat(costParts[1].replace(/[^0-9.]/g, ''));
      currency = 'USD';
    }
    return { amount, currency };
  };

  const { amount, currency } = detectCurrencyAndAmount(course?.cost || "0");

  const config = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY ,
    tx_ref: `tx_${Date.now()}`,
    amount: amount,
    currency: currency,
    payment_options: 'card, banktransfer, ussd',
    customer: {
      email: formData.email,
      name: formData.fullName,
    },
    customizations: {
      title: `${course?.title} Enrollment`,
      description: `Payment for ${course?.title}`,
      logo: '/your-logo.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const rawCost = course?.cost ?? '';
    const isFree =
      rawCost.toString().toLowerCase().includes("free") ||
      parseFloat(rawCost.replace(/[^0-9.]/g, '')) === 0;

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID ,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID ,
      {
        fullName: formData.fullName,
        email: formData.email,
        course: formData.course,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
    )
      .then((result) => {
        console.log('Email sent successfully >>> ', result.text);

        if (isFree) {
          alert("Enrollment successful! We'll reach out to you shortly.");
          setIsLoading(false);
          onClose();
        } else {
          handleFlutterPayment({
            callback: (response) => {
              console.log('Payment Response:', response);
              closePaymentModal();
              alert("Payment successful! We'll reach out to you shortly.");
              setIsLoading(false);
              onClose();
            },
            onClose: () => {
              console.log('Payment closed');
              setIsLoading(false);
            },
          });
        }
      })
      .catch((error) => {
        console.log('Email error:', error.text);
        alert("Could not submit your enrollment. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Container>
        <FormContainer>
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={onClose}
          />
          <Title>Enroll for {course?.title} Course</Title>
          <Form onSubmit={handleFormSubmit}>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
            />
            <Select
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              disabled
            >
              <option value={course?.title}>{course?.title}</option>
            </Select>
            <FormButton type="submit" disabled={isLoading}>
              {isLoading ? <Spinner /> : 'Proceed to Payment'}
            </FormButton>
          </Form>
        </FormContainer>
      </Container>
    </Modal>
  );
};

export default EnrollmentForm;