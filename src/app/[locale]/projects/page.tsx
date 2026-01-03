'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    year: string;
    client?: string;
    services: string[];
}

export default function ProjectsPage() {
    const t = useTranslations('Projects');
    const [filter, setFilter] = useState<string>('all');

    // Данные проектов с добавлением slug
    const projects: Project[] = [
        {
            id: 1,
            slug: 'renkli-brand-identity',
            title: t('projects.branding.title'),
            category: 'branding',
            description: t('projects.branding.description'),
            image: '/projects/branding-identity.jpg',
            year: '2023',
            client: t('projects.branding.client'),
            services: [t('categories.branding'), t('categories.logo'), t('categories.packaging')]
        },
        {
            id: 2,
            slug: 'e-commerce-platform',
            title: t('projects.website.title'),
            category: 'web',
            description: t('projects.website.description'),
            image: '/projects/website-design.jpg',
            year: '2023',
            client: t('projects.website.client'),
            services: [t('categories.web'), t('categories.ui'), t('categories.responsive')]
        },
        {
            id: 3,
            slug: 'fitness-mobile-app',
            title: t('projects.app.title'),
            category: 'mobile',
            description: t('projects.app.description'),
            image: '/projects/mobile-app.jpg',
            year: '2022',
            client: t('projects.app.client'),
            services: [t('categories.app'), t('categories.ui'), t('categories.ux')]
        },
        {
            id: 4,
            slug: 'organic-packaging-design',
            title: t('projects.packaging.title'),
            category: 'packaging',
            description: t('projects.packaging.description'),
            image: '/projects/packaging-design.jpg',
            year: '2023',
            client: t('projects.packaging.client'),
            services: [t('categories.packaging'), t('categories.print'), t('categories.3d')]
        },
        {
            id: 5,
            slug: 'social-media-campaign',
            title: t('projects.social.title'),
            category: 'social',
            description: t('projects.social.description'),
            image: '/projects/social-media.jpg',
            year: '2022',
            client: t('projects.social.client'),
            services: [t('categories.social'), t('categories.animation'), t('categories.graphics')]
        },
        {
            id: 6,
            slug: 'corporate-brochure',
            title: t('projects.print.title'),
            category: 'print',
            description: t('projects.print.description'),
            image: '/projects/print-design.jpg',
            year: '2023',
            client: t('projects.print.client'),
            services: [t('categories.print'), t('categories.editorial'), t('categories.layout')]
        },
        {
            id: 7,
            slug: 'digital-illustrations',
            title: t('projects.illustration.title'),
            category: 'illustration',
            description: t('projects.illustration.description'),
            image: '/projects/illustrations.jpg',
            year: '2022',
            client: t('projects.illustration.client'),
            services: [t('categories.illustration'), t('categories.digital'), t('categories.art')]
        },
        {
            id: 8,
            slug: 'advertising-campaign',
            title: t('projects.campaign.title'),
            category: 'advertising',
            description: t('projects.campaign.description'),
            image: '/projects/ad-campaign.jpg',
            year: '2023',
            client: t('projects.campaign.client'),
            services: [t('categories.campaign'), t('categories.strategy'), t('categories.creative')]
        }
    ];

    // Категории для фильтрации
    const categories = [
        { id: 'all', name: t('filters.all') },
        { id: 'branding', name: t('filters.branding') },
        { id: 'web', name: t('filters.web') },
        { id: 'mobile', name: t('filters.mobile') },
        { id: 'packaging', name: t('filters.packaging') },
        { id: 'social', name: t('filters.social') },
        { id: 'print', name: t('filters.print') },
        { id: 'illustration', name: t('filters.illustration') },
        { id: 'advertising', name: t('filters.advertising') }
    ];

    // Фильтрация проектов
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="pt-20 sm:pt-16">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            {t('subtitle')}
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
                    </div>
                </div>
            </div>

            {/* Фильтры */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                                    filter === category.id
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid проектов */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map(project => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="group block"
                        >
                            <div
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                                {/* Изображение проекта */}
                                <div className="relative h-64 md:h-72 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Бейдж категории и года */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="flex flex-wrap gap-2">
                                            <span
                                                className="bg-white/90 backdrop-blur-sm text-black text-xs font-medium px-3 py-1 rounded-full">
                                                {project.year}
                                            </span>
                                            <span
                                                className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                {categories.find(c => c.id === project.category)?.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Информация о проекте */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Услуги проекта */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.services.slice(0, 3).map((service, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Клиент (если есть) */}
                                    {project.client && (
                                        <div className="text-sm text-gray-500">
                                            <span className="font-medium">{t('for')}: </span>
                                            {project.client}
                                        </div>
                                    )}

                                    {/* Кнопка просмотра */}
                                    <div
                                        className="mt-4 text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors">
                                        <span>{t('viewProject')}</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Сообщение если проектов нет */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-4xl mb-4">🎨</div>
                        <h3 className="text-2xl font-bold mb-2">{t('noProjects')}</h3>
                        <p className="text-gray-600">{t('noProjectsDescription')}</p>
                    </div>
                )}
            </div>

        </div>
    );
}