import MyScrollBox from '@src/common/components/MyScrollBox';
import { RESUME_TOOLBAR_LIST } from '@src/common/constants/resume';
import React from 'react';
import './index.less';

const ResumeToolbar = () => {
  const height = document.body.clientHeight;
  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        <div styleName="module">
          全部模块
          <div styleName="content">
            {RESUME_TOOLBAR_LIST.map((toolbar: TSResume.SliderItem) => {
              return (
                <div styleName="box" key={toolbar.key}>
                  <div styleName="info">
                    <i styleName="icon" />
                    <div styleName="text">
                      <div styleName="name">{toolbar.name}</div>
                      <div styleName="summary">{toolbar.summary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MyScrollBox>
    </div>
  );
};
export default ResumeToolbar;
