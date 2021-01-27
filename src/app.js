import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';
import MainContainer from './styles/MainContainer';
import CreditCardFormContainer from './styles/CreditCardFormContainer';
import CreditCardInput, { CVVInput } from './styles/CreditCardInput';
import DateYearCVVContainer from './styles/DateYearCVVContainer';
import MonthSelector from './styles/MonthSelector';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <CreditCardFormContainer>
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
        </CreditCardFormContainer>
      </MainContainer>
    </Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
