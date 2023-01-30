export const ROUTER = {
  root: '/',
  resume: '/resume/:fromPath/:templateId/:templateIndex',
  templateList: '/templateList',
};
export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
  templateList: 'templateList',
};

export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/Nuibia/visResumeMook',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: ROUTER.templateList,
    key: ROUTER_KEY.templateList,
    text: '模板',
  },
  {
    url: 'https://github.com/Nuibia/visResumeMook',
    key: 'code',
    text: '源码',
  },
];
