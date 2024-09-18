import { notFound } from "next/navigation";

import Home from "@/components/home";
import { getPhotoUrl } from "@/firebase/db/photo";

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

  // About
  const avatarUrlPromise = getPhotoUrl("avatar/profile-picture.jpg");
  const cartoonUrlPromise = getPhotoUrl("avatar/cartoon-picture.jpg");
  const resumeUrlPromise = getPhotoUrl("Chengxiang-Wu-Resume-2024.pdf");

  // Research
  const ethnomusicologyUrlPromise = getPhotoUrl("research/ethnomusicology.jpeg");
  const vtmpUrlPromise = getPhotoUrl("research/vtmp.jpg");
  const boulezUrlPromise = getPhotoUrl("research/boulez.jpg");
  const deepDrawingUrlPromise = getPhotoUrl("research/deep-drawing.jpg");

  // Publications
  const amis2023UrlPromise = getPhotoUrl("publications/amis-2023-presentation.pdf");
  const amis2024UrlPromise = getPhotoUrl("publications/amis-2024-poster.pdf");
  const aimc2024UrlPromise = getPhotoUrl("publications/aimc-2024-paper.pdf");

  // Projects
  const multimeterUrlPromise = getPhotoUrl("projects/multimeter.jpg");
  const improvisationTutorUrlPromise = getPhotoUrl("projects/placeholder.png"); // To be updated

  const mediaUrls: Record<string, string[]> = {
    multimeter: [await getPhotoUrl("projects/multimeter.gif")],
  };

  const [
    avatarUrl,
    cartoonUrl,
    resumeUrl,
    ethnomusicologyUrl,
    vtmpUrl,
    boulezUrl,
    deepDrawingUrl,
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
    vtmpUrlPromise,
    boulezUrlPromise,
    deepDrawingUrlPromise,
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
      vtmpUrl={vtmpUrl}
      boulezUrl={boulezUrl}
      deepDrawingUrl={deepDrawingUrl}
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
