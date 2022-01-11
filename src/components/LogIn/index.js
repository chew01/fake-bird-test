import styled from 'styled-components';
import { useState } from 'react';
import { FormInput } from '../FormInput';
import { logIn } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const LogInContainer = styled.div`
  flex: 1 1 auto;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const FormContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Form = styled.form`
  margin: 0px 32px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Title = styled.div`
  box-sizing: border-box;
  margin: 16px 0px;
  font-family: 'TwitterChirp';
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;
  color: rgb(15, 20, 25);
`;
const ButtonContainer = styled.div`
  padding: 12px 32px 36px 32px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Button = styled.div`
  background-color: rgb(15, 20, 25);
  min-height: 44px;
  min-width: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export const LogIn = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmailInput(e.target.value);
  };
  const handlePass = (e) => {
    setPassInput(e.target.value);
  };

  const handleSubmit = async () => {
    await logIn(emailInput, passInput);
    navigate('/');
  };

  return (
    <LogInContainer>
      <FormContainer>
        <Form>
          <Title>Log in to your account</Title>
          <FormInput
            title="Email"
            type="text"
            onChange={handleEmail}
            autoComplete="email"
          />
          <FormInput
            title="Password"
            type="password"
            onChange={handlePass}
            autoComplete="current-password"
          />
        </Form>
      </FormContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>Next</Button>
      </ButtonContainer>
    </LogInContainer>
  );
};
