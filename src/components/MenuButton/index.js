import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
  padding: 4px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
`;

const ButtonContents = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;

const ButtonLogo = styled.img`
  font-size: 15px;
  height: 26.25px;
`;

const ButtonLabel = styled.div`
  margin: 0px 16px 0px 20px;
  font-size: 20px;
  color: rgb(15, 20, 25);
  font-family: 'TwitterChirp';
  font-weight: 400;
`;

export const Button = (props) => {
  const { to, text, img } = props;
  return (
    <ButtonLink to={to}>
      <ButtonContents>
        <ButtonLogo src={img} />
        <ButtonLabel>{text}</ButtonLabel>
      </ButtonContents>
    </ButtonLink>
  );
};
