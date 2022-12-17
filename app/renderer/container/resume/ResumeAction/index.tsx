import MyButton from '@src/common/components/MyButton';
import { ROUTER } from '@src/common/constants/router';
import React from 'react';
import { useHistory } from 'react-router';
import styles from './index.less';

const ResumeAction = () => {
  const history = useHistory();
  // 返回首页
  const onBack = () => history.push(ROUTER.root);
  // 导出PDF
  const onExport = () => {};

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
