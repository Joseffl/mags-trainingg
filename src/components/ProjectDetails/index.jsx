import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
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

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SideBySideSections = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Section = styled.div`
  width: 48%;
  background-color: ${({ theme }) => theme.bgLight};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) => dull && `
    background-color: ${theme.bgLight};
    color: ${theme.text_secondary};
    &:hover {
      background-color: ${theme.bg + 99};
    }
  `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 768px) {
    gap: 12px; /* Reduce gap between form elements */
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
    padding: 10px; /* Reduce padding */
    font-size: 14px; /* Smaller font size for better fit */
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
    padding: 10px; /* Reduce padding */
    font-size: 14px; /* Smaller font size */
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
    font-size: 14px; /* Smaller font size */
    padding: 10px 12px; /* Reduce padding */
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


const Index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: project?.title || '',
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
      // Guess currency based on symbol
      const isNGN = costString.includes('₦') || costString.toLowerCase().includes('ngn');
      return { amount: cleaned, currency: isNGN ? 'NGN' : 'USD' };
    }

    let amount, currency;

    // If user has selected or entered a preferred currency, check it
    // Otherwise detect based on string symbol
    if (formData.currency) {
      // Use the user-selected currency from formData
      if (formData.currency === 'NGN') {
        amount = parseFloat(costParts[0].replace(/[^0-9.]/g, ''));
        currency = 'NGN';
      } else {
        amount = parseFloat(costParts[1].replace(/[^0-9.]/g, ''));
        currency = 'USD';
      }
    } else {
      // Detect from string if no explicit choice
      if (costParts[0].includes('₦')) {
        amount = parseFloat(costParts[0].replace(/[^0-9.]/g, ''));
        currency = 'NGN';
      } else {
        amount = parseFloat(costParts[1].replace(/[^0-9.]/g, ''));
        currency = 'USD';
      }
    }

    return { amount, currency };
  };

  const { amount, currency } = detectCurrencyAndAmount(project?.cost || "0");

  const config = {
    public_key: 'FLWPUBK-8f52bd899374f757a9bb33483a49f8f4-X', // ✅ sandbox public key
    tx_ref: `tx_${Date.now()}`,
    amount: amount,
    currency: currency,
    payment_options: 'card, banktransfer, ussd',
    customer: {
      email: formData.email,
      name: formData.fullName,
    },
    customizations: {
      title: `${project?.title} Enrollment`,
      description: `Payment for ${project?.title}`,
      logo: '/your-logo.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  //   const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Proceeding to Flutterwave payment...');

  //   handleFlutterPayment({
  //     callback: (response) => {
  //       console.log('Payment Response:', response);
  //       closePaymentModal();
  //       setFormOpen(false);
  //       setOpenModal({ state: false, project: null });
  //     },
  //     onClose: () => {
  //       console.log('Payment closed');
  //     },
  //   });
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const rawCost = project?.cost ?? '';
    const isFree =
      rawCost.toString().toLowerCase().includes("free") ||
      parseFloat(rawCost.replace(/[^0-9.]/g, '')) === 0;

    emailjs.send(
      'service_f1hf2ku',
      'template_q6iinar',
      {
        fullName: formData.fullName,
        email: formData.email,
        course: formData.course,
      },
      'hWAiFxCtIcUV1ChT2'
    )
      .then((result) => {
        console.log('Email sent successfully >>> ', result.text);

        if (isFree) {
          alert("Enrollment successful! We'll reach out to you shortly.");
          setIsLoading(false);
          setFormOpen(false);
          setOpenModal({ state: false, project: null });
        } else {
          handleFlutterPayment({
            callback: (response) => {
              console.log('Payment Response:', response);
              closePaymentModal();
              setIsLoading(false);
              setFormOpen(false);
              setOpenModal({ state: false, project: null });
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
    <>
      <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
        <Container>
          <Wrapper>
            <CloseRounded
              style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                cursor: 'pointer',
              }}
              onClick={() => setOpenModal({ state: false, project: null })}
            />
            <Image src={project?.image} />
            <Title>{project?.title}</Title>
            <Tags>
              {project?.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <Desc><h3>About this Course</h3></Desc>
            <div>
              {Array.isArray(project?.description) ? (
                project.description.map((desc, index) => (
                  <p key={index} style={{ marginBottom: '1rem' }}>{desc}</p>
                ))
              ) : (
                <p style={{ marginBottom: '1rem' }}>{project?.description || 'No description available'}</p>
              )}
            </div>
            {/* <Desc>
              <h3> Duration </h3> {project?.duration}
            </Desc> */}
            <Desc>
              <h3>Methodology </h3>
              {project?.methodology}
            </Desc>
            <Desc>
              <h3>Prerequisite</h3>
              <p>
                {project?.prerequisite.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </p>
            </Desc>
            <SideBySideSections>
              <Section>
                <h3>Learning outcomes</h3>
                <p>
                  {project?.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </p>
              </Section>
              <Section>
                <h3>Course outline</h3>
                <p>
                  {project?.outline.map((outline, index) => (
                    <p key={index}>{outline}</p>
                  ))}
                </p>
              </Section>
            </SideBySideSections>
            <Desc>
              <h3>Assessment </h3>
              <p>{project?.assessment}</p>
            </Desc>
            <Desc>
              <h3>Course Delivery Formats</h3>
              <p>
                  Online/Virtual
              </p>
              {/* <p>
                {project?.cdf.map((cdf, index) => (
                  <li key={index}>{cdf}</li>
                ))}
              </p> */}
            </Desc>
            <Desc>
              <h3>Cost </h3>
              <p>{project?.cost}</p>
            </Desc>
            <ButtonGroup>
              <Button dull onClick={() => setFormOpen(true)}>Enroll Now</Button>
              <Button
                as={HashLink}
                smooth
                to="/#contact"
                onClick={() => setOpenModal({ state: false, project: null })}
              >
                Make Enquiry
              </Button>
            </ButtonGroup>
          </Wrapper>
        </Container>
      </Modal>

      <Modal open={formOpen} onClose={() => setFormOpen(false)}>
        <Container>
          <FormContainer>
            <CloseRounded
              style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                cursor: 'pointer',
              }}
              onClick={() => setFormOpen(false)}
            />
            <Title>Enroll for {project?.title} Course</Title>
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
                <option value={project?.title}>{project?.title}</option>
              </Select>
              <FormButton type="submit" disabled={isLoading}>
                {isLoading ? <Spinner /> : 'Proceed to Payment'}
              </FormButton>
              </Form>
          </FormContainer>
        </Container>
      </Modal> 
    </>
  );
};

export default Index;