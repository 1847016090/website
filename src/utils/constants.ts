export enum HomeTabEnum {
  HomePage = 1,
  Product = 2,
  Solution = 3,
  IndustryCase = 4,
  AboutUs = 5,
}

export const HOME_TAB_LIST = [
  {
    label: '首页',
    value: HomeTabEnum.HomePage,
    path: '/pc',
  },
  {
    label: '产品',
    value: HomeTabEnum.Product,
    subTitle: 'Products',
    children: [
      {
        label: '若琪看看',
        value: 1,
        path: '/pc/product/1',
      },
      {
        label: '乐奇玩玩',
        value: 2,
        path: '/pc/product/2',
      },
      {
        label: '大象 XR 教育',
        value: 3,
        path: '/pc/product/3',
      },
    ],
  },
  {
    label: '解决方案',
    value: HomeTabEnum.Solution,
    subTitle: 'Solution',
    children: [
      {
        label: 'AR 智慧导览解决方案',
        value: 1,
        path: '/pc/solution/1',
      },
      {
        label: 'AR 数字主题空间盈利方案',
        value: 2,
        path: '/pc/solution/2',
      },
      {
        label: 'AR 创新教学解决方案',
        value: 3,
        path: '/pc/solution/3',
      },
    ],
  },
  {
    label: '案例中心',
    value: HomeTabEnum.IndustryCase,
    path: '/pc/cases',
  },
  {
    label: '关于我们',
    value: HomeTabEnum.AboutUs,
    path: '/pc/about-us',
  },
];
export const MOBILE_HOME_TAB_LIST = [
  {
    label: '首页',
    value: HomeTabEnum.HomePage,
    path: '/mobile',
  },
  {
    label: '产品介绍',
    value: HomeTabEnum.Product,
    subTitle: 'Products',
    children: [
      {
        label: '若琪看看',
        value: 1,
        path: '/mobile/product/1',
      },
      {
        label: '乐奇玩玩',
        value: 2,
        path: '/mobile/product/2',
      },
      {
        label: '大象 XR 教育',
        value: 3,
        path: '/mobile/product/3',
      },
    ],
  },
  {
    label: '解决方案',
    value: HomeTabEnum.Solution,
    subTitle: 'Solution',
    children: [
      {
        label: 'AR 智慧导览解决方案',
        value: 1,
        path: '/mobile/solution/1',
      },
      {
        label: 'AR 数字主题空间盈利方案',
        value: 2,
        path: '/mobile/solution/2',
      },
      {
        label: 'AR 创新教学解决方案',
        value: 3,
        path: '/mobile/solution/3',
      },
    ],
  },
  {
    label: '案例中心',
    value: HomeTabEnum.IndustryCase,
    path: '/mobile/cases',
  },
  {
    label: '关于我们',
    value: HomeTabEnum.AboutUs,
    path: '/mobile/about-us',
  },
];
export enum PageEnum {
  HomePage = 'homePage',
  OurProduct = 'ourProduct',
  IndustryCase = 'industryCase',
  Information = 'information',
}
