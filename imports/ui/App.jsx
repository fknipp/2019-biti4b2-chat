import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

import { Accounts } from 'meteor/epotek:accounts-ui';
import { T9n } from 'meteor-accounts-t9n';
import { en } from 'meteor-accounts-t9n/build/en'; // Choose the language you need here

T9n.map('en', en);
T9n.setLanguage('en');

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

export default App = () => (
  <div>
    <Accounts.ui.LoginForm />
    <h1>Willkommen zum Live Coding!</h1>
    <Hello />
    <Info />
  </div>
);