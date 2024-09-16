import Home from "@/components/home";
import { getPhotoUrl } from "@/firebase/db/photo";
import { notFound } from "next/navigation";

// Define all possible tabs
const TABS = ["about", "research", "publications", "projects"];

// Export generateStaticParams
export function generateStaticParams() {
  return TABS.map((tab) => ({ tab }));
}

export default async function Page({ params }: { params: { tab: string } }) {
  const selectedTab = params.tab || "about";

  // Handle invalid tabs
  if (!TABS.includes(selectedTab)) {
    notFound();
  }

  // Fetch your data here...

  // About
  const avatarUrlPromise = getPhotoUrl("avatar/profile-picture.jpg");
  const cartoonUrlPromise = getPhotoUrl("avatar/cartoon-picture.jpg");
  const resumeUrlPromise = getPhotoUrl("Chengxiang-Wu-Resume-2024.pdf");

  // Research
  const ethnomusicologyUrlPromise = getPhotoUrl("research/ethnomusicology.jpeg");

  // Publications
  const amis2023UrlPromise = getPhotoUrl("publications/amis-2023-presentation.pdf");
  const amis2024UrlPromise = getPhotoUrl("publications/amis-2024-poster.pdf");
  const aimc2024UrlPromise = getPhotoUrl("publications/aimc-2024-paper.pdf");

  // Projects
  const multimeterUrlPromise = getPhotoUrl("projects/multimeter.jpg");
  const improvisationTutorUrlPromise = getPhotoUrl("projects/placeholder.png"); // To be updated

  const mediaUrls: Record<string, string[]> = {
    multimeter: [await getPhotoUrl("projects/multimeter.gif")],
    // Add other media URLs as needed
  };

  const [
    avatarUrl,
    cartoonUrl,
    resumeUrl,
    ethnomusicologyUrl,
    amis2023Url,
    amis2024Url,
    aimc2024Url,
    multimeterUrl,
    improvisationTutorUrl,
  ] = await Promise.all([
    avatarUrlPromise,
    cartoonUrlPromise,
    resumeUrlPromise,
    ethnomusicologyUrlPromise,
    amis2023UrlPromise,
    amis2024UrlPromise,
    aimc2024UrlPromise,
    multimeterUrlPromise,
    improvisationTutorUrlPromise,
  ]);

  const projectTags = {
    multimeter: ["VST Development", "UI/UX Design"],
    improvisationTutor: ["Web Development", "UI/UX Design"],
    // Add tags for other projects
  };

  return (
    <Home
      selectedTab={selectedTab}
      // About
      avatarUrl={avatarUrl}
      cartoonUrl={cartoonUrl}
      resumeUrl={resumeUrl}
      // Research
      ethnomusicologyUrl={ethnomusicologyUrl}
      // Publications
      amis2023Url={amis2023Url}
      amis2024Url={amis2024Url}
      aimc2024Url={aimc2024Url}
      // Projects
      multimeterUrl={multimeterUrl}
      improvisationTutorUrl={improvisationTutorUrl}
      mediaUrls={mediaUrls}
      projectTags={projectTags}
    />
  );
}
