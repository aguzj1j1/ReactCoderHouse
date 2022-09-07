import React, { useRef } from "react";
import { ImageThumbNail } from "./ImageThumbNail";

export function ImageList({
    images,
    activeIndex,
    setActiveIndex,
    onScrollEnd
}) {
    const container = useRef(null);

    return (
        <div
            onScroll={e => {
                // so this will fire whenever we get 75% through scrolling to the right and will load more images until there is none left
                if (
                    e.target.scrollLeft + e.target.clientWidth >
                    e.target.scrollWidth * 0.75
                ) {
                    onScrollEnd();
                }
            }}
            ref={container}
            className="flex flex-col bg-white py-3 border-t border-gray-200 overflow-x-auto"
        >
            {images.map((item, i) => {
                if (i < 6) {
                    return (
                        <ImageThumbNail
                            image={item}
                            index={i}
                            isActive={i === activeIndex}
                            text={i + 1}
                            key={i + "-thumbnail"}
                            setActiveIndex={setActiveIndex}
                        />
                    );
                }
            })}
        </div>
    );
}
