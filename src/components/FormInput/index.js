import styled from 'styled-components';

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
  transition-duration: 0.2s;

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

export const FormInput = (props) => {
  const { title, type, onChange, autoComplete, defaultValue } = props;

  return (
    <Box>
      <Label>
        <InputTitle>{title}</InputTitle>
        <Input required type={type} onChange={onChange} autocomplete={autoComplete} defaultValue={defaultValue} />
      </Label>
    </Box>
  );
};
