// app/research/[researchName]/page.tsx
import { getPhotoUrl } from '@/firebase/db/photo';
import ProjectDetails from '@/components/project-details';

interface PageProps {
    params: {
        researchName: string;
    };
}

// Add this function
export async function generateStaticParams() {
    const researchNames = [
        'ethnomusicology',
        // Add other research names here
    ];

    return researchNames.map((researchName) => ({ researchName }));
}

export default async function ResearchPage({ params }: PageProps) {
    const { researchName } = params;

    // Fetch media URLs for the research item
    const mediaUrls = {
        [researchName]: [await getPhotoUrl(`research/${researchName}.jpeg`)],
        // Add other media URLs as needed
    };

    // Render the ProjectDetails component
    return (
        <ProjectDetails
        projectKey={researchName}
        mediaUrls={mediaUrls}
        // Pass other necessary props if needed
        />
    );
}