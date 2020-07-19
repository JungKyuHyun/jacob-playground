import React, { memo, ReactNode } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';

type Props = {
  header: ReactNode;
  footer: ReactNode;
};

const RouteWrapper = memo<Props>(({ header, footer }) => {
  return (
    <BrowserRouter>
      {header}
      <Switch>
        {ROUTES.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
      {footer}
    </BrowserRouter>
  );
});

export default RouteWrapper;
