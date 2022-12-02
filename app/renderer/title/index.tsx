import React, { FC } from "react";
interface IProps {
  /** 标题 */
  text: string;
  /** 样式 */
  styles?: React.CSSProperties;
}

const Title: FC<IProps> = ({ text, styles }) => {
  return <div style={styles}>{text}</div>;
};

export default Title;
