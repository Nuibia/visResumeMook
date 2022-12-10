import React from 'react';
import './index.less';
// 👇 引入简历模版
import MyScrollBox from '@common/components/MyScrollBox';
import * as UseTemplateList from './UseTemplate';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </MyScrollBox>
  );
}
export default ResumeContent;
