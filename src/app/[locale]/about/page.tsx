'use client'

import {useTranslations} from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

export default function About() {
    const t = useTranslations('About')
    const m = useTranslations('Main')

    const images = [
        { id: 1, src: '/about/design1.jpg', alt: 'Brand Identity Design' },
        { id: 2, src: '/about/design2.jpg', alt: 'Web Design Project' },
        { id: 3, src: '/about/design3.jpg', alt: 'Mobile App UI' },
        { id: 4, src: '/about/design4.jpg', alt: 'Marketing Materials' },
        { id: 5, src: '/about/design5.jpg', alt: 'Packaging Design' },
        { id: 6, src: '/about/design6.jpg', alt: 'Social Media Graphics' },
    ];

    return (
        <div className="pt-20 sm:pt-32 about-bg-color">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-24 mb-16">
                    <div className="lg:w-2/5">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">{t('title')}</div>
                    </div>
                    <div className="lg:w-3/5">
                        <div className="text-md md:text-lg text-gray-700 leading-relaxed text-white">
                            {t('title')}
                        </div>
                    </div>
                </div>
                <div className="w-full py-56 main-bg-color flex justify-center items-center">
                    <Image src="/about.png" alt="logo"
                           width={256} height={256}/>
                </div>
                <div className="pt-6 space-y-4">
                    <div className="text-white text-4xl md:text-6xl">{t('our-team')}</div>
                    <div
                        className="flex flex-col items-center md:justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                        <div className="max-w-[400px] w-full">
                            <Image src="/team/director.png" alt="director"
                                   width={256} height={512}
                                   className="w-full"/>
                        </div>
                        <div className="max-w-[400px] w-full">
                            <Image src="/team/director.png" alt="director"
                                   width={256} height={512}
                                   className="w-full"/>
                        </div>

                        <div className="max-w-[400px] w-full">
                            <Image src="/team/director.png" alt="director"
                                   width={256} height={512}
                                   className="w-full"/>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 md:space-x-6 pt-20">
                    <div className="text-white text-4xl md:text-6xl text-wrap max-w-[270px]">{t('our-projects')}</div>
                    <div className="flex justify-end space-x-2">
                        <div className="flex items-end">
                            <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">7</p>
                            <p className="text-md md:text-lg lg:text-xl text-white">{m('month')}</p>
                        </div>
                        <div className="flex items-end">
                            <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">777</p>
                            <p className="text-md md:text-lg lg:text-xl text-white">{m('projects')}</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Swiper
                        modules={[Navigation, Autoplay, EffectCreative]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.about-swiper-next',
                            prevEl: '.about-swiper-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.about-swiper-pagination',
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        effect="creative"
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ['-120%', 0, -500],
                            },
                            next: {
                                shadow: true,
                                translate: ['120%', 0, -500],
                            },
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="pb-12"
                    >
                        {images.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                                    <div className="relative h-72 md:h-80">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Наложение при наведении */}
                                        <div
                                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                <span className="text-white font-medium">View Project</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Кастомные стрелки навигации */}
                        <div
                            className="about-swiper-next absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all">
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                        <div
                            className="about-swiper-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all">
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </div>

                        {/* Кастомная пагинация */}
                        <div className="about-swiper-pagination flex justify-center space-x-2 mt-6"></div>
                    </Swiper>

                    {/* Стили для пагинации */}
                    <style jsx global>{`
                        .about-swiper-pagination .swiper-pagination-bullet {
                            background: #9ca3af;
                            opacity: 0.5;
                            width: 8px;
                            height: 8px;
                            transition: all 0.3s;
                        }

                        .about-swiper-pagination .swiper-pagination-bullet-active {
                            background: #3b82f6;
                            opacity: 1;
                            width: 24px;
                            border-radius: 4px;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    )
}