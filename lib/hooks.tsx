// Relates to GSAP setup
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
