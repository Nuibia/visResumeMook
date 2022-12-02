import React, { FC } from 'react';
import lessStyle from './index.less';
interface IProps {
  /** 标题 */
  text: string;
  /** 样式 */
  styles?: React.CSSProperties;
}

const Title: FC<IProps> = ({ text, styles }) => {
  return (
    <div style={styles} className={lessStyle.title}>
      {text}
    </div>
  );
};

export default Title;
