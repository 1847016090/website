import React, { useEffect } from 'react'
import Image from 'next/image'

import SITE_DATA from '../../../utils/pageDataMobile'
import { Business, Footer, Menu } from '..'
import { HomeTabEnum } from '@/utils/constants'
/**
 * 头部
 */
const Header = () => {
  const { bg } = SITE_DATA[HomeTabEnum.IndustryCase]
  return (
    <div
      className='w-full h-[750mpx] 
       relative'>
      <Image
        width={384}
        height={358}
        src={bg}
        alt='rokid 数字文化'
        className='w-full object-cover h-full'
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-90 flex  justify-center items-end'></div>
    </div>
  )
}

const About = () => {
  const { title, subTitle, bg, description } = SITE_DATA[HomeTabEnum.AboutUs]
  return (
    <div className='px-[48mpx]'>
      <div className='mt-[88mpx]'>
        <div className='text-mb-48'>{title}</div>
        <div className='text-mb-36 text-color-ccc'>{subTitle}</div>
      </div>
      <div className='text-mb-28 text-[#666] mt-[48mpx] leading-[48mpx]'>{description}</div>
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
      <Menu isHomePage={false} title={'关于我们'} />
      <Header />
      <About />
      <Business />
      <Footer />
    </div>
  )
}
export default Mobile
