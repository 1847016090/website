import React, { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Header, Footer, HoverText, HoverButton } from '../../index';
import { HomeTabEnum, PageEnum } from '@/utils/constants';
import SITE_DATA from '../../../../utils/pageData';
import { useParams } from 'next/navigation';
import { useWindowHeight } from '@/utils/common';
import { useRouter } from 'next/router';

const Case = () => {
  const params = useParams();
  const current: any = SITE_DATA[HomeTabEnum.Solution].list?.find(
    (i) => i.value === Number(params?.id),
  );
  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="xl:w-[1440px] p-[88px] pt-0">
        <div className="w-full h-[312px] flex flex-col gap-[24px] bg-white justify-center px-[88px]">
          <div className="text-[48px] leading-[56px] font-bold tracking-wider">
            {current.title}
          </div>
          <div className="text-[16px] leading-[28px] text-[#666666]">
            {current.description}
          </div>
        </div>
        <div className="flex flex-col gap-12 bg-white">
          {current.children.map((c: any, index: number) => (
            <div className="flex h-[440px]" key={c.value}>
              <div className="flex flex-col  px-[88px] justify-center">
                <div className="text-[38px] leading-[46px] text-[#EDEDED]">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div className="text-[24px] leading-[32px] text-[#333333] mt-[8px]">
                  {c.title}
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666] mt-[8px]">
                  {c.description}
                </div>
              </div>
              <Image width={740} height={440} alt="" src={c.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCase = () => {
  const params = useParams();
  const current: any = SITE_DATA[PageEnum.IndustryCase].cases.find(
    (i) => i.value === Number(params?.id),
  );
  [PageEnum.IndustryCase];
  const product = SITE_DATA[HomeTabEnum.Solution].case;
  const router = useRouter();
  return (
    <div className="bg-white w-screen flex justify-center ">
      <div className="xl:w-[1440px] flex gap-[78px] p-[88px]  box-border flex-col items-center justify-center">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className="text-[38px] font-bold">{product.title}</div>
            <div className="text-[#CCCCCC] text-[30px] leading-[38px]">
              {product.subTitle}
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          {current.children.map((c: any, index: number) => (
            <div className="flex flex-col" key={index}>
              <Image src={c.bg} width={368} height={328} alt="bg" />
              <div className="text-2xl font-bold mt-6">
                <HoverText
                  onClick={() => {
                    router.push(`/pc/cases/${c.value}`);
                  }}
                >
                  {c.title}
                </HoverText>
              </div>
              <div className="mt-[18px] text-base text-[#666666]">
                {c.description}
              </div>
              <HoverButton
                arrow
                color="black"
                className="mt-12"
                width={98}
                onClick={() => {
                  router.push(`/pc/cases/${c.value}`);
                }}
              >
                了解更多
              </HoverButton>
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
      if (scrollTop > 560) {
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
  console.log('params', params);
  const current: any = SITE_DATA[HomeTabEnum.Product].list.find(
    (i) => i.value === Number(params?.id),
  );

  return (
    <div className="bg-[#F2F2F2] relative pt-[560px]">
      <div
        style={{
          backgroundImage: `url('${current.bg}')`,
        }}
        className="h-[810px] w-full absolute left-0 right-0 top-0 bg-cover z-0 bg-no-repeat"
      ></div>
      <Header
        isHomePage={page === PageEnum.HomePage}
        current={HomeTabEnum.Solution}
      />
      <Case />
      <ProductCase />
      <Footer />
    </div>
  );
};

export default Product;
