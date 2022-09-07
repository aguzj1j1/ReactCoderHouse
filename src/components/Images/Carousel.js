import React, { useEffect } from 'react';
import { CarouselSlide } from './CarouselSlide';

export function Carousel({ images, activeIndex }) {
    // this controls the auto scroll which will start a timeout of ten seconds after the last time a image is selected


    return (
        <div>
            <div className="m-auto relative overflow-hidden z-1">
                <div
                    className={`flex transform duration-500`}
                    style={{
                        // some math to make the slide in animation
                        transform: `translateX(-${100 * activeIndex + 4 * activeIndex}%)`,
                    }}
                >
                    {images.map((item, i) => {
                        if (i < 6) {
                            return <CarouselSlide image={item} key={i + '-slide'} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
