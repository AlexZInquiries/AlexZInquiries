import Home from "@/components/home";
import { getPhotoUrl } from "@/firebase/db/photo";

export default async function App() {
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

  const mediaUrls: Record<string, string[]> = {
    // Research
    // Publications
    // Projects
    multimeter: [
      await getPhotoUrl("projects/multimeter.gif")
    ],
};

  const [
    // About
    avatarUrl,
    cartoonUrl,
    resumeUrl,
    // Research
    ethnomusicologyUrl,
    // Publications
    amis2023Url,
    amis2024Url,
    aimc2024Url,
    // Projects
    multimeterUrl,
  ] = await Promise.all([
    // About
    avatarUrlPromise,
    cartoonUrlPromise,
    resumeUrlPromise,
    // Research
    ethnomusicologyUrlPromise,
    // Publications
    amis2023UrlPromise,
    amis2024UrlPromise,
    aimc2024UrlPromise,
    // Projects
    multimeterUrlPromise,
  ]);

  return (
    <Home
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
      mediaUrls={mediaUrls}
    />
  );
}
