'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    company?: string;
    image?: string;
}

interface RelatedProject {
    id: number;
    title: string;
    category: string;
    image: string;
    slug: string;
}

export default function ProjectDetailPage() {
    const t = useTranslations('ProjectDetail');
    const params = useParams();
    const router = useRouter();

    // Получаем slug проекта из URL
    const projectSlug = params.slug as string;

    // Данные текущего проекта (в реальности это будет запрос к API)
    const currentProject = {
        id: 1,
        title: t('project.title'),
        description: t('project.description'),
        category: 'branding',
        year: '2023',
        date: '01.01.2010',
        client: t('project.client'),
        services: [
            t('services.brandIdentity'),
            t('services.logoDesign'),
            t('services.packaging'),
            t('services.printDesign')
        ],
        images: [
            '/projects/project-main.jpg',
            '/projects/project-1.jpg',
            '/projects/project-2.jpg',
            '/projects/project-3.jpg'
        ],
        challenge: t('project.challenge'),
        solution: t('project.solution'),
        results: t('project.results'),
        team: [
            {
                id: 1,
                name: 'John Smith',
                role: t('roles.artDirector'),
                company: 'Globalist Adstribution'
            },
            {
                id: 2,
                name: 'Sarah Johnson',
                role: t('roles.designer'),
                company: 'Diseits Partiyama'
            },
            {
                id: 3,
                name: 'Anna Korninova',
                role: t('roles.illustrator')
            }
        ] as TeamMember[]
    };

    // Похожие проекты
    const relatedProjects: RelatedProject[] = [
        {
            id: 1,
            title: t('relatedProjects.project1.title'),
            category: 'branding',
            image: '/projects/related-1.jpg',
            slug: 'branding-identity'
        },
        {
            id: 2,
            title: t('relatedProjects.project2.title'),
            category: 'web',
            image: '/projects/related-2.jpg',
            slug: 'website-redesign'
        },
        {
            id: 3,
            title: t('relatedProjects.project3.title'),
            category: 'packaging',
            image: '/projects/related-3.jpg',
            slug: 'packaging-design'
        }
    ];

    return (
        <div className="pt-20 sm:pt-16">
            {/* Hero секция проекта */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Навигация */}
                        <div className="mb-8">
                            <Link
                                href="/projects"
                                className="text-gray-500 hover:text-black transition-colors inline-flex items-center"
                            >
                                ← {t('backToProjects')}
                            </Link>
                        </div>

                        {/* Информация о проекте */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            <div className="lg:col-span-2">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    {currentProject.title}
                                </h1>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {currentProject.description}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold mb-4">{t('projectInfo')}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">{t('client')}</div>
                                        <div className="font-medium">{currentProject.client}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">{t('year')}</div>
                                        <div className="font-medium">{currentProject.year}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">{t('date')}</div>
                                        <div className="font-medium">{currentProject.date}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">{t('category')}</div>
                                        <div className="font-medium">{t('categories.branding')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Главное изображение */}
                        <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-12">
                            <Image
                                src={currentProject.images[0]}
                                alt={currentProject.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Детали проекта */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Основной контент */}
                        <div className="lg:col-span-2">
                            {/* Услуги */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-6">{t('servicesProvided')}</h2>
                                <div className="flex flex-wrap gap-3">
                                    {currentProject.services.map((service, index) => (
                                        <span
                                            key={index}
                                            className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-4 py-2 rounded-full font-medium border border-blue-100"
                                        >
                      {service}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Кейс */}
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{t('challenge')}</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {currentProject.challenge}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{t('solution')}</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {currentProject.solution}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{t('results')}</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {currentProject.results}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Боковая панель - команда */}
                        <div>
                            <div className="sticky top-24">
                                <h2 className="text-2xl font-bold mb-6">{t('team')}</h2>
                                <div className="space-y-6">
                                    {currentProject.team.map((member) => (
                                        <div key={member.id}
                                             className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="text-lg font-bold mb-1">{member.name}</div>
                                            <div className="text-blue-600 font-medium mb-1">{member.role}</div>
                                            {member.company && (
                                                <div className="text-gray-500 text-sm">{member.company}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Дополнительные изображения */}
                                <div className="mt-12">
                                    <h3 className="text-xl font-bold mb-4">{t('projectGallery')}</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {currentProject.images.slice(1).map((image, index) => (
                                            <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                                                <Image
                                                    src={image}
                                                    alt={`${currentProject.title} - Image ${index + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 768px) 50vw, 25vw"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Похожие проекты */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold">{t('seeAlso')}</h2>
                            <Link
                                href="/projects"
                                className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                                {t('viewAll')} →
                            </Link>
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                            }}
                        >
                            {relatedProjects.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <Link href={`/projects/${project.slug}`}>
                                        <div
                                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                            <div className="relative h-48 md:h-56">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute top-4 left-4">
                          <span className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
                            {t(`categories.${project.category}`)}
                          </span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
}