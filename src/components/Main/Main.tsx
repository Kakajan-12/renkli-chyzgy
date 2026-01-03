'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

// Типы для проектов
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    link?: string;
}

export default function Main() {
    const t = useTranslations('Main');

    // Пример данных проектов
    const projects: Project[] = [
        {
            id: 1,
            title: t('projects.project1.title'),
            description: t('projects.project1.description'),
            image: '/projects/project1.jpg',
            category: t('categories.web'),
            link: '/projects/project1'
        },
        {
            id: 2,
            title: t('projects.project2.title'),
            description: t('projects.project2.description'),
            image: '/projects/project2.jpg',
            category: t('categories.mobile'),
            link: '/projects/project2'
        },
        {
            id: 3,
            title: t('projects.project3.title'),
            description: t('projects.project3.description'),
            image: '/projects/project3.jpg',
            category: t('categories.uiux'),
            link: '/projects/project3'
        },
        {
            id: 4,
            title: t('projects.project4.title'),
            description: t('projects.project4.description'),
            image: '/projects/project4.jpg',
            category: t('categories.branding'),
            link: '/projects/project4'
        },
        {
            id: 5,
            title: t('projects.project5.title'),
            description: t('projects.project5.description'),
            image: '/projects/project5.jpg',
            category: t('categories.web'),
            link: '/projects/project5'
        },
    ];

    return (
        <div className="py-12">

            <div className="my-container mx-auto px-4">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true
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
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                {/* Изображение проекта */}
                                <div className="relative h-64 md:h-72 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full">
                                          {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Контент проекта */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                        >
                                            {t('viewProject')}
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Кастомные стрелки навигации */}
                    <div
                        className="swiper-button-next !text-black !w-12 !h-12 bg-white/80 hover:bg-white rounded-full shadow-lg !right-4 after:!text-lg"></div>
                    <div
                        className="swiper-button-prev !text-black !w-12 !h-12 bg-white/80 hover:bg-white rounded-full shadow-lg !left-4 after:!text-lg"></div>
                </Swiper>

                {/* Кастомные точки пагинации */}
                <style jsx global>{`
                    .swiper-pagination-bullet {
                        background: #d1d5db !important;
                        opacity: 0.7;
                        width: 10px;
                        height: 10px;
                    }

                    .swiper-pagination-bullet-active {
                        background: #3b82f6 !important;
                        opacity: 1;
                        width: 30px;
                        border-radius: 5px;
                    }
                `}</style>
            </div>

        </div>
    );
}