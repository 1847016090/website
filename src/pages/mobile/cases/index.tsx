import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

import SITE_DATA from '../../../utils/pageDataMobile'
import { Business, Footer, Menu } from '..'
import { HomeTabEnum, PageEnum } from '@/utils/constants'
import { useRouter } from 'next/router'
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

const Cases = () => {
  const { cases } = SITE_DATA[PageEnum.IndustryCase]
  const [currentValue, setCurrentValue] = useState(0)
  const casesList = useMemo(() => [{ label: '全部',
  value: 0,},...cases], [cases])
  const  list =  useMemo(() => {
    if(currentValue === 0){
      let all: any[]   = []
       cases.forEach(({children})=>{
        all.push(...children)
      })
      return all
    }
    return cases.find((item)=>item.value ===  currentValue)?.children
  }, [currentValue,cases])
  const router = useRouter();
  return (
    <div>
      <div className='flex justify-center items-start mt-[88mpx]'>
        {casesList.map(({ label,value }, index) => (
          <div key={index} className='mr-[48mpx]' onClick={() => setCurrentValue(value)}>
            <div
              className={`text-mb-36 ${value === currentValue ? 'text-[#333]' : 'text-[#999]'} `}>
              {label}
            </div>
            <div
              style={{ display: value === currentValue ? 'block' : 'none' }}
              className='w-[72mpx] h-[4mpx] bg-[#333] mt-[12mpx] mb-[12mpx]'></div>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap px-[24mpx] justify-between'>
        {list?.map(({ title, bg ,value}, index) => {
          return (
            <div key={index} className='w-[343mpx]  mt-[48mpx]' onClick={() => {
              router.push(`/mobile/cases/${value}`);
            }}>
              <Image
                width={343}
                height={358}
                src={bg}
                alt='rokid 数字文化'
                className=' w-full object-cover'
              />
              <div className='text-mb-30 text-[#333] font-[500] mt-[32mpx]'>{title}</div>
              <div className='w-full h-[2mpx] bg-[#333] opacity-20 mt-[32mpx]'></div>
            </div>
          )
        })}
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
      <Menu isHomePage={false} title={'案例中心'} />
      <Header />
      <Cases />
      <Business />
      <Footer />
    </div>
  )
}
export default Mobile
