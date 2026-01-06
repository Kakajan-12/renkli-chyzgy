'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {useEffect, useState} from 'react';
import axios from 'axios';

interface Slider {
    slider_id: number;
    project_id: number;
    image: string;
    title: string;
    text: string;
    category: string;
}

export default function Main() {
    const [sliders, setSliders] = useState<Slider[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSliders = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/sliders`);
                setSliders(res.data);
            } catch (err) {
                console.error('Error fetching sliders', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSliders();
    }, []);

    if (loading) return <p className="text-center py-12">Loading sliders...</p>;
    if (sliders.length === 0) return <p className="text-center py-12">No sliders available</p>;

    return (
        <div className="-mt-2">
            <div className="my-container mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{delay: 5000, disableOnInteraction: false}}
                    effect="fade"
                    fadeEffect={{crossFade: true}}
                    pagination={{clickable: true}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="h-screen"
                >
                    {sliders.map((slider) => (
                        <SwiperSlide key={slider.slider_id} className="relative h-screen">
                            <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${slider.image.replace(/\\/g, '/')}`}
                                alt="Project"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />

                            <div
                                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30 p-6">
                                <h1
                                    className="text-4xl md:text-6xl font-bold mb-4"
                                    dangerouslySetInnerHTML={{__html: slider.title}}
                                />
                                <span className="mt-4 inline-block bg-black/50 px-4 py-2 rounded-full">
                    {slider.category}
                </span>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div
                        className="!hidden md:!block swiper-button-next !text-white !w-12 !h-12 rounded-full !right-4 after:!text-lg"></div>
                    <div
                        className="!hidden md:!block swiper-button-prev !text-white !w-12 !h-12 rounded-full !left-4 after:!text-lg"></div>
                </Swiper>

            </div>
        </div>
    );
}
