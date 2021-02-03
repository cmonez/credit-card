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
import SkyLine from './components/SkyLine';
import MasterCardLogo from './components/MasterCardLogo';

const CreditCard = styled.div`
  position: absolute;
  background-color: pink;
  margin-top: 15%;
  width: 400px;
  z-index: 1;
  height: 220px;
  border-radius: 15px;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <CreditCard>
          Yes!!
          <SkyLine dimensions={{ width: '100%', height: '50%' }} />
        </CreditCard>
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
        <MasterCardLogo dimensions={{ height: '100px', width: '100px' }} />
      </MainContainer>
    </Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
