import React, { memo } from 'react'
import Image from 'next/image'
import { HomeTabs, Header, Footer, Tabs } from '../index'
import { HomeTabEnum } from '@/utils/constants'
import SITE_DATA from '../../../utils/pageData'
import { useParams } from 'next/navigation'

const Case = () => {
  const current = SITE_DATA[HomeTabEnum.IndustryCase]
  return (
    <div className='flex flex-col items-center relative z-10'>
      <div className='xl:w-[1440px] p-[88px] flex flex-col items-center'>
        <Tabs list={current.tabList} className='text-[24px]' />
        <div className='grid grid-cols-3 mt-[55px] gap-[80px]'>
          {current.list.map((c, index) => (
            <div
              className='group flex flex-col h-[464px] border-[#e8e8e8] border-b-[2px] border-solid hover:border-black hover:border-b-[3px]'
              key={index}>
              <Image width={368} height={368} alt='' src={c.bg} className='group-hover:hidden' />
              <Image
                width={368}
                height={240}
                alt=''
                className=' hidden h-[240px] group-hover:block'
                src={c.bg}
              />
              <div className='h-[224px] flex flex-col justify-center'>
                <div className='text-[24px] leading-[32px] font-bold'>{c.title}</div>
                <div className='hidden group-hover:block text-[16px] leading-[24px] text-[#666666] mt-[18px]'>
                  {c.description}
                </div>
                <Image
                  width={98}
                  height={38}
                  alt=''
                  src={current.knowMore}
                  className='mt-[25px] hidden group-hover:block'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Product = (props: any) => {
  return (
    <div className="bg-white before:bg-[url('/image/pc/product/bg.png')] before:w-full before:h-[810px] before:absolute relative before:left-0 before:top-0 before:right-0 before:bg-cover pt-[810px] before:z-0 before:bg-no-repeat">
      <Header isHomePage current={HomeTabEnum.IndustryCase} />
      <Case />
      <Footer />
    </div>
  )
}

export default Product
