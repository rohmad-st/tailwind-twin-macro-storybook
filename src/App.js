import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Buttons from './pages/Buttons';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Buttons} exact />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
