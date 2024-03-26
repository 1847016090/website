import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import SITE_DATA from '../../utils/pageDataMobile'
import { PageEnum } from '../../utils/constants'
/**
 * 头部
 */
const Header = () => {
  const { bg, logo, slogan } = SITE_DATA[PageEnum.HomePage]
  return (
    <div className='relative'>
      <Image width={750} height={750} src={bg} alt='rokid 数字文化背景' />
      <Image
        width={244}
        height={42}
        className='absolute  top-[60px] left-0 right-0 mx-auto  w-[244px]'
        src={logo}
        alt='rokid 数字文化'
      />
      <Image
        width={750}
        height={700}
        className='absolute  top-0 left-0 right-0 bottom-0 mx-auto my-auto w-[387px]'
        src={slogan}
        alt='rokid 数字文化slogan'
      />
    </div>
  )
}
/** 产品 */
const OurProduct = () => {
  const { title, subTitle, products } = SITE_DATA[PageEnum.OurProduct]
  const [current, setcurrent] = useState(0)
  return (
    <div>
      <div className='mt-[88px] ml-[48px]'>
        <div className='text-mb-48'>{title}</div>
        <div className='text-mb-36 text-color-ccc'>{subTitle}</div>
      </div>
      <div
        className='mt-[48px] w-full h-[750px] overflow-hidden
       relative'>
        <Image
          width={384}
          height={358}
          src={products?.[current]?.bg}
          alt='rokid 数字文化'
          className='w-full object-cover h-full'
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-90 flex  justify-center items-end'>
          <div className='w-[90%] mb-[48px]'>
            <div className='text-mb-36 text-white'>{products?.[current]?.title}</div>
            <div className='w-[72px] h-[4px] bg-white mt-[12px] mb-[12px]'></div>
            <div className='text-mb-28  text-white opacity-80'>
              {products?.[current]?.description}
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-start mt-[24px]'>
        {products?.map(({ bg, logo }, index) => (
          <div
            style={{
              backgroundImage: `url(${bg})`,
            }}
            key={index}
            className={`relative ${index === 1 && 'mx-[24px]'} ${
              index === current ? 'w-[322px]' : 'w-[190px]'
            } h-[160px] transition-width duration-300 ease-in-out bg-cover`}
            onClick={() => setcurrent(index)}>
            <Image
              width={92}
              height={58}
              className='w-[92px] h-[58px] absolute  top-0 left-0 right-0 bottom-0 mx-auto my-auto'
              src={logo}
              alt='rokid 数字文化'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/** 行业案例 */
const IndustryCase = () => {
  const { title, subTitle, cases, knowMore } = SITE_DATA[PageEnum.IndustryCase]
  const [current, setcurrent] = useState(cases[0])
  return (
    <div>
      <div className='mt-[88px] ml-[48px]'>
        <div className='text-mb-48'>{title}</div>
        <div className='text-mb-36 text-color-ccc'>{subTitle}</div>
      </div>
      <div className='flex mt-[37px] px-[48px] w-full justify-between  items-center'>
        <div className='flex'>
          {cases.map(({ title }, index) => (
            <div key={index} className='mr-[36px]'>
              <div className='text-mb-36 text-[#333] '>{title}</div>
              <div className='w-[72px] h-[4px] bg-[#333] mt-[12px] mb-[12px]'></div>
            </div>
          ))}
        </div>
        <div>
          <Image
            width={176}
            height={66}
            className='w-[176px] h-[66px]'
            src={knowMore}
            alt='全部案例'
          />
        </div>
      </div>
      <div className='scrollbar-visible w-full  mt-[24px] pl-[48px] overflow-x-auto whitespace-nowrap display-none-scrollbar'>
        {current.children.map(({ bg, title, description }, index) => (
          <div key={index} className='w-[430px] h-full mr-[24px] inline-block whitespace-wrap'>
            <Image
              width={430}
              height={458}
              className='w-[430px] h-[458px] object-cover'
              src={bg}
              alt='全部案例'
            />
            <div className='mt-[24px]'>
              <div className='text-mb-36 text-[#333]'>{title}</div>
              <div className='w-[72px] h-[4px] bg-[#333] mt-[12px] mb-[12px]'></div>
              <div className='text-mb-28 h-[92px]  text-[#666] whitespace-normal  overflow-hidden'>
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** 咨询动态 */
const Information = () => {
  const { title, subTitle, infos } = SITE_DATA[PageEnum.Information]

  return (
    <div className='mt-[88px] px-[48px]'>
      <div>
        <div className='text-mb-48'>{title}</div>
        <div className='text-mb-36 text-color-ccc'>{subTitle}</div>
      </div>
      <div>
        {infos.map(({ label, value, bg, description, date }, index) => (
          <div key={index} className='flex items-center mt-[24px]'>
            <Image width={252} height={166} className='w-[252px] h-[166px]' src={bg} alt={label} />
            <div className='ml-[24px]'>
              <div className='text-mb-28 text-[#333]'>{label}</div>
              <div className='text-mb-22 text-[#999] mt-[24px]'>{date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** 底部信息 */
export const Footer = () => {
  const nowDay = new Date().getDay()
  return (
    <div>
      <div className='mt-[88px] p-[48px] flex justify-between text-mb-24 bg-[#333]'>
        <div>
          <div className='text-[#8C8C8C] mb-[48px]'>公司介绍</div>
          <div className='text-white'>企业介绍</div>
        </div>
        <div>
          <div className='text-[#8C8C8C] mb-[48px]'>帮助支持</div>
          <div className='text-white mb-[48px]'>渠道代理</div>
          <div className='text-white mb-[48px]'>渠道代理</div>
          <div className='text-white'>渠道代理</div>
        </div>
        <div>
          <div className='text-[#8C8C8C] mb-[48px]'>商务合作</div>
          <div className='text-white mb-[48px]'>ke.li@rokid.com</div>
          <div className='text-white'>ke.li@rokid.com</div>
        </div>
      </div>
      <div className='bg-[#1D1D1D] text-mb-20  text-[#fff] w-full h-[70px] flex items-center justify-center'>
        <span className='opacity-60'>Copyright © {nowDay} Rokid Inc. All rights reserved.</span>
      </div>
    </div>
  )
}

const Menu = () => {
  const [show, setShow] = useState(false)

  const initialDisplayStyle = show ? '100vw' : 0
  const showModal = () => setShow((prevShow) => !prevShow)
  return (
    <div className='fixed top-[60px] right-[48px] z-10'>
      <Image
        onClick={showModal}
        width={48}
        height={48}
        className='w-[48px] h-[48px]'
        src='/image/common/menu.png'
        alt='菜单'
      />
      <div
        style={{ width: initialDisplayStyle }}
        className={`fixed w-full h-full z-11 bg-white top-0 left-0  transition-width duration-300 ease-in-out overflow-hidden`}>
        <div className='flex justify-center items-center overflow-hidden'>
          <Image
            width={244}
            height={41}
            className='w-[244px] h-[41px]  mt-[34px]'
            src='/image/mobile/logo-black.png'
            alt='logo'
          />
          <Image
            onClick={showModal}
            width={48}
            height={48}
            className='w-[48px] h-[48px] absolute top-[30px] right-[47px]'
            src='/image/mobile/close.png'
            alt='logo'
          />
        </div>
        <div>{}</div>
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
      <Menu />
      <Header />
      <OurProduct />
      <IndustryCase />
      <Information />
      <Footer />
    </div>
  )
}

export default Mobile
