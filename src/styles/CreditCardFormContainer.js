import styled from 'styled-components';

const CreditCardFormContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: white;
  position: absolute;
  width: 40%;
  height: 70%;
  top: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
`;

export const BottomHalfContainer = styled.div`
  height: 50%;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export default CreditCardFormContainer;
