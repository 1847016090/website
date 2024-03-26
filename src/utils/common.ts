import { useEffect, useState } from 'react';

export const getFileUrl = (name: string) => `@/assets/image/${name}`;

export const debounce = (fn: Function, time: number) => {
  let timer: any;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn?.(...args);
      clearTimeout(timer);
    }, time);
  };
};

export const useWindowHeight = () => {
  'use client';
  const [height, setHeight] = useState<any>();
  useEffect(() => {
    const handleResize = () => {
      console.log('fir===handleResize====st');
      setHeight(window?.innerHeight);
    };
    // 添加事件监听器以在窗口大小更改时更新宽度
    window?.addEventListener('resize', handleResize);
    // 初始化宽度
    setHeight(window?.innerHeight);

    // 在组件销毁时清除事件监听器
    return () => window?.removeEventListener('resize', handleResize);
  }, []);
  return height;
};
