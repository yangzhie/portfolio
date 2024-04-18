"use client"

import { useState } from 'react';

const ImageSlider = () => {
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const handleOnDown = e => {
        setMouseDownAt(e.clientX);
    };

    const handleOnUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(prev => prev + percentage);
    };

    const handleOnMove = e => {
        if (mouseDownAt === 0) return;

        const mouseDelta = mouseDownAt - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const nextPercentageUnconstrained = prevPercentage - (mouseDelta / maxDelta) * 100;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        setPercentage(nextPercentage);
    };

    const trackStyle = {
        transform: `translate(${percentage}%, -50%)`,
    };

    const imageStyle = {
        objectPosition: `${100 + percentage}% center`,
    };

    return (
        <div
            id="image-track"
            className="flex gap-4vmin absolute left-1/2 top-1/2 transform translate-x-[0%] translate-y-[-50%]"
            onMouseDown={handleOnDown}
            onTouchStart={e => handleOnDown(e.touches[0])}
            onMouseUp={handleOnUp}
            onTouchEnd={e => handleOnUp(e.touches[0])}
            onMouseMove={handleOnMove}
            onTouchMove={e => handleOnMove(e.touches[0])}
            style={trackStyle}
        >
            <img className='image w-40vmin h-56vmin object-cover object-center image' src="/doi-ithanon.JPG" draggable='false' style={imageStyle} />
            <img className='image w-40vmin h-56vmin object-cover object-center image' src="/nani.JPG" draggable='false' style={imageStyle} />
            <img className='image w-40vmin h-56vmin object-cover object-center image' src="/sanc-of-truth-2.JPG" draggable='false' style={imageStyle} />
            <img className='image w-40vmin h-56vmin object-cover object-center image' src="/sanc-of-truth-close-up.JPG" draggable='false' style={imageStyle} />
            <img className='image w-40vmin h-56vmin object-cover object-center image' src="/singapore-chinatown.JPG" draggable='false' style={imageStyle} />
            <img className='image w-40vmin h-56vmin object-cover object-center image' src="/south-india-statue.jpg" draggable='false' style={imageStyle} />
            <img className='image w-40vmin h-56vmin object-cover object-center image' src="/taking-photo-thailand.JPG" draggable='false' style={imageStyle} />
            <img className='image w-40vmin h-56vmin object-cover object-center image' src="/venus-bay.JPG" draggable='false' style={imageStyle} />
            <video src="/2024-fireworks.MOV"></video>
        </div>
    );
};

export default ImageSlider;
