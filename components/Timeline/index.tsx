'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface TimelineItem {
  title: string;
  description: string;
}

const items: TimelineItem[] = [
  {
    title: 'Discover & Strategy',
    description:
      'In-depth consultations and assessments to define project goals and strategy.',
  },
  {
    title: 'Plan & Prioritize',
    description:
      'Outlining milestones, deliverables, and an efficient project roadmap.',
  },
  {
    title: 'Design & Engineer',
    description:
      'Crafting innovative and compliant designs using modern tech.',
  },
  {
    title: 'Build & Implement',
    description:
      'Execution with precision to deliver high-performing infrastructure.',
  },
  {
    title: 'Support & Enhance',
    description:
      'Ongoing maintenance and upgrades for evolving needs.',
  },
];

const Timeline = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [targetHeight, setTargetHeight] = useState(0);
  const [animatedHeight, setAnimatedHeight] = useState(0);

  useEffect(() => {
    let animationFrame: number;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const padding = 1000; // <-- padding top & bottom for animation start/end
      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const visible = Math.min(
        container.offsetHeight,
        Math.max(0, viewportHeight - containerRect.top - padding)
      );

      setTargetHeight(visible);
    };

    const animate = () => {
      setAnimatedHeight((prev) => {
        const diff = targetHeight - prev;
        const step = diff * 0.5; // smaller = slower easing
        if (Math.abs(diff) < 0.5) return targetHeight;
        animationFrame = requestAnimationFrame(animate);
        return prev + step;
      });
    };

    const onScroll = () => {
      handleScroll();
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', onScroll);
    handleScroll();
    animate(); // initial animation

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [targetHeight]);

  return (
    <div className="relative flex justify-center py-32 bg-[#F6F7F9]" ref={containerRef}>
      {/* Static background line */}
      <div className="absolute left-1/2 transform -translate-x-1 w-1 h-full bg-gray-200 rounded" />

      {/* Animated progress line */}
      <div
        ref={lineRef}
        style={{ height: animatedHeight }}
        className="absolute left-1/2 transform -translate-x-1 w-1 bg-green-500 rounded origin-top transition-all duration-300"
      />

      <div className="flex flex-col gap-20 w-full max-w-5xl">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={clsx(
                'flex items-start justify-between gap-10 relative',
                isLeft ? 'flex-row' : 'flex-row-reverse'
              )}
            >
              <div className="w-1/2 p-6 bg-white rounded-lg shadow-md z-10">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              {/* Step circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center text-sm font-semibold z-20">
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
