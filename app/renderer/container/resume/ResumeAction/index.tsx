import MyButton from '@src/common/components/MyButton';
import { ROUTER } from '@src/common/constants/router';
import { toPrintPdf } from '@src/common/utils/htmlToPdf';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './index.less';

const ResumeAction = () => {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const history = useHistory();
  // 返回首页
  const onBack = () => history.push(ROUTER.root);
  // 导出PDF
  const onExport = () => {
    toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
  };

  return (
    <div className={styles.actions}>
      <div className={styles.back} onClick={onBack}>
        返回
      </div>
      <MyButton size="middle" className="export-btn" onClick={onExport}>
        导出PDF
      </MyButton>
    </div>
  );
};

export default ResumeAction;
