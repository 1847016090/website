// import { NextPageContext } from 'next/dist/shared/lib/utils';
// import isMobile from 'is-mobile';

export default function Index() {
  return <></>;
}

// export async function getServerSideProps(ctx: NextPageContext) {
//   // 是否为移动端（平板电脑不算做移动端）
//   const isMobileDevice = isMobile({ ua: ctx.req, tablet: false });
//   console.log('isMobileDevice', isMobileDevice)
//   // 是否为平板电脑
//   let route = '/pc';
//   if (isMobileDevice) {
//     route = '/mobile';
//   } else {
//     route = '/pc';
//   }
//   return {
//     props: {},
//     redirect: {
//       destination: route,
//       permanent: true,
//     },
//   };
// }
