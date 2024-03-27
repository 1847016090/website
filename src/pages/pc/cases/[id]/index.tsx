import React, { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Header, Footer, Tabs } from '../../index';
import { HomeTabEnum, PageEnum } from '@/utils/constants';
import SITE_DATA from '@/utils/pageData';
import { useParams } from 'next/navigation';
import { useWindowHeight } from '@/utils/common';

const Case = () => {
  const params = useParams();
  const cases = SITE_DATA[PageEnum.IndustryCase].cases;
  const current = cases.reduce((all, cur) => {
    const item = cur?.children?.find((i: any) => i.value === Number(params.id));
    if (item) {
      all = { ...item };
    }
    return all;
  }, null as any);
  console.log('current', current);
  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="xl:w-[1440px] p-[88px] px-[292px] flex flex-col ">
        <div className="text-[48px] leading-[56px] font-bold tracking-wider">
          {current.title}
        </div>
        <div className="mt-[24px] flex flex-col gap-[64px]">
          {current.detail?.map((i: any, index: number) => (
            <div className="flex flex-col gap-[32px]" key={index}>
              <div className="text-[16px] leading-[28px] text-[#666666]">
                {i.description}
              </div>
              <Image src={i.bg} width={856} height={388} alt="暂无" />
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

  const params = useParams();
  const cases = SITE_DATA[PageEnum.IndustryCase].cases;
  const current = cases.reduce((all, cur) => {
    const item = cur?.children?.find((i: any) => i.value === Number(params.id));
    if (item) {
      all = { ...cur };
    }
    return all;
  }, null as any);
  return (
    <div className="bg-[#F2F2F2] relative pt-[810px]">
      <div
        style={{
          backgroundImage: `url('${current.bg}')`,
        }}
        className="h-[810px] w-full absolute left-0 right-0 top-0 bg-cover z-0 bg-no-repeat"
      ></div>
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
