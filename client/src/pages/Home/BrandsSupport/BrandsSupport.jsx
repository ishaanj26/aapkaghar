import Marquee from 'react-fast-marquee';
import img1 from '../../../assests/brands/adidas.png';
import img2 from '../../../assests/brands/amazon.png';
import img3 from '../../../assests/brands/apple.png';
import img4 from '../../../assests/brands/audi.png';
import img5 from '../../../assests/brands/fedex.png';
import img6 from '../../../assests/brands/honda.png';
import img7 from '../../../assests/brands/netflix.png';
import img8 from '../../../assests/brands/purple-swirl.png';
import img9 from '../../../assests/brands/starbucks.png';
import img10 from '../../../assests/brands/tiktok.png';

export default function BrandsDefault() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    return (
        <div className="my-[70px] text-center">
            <p className='my-10 xl:text-lg text-sm'>Trusted by over 150+ Major Companies.</p>
            <Marquee direction="right" speed={80} delay={5}>
                {
                    images.map((img, index) => (
                        <div key={index} className="mx-[50px]" >
                            <img
                                className='lg:w-[80px] w-[40px]
                                grayscale hover:grayscale-0 '    src={img}
                                alt={`House ${index + 1}`}
                            />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}