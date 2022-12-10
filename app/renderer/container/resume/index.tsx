import React from 'react';
import ResumeAction from './components/resumeAction';
import ResumeContent from './components/resumeContent';
import ResumeToolbar from './components/resumeToolbar';
import './index.less';

const Resume = () => {
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction />
      </div>
      <div styleName="content">
        <ResumeContent />
      </div>
      <div styleName="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
};

export default Resume;
