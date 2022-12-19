import React from 'react';
import './index.less';
// 👇 引入Header组件
import MyRectSize from '@src/common/components/MyRectSize';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';

function TemplateList() {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
        <MyRectSize>
          <MyRectSize.Left>
            <Navigation />
          </MyRectSize.Left>
          <MyRectSize.Right>
            <StaticResume />
          </MyRectSize.Right>
        </MyRectSize>
      </div>
    </div>
  );
}
export default TemplateList;
