import React, { useEffect } from 'react';
// 👇 引入，实现页面缓存
import { ROUTER } from '@common/constants/router';
import Resume from '@src/container/resume';
import Root from '@src/container/root';
import TemplateList from '@src/container/templateList';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { HashRouter, Redirect } from 'react-router-dom';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';
import useThemeActionHooks from './hooks/useThemeActionHooks';

function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const initThemeConfig = useThemeActionHooks.useInitThemeConfig();
  useEffect(() => {
    initThemeConfig();
    readDirAssetsTemplateHooks();
  }, []);

  return (
    <HashRouter>
      <CacheSwitch>
        <CacheRoute path={ROUTER.root} exact component={Root} />
        <CacheRoute path={ROUTER.resume} exact component={Resume} />
        <CacheRoute path={ROUTER.templateList} exact component={TemplateList} />
        <Redirect from={ROUTER.root} exact to={ROUTER.root} />
      </CacheSwitch>
    </HashRouter>
  );
}
export default Router;
