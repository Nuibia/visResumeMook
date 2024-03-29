/*
 * @Description:缺省空组件
 */
import React from 'react';
import './index.less';
export type SizeType = 'small' | 'big';

interface IEmptyProps {
  imgSrc: string;
  size?: SizeType;
  label?: string;
  style?: React.CSSProperties;
}

function Empty({ imgSrc, size = 'small', style, label }: IEmptyProps) {
  return (
    <div styleName="empty">
      <img src={imgSrc} style={style} styleName={`img-${size}`} />
      {label && <p styleName="label">{label}</p>}
    </div>
  );
}

export default Empty;
