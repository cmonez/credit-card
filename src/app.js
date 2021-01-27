import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';
import FormContainer from './styles/Form';
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <h1>Credit</h1>
      <FormContainer></FormContainer>
    </Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
