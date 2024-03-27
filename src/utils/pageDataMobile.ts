import { HomeTabEnum, PageEnum } from './constants'

const data = {
  [PageEnum.HomePage]: {
    logoBlack: '/image/mobile/logo-black.png',
    bg: '/image/mobile/bg.png',
    slogan: '/image/mobile/slogan.png',
    logo: '/image/mobile/logo.png',
  },
  [PageEnum.OurProduct]: {
    title: '我们的产品',
    subTitle: 'Our products',
    products: [
      {
        logo: '/image/pc/product-title1.png',
        bg: '/image/pc/product/our-product1.png',
        icon: '/image/pc/product/product-icon1.png',
        logoText: '文旅',
        title: '若琪看看',
        subTitle: '若琪看看',
        subDescription: '互娱产品集合体',
        value: 1,
        description:
          '围绕 AR 设备＋云端＋小程序，构建的一站式 AR 智慧导览平台，助力文博文旅等场景打造虚实融合、乐趣横生的导览体验。',
      },
      {
        logo: '/image/pc/product-title2.png',
        bg: '/image/pc/product/our-product2.png',
        icon: '/image/pc/product/product-icon1.png',
        title: '互娱',
        logoText: '互娱',
        subTitle: '若琪玩玩',
        subDescription: '互娱产品集合体',
        value: 2,
        description:
          '由 AR 技术驱动的新一代互动娱乐平台，为线下商业打造一站式数字空间活动方案及丰富的互动玩法，体验空间计算时代的沉浸式快乐。',
      },
      {
        logo: '/image/pc/product-title3.png',
        bg: '/image/pc/product/our-product3.png',
        icon: '/image/pc/product/product-icon3.png',
        title: '教育',
        logoText: '教育',
        subTitle: '大象 XR 教育',
        subDescription: '课堂教学一体化解决',
        value: 3,
        description:
          '基于 AR、AI、人机交互与动态环境建模技术，构建 XR 教学平台；通过 A R眼镜，实现虚实融合的互动学习。',
      }
    ],
    knowMore: '/image/mobile/know-more.png',
  },
  [PageEnum.IndustryCase]: {
    title: '行业案例',
    subTitle: 'Industry cases',
    cases: [
      {
        label: '文旅',
        value: 1,
        bg: '/image/pc/product/our-product1.png',
        children: [
          {
            bg: '/image/pc/industry-case-bg1.png',
            title: '上海自然博物馆',
            description: '探索自然奥秘，展示生物多样性，科学教育与互动体验的完美融合。',
            value: 1,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
          },
          {
            bg: '/image/pc/industry-case-bg2.png',
            title: '古埃及博物馆',
            description: '古文明宝库，法老遗珍，图坦卡蒙宝藏，历史与艺术的殿堂。',
            value: 2,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
          },
          {
            bg: '/image/pc/industry-case-bg3.png',
            title: '良渚博物馆',
            description: '展现五千年良渚文明，玉器精湛，古城遗址，是中国古代文化的重要见证。',
            value: 3,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
          },
        ],
      },
      {
        label: '互娱',
        value: 2,
        bg: '/image/pc/product/our-product2.png',
        children: [
          {
            bg: '/image/pc/industry-case-bg4.png',
            title: '3D 奥特曼 AR 数字空间展',
            description: 'Rokid 联合奥特曼 IP，打造全球首个空间计算线下体验空间。',
            value: 4,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
          },
          {
            bg: '/image/pc/industry-case-bg2.png',
            title: '洛阳博物馆',
            description: '千年帝都文脉，馆藏丰富，从古代青铜器到唐三彩，尽显洛阳深厚历史底蕴。',
            value: 5,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
          },
          {
            bg: '/image/pc/industry-case-bg3.png',
            title: '广东省博物馆',
            description:
              '位于广州珠江新城，展示广东历史文化，自然遗产丰富，是岭南文化的重要展示窗口。',
            value: 6,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
          },
        ],
      },
      {
        label: '教育',
        value: 3,
        bg: '/image/pc/product/our-product3.png',
        children: [
          {
            bg: '/image/pc/industry-case-bg7.png',
            title: '杭州市澎致小学',
            description: '元宇宙数智课堂，沉浸式学习探索',
            value: 7,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
          },
          {
            bg: '/image/pc/industry-case-bg8.png',
            title: '永康市大司巷小学',
            description: '名画美育课堂，AR赋能沉浸式名画赏析',
            value: 8,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
          },
          {
            bg: '/image/pc/industry-case-bg9.png',
            title: '杭州市三墩小学',
            description: 'AR 美育课堂，新型教学模式探索',
            value: 9,
            detail: [
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg1.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg2.png',
              },
              {
                description:
                  '深度整合 AR、AI、人机交互与动态环境建模技术，构建前沿 XR 教学平台。借助 AR 眼镜，实现虚实融合的互动教学，适用于多学科课堂教学、课后自主探究及主题空间实践教学。通过互动、沉浸、体验式的创新教学方式帮助学生突破想象力局限，激发学习兴趣，提升教师数智化教学水平，助力学校打造人工智能创新校，引领教育新风尚。',
                bg: '/image/pc/case/bg3.png',
              },
            ],
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
        bg: '/image/mobile/information-bg1.png',
        description:
          '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。',
        date: '2014/02/20',
      },
      {
        label: '若琪看看小程序上线良渚博物馆，展馆动态随时了解',
        value: 2,
        bg: '/image/mobile/information-bg2.png',
        description:
          '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。',
        date: '2014/02/20',
      },
      {
        label: 'Rokid Studio 套装帮助杭州师范小学学的同学探索宇宙世界',
        value: 3,
        bg: '/image/mobile/information-bg3.png',
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
  },
  [HomeTabEnum.Product]: {
    list: [
      {
        title: '若琪看看',
        value: 1,
        icon: '/image/pc/product/product-icon1.png',
        bg: '/image/pc/product/our-product1.png',
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
            image: '/image/pc/product/product-image2.png',
            title: '丰富内容，大饱眼福',
            value: 2,
            description:
              '通过若琪看看智慧导览平台，让科幻电影的想象变为现实。游览者戴上 AR 眼镜设备，每个展品或景点都能出现虚拟内容，帮助游览者在真实空间。',
          },
          {
            image: '/image/pc/product/product-image3.png',
            title: '智慧导览有个伴',
            value: 3,
            description:
              '当游览者在探索 AR 导览体验时，通过数字人技术自定义生成的导览精灵将伴随游览者身边。导览精灵将会根据游览者的喜好规划参观路径并给游览者一些小 Tips。',
          },
          {
            image: '/image/pc/product/product-image4.png',
            title: '满足不同年龄段的探索者',
            value: 4,
            description:
              '在文博文旅场景中，不论是哪个年龄段的游览者，若琪看看会根据游览者的认知水平和语言偏好推送不同的，基于 AIGC 生成的讲解内容，同时游览者关于展品的任何问题。',
          },
          {
            image: '/image/pc/product/product-image5.png',
            title: '寓教于乐，父母孩子都喜欢',
            value: 5,
            description:
              '通过设置任务关卡和互动游戏的方式，让父母和孩子一起体验 AR 智慧导览。孩子在游戏过程中获取知识，父母在陪伴过程中收获快乐，一起乐在其中。',
          },
          {
            image: '/image/pc/product/product-image6.png',
            title: '来都来了，不能空手而归',
            value: 6,
            description:
              '游览者在游览结束后，将自动生成游览者的专属足迹和参观游记。游览者可以将其分享给朋友，或者制作成纪念品带走留言。让每次游览体验都留下独特回忆。',
          },
        ],
      },
      {
        title: '乐奇玩玩',
        value: 2,
        icon: '/image/pc/product/product-icon1.png',
        bg: '/image/pc/product/our-product2.png',
        description:
          '由 AR 技术驱动的新一代互动娱乐平台，为线下商业打造一站式数字空间活动方案及丰富的互动玩法，体验空间计算时代的沉浸式快乐。',
        children: [
          {
            image: '/image/pc/product/product-image1.png',
            title: '超酷！超先锋！',
            value: 1,
            description:
              '基于 IP 世界观量身打造刺激的线下 AR 主题体验，包含手势打怪兽、空间音游、赛车竞速、剧本杀、沉浸式解密等丰富的互动玩法，在数字空间中戴上 Rokid AR眼镜即刻开始挑战，成为征服全场的顶流大师。',
          },
          {
            image: '/image/pc/product/product-image2.png',
            title: '身临其境于虚实之间',
            value: 2,
            description:
              '利用 AR 的空间计算能力，随时将线空间一镜变为故事中的异世界，让二次元偶像以及故事中经典形象降临眼前，并可与他们直接通过语音、触摸等方式进行面对面互动，是粉丝必须一试的场地限定体验。',
          },
          {
            image: '/image/pc/product/product-image7.png',
            title: '咔嚓，奇妙的快乐瞬间',
            value: 3,
            description:
              '全新场地打卡方式，无论是在现实空间中直接与虚拟角色亲密合影，还是化身成 IP 世界观中的角色使用必杀技，现在这些曾经在幻想中的影像都能在现场成真，能留下你在异世界存在的珍贵记忆，并分享到朋友圈，成为全村最靓的仔。',
          },
          {
            image: '/image/pc/product/product-image4.png',
            title: '好玩的，你也能拥有',
            value: 4,
            description:
              '不止是线下体验，我们使用 AR 技术打造了次时代的周边产品，为传统谷子及文创产品植入了应用 AR 技术的炫酷新体验，让周边不止是一个静态展示物，还能把平面图像变成立体形象，让三维周边放大招，让体验者把精彩的 AR 数字体验带回家。',
          },
        ],
      },
      {
        title: '大象 AR 教育',
        value: 3,
        icon: '/image/pc/product/product-icon3.png',
        bg: '/image/pc/product/our-product3.png',
        description:
          '基于 AR、AI、人机交互与动态环境建模技术，构建 XR 教学平台；通过 A R眼镜，实现虚实融合的互动学习。',
        children: [
          {
            image: '/image/pc/product/product-image8.png',
            title: '沉浸其中，教学来“真”的',
            value: 1,
            description:
              'AR辅助老师将教学重难点动态、立体、交互式展现，带给学生；师生互动的沉浸式学习，帮助学生更好地理解知识点。',
          },
          {
            image: '/image/pc/product/product-image2.png',
            title: '身临其境，“走进”书本中',
            value: 2,
            description:
              '通过 AR 眼镜走进虚实融合的交互空间，身临其境地去感受各类主题空间。智慧党建、数字非遗、逐梦航天、动物世界、梦幻海洋等众多标准化场景，形成了创新的、可深度参与的主题课堂。',
          },
          {
            image: '/image/pc/product/product-image9.png',
            title: '虚实互动，“动手”学知识',
            value: 3,
            description:
              '通过虚实交互，学生可在美术、科技、运动、等场景下深度探究学习的新模式。例如：体验运动原理，体验空间绘画等，打开孩子“眼界”，增强学习兴趣，乐享学习。',
          },
          {
            image: '/image/pc/product/product-image10.png',
            title: '自由设计课程，“画”出知识',
            value: 4,
            description:
              '基于大象 AR 教育平台资源中心、编辑器等功能；可轻松创作教师心中所想的课程内容；辅助老师结合针对不同学科、不同知识点、创作最适合学生的 AR 课程。',
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
          description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
        {
          bg: '/image/pc/industry-case-bg1.png',
          title: '古埃及博物馆',
          description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
        {
          bg: '/image/pc/industry-case-bg1.png',
          title: '良渚博物馆',
          description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
        },
      ],
    },
  },
  [HomeTabEnum.IndustryCase]: {
    bg: '/image/pc/product/product-image1.png',
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
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '古埃及博物馆',
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '良渚博物馆',
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '上海自然博物馆',
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '古埃及博物馆',
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '良渚博物馆',
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '上海自然博物馆',
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '古埃及博物馆',
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
      },
      {
        bg: '/image/pc/industry-case-bg1.png',
        title: '良渚博物馆',
        description: '大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。',
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
}

export default data
