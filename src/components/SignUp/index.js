import { useState } from 'react';
import styled from 'styled-components';
import { signUp } from '../../api/auth';
import { FormInput } from '../FormInput';

const SignUpContainer = styled.div`
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

export const SignUp = () => {
  const [nameInput, setNameInput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');

  const handleName = (e) => {
    setNameInput(e.target.value);
  };
  const handleUser = (e) => {
    setUserInput(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailInput(e.target.value);
  };
  const handlePass = (e) => {
    setPassInput(e.target.value);
  };
  const handleSubmit = async () => {
    if (
      nameInput === '' ||
      userInput === '' ||
      emailInput === '' ||
      passInput === ''
    ) {
      throw new Error('no blanks allowed!');
    }
    await signUp(nameInput, userInput, emailInput, passInput);
  };

  return (
    <SignUpContainer>
      <FormContainer>
        <Form>
          <Title>Create your account</Title>
          <FormInput title="Name" type="text" onChange={handleName} />
          <FormInput title="Username" type="text" onChange={handleUser} />
          <FormInput title="Email" type="email" onChange={handleEmail} />
          <FormInput title="Password" type="password" onChange={handlePass} />
        </Form>
      </FormContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>Next</Button>
      </ButtonContainer>
    </SignUpContainer>
  );
};
