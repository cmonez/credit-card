import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';
import MainContainer from './styles/MainContainer';
import FormContainer from './styles/CreditCardFormContainer';
import CreditCardInput from './styles/CreditCardInput';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <CreditCardFormContainer>
          <CreditCardInput />
        </CreditCardFormContainer>
      </MainContainer>
    </Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
