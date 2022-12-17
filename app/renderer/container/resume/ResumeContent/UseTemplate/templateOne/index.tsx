/**
 * @desc 模板1
 */
import { RESUME_TOOLBAR_MAPS } from '@src/common/constants/resume';
import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Job from './components/Job';
import Post from './components/Post';
import Project from './components/Project';
import Skill from './components/Skill';
import Synopsis from './components/Synopsis';
import Work from './components/Work';
import './index.less';

function TemplateOne() {
  // 👇 获取简历信息数据
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const resumeToolbarKeys: string[] = useSelector((state: any) => state.templateModel.resumeToolbarKeys);

  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div styleName="a4-box">
      <div styleName="flex container" id="visPdf">
        {/* 左侧 */}
        <div styleName="left">
          <div styleName="avatar">
            <Avatar />
          </div>
          <div styleName="fillColor" />
          <div styleName="baseData">
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.personal) && <BaseInfo />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />}
          </div>
        </div>
        {/* 内容 */}
        <div styleName="center">
          <Synopsis />
          <div styleName="listData">
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
