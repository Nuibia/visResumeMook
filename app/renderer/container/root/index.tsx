import Logo from '@assets/logo.png';
import MyTheme from '@src/common/components/MyTheme';
import { ROUTER_ENTRY, ROUTER_KEY } from '@src/common/constants/router';
import { compilePath, isHttpOrHttpsUrl } from '@src/common/utils/router';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';
import { shell } from 'electron';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './index.less';

const Root = () => {
  const history = useHistory();
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        history.push(compilePath(router.url));
      } else {
        history.push(
          compilePath(router.url, {
            fromPath: ROUTER_KEY.root,
            templateId: selectTemplate?.templateId,
            templateIndex: selectTemplate?.templateIndex,
          }),
        );
      }
    }
  };

  return (
    <div styleName="root" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">可视化简历平台</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="theme">
          <MyTheme />
        </div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div
                key={router.key}
                styleName="item"
                onClick={() => {
                  onRouterToLink(router);
                }}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By jiangniao
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Root;
