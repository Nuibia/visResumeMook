// import Logo from '@/assets/logo.png';
import { ROUTER_ENTRY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { shell } from 'electron';
import React from 'react';
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
  return (
    <div className="root">
      <div className="container">
        <img src={Logo} alt="" />
        <div className="title">VisResumeMook</div>
        <div className="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className="action">
          {ROUTER_ENTRY.map((router, index) => {
            return (
              <div key={`${router.text}-${index}`} className="item" onClick={() => handleActionClick(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div className="copyright">
          <div className="footer">
            <p className="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By jiangniao
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Root;
