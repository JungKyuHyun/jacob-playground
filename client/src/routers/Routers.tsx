import React, { memo } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';

const Routers = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
});

export default Routers;
