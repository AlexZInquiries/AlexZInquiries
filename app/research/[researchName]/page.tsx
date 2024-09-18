import { getPhotoUrl } from '@/firebase/db/photo';
import ItemDetails from '@/components/item-details';

interface PageProps {
    params: {
        researchName: string;
    };
}

export async function generateStaticParams() {
    const researchNames = [
        'ethnomusicology',
        'vtmp',
        'boulez',
        'deep-drawing',
    ];

    return researchNames.map((researchName) => ({ researchName }));
}

export default async function ResearchPage({ params }: PageProps) {
    const { researchName } = params;

    // Fetch media URLs for the research item separately
    let mediaUrls: Record<string, string[]> = {};

    if (researchName === 'ethnomusicology') {
        mediaUrls[researchName] = [];
    } else if (researchName === 'vtmp') {
        mediaUrls[researchName] = [];
    } else if (researchName === 'boulez') {
        mediaUrls[researchName] = [];
    } else if (researchName === 'deep-drawing') {
        mediaUrls[researchName] = [];
    }

    // Render the ProjectDetails component
    return (
        <ItemDetails
        itemKey={researchName}
        mediaUrls={mediaUrls}
        />
    );
}