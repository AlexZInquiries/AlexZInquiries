import Home from "@/components/home";
import { getPhotoUrl } from "@/firebase/db/photo";

export default async function App() {
  // About
  const avatarUrlPromise = getPhotoUrl("avatar/profile-picture.jpg");
  const cartoonUrlPromise = getPhotoUrl("avatar/cartoon-picture.jpg");
  const resumeUrlPromise = getPhotoUrl("Chengxiang-Wu-Resume-2024.pdf");

  // Research

  // Publications
  const amis2023UrlPromise = getPhotoUrl("publications/amis-2023.png");

  // Projects
  const multimeterUrlPromise = getPhotoUrl("projects/multimeter.jpg");

  const [
    // About
    avatarUrl,
    cartoonUrl,
    resumeUrl,
    // Research
    // Publications
    amis2023Url,
    // Projects
    multimeterUrl,
  ] = await Promise.all([
    // About
    avatarUrlPromise,
    cartoonUrlPromise,
    resumeUrlPromise,
    // Research
    // Publications
    amis2023UrlPromise,
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
      amis2023Url={amis2023Url}
      // Projects
      multimeterUrl={multimeterUrl}
    />
  );
}
