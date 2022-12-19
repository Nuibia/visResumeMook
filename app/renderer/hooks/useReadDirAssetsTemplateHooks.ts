import { getAppPath } from '@common/utils/appPath';
import fileAction from '@common/utils/file';
import { createUID } from '@src/common/utils';
import { useDispatch } from 'react-redux';

export default function () {
  const dispatch = useDispatch();
  return () => {
    getAppPath().then(appPath => {
      console.log(appPath);
      fileAction
        .readDir(`${appPath}assets/template`)
        .then(async files => {
          console.log('该目录下的文件有：\n');
          console.log(files);
          if (files.length > 0) {
            const templateList: TSTemplate.Item[] = [];
            for (const fileName of files) {
              const base64URL = await fileAction.read(`${appPath}assets/template/${fileName}`, 'base64');
              templateList.push({
                templateName: fileName,
                templateId: createUID(),
                templateCover: `data:image/png;base64,${base64URL}`,
              });
            }
            dispatch({
              type: 'templateModel/setStoreList',
              payload: [
                {
                  key: 'templateList',
                  values: templateList,
                },
                {
                  key: 'selectTemplate',
                  values: templateList[0],
                },
              ],
            });
          }
        })
        .catch(error => {
          throw new Error(error.message);
        });
    });
  };
}
