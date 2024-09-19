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

    const amis2023Url = await getPhotoUrl("publications/amis-2023-presentation.pdf");
    const amis2024Url = await getPhotoUrl("publications/amis-2024-poster.pdf");
    const aimc2024Url = await getPhotoUrl("publications/aimc-2024-paper.pdf");

    // Render the ItemDetails component
    return (
        <ItemDetails
        itemKey={projectName}
        mediaUrls={mediaUrls}
        amis2023Url={amis2023Url}
        amis2024Url={amis2024Url}
        aimc2024Url={aimc2024Url}
        />
    );
}