import React, { useState, useEffect, useRef } from "react";
import "./featuredoffers.css"; // Add your CSS styles here.

import { houses } from "../../../data";

const Carousel = () => {
    const [items, setItems] = useState(
        houses
    );

    const [isAnimating, setIsAnimating] = useState(false);

    const runningTimeRef = useRef(null);
    const autoSlideTimeout = useRef(null);

    const resetTimeAnimation = () => {
        if (runningTimeRef.current) {
            runningTimeRef.current.style.animation = "none";
            // Trigger reflow
            void runningTimeRef.current.offsetHeight;
            runningTimeRef.current.style.animation = "runningTime 7s linear 1 forwards";
        }
    };

    const handleSlide = (direction) => {
        if (isAnimating) return; // Prevent multiple clicks during animation
        setIsAnimating(true);

        setItems((prevItems) => {
            if (direction === "next") {
                return [...prevItems.slice(1), prevItems[0]];
            } else {
                return [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)];
            }
        });

        resetTimeAnimation();

        setTimeout(() => setIsAnimating(false), 3000);
    };

    useEffect(() => {
        const autoSlide = () => {
            handleSlide("next");
        };

        // Set up the auto-slide interval
        autoSlideTimeout.current = setInterval(autoSlide, 7000);

        return () => clearInterval(autoSlideTimeout.current);
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center items-center py-20">
                <p className="text-blue-600 xl:text-[20px] text-[14px] font-[500] uppercase">Explore Offers</p>
                <h1 className="xl:text-[34px] text-[1.6rem] mb-9 font-bold">Special Offers For You</h1>
            </div>
            <div className="carousel w-full h-[92vh] mt-[-50px] overflow-hidden relative">
                <div className="list">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="item "
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="content">
                                <div className="title">{item.city}</div>
                                <div className="name">{item.type}</div>
                                <div className="des">
                                    {item.description}
                                </div>
                                <div className="btn">
                                    <button>See More</button>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="arrows">
                    <button className="prev" onClick={() => handleSlide("prev")}>
                        {"<"}
                    </button>
                    <button className="next" onClick={() => handleSlide("next")}>
                        {">"}
                    </button>
                </div>

                {/* Animation bar */}
                <div className="timeRunning" ref={runningTimeRef}></div>
            </div></div>
    );
};

export default Carousel;
