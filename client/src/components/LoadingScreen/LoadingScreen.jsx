// LoadingScreen.js
import React from 'react';
import loadingVideo from "../../assests/loadingVideo/loadingVideo.mp4"
const LoadingScreen = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-50">
            <video autoPlay loop muted disablePictureInPicture className="max-w-[25vw] max-h-[25vh] object-cover select-none">
                <source src={loadingVideo} type="video/mp4" />
            </video>
            <p className='animate-pulse text-black text-s  mt-[-2rem] sm:mt-[-1.5rem] md:mt-[-1rem] lg:mt-[-0.5rem] xl:mt-0 '>Loading....</p>
        </div>
    );
};

export default LoadingScreen;
