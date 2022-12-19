import { ROUTER } from '@common/constants/router';
import Resume from '@src/container/resume';
import Root from '@src/container/root';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import TemplateList from './container/templateList';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';
import useThemeActionHooks from './hooks/useThemeActionHooks';

const Router = () => {
  const appName = useSelector((state: any) => state.globalModel.appName);
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const initThemeConfig = useThemeActionHooks.useInitThemeConfig();
  useEffect(() => {
    readDirAssetsTemplateHooks();
    initThemeConfig();
  }, []);

  console.log('appName = ', appName);
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
        <Route path={ROUTER.templateList} exact>
          <TemplateList />
        </Route>
      </Switch>
      <Redirect to="/" />
    </HashRouter>
  );
};

export default Router;
