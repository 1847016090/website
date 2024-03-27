import React, { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Header, Footer, HoverButton, HoverText } from '../../index';
import { HomeTabEnum, PageEnum } from '@/utils/constants';
import SITE_DATA from '../../../../utils/pageData';
import { useWindowHeight } from '@/utils/common';
import { useRouter } from 'next/router';

const Case = () => {
  const params = useParams();
  console.log('params', params);
  const current: any = SITE_DATA[HomeTabEnum.Product].list.find(
    (i) => i.value === Number(params?.id),
  );
  console.log('current', current);
  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="xl:w-[1440px] px-[88px] pb-[88px]">
        <div>
          <div className="w-[632px] h-[338px] flex flex-col justify-between bg-white p-[88px] gap-6">
            <div className="flex flex-row items-center gap-6">
              <Image src={current.icon} width={90} height={90} alt="" />
              <div className="text-[48px] leading-[56px] text-[#333333] tracking-wider">
                {current.title}
              </div>
            </div>
            <div className="text-[16px] leading-[24px] text-[#666666]">
              {current.description}
            </div>
          </div>
        </div>
        {current.children?.map?.((c: any, index: any) => (
          <div
            className={`h-[364px] flex ${
              (index + 1) % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            key={c.value}
          >
            <Image width={632} height={364} alt="" src={c.image} />
            <div className="flex flex-col p-[88px] h-[354px] w-[632px] bg-white">
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
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCase = () => {
  const params = useParams();
  console.log('params', params);
  const current: any = SITE_DATA[PageEnum.IndustryCase].cases.find(
    (i) => i.value === Number(params?.id),
  );
  const product = SITE_DATA[HomeTabEnum.Product].case;
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
        <div className="grid grid-cols-3 gap-20">
          {current?.children.map((c: any, index: number) => (
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

const OtherProduct = () => {
  const params = useParams();
  console.log('params', params);
  const list: any = SITE_DATA[PageEnum.OurProduct].products.filter(
    (i) => i.value !== Number(params?.id),
  );
  const other = SITE_DATA[HomeTabEnum.Product].otherProduct;
  return (
    <div className="bg-white w-screen flex justify-center ">
      <div className="xl:w-[1440px] flex gap-[48px] p-[88px] pt-0  box-border flex-col items-center justify-center">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className="text-[38px] font-bold">{other.title}</div>
            <div className="text-[#cccccc] text-[30px] leading-[38px]">
              {other.subTitle}
            </div>
          </div>
        </div>
        <div className="flex gap-[88px]">
          {list.map((o: any, index: number) => (
            <div
              style={{
                backgroundImage: `url(${o.bg})`,
              }}
              key={index}
              className="w-[588px] h-[300px] bg-cover bg-no-repeat bg-center flex justify-center items-center gap-6"
            >
              <Image src={o.icon} width={90} height={90} alt="" />
              <div className="text-white">
                <div className="text-[38px] leading-[46px] ">{o.subTitle}</div>
                <div className="text-[24px] leading-[32px] opacity-60">
                  {o.subDescription}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Product = (props: any) => {
  console.log('props', props);
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
  // style={{
  //   backgroundImage: `url('${current.bg}')`,
  //   backgroundSize: '100% 810px',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  // }}
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
        current={HomeTabEnum.Product}
      />
      <Case />
      <ProductCase />
      <OtherProduct />
      <Footer />
    </div>
  );
};

export default Product;
