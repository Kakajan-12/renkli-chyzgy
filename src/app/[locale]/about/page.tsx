'use client'

import {useTranslations} from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

interface Project {
    id: number;
    image: string;
    title: string;
    text: string;
    category_id: number;
    category: string;
}

interface Counter {
    id: number;
    years: number;
    projects: number;
}

export default function About() {
    const t = useTranslations('About')
    const m = useTranslations('Main')
    const [projects, setProjects] = useState<Project[]>([]);
    const [counter, setCounter] = useState<Counter | null>(null);
    const [loading, setLoading] = useState(true);
    const lastProjects = [...projects]
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectsRes, counterRes] = await Promise.all([
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/counter`)
                ]);

                setProjects(projectsRes.data);
                setCounter(counterRes.data[0]);
            } catch (err) {
                console.error('Error fetching data', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="text-center py-12">Loading...</p>;
    if (projects.length === 0) return <p className="text-center py-12">No data available</p>;

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
                    {counter && (
                    <div className="flex justify-end space-x-2">
                        <div className="flex items-end">
                            <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">{counter.years}</p>
                            <p className="text-md md:text-lg lg:text-xl text-white">{m('years')}</p>
                        </div>
                        <div className="flex items-end">
                            <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"> {counter.projects}</p>
                            <p className="text-md md:text-lg lg:text-xl text-white">{m('projects')}</p>
                        </div>
                    </div>
                    )}
                </div>
                <div className="py-8">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={lastProjects.length > 3}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12"
                    >
                        {lastProjects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <Link href={`/projects/${project.id}`} className="block">
                                    <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                                        <div className="relative h-72 md:h-80">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_URL}/${project.image.replace('\\', '/')}`}
                                                alt={project.title}
                                                fill
                                                unoptimized
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw,
                                   (max-width: 1200px) 50vw,
                                   33vw"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div
                                                    className="text-lg font-medium text-white"
                                                    dangerouslySetInnerHTML={{ __html: project.title }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
    )
}