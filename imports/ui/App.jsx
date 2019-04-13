import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import AccountsUIWrapper from './AccountsUIWrapper';

export default App = () => (
  <div>
    <AccountsUIWrapper />
    <h1>Willkommen zum Live Coding!</h1>
    <Hello />
    <Info />
  </div>
);