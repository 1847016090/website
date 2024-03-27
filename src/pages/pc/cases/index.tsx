import React, { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Header, Footer, Tabs, HoverButton, HoverText } from '../index';
import { HomeTabEnum, PageEnum } from '@/utils/constants';
import SITE_DATA from '../../../utils/pageData';
import { useRouter } from 'next/router';
import { useWindowHeight } from '@/utils/common';

const Case = () => {
  const [cur, setCur] = useState<any>(0);
  const [list, setList] = useState<any>(null);
  const tabList = [{ label: '全部', value: 0 }].concat(
    SITE_DATA[PageEnum.OurProduct].products?.map((i) => ({
      label: i.logoText,
      value: i.value,
    })),
  );
  const current = SITE_DATA[HomeTabEnum.IndustryCase];

  const onTabChange = (key: number) => {
    setCur(key);
    if (key === 0) {
      const list = SITE_DATA[PageEnum.IndustryCase].cases.reduce(
        (all: any, cur) => {
          all = [...all, ...cur.children];
          return all;
        },
        [],
      );
      setList(list);
    } else {
      const current = SITE_DATA[PageEnum.IndustryCase].cases.find(
        (i) => i.value === key,
      );
      setList(current?.children);
    }
  };

  useEffect(() => {
    const list = SITE_DATA[PageEnum.IndustryCase].cases.reduce(
      (all: any, cur) => {
        all = [...all, ...cur.children];
        return all;
      },
      [],
    );
    console.log('list', list);
    setList(list);
  }, []);
  console.log('list', list);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="xl:w-[1440px] p-[88px] flex flex-col items-center">
        <Tabs
          list={tabList}
          className="text-[24px]"
          value={cur}
          onChange={onTabChange}
        />
        <div className="grid grid-cols-3 mt-[55px] gap-[80px]">
          {list?.map((c: any, index: number) => (
            <div
              className="group flex flex-col h-[464px] border-[#e8e8e8] border-b-[2px] border-solid hover:border-black hover:border-b-[3px] transition-[all_0.3s]"
              key={index}
            >
              <div className="h-[368px] w-[368px] group-hover:h-[240px] transition-[height.3s] overflow-hidden">
                <Image
                  width={368}
                  className="h-[368px]"
                  height={368}
                  alt=""
                  src={c.bg}
                />
              </div>
              <div className="h-[96px] group-hover:h-[224px] flex flex-col justify-center">
                <div
                  className="group text-[24px] leading-[32px] font-bold cursor-pointer relative inline-block"
                  onClick={() => {
                    router.push(`/pc/cases/${c.value}`);
                  }}
                >
                  {/* <div
                    style={{
                      width: '40px',
                      bottom: `-8px`,
                      backgroundColor: '#000',
                    }}
                    className={`hidden group-hover:block transition-[width_0.6s] h-[2px] left-0 absolute group-hover:!w-full`}
                  /> */}
                  {c.title}
                </div>
                <div className="hidden opacity-0 group-hover:block group-hover:opacity-100 text-[16px] leading-[24px] text-[#666666] mt-[18px]">
                  {c.description}
                </div>
                <HoverButton
                  arrow
                  color="black"
                  className="mt-[25px] hidden group-hover:flex"
                  width={98}
                  onClick={() => {
                    router.push(`/pc/cases/${c.value}`);
                  }}
                >
                  了解更多
                </HoverButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Product = (props: any) => {
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
      if (scrollTop > 810) {
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
    <div className="bg-white before:bg-[url('/image/pc/product/bg.png')] before:w-full before:h-[810px] before:absolute relative before:left-0 before:top-0 before:right-0 before:bg-cover pt-[810px] before:z-0 before:bg-no-repeat">
      <Header
        isHomePage={page === PageEnum.HomePage}
        current={HomeTabEnum.IndustryCase}
      />
      <Case />
      <Footer />
    </div>
  );
};

export default Product;
