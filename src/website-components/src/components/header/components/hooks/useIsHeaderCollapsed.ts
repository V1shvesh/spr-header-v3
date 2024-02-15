'use client';
import _throttle from 'lodash.throttle';
import { useState, useCallback, useEffect } from 'react';
const SCROLL_OFFSET_THRESHOLD = 150;

const useIsHeaderCollapsed = (): boolean => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const onScroll = useCallback((): void => {
    setHasScrolled(window.scrollY > SCROLL_OFFSET_THRESHOLD);
  }, []);

  useEffect(() => {
    const handleScroll = _throttle(onScroll, 80);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  return hasScrolled;
};

export default useIsHeaderCollapsed;
