"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import AvatarTransition from "@/components/avatar";
import { DockDemo } from "@/components/dock-demo";
import { ThemeSwitch } from "@/components/theme-switch";
import AnimatedEmoji from "@/components/animated-emoji";
import Item from "@/components/item";
import ProfessionalExperience from "@/components/professional-experience";
import Education from "@/components/education";
import IconCloud from "@/components/icon-cloud";
import { layouts, selectedCard } from "@/config/layout";
import { icons } from "@/config/icons";
import useWindowWidth from "@/hooks/useWindowWidth";

interface HomeProps {
	avatarUrl: string;
	cartoonUrl: string;
	actionImageUrl: string;
	resumeUrl: string;
	webagentUrl: string;
	chatbotUrl: string;
	paperUrl: string;
	multimeterUrl: string;
}

const Home = ({
	avatarUrl,
	cartoonUrl,
	actionImageUrl,
	resumeUrl,
	webagentUrl,
	chatbotUrl,
	paperUrl,
	multimeterUrl,
}: HomeProps) => {
	const width = useWindowWidth();
	const [tabSelected, setTabSelected] = useState("about");
	const router = useRouter();

	if (!width) {
		return null;
	}

	return (
		<div className="flex justify-center flex-col items-center">
			<Tabs
				aria-label="Tabs"
				className="mb-2 md:mb-6 rounded-full"
				classNames={{
					cursor: "shadow-none",
					tabList:
						"bg-[#ece7e7] dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-full",
				}}
				motionProps={{
					initial: { scale: 0.8 },
					animate: { scale: 1 },
					exit: { scale: 0.8 },
					transition: { type: "spring", stiffness: 300, damping: 15 },
				}}
				radius={"full"}
				onSelectionChange={(selected) => {
					setTabSelected(selected as string);
				}}>
				<Tab key="about" title="About" />
				<Tab key="collaborations" title="Collaborations" />
				<Tab key="publications" title="Publications" />
				<Tab key="projects" title="Projects" />
			</Tabs>

			<Responsive
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				className="layout w-full h-full"
				cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
				isDraggable={width > 480}
				isResizable={false}
				layouts={layouts[tabSelected]}
				margin={[15, 15]}
				width={width}>
				<div
					key="avatar"
					className={cn(
						"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex flex-col justify-between p-5 overflow-hidden z-[1]",
						selectedCard[tabSelected]["avatar"] ? "opacity-100" : "opacity-50"
					)}>
					<AvatarTransition avatarUrl={avatarUrl} cartoonUrl={cartoonUrl} />
					<p className="text-sm md:text-medium">
						<span className="text-xl"><b>Zhiyu Alex Zhang 张智瑜</b></span>
						, an undergraduate student at the University of Michigan pursuing a
						dual degree in computer science and music, is an interdisciplinary
						researcher with interests in
						<b><i> education technology for the creative arts</i></b>,
						<b><i> human-centered UX design</i></b>, and
						<b><i> ethnomusicology</i></b>.
					</p>
					<DockDemo resumeUrl={resumeUrl} />
				</div>

				<div
					key="themeSwitch"
					className={cn(
						"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
						selectedCard[tabSelected]["themeSwitch"]
							? "opacity-100"
							: "opacity-50"
					)}>
					<ThemeSwitch />
				</div>

				<div
					key="animatedEmoji"
					className={cn(
						"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
						selectedCard[tabSelected]["animatedEmoji"]
							? "opacity-100"
							: "opacity-50"
					)}>
					<AnimatedEmoji />
				</div>

				<div
					key="iconCloud"
					className={cn(
						"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center relative overflow-hidden p-10 md:p-8 z-[1]",
						selectedCard[tabSelected]["iconCloud"]
							? "opacity-100"
							: "opacity-50"
					)}>
					<IconCloud iconSlugs={icons} />
				</div>

				<div
					key="education"
					className={cn(
						"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
						selectedCard[tabSelected]["education"] ? "opacity-100" : "opacity-50"
					)}>
					<Education />
				</div>

				<div
					key="professionalExperience"
					className={cn(
						"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
						selectedCard[tabSelected]["professionalExperience"] ? "opacity-100" : "opacity-50"
					)}>
					<ProfessionalExperience />
				</div>

				<div
					key="multimeter"
					className={cn(
						"bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
						selectedCard[tabSelected]["multimeter"] ? "opacity-100" : "opacity-50"
					)}>
					<Item
						imageUrl={multimeterUrl}
						linkUrl="https://your-multimeter-project-url.com" // Replace with actual URL
						linkText="MultiMeter"
						containerStyles="bg-cardPurple dark:bg-darkBg"
						imageStyles="w-full h-full object-cover"
						overlayStyles="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"
						btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
						btnHoverStyles="hover:bg-default-100 dark:border-knight"
						imageWidth={1164}
						imageHeight={2380}
						imageClass="w-full h-full object-cover"
					/>
				</div>

				<div
					key="webAgent"
					className={cn(
						"bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
						selectedCard[tabSelected]["webAgent"] ? "opacity-100" : "opacity-50"
					)}>
					<Item
						imageUrl={webagentUrl}
						linkUrl="https://www.simplegen.ai/"
						linkText="Web Agent"
						containerStyles="bg-cardGreen dark:bg-darkBg"
						imageStyles="top-1/2 -translate-y-1/2 left-24 md:left-32 transform -rotate-[30deg] rounded-2xl w-[80%]"
						overlayStyles="-bottom-96 left-16 bg-cardPink w-[145%] h-full rounded-full dark:hidden"
						btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
						btnHoverStyles="hover:bg-default-100 dark:border-knight"
						imageWidth={1164}
						imageHeight={2380}
						imageClass="w-full h-full object-contain rounded-2xl"
					/>
				</div>

				<div
					key="chatBot"
					className={cn(
						"bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
						selectedCard[tabSelected]["chatBot"] ? "opacity-100" : "opacity-50"
					)}>
					<Item
						imageUrl={chatbotUrl}
						linkUrl="https://beta.simplegen.ai/"
						linkText="AI Chatbot"
						containerStyles="bg-cardYellow dark:bg-darkBg"
						imageStyles="top-1/2 -translate-y-1/2 left-20 md:left-44 rounded-2xl transform -rotate-[30deg] md:w-[800px] w-[400px]"
						overlayStyles="-top-40 left-40 bg-cardPink w-[135%] h-full rounded-full dark:hidden"
						btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
						btnHoverStyles="hover:bg-default-100 dark:border-knight"
						imageWidth={2629}
						imageHeight={1280}
						imageClass="h-48 md:h-96 object-cover rounded-2xl"
					/>
				</div>

				<div
					key="actions"
					className={cn(
						"bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
						selectedCard[tabSelected]["actions"] ? "opacity-100" : "opacity-50"
					)}>
					<Item
						imageUrl={actionImageUrl}
						linkUrl="https://action.simplegen.ai/"
						linkText="GPT Actions"
						containerStyles="bg-cardBlue dark:bg-darkBg"
						imageStyles="top-16 md:top-36 -translate-y-1/2 left-20 md:left-44 transform -rotate-[30deg] rounded-2xl w-[80%]"
						overlayStyles="-bottom-32 md:-bottom-52 left-1/2 -translate-x-1/2 bg-cardPink w-64 h-56 md:w-96 md:h-96 rounded-full dark:hidden"
						btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
						btnHoverStyles="hover:bg-default-100 dark:border-knight"
						imageWidth={2259}
						imageHeight={1280}
						imageClass="w-full h-full rounded-2xl object-contain"
					/>
				</div>

				<div
					key="paper"
					className={cn(
						"bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
						selectedCard[tabSelected]["paper"] ? "opacity-100" : "opacity-50"
					)}>
					<Item
						imageUrl={paperUrl}
						linkUrl="https://ojs.aaai.org/index.php/AAAI/article/view/29266"
						linkText="DT-VAEGAN"
						containerStyles="bg-cardYellow dark:bg-darkBg"
						imageStyles="top-16 md:top-1/2 left-12 md:left-16 rounded-2xl -rotate-[30deg] w-full"
						overlayStyles="-top-40 left-40 bg-cardPink w-[135%] h-full rounded-full dark:hidden"
						btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
						btnHoverStyles="hover:bg-default-100 dark:border-knight"
						imageHeight={1280}
						imageWidth={1577}
						imageClass="h-full w-full rounded-2xl object-contain"
					/>
				</div>
			</Responsive>
		</div>
	);
};

export default Home;
