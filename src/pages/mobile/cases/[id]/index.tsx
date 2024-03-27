import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import SITE_DATA from '../../../../utils/pageDataMobile'
import { Business, Footer, Menu } from '../..'
import { HomeTabEnum, PageEnum } from '@/utils/constants'
import { useParams } from 'next/navigation'
/**
 * 头部
 */

/** 产品 */
const OurProduct = () => {
  const params = useParams();
  const cases = SITE_DATA[PageEnum.IndustryCase].cases;
  const { title, bg, description, detail } = cases.reduce((all, cur) => {
    const item = cur?.children?.find((i: any) => i.value === Number(params.id));
    if (item) {
      all = { ...item };
    }
    return all;
  }, null as any);
  return (
    <div>
      <div
        className='w-full h-[750mpx] overflow-hidden
       relative'>
        <Image
          width={384}
          height={358}
          src={bg}
          alt='rokid 数字文化'
          className='w-full object-cover h-full'
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-90 flex  justify-center items-end'>
          <div className='w-[90%] mb-[48mpx]'>
            <div className='flex items-center'>
              <div className='text-mb-36 text-white'>{title}</div>
            </div>
            <div className='text-mb-28  text-white opacity-80 mt-[12mpx]'>{description}</div>
          </div>
        </div>
      </div>
      <div className='px-[48mpx]'>
        {detail.map(({ bg, title, description }: any, index: number) => (
          <div key={index} className='w-[full] h-full mt-[48mpx]'>
            <div className='mt-[24mpx]'>
              {/* <div className='text-mb-48 text-[#EDEDED] font-bold'>{`0${index + 1}`}</div>
              <div className='text-mb-36 text-[#333]'>{title}</div>
              <div className='w-[72mpx] h-[4mpx] bg-[#333] mt-[12mpx] mb-[12mpx]'></div> */}
              <div className='text-mb-28  text-[#666]'>{description}</div>
            </div>
            <Image
              width={654}
              height={360}
              className='w-[full] h-[full] object-cover mt-[48mpx]'
              src={bg}
              alt={title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const Mobile = (props: any) => {
  const setRem = async () => {
    await require('amfe-flexible')
  }

  useEffect(() => {
    setRem()
    window.addEventListener('resize', setRem)
  })
  return (
    <div>
      <Menu isHomePage={false} title={'案例详情'} />
      <OurProduct />
      <Business />
      <Footer />
    </div>
  )
}
export default Mobile
