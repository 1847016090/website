import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import SITE_DATA from '../../../../utils/pageDataMobile'
import { Business, Footer, Menu } from '../..'
import { HomeTabEnum } from '@/utils/constants'
import { useParams } from 'next/navigation'
/**
 * 头部
 */

/** 产品 */
const OurProduct = () => {
  const params = useParams()
  const { title, bg, description, children }: any = SITE_DATA[HomeTabEnum.Solution].list?.find(
    (i) => i.value === Number(params?.id),
  )
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
        {children.map(({ image, title, description }: any, index: number) => (
          <div key={index} className='w-[full] h-full mt-[48mpx]'>
            <div className='mt-[24mpx]'>
              <div className='text-mb-48 text-[#EDEDED] font-bold'>{`0${index + 1}`}</div>
              <div className='text-mb-36 text-[#333]'>{title}</div>
              <div className='w-[72mpx] h-[4mpx] bg-[#333] mt-[12mpx] mb-[12mpx]'></div>
              <div className='text-mb-28  text-[#666]'>{description}</div>
            </div>
            <Image
              width={654}
              height={360}
              className='w-[full] h-[full] object-cover mt-[48mpx]'
              src={image}
              alt={title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/** 行业案例 */
const IndustryCase = () => {
  const { title, subTitle, cases, knowMore } = SITE_DATA[HomeTabEnum.Solution].case
  const [current, setcurrent] = useState(cases[0])
  return (
    <div>
      <div className='flex mt-[37mpx] px-[48mpx] w-full justify-between  items-center'>
        <div>
          <div className='text-mb-48'>{title}</div>
          <div className='text-mb-36 text-color-ccc'>{subTitle}</div>
        </div>
        <Image
          width={176}
          height={66}
          className='w-[176mpx] h-[66mpx]'
          src={knowMore}
          alt='全部案例'
        />
      </div>
      <div className='scrollbar-visible w-full  mt-[48mpx] pl-[48mpx] overflow-x-auto whitespace-nowrap display-none-scrollbar'>
        {cases.map(({ bg, title, description }, index) => (
          <div key={index} className='w-[430mpx] h-full mr-[24mpx] inline-block whitespace-wrap'>
            <Image
              width={430}
              height={458}
              className='w-[430mpx] h-[458mpx] object-cover'
              src={bg}
              alt='全部案例'
            />
            <div className='mt-[24mpx]'>
              <div className='text-mb-36 text-[#333]'>{title}</div>
              <div className='w-[72mpx] h-[4mpx] bg-[#333] mt-[12mpx] mb-[12mpx]'></div>
              <div className='text-mb-28 h-[92mpx]  text-[#666] whitespace-normal  overflow-hidden'>
                {description}
              </div>
            </div>
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
      <Menu isHomePage={false} title={'解决方案'} />
      <OurProduct />
      <IndustryCase />
      <Business />
      <Footer />
    </div>
  )
}
export default Mobile
