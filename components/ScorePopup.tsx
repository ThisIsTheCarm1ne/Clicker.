// This component houses score popup (+1)
"use client"

import {
  useRef,
  useCallback
} from "react";

import {
  gsap,
} from "@/lib/gsap/"

import { useIsomorphicLayoutEffect } from "@/lib/hooks";


export default function ScorePopup({
  id,
  removeDiv
}: any) {
  const removeDivCallback = useCallback(() => {
    removeDiv(id);
  }, [id, removeDiv]);

  const productRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!productRef.current) return;

    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power4.out'
      },
      onComplete: () => {
        removeDivCallback();
      }
    });

    timeline.fromTo(
      productRef.current,
      {
        autoAlpha: 1,
        yPercent: 600,
        xPercent: 0
      },
      {
        autoAlpha: 0,
        yPercent: 0,
        xPercent: Math.floor(Math.random() * 101) - 20
      }
    );

    timeline.play();

    return () => {
      timeline.revert();
    }
  }, []);

  return (
    <div ref={productRef} className="z-20 border-2 rounded-md border-black bg-white p-3 text-3xl absolute">+1</div>
  )
}
