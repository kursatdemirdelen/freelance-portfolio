import React from 'react';
import { useRouter } from 'next/router';
import projects from '../../data/projects';

const ProjectDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // Bulunan proje
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container mx-auto py-16 px-6 text-center">
                <h1 className="text-4xl font-bold text-red-600">Üzgünüz</h1>
                <p className="mt-4">Proje bulunamadı. İlgili sayfayı görüntüleyemiyorsunuz.</p>
                <a
                    href="/projects"
                    className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                    Geri Projeler
                </a>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-4">{project.description}</p>
            <a
                href="/projects"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
                Geri Projeler
            </a>
        </div>
    );
};

export default ProjectDetail;
