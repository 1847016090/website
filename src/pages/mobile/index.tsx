import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SITE_DATA from '../../utils/pageDataMobile'
import { MOBILE_HOME_TAB_LIST, PageEnum } from '../../utils/constants'
/**
 * 头部
 */
const Header = () => {
  const { bg, slogan } = SITE_DATA[PageEnum.HomePage]
  return (
    <div className='relative'>
      <Image width={750} height={750} src={bg} alt='rokid 数字文化背景' />
      <Image
        width={750}
        height={700}
        className='absolute  top-0 left-0 right-0 bottom-0 mx-auto my-auto w-[387mpx]'
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
      <div className='mt-[88mpx] ml-[48mpx]'>
        <div className='text-mb-48'>{title}</div>
        <div className='text-mb-36 text-color-ccc'>{subTitle}</div>
      </div>
      <div
        className='mt-[48mpx] w-full h-[750mpx] overflow-hidden
       relative'>
        <Image
          width={384}
          height={358}
          src={products?.[current]?.bg}
          alt='rokid 数字文化'
          className='w-full object-cover h-full'
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-90 flex  justify-center items-end'>
          <div className='w-[90%] mb-[48mpx]'>
            <div className='text-mb-36 text-white'>{products?.[current]?.title}</div>
            <div className='w-[72mpx] h-[4mpx] bg-white mt-[12mpx] mb-[12mpx]'></div>
            <div className='text-mb-28  text-white opacity-80'>
              {products?.[current]?.description}
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-start mt-[24mpx]'>
        {products?.map(({ bg, logo }, index) => (
          <div
            style={{
              backgroundImage: `url(${bg})`
            }}
            key={index}
            className={`relative ${index === 1 && 'mx-[24mpx]'} ${
              index === current ? 'w-[322mpx]' : 'w-[190mpx]'
            } h-[160mpx] transition-width duration-300 ease-in-out bg-cover`}
            onClick={() => setcurrent(index)}>
               {index !== current && (
                    <div
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                        transition: 'opacity 0.3s',
                      }}
                      className="group-hover:opacity-0 absolute z-[1] left-0 top-0 w-full h-full backdrop-blur-[10px]"
                    ></div>
                  )}
            <Image
              width={92}
              height={58}
              className='w-[92mpx] h-[58mpx] absolute  top-0 left-0 right-0 bottom-0 mx-auto my-auto z-[2]'
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
  const router = useRouter()
  const { title, subTitle, cases, knowMore } = SITE_DATA[PageEnum.IndustryCase]
  const [current, setCurrent] = useState(1)
  let flatCases: any[] = []
  let moveIndex: any[] = [0]
  cases.forEach((category, index) => {
    moveIndex[index + 1] = moveIndex[index] + category.children.length
    flatCases = [...flatCases, ...category.children]
  })

  // 使用ref获取滚动区域元素
  const caseScrollRef = useRef<HTMLDivElement>(null)

  const movetTo = (current: number) => {
    setCurrent(current)
    const caseScrollElement = caseScrollRef.current
    if (caseScrollElement) {
      // 计算并滚动到当前选中项
      const targetChild = caseScrollElement.querySelector(`.flat-case`)
      if (targetChild) {
        const scrollLeft = targetChild.clientWidth * moveIndex[current - 1]
        caseScrollElement.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        })
      }
    }
  }

  useEffect(() => {
    let isScrolling: string | number | NodeJS.Timeout | undefined
    const caseScrollElement = caseScrollRef.current
    const handleScrollEnd = (e: any) => {
      const scrollLeft = e?.target?.scrollLeft || 0
      const targetChildWidth = caseScrollElement?.querySelector(`.flat-case`)?.clientWidth || 0
      if (scrollLeft >= targetChildWidth * moveIndex[2]) {
        setCurrent(3)
      }
      if (
        scrollLeft >= targetChildWidth * moveIndex[1] &&
        scrollLeft < targetChildWidth * moveIndex[2]
      ) {
        setCurrent(2)
      }
      if (scrollLeft < targetChildWidth * moveIndex[1]) {
        setCurrent(1)
      }
    }
    const handleScroll = (e: any) => {
      clearTimeout(isScrolling)
      // 当滚动发生时，重置定时器
      isScrolling = setTimeout(function () {
        handleScrollEnd(e)
      }, 100) // 假设200毫秒无滚动视为滚动结束
    }
    caseScrollElement?.addEventListener('scroll', handleScroll)
    return () => {
      caseScrollElement?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div className='mt-[88mpx] ml-[48mpx]'>
        <div className='text-mb-48'>{title}</div>
        <div className='text-mb-36 text-color-ccc'>{subTitle}</div>
      </div>
      <div className='flex mt-[37mpx] px-[48mpx] w-full justify-between items-center'>
        <div className='flex'>
          {cases.map(({ label, value }, index) => (
            <div key={index} className='mr-[36mpx]'>
              <div
                className={`${current === value ? 'text-[#333]' : 'text-[#999]'} text-mb-36`}
                onClick={() => movetTo(value)}>
                {label}
              </div>
              {current === value && (
                <div className='w-[72mpx] h-[4mpx] bg-[#333] mt-[12mpx] mb-[12mpx]'></div>
              )}
            </div>
          ))}
        </div>
        <div>
          <Image
            onClick={() => router.push('/mobile/cases')}
            width={176}
            height={66}
            className='w-[176mpx] h-[66mpx]'
            src={knowMore}
            alt='全部案例'
          />
        </div>
      </div>
      <div
        ref={caseScrollRef}
        className='scrollbar-visible w-full mt-[24mpx] pl-[48mpx] pr-[24mpx] overflow-x-auto whitespace-nowrap display-none-scrollbar'>
        {flatCases.map(({ bg, title, description, value }, index) => (
          <div
            onClick={() => {
              router.push(`/mobile/cases/${value}`)
            }}
            key={index}
            className={`w-[454mpx] h-full   inline-block whitespace-wrap flat-case`}>
            <div className='flex'>
              <div>
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
              <div className='w-[24mpx] h-full'></div>
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
    <div className='mt-[88mpx] px-[48mpx]'>
      <div>
        <div className='text-mb-48'>{title}</div>
        <div className='text-mb-36 text-color-ccc'>{subTitle}</div>
      </div>
      <div>
        {infos.map(({ label, value, bg, description, date }, index) => (
          <div key={index} className='flex items-center mt-[24mpx]'>
            <Image width={252} height={166} className='w-[252mpx] h-[166mpx]' src={bg} alt={label} />
            <div className='ml-[24mpx]'>
              <div className='text-mb-28 text-[#333]'>{label}</div>
              <div className='text-mb-22 text-[#999] mt-[24mpx]'>{date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** 底部信息 */
export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <div className='mt-[88mpx] p-[48mpx] flex justify-between text-mb-24 bg-[#333]'>
        <div>
          <div className='text-[#8C8C8C] mb-[48mpx]'>公司介绍</div>
          <div className='text-white'>企业介绍</div>
        </div>
        <div>
          <div className='text-[#8C8C8C] mb-[48mpx]'>帮助支持</div>
          <div className='text-white mb-[48mpx]'>渠道代理</div>
          <div className='text-white mb-[48mpx]'>渠道代理</div>
          <div className='text-white'>渠道代理</div>
        </div>
        <div>
          <div className='text-[#8C8C8C] mb-[48mpx]'>商务合作</div>
          <div className='text-white mb-[48mpx]'>ke.li@rokid.com</div>
          <div className='text-white'>ke.li@rokid.com</div>
        </div>
      </div>
      <div className='bg-[#1D1D1D] text-mb-20  text-[#fff] w-full h-[70mpx] flex items-center justify-center'>
        <span className='opacity-60'>Copyright © {year} Rokid Inc. All rights reserved.</span>
      </div>
    </div>
  )
}

export const Menu = ({ isHomePage, title }: { isHomePage: boolean; title: string }) => {
  const { logo, logoBlack } = SITE_DATA[PageEnum.HomePage]
  const [show, setShow] = useState(false)
  const [change, setchange] = useState(false)
  const router = useRouter()
  const initialDisplayStyle = show ? '100vh' : 0

  const showModal = (type: boolean) => {
    if (type) {
      document.documentElement.style.overflowY = 'hidden'
    } else {
      document.documentElement.style.overflowY = 'auto'
    }
    setShow(type)
  }
  const handleClick = (path: string) => {
    showModal(false)
    router.push(path)
  }

  useEffect(() => {
    document.documentElement.style.overflowY = 'auto'
    const handleScroll = () => {
      const newScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (newScrollTop > 50) {
        setchange(true)
      } else {
        setchange(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='fixed w-full top-0 left-0 z-10'>
      <div
        style={{ background: change ? '#fff' : 'transparent' }}
        className='relative h-[100mpx] flex items-center justify-center  transition-background duration-800 ease-in-out'>
        {isHomePage ? (
          <Image
            width={244}
            height={42}
            className='w-[244mpx] h-[42mpx]'
            src={change ? logoBlack : logo}
            alt='rokid 数字文化'
          />
        ) : (
          <div className={`text-mb-36 ${change ? 'text-black' : 'text-white'} `}>{title}</div>
        )}

        <Image
          onClick={() => {
            showModal(true)
          }}
          width={48}
          height={48}
          className='w-[48mpx] h-[48mpx] absolute top-0  bottom-0  my-auto right-[48mpx]'
          src={change ? '/image/common/menu-black.png' : '/image/common/menu.png'}
          alt='打开菜单'
        />
      </div>
      <div
        style={{ height: initialDisplayStyle }}
        className={`fixed w-full h-full z-12 bg-white top-0 left-0  transition-height duration-300 ease-in-out overflow-y-scroll overflow-x-hidden`}>
        <div className='flex justify-center items-center overflow-hidden h-[100mpx]'>
          <Image
            width={244}
            height={42}
            className='w-[244mpx] h-[42mpx]'
            src='/image/mobile/logo-black.png'
            alt='logo'
          />
          <Image
            onClick={() => {
              showModal(false)
            }}
            width={48}
            height={48}
            className='w-[48mpx] h-[48mpx] absolute top-[26mpx] right-[47mpx]'
            src='/image/mobile/close.png'
            alt='logo'
          />
        </div>
        <div className='mt-[91mpx]'>
          {MOBILE_HOME_TAB_LIST.map(({ label, children, path }, index) => (
            <div key={index} className='px-[48mpx]'>
              {children ? (
                <div className='flex justify-between'>
                  <div className='text-[#999] text-mb-30 py-[40mpx]'>{label}</div>
                  <div>
                    {children.map(({ label, path }, innerIndex) => (
                      <div key={innerIndex} className='w-[436mpx]' onClick={() => handleClick(path)}>
                        <div className='flex items-center justify-between'>
                          <span className='text-[#333] text-mb-30 py-[40mpx]'>{label}</span>
                          <Image
                            width={24}
                            height={24}
                            className='w-[24mpx] h-[24mpx]'
                            src='/image/common/right.png'
                            alt='logo'
                          />
                        </div>
                        <div className='w-full bg-[#333] h-[1px] opacity-20'></div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className='flex items-center justify-between'
                    onClick={() => handleClick(path)}>
                    <span className='text-[#333] text-mb-30 py-[40mpx]'>{label}</span>
                    <Image
                      width={24}
                      height={24}
                      className='w-[24mpx] h-[24mpx]'
                      src='/image/common/right.png'
                      alt='logo'
                    />
                  </div>
                  <div className='w-full bg-[#333] h-[1px] opacity-20'></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Business = () => {
  const [show, setShow] = useState(false)
  const initialDisplayStyle = show ? '100vh' : 0
  const submitForm = async (e: any) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const dataObject = Object.fromEntries(formData)

    console.log('需要传给后端的数据', dataObject) // {name: '', age: '', sex: ''}
  }

  const showModal = (type: boolean) => {
    setShow(type)
  }

  return (
    <div className='fixed z-10 bottom-[80mpx] right-[28mpx]'>
      <Image
        onClick={() => {
          showModal(true)
        }}
        width={120}
        height={120}
        className='w-[120mpx] h-[120mpx]'
        src='/image/common/business-consulting.png'
        alt='business-consulting'
      />
      <div
        style={{ height: initialDisplayStyle }}
        className={`fixed w-full h-full z-11 bg-white top-0 left-0  transition-height duration-300 ease-in-out overflow-y-scroll overflow-x-hidden`}>
        <div className='flex justify-center items-center overflow-hidden h-[100mpx]'>
          <span className='text-mb-36 text-[#3D3D3D]'>业务咨询</span>
          <Image
            onClick={() => {
              showModal(false)
            }}
            width={48}
            height={48}
            className='w-[48mpx] h-[48mpx] absolute top-[26mpx] right-[47mpx]'
            src='/image/mobile/close.png'
            alt='logo'
          />
        </div>
        <div className='mt-[84mpx] px-[48mpx]'>
          <form onSubmit={submitForm} className='w-full  flex flex-col gap-[24mpx]'>
            <div className='w-full h-[100mpx] border-solid border-[#d0d0d0] border-b-[1px] flex flex-col justify-between'>
              <div className='text-mb-24  text-[#333333] opacity-20'>姓名</div>
              <input
                name='name'
                value={'Andy'}
                className='mb-[8mpx] border-none outline-none text-mb-24'
              />
            </div>
            <div className='w-full h-[100mpx] border-solid border-[##d0d0d0] border-b-[1px] flex flex-col justify-center'>
              <div className='text-mb-24  text-[#333333] opacity-20'>公司</div>
            </div>
            <div className='w-full h-[100mpx] border-solid border-[##d0d0d0] border-b-[1px] flex flex-col justify-center'>
              <div className='text-mb-24  text-[#333333] opacity-20'>电话/邮箱</div>
            </div>
            <div className='w-full h-[100mpx] border-solid border-[##d0d0d0] border-b-[1px] flex flex-col justify-center'>
              <div className='text-mb-24  text-[#333333] opacity-20'>咨询业务</div>
            </div>
            <button type='submit' className='mt-[89mpx]'>
              <Image
                width={654}
                height={90}
                className='w-[654mpx] h-[90mpx]'
                alt=''
                src='/image/mobile/business.png'
              />
            </button>
          </form>
        </div>
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
      <Header />
      <Menu isHomePage={true} title={''} />
      <OurProduct />
      <IndustryCase />
      <Information />
      <Business />
      <Footer />
    </div>
  )
}

export default Mobile
