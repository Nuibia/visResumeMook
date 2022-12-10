// import Logo from '@/assets/logo.png';
import { ROUTER_ENTRY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { shell } from 'electron';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Logo from '../../../../assets/logo.png';
import './index.less';

const Root = () => {
  const history = useHistory();
  const handleActionClick = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };
  const dispatch = useDispatch();

  const appName = useSelector((state: any) => state.globalModel.appName);
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">可视化简历平台</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router, index) => {
            return (
              <div key={`${router.text}-${index}`} styleName="item" onClick={() => handleActionClick(router)}>
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
