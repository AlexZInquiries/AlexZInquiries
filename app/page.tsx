import Home from "@/components/home";
import { getPhotoUrl, listPhotos } from "@/firebase/db/photo";

export default async function App() {
  const avatarUrlPromise = getPhotoUrl("avatar/profile-picture.jpg"); // Fixed
  const cartoonUrlPromise = getPhotoUrl("avatar/cartoon-picture.jpg"); // Fixed
  const actionImageUrlPromise = getPhotoUrl("projects/actions.jpg");
  const webagentUrlPromise = getPhotoUrl("projects/webagent.jpg");
  const chatbotUrlPromise = getPhotoUrl("projects/chatbot.jpg");
  const resumeUrlPromise = getPhotoUrl("Chengxiang-Wu-Resume-2024.pdf");
  const paperUrlPromise = getPhotoUrl("projects/paper.jpg");

  const [
    avatarUrl,
    cartoonUrl,
    actionImageUrl,
    resumeUrl,
    webagentUrl,
    chatbotUrl,
    paperUrl,
  ] = await Promise.all([
    avatarUrlPromise,
    cartoonUrlPromise,
    actionImageUrlPromise,
    resumeUrlPromise,
    webagentUrlPromise,
    chatbotUrlPromise,
    paperUrlPromise,
  ]);

  return (
    <Home
      actionImageUrl={actionImageUrl}
      avatarUrl={avatarUrl}
      chatbotUrl={chatbotUrl}
      cartoonUrl={cartoonUrl}
      paperUrl={paperUrl}
      resumeUrl={resumeUrl}
      webagentUrl={webagentUrl}
    />
  );
}
