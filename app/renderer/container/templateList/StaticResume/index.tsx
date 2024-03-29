import EmptyPng from '@assets/icon/empty.png';
import MyButton from '@common/components/MyButton';
import MyEmpty from '@common/components/MyEmpty';
import MyScrollBox from '@common/components/MyScrollBox';
import * as TemplateList from '@src/container/templates';
import { shell } from 'electron';
import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import './index.less';

// 合法且存在的简历模版
const VALID_TEMPLATE = [0];

function StaticResume() {
  const HEADER_HEIGHT = 76; // 距离头部距离
  const height = document.body.clientHeight;
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);

  const isIncludeTemplate = VALID_TEMPLATE.includes(selectTemplate.templateIndex);
  const isValidTemplate = selectTemplate.templateId && selectTemplate.templateIndex !== -1;

  return (
    <div styleName="container">
      <MyScrollBox maxHeight={height - HEADER_HEIGHT}>
        {isValidTemplate && isIncludeTemplate && (
          <>
            {selectTemplate.templateIndex === 0 && <TemplateList.TemplateOne />}
            <Footer />
          </>
        )}

        {isValidTemplate && !isIncludeTemplate && <LackDesc label="暂未开发此模版，欢迎点击下方按钮进行模版贡献" />}
        {!isValidTemplate && <LackDesc label="暂无模版数据，欢迎点击下方按钮进行模版贡献" />}
      </MyScrollBox>
    </div>
  );
}

export default StaticResume;

const LackDesc = React.memo(({ label }: { label: string }) => {
  return (
    <div styleName="empty">
      <MyEmpty imgSrc={EmptyPng} label={label} />
      <div styleName="footer">
        <MyButton
          size="middle"
          className="use-btn"
          onClick={() => {
            shell.openExternal('https://github.com/PDKSophia/visResumeMook/issues/4');
          }}>
          贡献模版
        </MyButton>
      </div>
    </div>
  );
});
