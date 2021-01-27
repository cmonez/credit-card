import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';
import MainContainer from './styles/MainContainer';
import FormContainer from './styles/Form';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <FormContainer></FormContainer>
      </MainContainer>
    </Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
