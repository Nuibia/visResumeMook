import { getUserStoreDataPath } from '@common/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';
import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import './index.less';

function Setting() {
  const [resumeSavePath, setResumeSavePath] = useState('');
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();
  useEffect(() => {
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        setResumeSavePath(value?.resumeSavePath);
      } else {
        getUserStoreDataPath().then((appPath: string) => {
          setResumeSavePath(`${appPath}resumeCache`);
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
        });
      }
    });
  }, []);

  const onChangePath = () => {
    // 1. 向主进程发送消息，因为 dialog 模块只能在主进程中调用
    ipcRenderer.send('open-save-resume-path', '');
    // 2. 监听从主进程发送回来的消息
    ipcRenderer.on('reply-save-resume-path', (event, arg: string[]) => {
      if (arg) {
        if (arg.length > 0) {
          setResumeSavePath(arg[0]);
          updateGlobalConfigFile('resumeSavePath', arg[0]);
        }
      } else {
        console.log('自定义存储路径失败');
      }
    });
  };

  const onHideWindow = () => {
    ipcRenderer.send('Electron:SettingWindow-hide-event');
  };
  const onMinWindow = () => {
    ipcRenderer.send('Electron:SettingWindow-min-event');
  };
  return (
    <div styleName="container">
      <div styleName="menu">
        <div styleName="hide" onClick={onHideWindow}>
          x
        </div>
        <div styleName="min" onClick={onMinWindow}>
          -
        </div>
      </div>
      <div styleName="content">
        <p styleName="label">修改简历数据储存路径</p>
        <div styleName="input">
          <div styleName="value">{resumeSavePath || '当前存储路径为：'}</div>
          <div styleName="update-btn" onClick={onChangePath}>
            更改路径
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
