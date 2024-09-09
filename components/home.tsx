"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useState } from "react";

import { cn } from "@/lib/utils";
import AvatarTransition from "@/components/avatar";
import { DockDemo } from "@/components/dock-demo";
import { ThemeSwitch } from "@/components/theme-switch";
import AnimatedEmoji from "@/components/animated-emoji";
import Item from "@/components/item";
import ProfessionalExperience from "@/components/professional-experience";
import Education from "@/components/education";
import IconCloud from "@/components/icon-cloud";
import ProjectDetails from "@/components/project-details";
import { Publications, Translations, InvitedTalks, MediaProduction } from "@/components/publications";
import { layouts, selectedCard } from "@/config/layout";
import { icons } from "@/config/icons";
import useWindowWidth from "@/hooks/useWindowWidth";

interface HomeProps {
	// About
	avatarUrl: string;
	cartoonUrl: string;
	resumeUrl: string;
	// Research
	// Publications
	amis2023Url: string;
	amis2024Url: string;
	// Projects
	multimeterUrl: string;

	mediaUrls: Record<string, string[]>;
}

const Home = ({
	// About
	avatarUrl,
	cartoonUrl,
	resumeUrl,
	// Research
	// Publications
	amis2023Url,
	amis2024Url,
	// Projects
	multimeterUrl,
	mediaUrls,
}: HomeProps) => {
	const width = useWindowWidth();
	const [tabSelected, setTabSelected] = useState("about");
	const [selectedProject, setSelectedProject] = useState<string | null>(null);

	if (!width) {
		return null;
	}

	const handleProjectClick = (projectKey: string) => {
		setSelectedProject(projectKey);
	};

	const handleBackToProjects = () => {
		setSelectedProject(null);
	};

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
					setSelectedProject(null);
				}}>
				<Tab key="about" title="About" />
				<Tab key="research" title="Research" />
				<Tab key="publications" title="Publications" />
				<Tab key="projects" title="Projects" />
			</Tabs>

			{selectedProject ? (
				<ProjectDetails
					projectKey={selectedProject}
					onBack={handleBackToProjects}
					mediaUrls={mediaUrls}
				/>
			) : (
				<Responsive
					breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
					className="layout w-full h-full"
					cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
					isDraggable={false}
					isResizable={false}
					layouts={layouts[tabSelected]}
					margin={[15, 15]}
					width={width}>
					{Object.entries(selectedCard[tabSelected]).map(
						([key, isSelected]) => {
							if (!isSelected) return null;

							const commonClasses =
								"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex overflow-hidden z-[1]";

							switch (key) {
								// About
								case "avatar":
									return (
										<div
											key={key}
											className={`${commonClasses} flex-col justify-between p-5`}>
											<AvatarTransition
												avatarUrl={avatarUrl}
												cartoonUrl={cartoonUrl}
											/>
											<p className="text-sm md:text-medium">
												<span className="text-xl">
													<b>Zhiyu Alex Zhang 张智瑜</b>
												</span>
												, an undergraduate student at the University of Michigan
												pursuing a dual degree in computer science and music, is
												an interdisciplinary researcher with interests in
												<b>
													<i> education technology for the creative arts</i>
												</b>
												,
												<b>
													<i> human-centered UX design</i>
												</b>
												, and
												<b>
													<i> ethnomusicology</i>
												</b>
												.
											</p>
											<DockDemo resumeUrl={resumeUrl} />
										</div>
									);
								case "themeSwitch":
									return (
										<div
											key={key}
											className={`${commonClasses} justify-center items-center`}>
											<ThemeSwitch />
										</div>
									);
								case "animatedEmoji":
									return (
										<div key={key} className={commonClasses}>
											<AnimatedEmoji />
										</div>
									);
								case "iconCloud":
									return (
										<div
											key={key}
											className={`${commonClasses} relative p-10 md:p-8`}>
											<IconCloud iconSlugs={icons} />
										</div>
									);
								case "education":
									return (
										<div key={key} className={commonClasses}>
											<Education />
										</div>
									);
								case "professionalExperience":
									return (
										<div key={key} className={commonClasses}>
											<ProfessionalExperience />
										</div>
									);
								// Research
								// Publications
								case "publications":
									return (
										<div key={key} className={commonClasses}>
											<Publications />
										</div>
									);
								case "translations":
									return (
										<div key={key} className={commonClasses}>
											<Translations />
										</div>
									);
								case "invitedTalks":
									return (
										<div key={key} className={commonClasses}>
											<InvitedTalks amis2023Url={amis2023Url} amis2024Url={amis2024Url} />
										</div>
									);
								case "mediaProduction":
									return (
										<div key={key} className={commonClasses}>
											<MediaProduction />
										</div>
									);
								// Projects
								case "multimeter":
									return (
										<div key={key} className={commonClasses}>
											<Item
												imageUrl={multimeterUrl}
												linkText="MultiMeter"
												containerStyles="bg-cardPurple dark:bg-darkBg"
												imageStyles="w-full h-full object-cover"
												overlayStyles="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"
												btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
												btnHoverStyles="hover:bg-default-100 dark:border-knight"
												imageWidth={795}
												imageHeight={515}
												imageClass="w-full h-full object-cover"
												onClick={() => handleProjectClick("multimeter")}
												description="A comprehensive set of AU/VST real-time audio analysis tools in one window implemented with JUCE 6."
											/>
										</div>
									);
								default:
									return null;
							}
						}
					)}
				</Responsive>
			)}
		</div>
	);
};

export default Home;
