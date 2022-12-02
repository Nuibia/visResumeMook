import { ROUTER } from '@common/constants/router';
import Resume from '@src/container/resume';
import Root from '@src/container/root';
import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      <Redirect to="/" />
    </HashRouter>
  );
};

export default Router;
