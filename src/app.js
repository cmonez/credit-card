import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';
import MainContainer from './styles/MainContainer';
import CreditCardFormContainer, {
  BottomHalfContainer,
} from './styles/CreditCardFormContainer';
import CreditCardInput, { CVVInput } from './styles/CreditCardInput';
import DateYearCVVContainer from './styles/DateYearCVVContainer';
import MonthSelector from './styles/MonthSelector';
import SubmitButton from './styles/SubmitButton';
import styled from 'styled-components';

const CreditCard = styled.div`
  z-index: 99;
  width: 30%;
  height: 210px;
  margin-top: 3%;
  border-radius: 20px;
  background-color: orange;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <CreditCard>hasdfasdfasdfasey</CreditCard>
        <CreditCardFormContainer>
          <BottomHalfContainer>
            <CreditCardInput />
            <CreditCardInput />
            <DateYearCVVContainer>
              <MonthSelector>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
              </MonthSelector>
              <MonthSelector>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </MonthSelector>
              <CVVInput></CVVInput>
            </DateYearCVVContainer>
            <SubmitButton>Hey</SubmitButton>
          </BottomHalfContainer>
        </CreditCardFormContainer>
      </MainContainer>
    </Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
