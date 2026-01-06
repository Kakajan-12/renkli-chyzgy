'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    category: string;
}

interface Project {
    id: number;
    image: string;
    title: string;
    text: string;
    category_id: number;
    category: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [filter, setFilter] = useState<number | 'all'>('all');

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category`)
            .then(res => res.json())
            .then(setCategories);

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
            .then(res => res.json())
            .then(setProjects);
    }, []);

    const filteredProjects =
        filter === 'all'
            ? projects
            : projects.filter(p => p.category_id === filter);

    return (
        <div className="pt-14">

            <div className="main-bg-color h-96">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex items-center h-full">
                        <p className="max-w-2xl text-white text-lg md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                            dolorum ducimus, eaque minima molestias odit qui. Maxime, nemo, qui! Ad aliquam deleniti
                            deserunt fuga labore nobis quibusdam rerum sed velit.</p>
                    </div>
                </div>
            </div>
            <div className="sticky top-0 z-30 bg-white border-b py-4">
                <div className="flex justify-center gap-3 flex-wrap">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg cursor-pointer ${
                            filter === 'all'
                                ? 'main-bg-color text-white'
                                : 'bg-gray-100'
                        }`}
                    >
                        All
                    </button>

                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 py-2 rounded-lg cursor-pointer ${
                                filter === cat.id
                                    ? 'main-bg-color text-white'
                                    : 'bg-gray-100'
                            }`}
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {filteredProjects.map(project => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="block"
                        >
                            <div className="main-bg-color rounded-md overflow-hidden">

                                <div className="relative aspect-[4/3] bg-white">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/${project.image.replace(/\\/g, '/')}`}
                                        alt=""
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-4">
                                    <div
                                        className="text-lg font-medium text-white"
                                        dangerouslySetInnerHTML={{__html: project.title}}
                                    />
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>


            {filteredProjects.length === 0 && (
                <p className="text-center text-gray-500">
                    No projects
                </p>
            )}
        </div>
    );
}
