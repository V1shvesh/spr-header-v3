import { useLayoutEffect, useState, useCallback } from 'react';
import _throttle from 'lodash/throttle';

export const useLastScrollToDirection = () => {
  const [state, setState] = useState<{
    direction: 'NONE' | 'BOTTOM' | 'TOP';
    y: number;
  }>({ direction: 'NONE', y: 0 });

  const handleScroll = useCallback(
    _throttle((): void => {
      setState(prev =>
        Math.abs(window.scrollY - prev.y) < 5
          ? prev
          : {
              y: window.scrollY,
              direction: window.scrollY > prev.y ? 'BOTTOM' : 'TOP',
            },
      );
    }, 100),
    [],
  );

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return state.direction;
};
