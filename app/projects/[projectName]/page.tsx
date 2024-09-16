// app/projects/[projectName]/page.tsx
import { getPhotoUrl } from '@/firebase/db/photo';
import ProjectDetails from '@/components/project-details';

interface PageProps {
    params: {
        projectName: string;
    };
}

// Add this function
export async function generateStaticParams() {
    const projectNames = [
        'multimeter',
        'improvisationTutor',
        // Add other project names here
    ];

    return projectNames.map((projectName) => ({ projectName }));
}

export default async function ProjectPage({ params }: PageProps) {
    const { projectName } = params;

    // Fetch media URLs for the project
    const mediaUrls = {
        [projectName]: [await getPhotoUrl(`projects/${projectName}.gif`)],
        // Add other media URLs as needed
    };

    // Render the ProjectDetails component
    return (
        <ProjectDetails
        projectKey={projectName}
        mediaUrls={mediaUrls}
        // Pass other necessary props if needed
        />
    );
}