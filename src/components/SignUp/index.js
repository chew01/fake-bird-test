import styled from 'styled-components';

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
const Form = styled.div`
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
const Box = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Label = styled.label`
  border: 1px solid;
  border-radius: 4px;
  border-color: rgb(207, 217, 222);

  &:focus-within {
    border-color: rgb(29, 155, 240);
    box-shadow: rgb(29, 155, 240) 0px 0px 0px 1px;
  }
`;
const InputTitle = styled.div`
  font-family: 'TwitterChirp';
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: rgb(29, 155, 240);
  padding: 8px 0px 0px 8px;
`;
const Input = styled.input`
  width: 100%;
  font-family: 'TwitterChirp';
  font-size: 17px;
  font-weight: 400;
  color: rgb(15, 20, 25);
  box-sizing: border-box;
  padding: 8px;
  border: none;
  outline-style: none;
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
  return (
    <SignUpContainer>
      <FormContainer>
        <Form>
          <Title>Create your account</Title>
          <Box>
            <Label>
              <InputTitle>Name</InputTitle>
              <Input type="text" />
            </Label>
          </Box>
          <Box>
            <Label>
              <InputTitle>Username</InputTitle>
              <Input type="text" />
            </Label>
          </Box>
          <Box>
            <Label>
              <InputTitle>Email</InputTitle>
              <Input type="text" />
            </Label>
          </Box>
          <Box>
            <Label>
              <InputTitle>Password</InputTitle>
              <Input type="text" />
            </Label>
          </Box>
        </Form>
      </FormContainer>
      <ButtonContainer>
        <Button>Next</Button>
      </ButtonContainer>
    </SignUpContainer>
  );
};
