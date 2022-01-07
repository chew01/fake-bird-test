import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CloseModal from '../../assets/buttons/closemodal.svg';
import ModalLogo from '../../assets/buttons/modallogo.svg';

const ModalBackground = styled.div`
  height: 100%;
  width: 100vw;
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalFrame = styled.div`
  flex-shrink: 1;
  min-height: 400px;
  max-height: 90vh;
  height: 650px;
  min-width: 600px;
  max-width: 80vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: white;
  border-radius: 16px;
`;
const ModalHeader = styled.div`
  height: 53px;
`;
const ModalHeaderContainer = styled.div`
  height: 53px;
  padding: 0px 16px;
  max-width: 600px;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const ModalHeaderLeft = styled.div`
  flex: 1 1 50%;
  min-height: 32px;
  min-width: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;
const ModalHeaderLogo = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ModalHeaderRight = styled.div`
  flex: 1 1 50%;
  min-height: 32px;
  min-width: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
`;
const ModalHeaderClose = styled.div`
  min-height: 36px;
  min-width: 36px;
  margin-left: -8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;
const Cross = styled.img`
  height: 20px;
  width: 20px;
`;
const ModalBody = styled.div``;

export const Modal = () => {
  const navigate = useNavigate();

  const returnToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <ModalBackground>
      <ModalFrame>
        <ModalHeader>
          <ModalHeaderContainer>
            <ModalHeaderLeft>
              <ModalHeaderClose onClick={returnToPreviousPage}>
                <Cross src={CloseModal} alt="close modal" />
              </ModalHeaderClose>
            </ModalHeaderLeft>
            <ModalHeaderLogo>
              <img src={ModalLogo} alt="logo" />
            </ModalHeaderLogo>
            <ModalHeaderRight />
          </ModalHeaderContainer>
        </ModalHeader>
        <Outlet />
      </ModalFrame>
    </ModalBackground>
  );
};
