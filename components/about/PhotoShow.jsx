"use client"

import React, { useRef, useState } from 'react';

function PhotoShow() {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const handleOnDown = e => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(trackRef.current.dataset.percentage);
  };

  const handleOnMove = e => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.dataset.percentage = nextPercentage;

    trackRef.current.style.transform = `translate(${nextPercentage}%, 137%)`;

    const images = trackRef.current.getElementsByClassName("image");
    for (const image of images) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("mouseup", handleOnUp);

    return () => {
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("mouseup", handleOnUp);
    };
  }, [handleOnMove, handleOnUp]);

  return (
    <div
      className='h-screen w-full pl-[60px] bg-black m-0 overflow-hidden select-none'
    >
      <div
        id='track'
        ref={trackRef}
        className='flex gap-4vmin absolute left-1/2 top-1/2 transform translate-x-[0%] translate-y-[137%]'
        data-mouse-down-at="0"
        data-prev-percentage="0"
        onMouseDown={handleOnDown}
        onMouseUp={handleOnUp}
        onMouseMove={handleOnMove}
        onTouchStart={handleOnDown}
        onTouchEnd={handleOnUp}
        onTouchMove={handleOnMove}
      >
        <img className='w-40vmin h-56vmin object-cover object-center image' src="/doi-ithanon.JPG" draggable='false' />
        <img className='w-40vmin h-56vmin object-cover object-center image' src="/nani.JPG" draggable='false' />
        <img className='w-40vmin h-56vmin object-cover object-center image' src="/sanc-of-truth-2.JPG" draggable='false' />
        <img className='w-40vmin h-56vmin object-cover object-center image' src="/sanc-of-truth-close-up.JPG" draggable='false' />
        <img className='w-40vmin h-56vmin object-cover object-center image' src="/singapore-chinatown.JPG" draggable='false' />
        <img className='w-40vmin h-56vmin object-cover object-center image' src="/south-india-statue.jpg" draggable='false' />
        <img className='w-40vmin h-56vmin object-cover object-center image' src="/taking-photo-thailand.JPG" draggable='false' />
        <img className='w-40vmin h-56vmin object-cover object-center image' src="/venus-bay.JPG" draggable='false' />
        <video src="/2024-fireworks.MOV"></video>
      </div>
    </div>
  );
}

export default PhotoShow;
