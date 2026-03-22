import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SubscriptionContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(0, 255, 255, 0.1));
  position: relative;
  overflow: hidden;
`;

const SubscriptionContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const SubscriptionTitle = styled(motion.h2)`
  font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
  color: #ff0000;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #ff0000;
`;

const SubscriptionDescription = styled(motion.p)`
  font-family: 'Kalam', cursive;
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const SubscriptionFormStyled = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const EmailInput = styled(motion.input)`
  flex: 1;
  max-width: 400px;
  padding: 1rem;
  background: rgba(10, 10, 10, 0.7);
  border: 2px solid rgba(255, 0, 0, 0.5);
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Kalam', cursive;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #00ffff;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
`;

const SubscribeButton = styled(motion.button)`
  background: #ff0000;
  border: none;
  color: #ffffff;
  padding: 1rem 2rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #00ffff, transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: #00ffff;
    color: #000;
    transform: scale(1.05);
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(0, 255, 0, 0.2);
  border: 2px solid rgba(0, 255, 0, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
`;

const SuccessText = styled.p`
  font-family: 'Kalam', cursive;
  font-size: 1.1rem;
  color: #00ff00;
  margin: 0;
`;

const ErrorMessage = styled(motion.div)`
  background: rgba(255, 0, 0, 0.2);
  border: 2px solid rgba(255, 0, 0, 0.5);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
`;

const ErrorText = styled.p`
  font-family: 'Kalam', cursive;
  font-size: 1rem;
  color: #ff0000;
  margin: 0;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
  animation: pulse 4s ease-in-out infinite alternate;
  
  @keyframes pulse {
    0% { opacity: 0.3; }
    100% { opacity: 0.7; }
  }
`;

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    try {
      // Simulate API call - replace with actual subscription service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the email to your backend
      console.log('Subscription email:', email);
      
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setShowError(false);
  };

  return (
    <SubscriptionContainer id="subscribe">
      <BackgroundPattern />
      
      <SubscriptionContent>
        <SubscriptionTitle
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          JOIN THE JOURNEY
        </SubscriptionTitle>
        
        <SubscriptionDescription
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Subscribe to receive weekly devotionals, faith resources, and updates from our community of seekers.
        </SubscriptionDescription>
        
        <SubscriptionFormStyled
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <EmailInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            required
            disabled={isSubmitting}
            whileFocus={{ scale: 1.02 }}
          />
          
          <SubscribeButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
          </SubscribeButton>
        </SubscriptionFormStyled>
        
        {showSuccess && (
          <SuccessMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <SuccessText>
              🎉 Welcome to the community! Check your email for confirmation.
            </SuccessText>
          </SuccessMessage>
        )}
        
        {showError && (
          <ErrorMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ErrorText>{errorMessage}</ErrorText>
          </ErrorMessage>
        )}
      </SubscriptionContent>
    </SubscriptionContainer>
  );
};

export default SubscriptionForm;
