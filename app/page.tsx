import Home from "@/components/home";
import { getPhotoUrl } from "@/firebase/db/photo";

export default async function App() {
  // About
  const avatarUrlPromise = getPhotoUrl("avatar/profile-picture.jpg");
  const cartoonUrlPromise = getPhotoUrl("avatar/cartoon-picture.jpg");
  const resumeUrlPromise = getPhotoUrl("Chengxiang-Wu-Resume-2024.pdf");

  // Research

  // Publications

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
    // Publications
    // Projects
    multimeterUrl,
  ] = await Promise.all([
    // About
    avatarUrlPromise,
    cartoonUrlPromise,
    resumeUrlPromise,
    // Research
    // Publications
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
      // Publications
      // Projects
      multimeterUrl={multimeterUrl}
      mediaUrls={mediaUrls}
    />
  );
}
