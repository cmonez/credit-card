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
  background: #ff0bee;
  position: relative;
  margin-top: 30px;
  background: -webkit-linear-gradient(bottom right, #ff0bee, #fbfe1a);
  background: -moz-linear-gradient(bottom right, #ff0bee, #fbfe1a);
  background: linear-gradient(to top left, #ff0bee, #fbfe1a);
  width: 400px;
  z-index: 1;
  height: 220px;
  border-radius: 15px;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <CreditCard>
          <MasterCardLogo dimensions={{ height: '50px', width: '50px' }} />
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
      </MainContainer>
    </Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
