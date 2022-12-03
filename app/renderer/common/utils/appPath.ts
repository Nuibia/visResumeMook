//获取项目的绝对路径
import { ipcRenderer } from 'electron';
export const getAppPath = () => {
  return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
    ipcRenderer.send('get-root-path', '');
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('项目路径错误'));
      }
    });
  });
};
