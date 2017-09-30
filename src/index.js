// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Form from './Form';

ReactDOM.render(
  <div>
    <Header title="Hello world" />
    <Form user={{ email: 'foo@bar.baz', password: 'secret' }} />
  </div>,
  document.getElementById('root')
);
