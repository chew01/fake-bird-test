import styled from 'styled-components';
import { Body } from '../../components/Body';
import { Sidebar } from '../../components/Sidebar';

const Background = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
`;

export const Home = () => {
  return (
    <Background>
      <Sidebar />
      <Body />
    </Background>
  );
};
