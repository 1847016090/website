import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { HomeTabEnum, HOME_TAB_LIST, PageEnum } from '../../utils/constants';
import { debounce, useWindowHeight } from '@/utils/common';

import SITE_DATA from '../../utils/pageData';
import { relative } from 'path';
const common = SITE_DATA.common;

export const HoverButton = ({
  children,
  height = 38,
  color = 'white',
  onClick,
  className = '',
  width = 54,
  arrow = false,
}: {
  children: any;
  width?: number;
  height?: number;
  color?: 'white' | 'black';
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
}) => {
  const black = common.hoverButtonDark;
  const blackHover = common.hoverButtonDarkHover;
  const white = common.hoverButton;
  const whiteHover = common.hoverButtonHover;
  const b = color === 'white' ? white : black;
  const bh = color === 'white' ? whiteHover : blackHover;
  const right = common.right;
  return (
    <div
      style={{
        width,
        color,
        height,
        borderImageSlice: '36 36 36 36',
        borderImageWidth: '20px 20px 20px 20px',
        borderImageOutset: '0px 0px 0px 0px',
        borderImageRepeat: 'stretch stretch',
        borderImageSource: `url(${b})`,
        zIndex: 1,
      }}
      className={`relative group px-[11px] flex justify-center items-center cursor-pointer ${className}`}
      onClick={() => onClick?.()}
    >
      <div
        style={{
          height,
          borderImageSlice: '36 36 36 36',
          borderImageWidth: '20px 20px 20px 20px',
          borderImageOutset: '0px 0px 0px 0px',
          borderImageRepeat: 'stretch stretch',
          borderImageSource: `url(${bh})`,
        }}
        className="absolute left-0 top-0 right-0 bottom-0 w-full transition-[opacity_0.3s] opacity-0 group-hover:opacity-100 px-[11px] flex justify-center items-center flex-nowrap"
      ></div>
      <div style={{ whiteSpace: 'noWrap' }}>{children}</div>
      {arrow && <Image width={16} height={16} src={right} alt="" />}
    </div>
  );
};

export const HoverText = ({
  children,
  lineWidth = 40,
  lineToBottom = 8,
  checked = false,
  lineBg = '#333333',
  onClick,
}: {
  children: any;
  lineWidth?: number;
  lineToBottom?: number;
  checked?: boolean;
  lineBg?: string;
  onClick?: Function;
}) => {
  return (
    <div
      className="group relative inline-block cursor-pointer"
      onClick={() => onClick?.()}
    >
      <div
        style={{
          width: checked ? '100% !important' : `${lineWidth}px`,
          bottom: `-${lineToBottom}px`,
          backgroundColor: lineBg,
        }}
        className={`transition-[width_3s] h-[2px] left-0 absolute group-hover:!w-full`}
      />
      {children}
    </div>
  );
};

