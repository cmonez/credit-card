import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <h1>Credit</h1>
    </Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
