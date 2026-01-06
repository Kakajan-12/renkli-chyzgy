'use client';

import {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import axios from 'axios';

interface Project {
    id: number;
    title: string;
    text: string;
    image: string;
    category: string;
    director: string;
    designer: string;
    date: string;
}

interface GalleryImage {
    id: number;
    image: string;
    project_id: number;
    title: string;
}

export default function ProjectDetailPage() {
    const params = useParams();
    const id = String(params.id);

    const [project, setProject] = useState<Project | null>(null);
    const [gallery, setGallery] = useState<GalleryImage[]>([]);

    useEffect(() => {
        if (!id) return;

        const fetchProject = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`);
                setProject(res.data);

                const galleryRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`);
                const projectGallery = galleryRes.data.filter((img: GalleryImage) => img.project_id === Number(id));
                setGallery(projectGallery);
            } catch (e) {
                console.error('Project not found', e);
                setProject(null);
            }
        };

        fetchProject();
    }, [id]);

    if (!project) return <div className="py-24 text-center text-lg">Project not found</div>;

    return (
        <div className="pt-20">
            <div className="container mx-auto px-4">
                <div className="mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6"
                        dangerouslySetInnerHTML={{__html: project.title}}/>
                    <div className="mb-6">
                        <span className="inline-block main-bg-color text-white px-4 py-1 rounded-full text-sm">
                            {project.category}
                        </span>
                    </div>
                    <div className="text-xl" dangerouslySetInnerHTML={{__html: project.text}}/>
                </div>
            </div>
            <div className="relative w-full overflow-hidden bg-gray-100">
                <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${project.image.replace(/\\/g, '/')}`}
                    alt="Project"
                    className="w-full object-contain"
                />
            </div>
            {gallery.length > 0 && (
                <div>
                    {gallery.map(img => (
                        <div key={img.id} className="bg-gray-100 rounded overflow-hidden">
                            <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${img.image.replace(/\\/g, '/')}`}
                                alt=""
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
            <div className="py-6 container mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <p className="font-medium text-lg">Director</p>
                        <p className="text-[#67A4D5] text-lg">{project.director}</p>
                    </div>
                    <div>
                        <p className="font-medium text-lg">Designer</p>
                        <p className="text-[#67A4D5] text-lg">{project.designer}</p>
                    </div>
                    <div>
                        <p className="font-medium text-lg">Date</p>
                        <p className="text-[#67A4D5] text-lg">{project.date ? new Date(project.date).toLocaleDateString('ru-RU') : 'No date'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
