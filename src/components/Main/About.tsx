'use client'

import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

export default function MainAbout() {
    const t = useTranslations('Main');

    // Изображения для слайдера
    const images = [
        { id: 1, src: '/about/design1.jpg', alt: 'Brand Identity Design' },
        { id: 2, src: '/about/design2.jpg', alt: 'Web Design Project' },
        { id: 3, src: '/about/design3.jpg', alt: 'Mobile App UI' },
        { id: 4, src: '/about/design4.jpg', alt: 'Marketing Materials' },
        { id: 5, src: '/about/design5.jpg', alt: 'Packaging Design' },
        { id: 6, src: '/about/design6.jpg', alt: 'Social Media Graphics' },
    ];

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            {/* Заголовок и описание */}
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

            {/* Swiper карусель */}
            <div className="mb-16">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCreative]}
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Наложение при наведении */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                            <span className="text-white font-medium">View Project</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Кастомные стрелки навигации */}
                    <div className="about-swiper-next absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className="about-swiper-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
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

            <div className="flex justify-center space-x-2">
                <div className="flex items-end">
                    <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">7</p>
                    <p className="text-md md:text-lg lg:text-xl">{t('month')}</p>
                </div>
                <div className="flex items-end">
                    <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">777</p>
                    <p className="text-md md:text-lg lg:text-xl">{t('projects')}</p>
                </div>
            </div>
        </div>
    );
}