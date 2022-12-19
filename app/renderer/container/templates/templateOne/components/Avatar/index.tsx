/**
 * @desc 头像
 * @author pengdaokuan
 */
import AvatarImage from '@assets/avatar.png';
import React from 'react';
import './index.less';

function Avatar() {
  return (
    <div styleName="box">
      <div styleName="avatar">
        <img src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;
