import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from "react";

import {HiArrowLeftCircle, HiArrowRightCircle, HiArrowUpCircle} from "react-icons/hi2";
import image1 from '../../assets/images/slide/1.jpg'
import image2 from '../../assets/images/slide/2.jpg'
import image3 from '../../assets/images/slide/3.jpg'
import image4 from '../../assets/images/slide/4.jpg'
import image5 from '../../assets/images/slide/5.jpg'
import image6 from '../../assets/images/slide/6.jpg'
import image7 from '../../assets/images/slide/7.jpg'
import image8 from '../../assets/images/slide/8.jpg'
import image9 from '../../assets/images/slide/9.jpg'
import image10 from '../../assets/images/slide/10.jpg'


export default  function ImageSlider() {
    const sliderRef = React.useRef<Slider>(null)
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    })

    const images = [
        image1
        , image2
        , image3
        , image4
        , image5
        , image6
        , image7
        , image8
        , image9
        , image10
    ]

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setSettings({
                    ...settings,
                    slidesToShow: entry.contentRect.width / 280
                })
            }
        });
        if (sliderRef.current?.innerSlider?.list) {
            observer.observe(sliderRef.current.innerSlider.list);
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    function next() {
        sliderRef.current?.slickNext()
    }

    function prev() {
        sliderRef.current?.slickPrev()
    }

    return (
        <div className="flex flex-row w-ful justify-center py-10 border-2">
            <button className="flex justify-center  items-center w-[50px]" onClick={prev}>
                <HiArrowLeftCircle fontSize="30px"/>
            </button>
            <Slider ref={sliderRef} {...settings} className=" w-[80%] grow">
                {images.map((image, index) => (
                    <div key={index} className="h-[180px] relative">
                        <img src={image} alt={`Image ${index}`} className="object-cover w-full h-full"/>
                    </div>
                ))}
            </Slider>
            <button className="flex justify-center  items-center w-[50px]" onClick={next}>
                <HiArrowRightCircle fontSize="30px"/>
            </button>
        </div>
    )
}