import { getPhotoUrl } from '@/firebase/db/photo';
import ItemDetails from '@/components/item-details';

interface PageProps {
    params: {
        projectName: string;
    };
}

export async function generateStaticParams() {
    const projectNames = [
        'multimeter',
        'improvisationTutor',
    ];

    return projectNames.map((projectName) => ({ projectName }));
}

export default async function ProjectPage({ params }: PageProps) {
    const { projectName } = params;

    // Fetch media URLs for the project separately
    let mediaUrls: Record<string, string[]> = {};

    if (projectName === 'multimeter') {
        mediaUrls[projectName] = [
            await getPhotoUrl(`projects/multimeter.gif`),
        ];
    } else if (projectName === 'improvisationTutor') {
        mediaUrls[projectName] = [];
    } 

    // Render the ProjectDetails component
    return (
        <ItemDetails
        itemKey={projectName}
        mediaUrls={mediaUrls}
        />
    );
}