import React, { memo } from 'react';
import Image from 'next/image';
import { Header, Footer } from '../index';
import { HomeTabEnum } from '@/utils/constants';
import SITE_DATA from '../../../utils/pageData';

const Case = () => {
  const current = SITE_DATA[HomeTabEnum.AboutUs];
  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="xl:w-[1440px] p-[88px] flex gap-[88px]">
        <div className="flex flex-col">
          <div className="text-[38px] leading-[46px] font-bold tracking-wider">
            {current.title}
          </div>
          <div className="text-[30px] leading-[38px] text-[]#cccccc] mt-[8px]">
            {current.subTitle}
          </div>
          <div className="mt-[16px] text-[16px] font-bold leading-[28px] text-[#666666]">
            {current.description}
          </div>
        </div>
        <Image src={current.bg} width={694} height={484} alt="" />
      </div>
    </div>
  );
};

const Product = (props: any) => {
  return (
    <div className="bg-white pt-[72px] flex flex-col justify-between h-screen">
      <Header isHomePage={false} current={HomeTabEnum.AboutUs} />
      <Case />
      <Footer />
    </div>
  );
};

export default Product;
