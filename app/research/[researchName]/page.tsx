import { getPhotoUrl } from '@/firebase/db/photo';
import ProjectDetails from '@/components/project-details';

interface PageProps {
    params: {
        researchName: string;
    };
}

export async function generateStaticParams() {
    const researchNames = [
        'ethnomusicology',
    ];

    return researchNames.map((researchName) => ({ researchName }));
}

export default async function ResearchPage({ params }: PageProps) {
    const { researchName } = params;

    // Fetch media URLs for the research item separately
    let mediaUrls: Record<string, string[]> = {};

    if (researchName === 'ethnomusicology') {
        mediaUrls[researchName] = [];
    }

    // Render the ProjectDetails component
    return (
        <ProjectDetails
        projectKey={researchName}
        mediaUrls={mediaUrls}
        />
    );
}