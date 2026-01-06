'use client'

import {useTranslations} from "next-intl";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import {useEffect, useState} from 'react';
import axios from 'axios';

interface GalleryImage {
    id: number;
    image: string;
}

interface Counter {
    id: number;
    years: number;
    projects: number;
}


export default function MainAbout() {
    const t = useTranslations('Main');
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [counter, setCounter] = useState<Counter | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [galleryRes, counterRes] = await Promise.all([
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/about-gallery`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/counter`)
                ]);

                setImages(galleryRes.data);
                setCounter(counterRes.data[0]);
            } catch (err) {
                console.error('Error fetching data', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    if (loading) return <p className="text-center py-12">Loading gallery...</p>;
    if (images.length === 0) return <p className="text-center py-12">No images available</p>;

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-24 mb-16">
                <div className="lg:w-2/5">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t('about')}</div>
                </div>
                <div className="lg:w-3/5">
                    <div className="text-md md:text-lg text-gray-700 leading-relaxed">
                        {t('description')}
                    </div>
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    990: {
                        slidesPerView: 2.5,
                    },
                }}
                loop={true}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                className="mb-16"
            >
                {images.map((img) => (
                    <SwiperSlide key={img.id}>
                        <div className="relative overflow-hidden rounded-2xl group cursor-pointer h-72 md:h-80">
                            <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${img.image.replace(/\\/g, '/')}`}
                                alt={`Gallery ${img.id}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {counter && (
                <div className="flex justify-center space-x-10 mt-10">
                    <div className="flex items-end space-x-2">
                        <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                            {counter.years}
                        </p>
                        <p className="text-md md:text-lg lg:text-xl">
                            {t('years')}
                        </p>
                    </div>

                    <div className="flex items-end space-x-2">
                        <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                            {counter.projects}
                        </p>
                        <p className="text-md md:text-lg lg:text-xl">
                            {t('projects')}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