export const Tabs = ({
  list,
  className,
}: {
  list: { label: string; value: number | string }[];
  className?: string;
}) => {
  const [selected, setSelected] = useState<string | number>('');
  const onTabClick = (key: string | number) => {
    setSelected(key);
  };

  return (
    <div className={`flex gap-12 items-center cursor-pointer ${className}`}>
      {list.map(({ label, value }) => (
        <div
          key={value}
          className="relative leading-6"
          onClick={() => onTabClick(value)}
        >
          {label}
          {selected === value && (
            <div
              className={`w-full bottom-[-7px] h-[3px] absolute left-0 bg-black`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export const HomeTabs = ({
  isHomePage,
  className = '',
  onChange,
  value,
  onMouseEnter,
}: {
  isHomePage: boolean;
  className?: string;
  onChange?: (key: HomeTabEnum, data: any) => void;
  value?: HomeTabEnum;
  onMouseEnter?: (key: HomeTabEnum) => void;
}) => {
  const [selected, setSelected] = useState(HomeTabEnum.HomePage);
  const router = useRouter();
  const timerCount = useRef<any>();
  const onTabClick = (key: HomeTabEnum, rest: any) => {
    if (rest.path) {
      router.push(rest.path);
    }
    console.log('rest', rest);
    setSelected(key);
    onChange?.(key, rest);
  };

  const onEnter = (key: HomeTabEnum) => {
    timerCount.current = setTimeout(() => {
      onMouseEnter?.(key);
    }, 300);
  };

  const onLeave = (key: HomeTabEnum) => {
    if (timerCount.current) {
      clearTimeout(timerCount.current);
    }
  };

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
    return () => {
      if (timerCount.current) {
        clearTimeout(timerCount.current);
      }
    };
  }, [value]);
  console.log('selected', selected);
  return (
    <div className={`flex gap-12 items-center cursor-pointer ${className}`}>
      {HOME_TAB_LIST.map((item) => {
        console.log('selected', selected);
        console.log('value', item.value);
        console.log('selected === value', selected === value);
        return (
          <div
            key={item.value}
            className="relative leading-6"
            onClick={() => onTabClick(item.value, item)}
            onMouseEnter={() => onEnter(item.value)}
            onMouseLeave={() => onLeave(item.value)}
          >
            {selected === item.value ? (
              <>
                {item.label}
                {selected === item.value && (
                  <div
                    className={`w-full transition-[width_0.3s] bottom-[-7px] h-[3px] absolute left-0 ${
                      isHomePage ? 'bg-white' : 'bg-black'
                    }`}
                  />
                )}
              </>
            ) : (
              <HoverText lineWidth={0} lineBg={isHomePage ? '#fff' : '#333'}>
                {item.label}
              </HoverText>
            )}
          </div>
        );
      })}
    </div>
  );
};

/** 产品/解决方案 弹窗 */
export const TabDrawer = ({
  selected,
  onChange,
  className,
  onDrawerVisibleChange,
}: {
  selected: HomeTabEnum;
  onChange?: (key: HomeTabEnum) => void;
  className?: string;
  onDrawerVisibleChange?: (visible: boolean) => void;
}) => {
  const [current, setCurrent] = useState(HomeTabEnum.Product);
  const [data, setData] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    setCurrent(selected);
    const d = HOME_TAB_LIST.find((v) => v.value === selected);
    setData(d);
  }, [selected]);

  const onTabChange = (key: HomeTabEnum, data: any) => {
    console.log('key', key);
    console.log('data', data);
    setCurrent(key);
    setData(data);
    onChange?.(key);
  };
  console.log('data', data);
  return (
    <div
      className={`fixed left-0 top-0 right-0 w-screen h-screen z-100 ${className}`}
    >
      <div
        className="animate-show-drawer-mask w-full h-full absolute left-0 top-0 right-0 z-[1]"
        onClick={() => onDrawerVisibleChange?.(false)}
      />
      <div className="absolute right-0 top-0 bottom-0 w-[624px] h-full bg-white z-[2] pt-[24px] px-[88px] box-border animate-show-drawer">
        <HomeTabs isHomePage={false} onChange={onTabChange} value={current} />
        <div className="mt-[48px] flex justify-between text-[24px] leading-[32px]">
          <div className="text-[#3D3D3D] font-bold">{data?.label}</div>
          <div className="text-[#EDEDED]">{data?.subTitle}</div>
        </div>
        <div className="flex flex-col gap-[16px] mt-[24px]">
          {data?.children?.map((c: any) => (
            <div
              onClick={() => {
                router.push(c.path);
                onDrawerVisibleChange?.(false);
              }}
              key={c.value}
              className="group py-[14px] box-border border-b-[2px] hover:border-b-[2px] border-[#e7e7e7] hover:border-[#333333] border-solid w-[448px] flex items-center justify-between cursor-pointer"
              style={{ transition: 'all 0.3s' }}
            >
              <div
                style={{ transition: 'all 0.3s' }}
                className="text-[24px] box-border leading-[32px] text-[#999999] group-hover:text-[#333333] font-bold"
              >
                {c.label}
              </div>
              <Image
                className="opacity-0 group-hover:opacity-100"
                style={{ transition: 'all 0.3s' }}
                width={24}
                height={24}
                src={common.right}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Header = ({
  isHomePage,
  current,
}: {
  isHomePage: boolean;
  current?: HomeTabEnum;
}) => {
  const [selected, setSelected] = useState(HomeTabEnum.HomePage);
  const [show, setShow] = useState(false);
  const onTabChange = (key: HomeTabEnum) => {
    setSelected(key);
    if (![HomeTabEnum.Product, HomeTabEnum.Solution].includes(key)) {
      setShow(false);
    }
  };

  const onDrawerChange = (key: HomeTabEnum) => {
    setSelected(key);
  };
  const onMouseEnter = (key: HomeTabEnum) => {
    if ([HomeTabEnum.Product, HomeTabEnum.Solution].includes(key)) {
      setSelected(key);
      setShow(true);
    }
  };

  const onDrawerVisibleChange = (visible: boolean = false) => {
    setShow(visible);
  };

  useEffect(() => {
    if (current) {
      setSelected(current);
    }
  }, [current]);

  return (
    <div
      className={`z-20 h-[4.5rem] px-[5.5rem] flex items-center justify-between fixed top-0 left-0 right-0 ${
        isHomePage
          ? 'border-b-[1px] border-transparent border-solid'
          : 'border-b-[1px] border-[rgba(0, 0, 0, 0.1)] border-solid'
      } ${
        isHomePage ? 'bg-transparent' : '!bg-white'
      } transition-[backgroundColor_0.3s]`}
    >
      <Image
        src={`/image/pc/logo-${isHomePage ? 'light' : 'dark'}.png`}
        width={180}
        height={30}
        className="h-[30px] w-[180px]"
        alt=""
      />
      <div className={`text-${isHomePage ? 'white' : 'black'}`}>
        <HomeTabs
          isHomePage={isHomePage}
          onChange={onTabChange}
          value={selected}
          onMouseEnter={onMouseEnter}
        />
      </div>
      {show && (
        <TabDrawer
          selected={selected}
          onChange={onDrawerChange}
          onDrawerVisibleChange={onDrawerVisibleChange}
        />
      )}
    </div>
  );
};

/** 首页 */
const Home = () => {
  const home = SITE_DATA[PageEnum.HomePage];
  return (
    <div
      id={PageEnum.HomePage}
      style={{ backgroundImage: `url(${home.bg})` }}
      className="bg-cover h-screen w-screen"
    >
      <Image
        className="pt-[20.5rem] pl-[9.375rem]"
        alt="slogan"
        width={572}
        height={192}
        src={home.slogan}
      />
    </div>
  );
};

/** 产品 */
const OurProduct = () => {
  const product = SITE_DATA[PageEnum.OurProduct];
  const [cur, setCur] = useState(product.products[0]);
  const router = useRouter();
  const onProductClick = (product: any) => {
    setCur(product);
  };

  useEffect(() => {
    setCur(product.products[0]);
  }, []);

  return (
    <div
      id={PageEnum.OurProduct}
      className="xl:w-[1440px] flex w-full p-[88px] mt-[88px] gap-[78px] box-border"
    >
      <div className="flex gap-[78px]">
        <div className="flex flex-col flex-1">
          <div className="text-[2.375rem]">{product.title}</div>
          <div className="text-[#CCCCCC] text-[1.875rem] mt-2 relative">
            {product.subTitle}
          </div>
          <div className="mt-12 flex gap-4">
            {product.products.map((i) => {
              return (
                <div
                  key={i.value}
                  style={{
                    backgroundImage: `url(${i.bg})`,
                    transition: 'width 0.3s',
                    backdropFilter:
                      cur?.value !== i.value ? 'blur(10px)' : 'none',
                  }}
                  className={`group ${
                    cur.value === i.value ? 'w-[200px]' : 'w-[110px]'
                  } h-[100px] flex justify-center items-center bg-no-repeat bg-cover bg-center relative cursor-pointer`}
                  onClick={() => onProductClick(i)}
                >
                  {cur.value !== i.value && (
                    <div
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                        transition: 'opacity 0.3s',
                      }}
                      className="group-hover:opacity-0 absolute z-[1] left-0 top-0 w-full h-full backdrop-blur-[10px]"
                    ></div>
                  )}
                  <HoverButton>{i.logoText}</HoverButton>
                </div>
              );
            })}
          </div>
          <div className="text-[24px] mt-12">
            <HoverText onClick={() => router.push(`/pc/product/${cur.value}`)}>
              {cur.title}
            </HoverText>
          </div>
          <div className="text-[16px] text-[#666666] leading-7 mt-[18px]">
            {cur.description}
          </div>
          <HoverButton
            className="mt-12 cursor-pointer"
            color="black"
            width={98}
            arrow
            onClick={() => router.push(`/pc/product/${cur.value}`)}
          >
            了解更多
          </HoverButton>
        </div>
        <div
          className="w-[734px] h-[652px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${cur.bg})` }}
        />
      </div>
    </div>
  );
};

/** 行业案例 */
const IndustryCase = () => {
  const industry = SITE_DATA[PageEnum.IndustryCase];
  const cases = industry.cases[0]?.children;
  return (
    <div
      id={PageEnum.IndustryCase}
      className="xl:w-[1440px] flex w-full p-[88px] mt-[88px] pt-0 gap-[78px] box-border flex-col"
    >
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <div className="text-[38px] font-bold">{industry.title}</div>
          <div className="text-[#CCCCCC] text-[30px] leading-[38px]">
            {industry.subTitle}
          </div>
        </div>
        <div className="flex items-center gap-[48px]">
          <Tabs list={industry.cases} className="text-2xl" />
          <HoverButton arrow color="black" width={98}>
            行业案例
          </HoverButton>
        </div>
      </div>
      <div className="flex gap-20">
        {cases.map((c, index) => (
          <div className="flex flex-col" key={index}>
            <Image src={c.bg} width={368} height={328} alt="bg" />
            <div className="text-2xl font-bold mt-6">{c.title}</div>
            <div className="mt-[18px] text-base text-[#666666]">
              {c.description}
            </div>
            <HoverButton className="mt-12" arrow color="black" width={98}>
              了解更多
            </HoverButton>
          </div>
        ))}
      </div>
    </div>
  );
};

/** 底部 */
export const Footer = () => (
  <div className="bg-[#333333] h-[278px] w-full flex flex-col justify-between">
    <div className="flex gap-[254px] justify-center pt-12">
      <div className="flex flex-col gap-4 text-white">
        <div className="text-white text-base font-bold">公司介绍</div>
        <div className="flex flex-col gap-2">
          <div className="text-[14px] opacity-60">企业介绍</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <div className="text-white text-base font-bold">帮助支持</div>
        <div className="flex flex-col gap-2">
          <div className="text-[14px] opacity-60">渠道代理</div>
          <div className="text-[14px] opacity-60">支持中心</div>
          <div className="text-[14px] opacity-60">售后服务</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <div className="text-white text-base font-bold">商务合作</div>
        <div className="flex flex-col gap-2">
          <div className="text-[14px] opacity-60">XXX@rokid.com</div>
          <div className="text-[14px] opacity-60">XXX@rokid.com</div>
        </div>
      </div>
    </div>
    <div className="h-[60px] text-center leading-[60px] text-white opacity-60 font-bold bg-[#1D1D1D]">
      Copyright © 2024 Rokid Inc. All rights reserved.
    </div>
  </div>
);

/** 业务咨询表单 */
const BusinessForm = ({ onClose }: { onClose: Function }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const submitForm = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dataObject = Object.fromEntries(formData);

    console.log('需要传给后端的数据', dataObject); // {name: '', age: '', sex: ''}
  };

  return (
    <div className="fixed  left-0 top-0 right-0 w-screen h-screen flex justify-center items-center">
      <div
        onClick={() => onClose()}
        className="bg-[#000] opacity-50 w-full h-full absolute left-0 top-0 right-0 z-[1]"
      ></div>
      <div className="w-[700px] h-[600px] bg-white relative z-[2] pt-[36px] px-[48px] pb-[55px]">
        <div className="flex justify-between items-center">
          <div className="text-[24px] leading-[32px] text-[#3D3D3D]">
            业务咨询
          </div>
          <Image
            src={common.close}
            width={24}
            height={24}
            alt="关闭"
            onClick={() => onClose()}
          />
        </div>
        <form
          onSubmit={submitForm}
          className="w-full pt-[48px] flex flex-col gap-6"
        >
          <div className="w-full h-[68px] border-solid border-[##d0d0d0] border-b-[1px] flex flex-col justify-between">
            <div className="text-[16px] leading-[24px] text-[#333333] opacity-20">
              姓名
            </div>
            <input
              name="name"
              value={'Andy'}
              className="mb-[8px] border-none outline-none"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full h-[68px] border-solid border-[##d0d0d0] border-b-[1px] flex flex-col justify-center">
            <div className="text-[16px] leading-[24px] text-[#333333] opacity-20">
              公司
            </div>
          </div>
          <div className="w-full h-[68px] border-solid border-[##d0d0d0] border-b-[1px] flex flex-col justify-center">
            <div className="text-[16px] leading-[24px] text-[#333333] opacity-20">
              电话/邮箱
            </div>
          </div>
          <div className="w-full h-[68px] border-solid border-[##d0d0d0] border-b-[1px] flex flex-col justify-center">
            <div className="text-[16px] leading-[24px] text-[#333333] opacity-20">
              咨询业务
            </div>
          </div>
          <button type="submit" className="mt-[24px]">
            <Image width={130} height={38} alt="" src={common.submit} />
          </button>
        </form>
      </div>
    </div>
  );
};

/** 业务咨询 */
const BusinessAsk = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* 业务咨询按钮 */}
      <Image
        width={120}
        height={120}
        src={common.businessBtn}
        alt=""
        className="absolute right-[88px] bottom-[204px]"
        onClick={() => setOpen(true)}
      />
      {open && <BusinessForm onClose={() => setOpen(false)} />}
    </>
  );
};

/** 咨询动态 */
const Information = () => {
  const information = SITE_DATA[PageEnum.Information];
  const [first, ...rest] = information.infos;
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div
        id={PageEnum.Information}
        className="xl:w-[1440px] flex p-[88px] gap-[48px] box-border flex-col items-center justify-center"
      >
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className="text-[38px] font-bold">{information.title}</div>
            <div className="text-[#CCCCCC] text-[30px] leading-[38px]">
              {information.subTitle}
            </div>
          </div>
        </div>
        <div className="w-full flex h-[328px] gap-[88px]">
          <div className="flex gap-6">
            <Image
              src={first.bg}
              width={318}
              height={328}
              alt=""
              className="object-cover"
            />
            <div>
              <div className="mt-6 text-2xl leading-8 text-[#333333]">
                {first.label}
              </div>
              <div className="text-[16px] text-[#666666] leading-6 mt-[34px]">
                {first.description}
              </div>
              <div className="text-[#999999] text-[14px] leading-[22px] mt-[93px]">
                {first.date}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[328px]">
            {rest.map((i) => (
              <div className="flex gap-6 h-[140px]" key={i.value}>
                <Image
                  src={i.bg}
                  width={212}
                  height={140}
                  alt=""
                  className="object-cover w-[212px] h-[140px]"
                />
                <div>
                  <div className="text-2xl leading-8 text-[#333333] mt-[15px]">
                    {i.label}
                  </div>
                  <div className="text-[#999999] text-[14px] leading-[22px] mt-[32px]">
                    {i.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <BusinessAsk />
    </div>
  );
};

const PAGE_LIST = [
  PageEnum.HomePage,
  PageEnum.OurProduct,
  PageEnum.IndustryCase,
  PageEnum.Information,
];

const Pc = (props: any) => {
  const [page, setPage] = useState(PageEnum.HomePage);
  const last = useRef<any>(null);
  const windowHeight = useWindowHeight();
  useEffect(() => {
    if (windowHeight) {
      last.current = windowHeight;
    }
  }, [windowHeight]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > last.current) {
        setPage(PageEnum.OurProduct);
      } else {
        setPage(PageEnum.HomePage);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-auto flex flex-col justify-center items-center relative">
      <Header isHomePage={page === PageEnum.HomePage} />
      <Home />
      <OurProduct />
      <IndustryCase />
      <Information />
    </div>
  );
};

export default Pc;
