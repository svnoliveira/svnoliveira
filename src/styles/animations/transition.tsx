'use client'
import { SwitchTransition, Transition } from 'react-transition-group';

import gsap from 'gsap/dist/gsap';
import { useAnimationStore } from '@/context/animationStore';
import { usePathname } from 'next/navigation';


interface ITransitionComponentProps {
    children: React.ReactNode
}

const TransitionComponent = ({ children }: ITransitionComponentProps) => {
  const pathname = usePathname()
  const toggleCompleted = useAnimationStore((state:any) => state.toggleCompleted);
  return (
    <SwitchTransition>
      <Transition
        key={pathname}
        timeout={500}
        onEnter={(node: gsap.TweenTarget) => {
          toggleCompleted(false);
          gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
            .to(node, { scale: 1, duration: 0.25 })
            .play();
        }}
        onExit={(node: gsap.TweenTarget) => {
          gsap
            .timeline({ paused: true })
            .to(node, { scale: 0.8, duration: 0.2 })
            .to(node, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
