import { getAppPath } from '@src/common/utils/appPath';
import fileAction from '@src/common/utils/file';
import React from 'react';
import './index.less';
function Resume() {
  getAppPath().then(rootPath => {
    console.log('应用程序目录路径：', rootPath);
    console.log('文件读取，内容数据为：');
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then(data => {
      console.log('data', data);
    });
  });
  return <div>我是简历模块</div>;
}
export default Resume;
