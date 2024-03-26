import App, { AppProps, AppContext } from 'next/app'
import Router from 'next/router'
import { NextPageContext } from 'next/dist/shared/lib/utils'
import isMobile from 'is-mobile'

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log('Component', Component)
  if (['Pc', 'Product'].includes(Component.name)) {
    require('@/styles/globalsPc.css')
  } else {
    require('@/styles/globalsMobile.css')
  }
  return <Component {...pageProps} />
}

function redirect(ctx: NextPageContext, location: string) {
  if (ctx.req) {
    ctx.res?.writeHead(308, { Location: location })
    ctx.res?.end()
  } else {
    Router.push(location)
  }
}

MyApp.getInitialProps = async (context: AppContext) => {
  const { ctx } = context
  const isMobileDevice = isMobile({ ua: ctx.req, tablet: false })

  if (isMobileDevice && !ctx.pathname.startsWith('/mobile')) {
    redirect(ctx, '/mobile')
  } else if (!isMobileDevice && !ctx.pathname.startsWith('/pc')) {
    redirect(ctx, '/pc')
  }
  return {
    ...App.getInitialProps(context), // 必须加上这个，表示透传_app.tsx默认的值
  }
}
