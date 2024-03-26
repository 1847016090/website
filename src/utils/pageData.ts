import { HomeTabEnum, PageEnum } from './constants';

const data = {
  [PageEnum.HomePage]: {
    bg: '/image/pc/bg.png',
    slogan: '/image/pc/slogan.png',
  },
  [PageEnum.OurProduct]: {
    title: '我们的产品',
    subTitle: 'Our products',
    products: [
      {
        logo: '/image/pc/product-title1.png',
        bg: '/image/pc/product-bg1.png',
        logoText: '文旅',
        title: '若琪看看',
        value: 1,
        description:
          '围绕 AR 设备＋云端＋小程序，构建的一站式 AR 智慧导览平台，助力文博文旅等场景打造虚实融合、乐趣横生的导览体验。',
      },
      {
        logo: '/image/pc/product-title2.png',
        bg: '/image/pc/product-bg1.png',
        title: '互娱',
        logoText: '互娱',
        value: 2,
        description:
          '围绕 AR 设备＋云端＋小程序，构建的一站式 AR 智慧导览平台，助力文博文旅等场景打造虚实融合、乐趣横生的导览体验。',
      },
      {
        logo: '/image/pc/product-title3.png',
        bg: '/image/pc/product-bg1.png',
        title: '教育',
        logoText: '教育',
        value: 3,
        description:
          '围绕 AR 设备＋云端＋小程序，构建的一站式 AR 智慧导览平台，助力文博文旅等场景打造虚实融合、乐趣横生的导览体验。',
      },
    ],
    knowMore: '/image/pc/know-more.png',
  },
  [PageEnum.IndustryCase]: {
    title: '行业案例',
    subTitle: 'Industry cases',
    cases: [
      {
        label: '文旅',
        value: 1,
        children: [
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '上海自然博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '古埃及博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '良渚博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
        ],
      },
      {
        label: '互娱',
        value: 2,
        children: [
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '上海自然博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '古埃及博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '良渚博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
        ],
      },
      {
        label: '教育',
        value: 3,
        children: [
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '上海自然博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '古埃及博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '良渚博物馆',
            description:
              '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
          },
        ],
      },
    ],
    knowMore: '/image/pc/know-more.png',
  },
  [PageEnum.Information]: {
    title: '资讯动态',
    subTitle: 'Information',
    infos: [
      {
        label: '三星堆博物馆今日开馆，日流量达 5000 人，创纪录',
        value: 1,
        bg: '/image/pc/information-bg1.png',
        description:
          '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。',
        date: '2014/02/20',
      },
      {
        label: '若琪看看小程序上线良渚博物馆，展馆动态随时了解',
        value: 2,
        bg: '/image/pc/information-bg1.png',
        description:
          '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。',
        date: '2014/02/20',
      },
      {
        label: 'Rokid Studio 套装帮助杭州师范小学学的同学探索宇宙世界',
        value: 3,
        bg: '/image/pc/information-bg1.png',
        description:
          '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。',
        date: '2014/02/20',
      },
    ],
  },
  common: {
    close: '/image/common/close.png',
    submit: '/image/common/submit.png',
    businessBtn: '/image/common/business-consulting.png',
    right: '/image/common/right.png',
    hoverButton: '/image/common/hover-button-bg.png',
    hoverButtonHover: '/image/common/hover-button-bg-hover.png',
    hoverButtonDark: '/image/common/hover-button-bg-dark.png',
    hoverButtonDarkHover: '/image/common/hover-button-bg-dark-hover.png',
  },
  [HomeTabEnum.Product]: {
    list: [
      {
        title: '若琪看看',
        value: 1,
        icon: '/image/pc/product/product-icon1.png',
        description:
          '围绕 AR设备＋云端＋小程序，构建的一站式AR智慧导览平台，助力文博文旅等场景打造虚实融合、乐趣横生的导览体验。',
        children: [
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 1,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 2,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 3,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 4,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 5,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 6,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
        ],
      },
      {
        title: '乐奇玩玩',
        value: 2,
        icon: '/image/pc/product/product-icon1.png',
        description:
          '围绕 AR设备＋云端＋小程序，构建的一站式AR智慧导览平台，助力文博文旅等场景打造虚实融合、乐趣横生的导览体验。',
        children: [
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 1,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 2,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 3,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 4,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 5,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 6,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
        ],
      },
      {
        title: '大象 XR 教育',
        value: 3,
        icon: '/image/pc/product/product-icon1.png',
        description:
          '围绕 AR设备＋云端＋小程序，构建的一站式AR智慧导览平台，助力文博文旅等场景打造虚实融合、乐趣横生的导览体验。',
        children: [
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 1,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 2,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 3,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 4,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 5,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 6,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
        ],
      },
    ],
    case: {
      title: '产品案例',
      subTitle: 'Product cases',
      bg: '/image/pc/product/bg.png',
      knowMore: '/image/pc/know-more.png',

      cases: [
        {
          bg: '/image/pc/industry-case-bg1.png',
          title: '上海自然博物馆',
          description:
            '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
        {
          bg: '/image/pc/industry-case-bg1.png',
          title: '古埃及博物馆',
          description:
            '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
        {
          bg: '/image/pc/industry-case-bg1.png',
          title: '良渚博物馆',
          description:
            '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
      ],
    },
    otherProduct: {
      title: '其他产品',
      subTitle: 'Other products',
      children: [
        {
          image: '/image/pc/product/other-product.png',
          icon: '/image/pc/product/product-icon1.png',
          title: '乐奇玩玩',
          subTitle: '互娱产品集合体',
        },
        {
          image: '/image/pc/product/other-product.png',
          icon: '/image/pc/product/product-icon1.png',
          title: '大象 XR 教育',
          subTitle: '课堂教学一体化解决',
        },
      ],
    },
  },
  [HomeTabEnum.Solution]: {
    list: [
      {
        title: 'AR智慧导览解决方案',
        value: 1,
        bg: '/image/pc/product/bg.png',
        description:
          '基于 Al+AR+空间交互等技术能力，赋能文博文旅等业务场景，为游览者带来新世代、沉浸式、科幻感的智慧导览体验，感受“一眼一千年，一镜一世界”的科技和文化魅力。',
        children: [
          {
            image: '/image/pc/product/product-image1.png',
            title: '文博文化场景',
            value: 1,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 2,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 3,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 4,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 5,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 6,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
        ],
      },
      {
        title: 'AR 数字主题空间盈利方案',
        value: 2,
        bg: '/image/pc/product/bg.png',
        description:
          '基于 Al+AR+空间交互等技术能力，赋能文博文旅等业务场景，为游览者带来新世代、沉浸式、科幻感的智慧导览体验，感受“一眼一千年，一镜一世界”的科技和文化魅力。',
        children: [
          {
            image: '/image/pc/product/product-image1.png',
            title: '文博文化场景',
            value: 1,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 2,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 3,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 4,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 5,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 6,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
        ],
      },
      {
        title: 'AR 创新教学解决方案',
        value: 3,
        bg: '/image/pc/product/bg.png',
        description:
          '基于 Al+AR+空间交互等技术能力，赋能文博文旅等业务场景，为游览者带来新世代、沉浸式、科幻感的智慧导览体验，感受“一眼一千年，一镜一世界”的科技和文化魅力。',
        children: [
          {
            image: '/image/pc/product/product-image1.png',
            title: '文博文化场景',
            value: 1,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 2,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 3,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 4,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 5,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image1.png',
            title: '科幻电影般的 AR 体验',
            value: 6,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
        ],
      },
    ],
    case: {
      title: '客户案例',
      subTitle: 'Customer cases',
      knowMore: '/image/pc/know-more.png',
      allCase: '/image/common/all-case-btn.png',
      cases: [
        {
          bg: '/image/pc/industry-case-bg1.png',
          title: '上海自然博物馆',
          description:
            '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
        {
          bg: '/image/pc/industry-case-bg1.png',
          title: '古埃及博物馆',
          description:
            '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
        {
          bg: '/image/pc/industry-case-bg1.png',
          title: '良渚博物馆',
          description:
            '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
      ],
    },
  },
  [HomeTabEnum.IndustryCase]: {
    knowMore: '/image/pc/know-more.png',
    tabList: [
      {
        label: '全部',
        value: 1,
      },
      {
        label: '文旅',
        value: 2,
      },
      {
        label: '互娱',
        value: 3,
      },
      {
        label: '教育',
        value: 4,
      },
    ],
    list: [
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '上海自然博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '古埃及博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '良渚博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '上海自然博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '古埃及博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '良渚博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '上海自然博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '古埃及博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '良渚博物馆',
        description:
          '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
    ],
  },
  [HomeTabEnum.AboutUs]: {
    title: '关于我们',
    subTitle: 'About us',
    bg: '/image/pc/product/bg.png',
    description:
      'Rokid 数字文化集团创立于2014年，是一家专注于人机交互技术的产品平台公司，2018年即被评为国家高新技术企业。Rokid作为行业的探索者、领跑者，目前致力于AR眼镜等软硬件产品的研发及以YodaOs操作系统为载体的生态构建。公司通过语音识别、自然语言处理、计算机视觉、光学显示、芯片平台、硬件设计等多领域研究，将前沿的Al和AR技术与行业应用相结合，为不同垂直领域的客户提供全栈式解决方案，有效提升用户体验、助力企业增效、赋能公共安全，其Al AR产品己在全球八十余个国家和地区投入使用。',
  },
};

export default data;
