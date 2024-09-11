"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useState } from "react";
import { motion } from 'framer-motion';

import AvatarTransition from "@/components/avatar";
import { DockDemo } from "@/components/dock-demo";
import { ThemeSwitch } from "@/components/theme-switch";
import AnimatedEmoji from "@/components/animated-emoji";
import Item from "@/components/item";
import Education from "@/components/education";
import IndustryExperience from "@/components/industry-experience";
import CreativeExperience from "@/components/creative-experience";
import IconCloud from "@/components/icon-cloud";
import ProjectDetails from "@/components/project-details";
import { JournalArticles, Performances, InvitedTalks, Books, Translations, MediaProduction } from "@/components/publications";
import { layouts, selectedCard } from "@/config/layout";
import { icons } from "@/config/icons";
import useWindowWidth from "@/hooks/useWindowWidth";
import TagFilter from "@/components/tag-filter";
import { getTagColor } from "@/lib/utils";

interface HomeProps {
	// About
	avatarUrl: string;
	cartoonUrl: string;
	resumeUrl: string;
	// Research
	ethnomusicologyUrl: string;
	// Publications
	amis2023Url: string;
	amis2024Url: string;
	aimc2024Url: string;
	// Projects
	multimeterUrl: string;
	improvisationTutorUrl: string;

	mediaUrls: Record<string, string[]>;
	projectTags: { [key: string]: string[] };
}

const Home = ({
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
	improvisationTutorUrl,
	mediaUrls,
	projectTags,
}: HomeProps) => {
	const width = useWindowWidth();
	const [tabSelected, setTabSelected] = useState("about");
	const [selectedProject, setSelectedProject] = useState<string | null>(null);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	if (!width) {
		return null;
	}

	const handleProjectClick = (projectKey: string) => {
		setSelectedProject(projectKey);
	};

	const handleBackToProjects = () => {
		setSelectedProject(null);
	};

	const handleTagFilterChange = (newSelectedTags: string[]) => {
		setSelectedTags(newSelectedTags);
	};

	const allTags = Array.from(new Set(Object.values(projectTags).flat())).map(tag => ({
		name: tag,
		color: getTagColor(tag),
	}));

	const filteredProjects = selectedTags.length === 0
		? Object.keys(projectTags)
		: Object.keys(projectTags).filter(project => 
			selectedTags.some(tag => projectTags[project]?.includes(tag))
		);

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
				<>
					{tabSelected === "projects" && (
						<TagFilter tags={allTags} onFilterChange={handleTagFilterChange} />
					)}
					<Responsive
						breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
						className="layout w-full h-full"
						cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
						isDraggable={false}
						isResizable={false}
						layouts={layouts[tabSelected]}
						margin={[15, 15]}
						width={width}
						compactType={null}
						preventCollision={true}
					>
						{Object.entries(selectedCard[tabSelected]).map(
							([key, isSelected]) => {
								if (!isSelected) return null;

								const opacity = tabSelected === "projects" 
									? (selectedTags.length > 0 && !selectedTags.some(tag => projectTags[key]?.includes(tag)) ? 0.3 : 1)
									: 1;

								const commonClasses =
									"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex overflow-hidden z-[1]";

								switch (key) {
									// About
									case "avatar":
										return (
											<motion.div
												key={key}
												className={`${commonClasses} flex-col justify-between p-5`}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
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
														<i> human-centered user experience design</i>
													</b>
													, and
													<b>
														<i> ethnomusicology</i>
													</b>
													.
												</p>
												<DockDemo resumeUrl={resumeUrl} />
											</motion.div>
										);
									case "themeSwitch":
										return (
											<motion.div
												key={key}
												className={`${commonClasses} justify-center items-center`}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<ThemeSwitch />
											</motion.div>
										);
									case "animatedEmoji":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<AnimatedEmoji />
											</motion.div>
										);
									case "iconCloud":
										return (
											<motion.div
												key={key}
												className={`${commonClasses} relative p-10 md:p-8`}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<IconCloud iconSlugs={icons} />
											</motion.div>
										);
									case "education":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<Education />
											</motion.div>
										);
									case "industryExperience":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<IndustryExperience />
											</motion.div>
										);
									case "creativeExperience":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<CreativeExperience />
											</motion.div>
										);
									// Research
									case "ethnomusicology":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<Item
													imageUrl={ethnomusicologyUrl}
													linkText="Ethnomusicology Research on Ancient Chinese Musical Instruments"
													containerStyles="bg-cardBlue dark:bg-darkBg"
													imageStyles="w-full h-full object-cover"
													overlayStyles="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"
													btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
													btnHoverStyles="hover:bg-default-100 dark:border-knight"
													imageWidth={795}
													imageHeight={515}
													imageClass="w-full h-full object-cover"
													onClick={() => handleProjectClick("ethnomusicology")}
													description="Exploring musical, cultural, and historical significance of Chinese musical instruments from the Tang, Ming, and Qing dynasties."
												/>
											</motion.div>
										);
									// Publications
									case "journalArticles":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<JournalArticles />
											</motion.div>
										);
									case "performances":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<Performances aimc2024Url={aimc2024Url} />
											</motion.div>
										);
									case "invitedTalks":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<InvitedTalks amis2023Url={amis2023Url} amis2024Url={amis2024Url} />
											</motion.div>
										);
									case "books":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<Books />
											</motion.div>
										);
									case "translations":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<Translations />
											</motion.div>
										);
									case "mediaProduction":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<MediaProduction />
											</motion.div>
										);
									// Projects
									case "multimeter":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
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
											</motion.div>
										);
									case "improvisationTutor":
										return (
											<motion.div
												key={key}
												className={commonClasses}
												initial={{ opacity }}
												animate={{ opacity }}
												transition={{ duration: 0.3 }}
												style={{ pointerEvents: opacity === 1 ? 'auto' : 'none' }}
											>
												<Item
													imageUrl={improvisationTutorUrl}
													linkText="Improvisation Tutor"
													containerStyles="bg-cardGreen dark:bg-darkBg"
													imageStyles="w-full h-full object-cover"
													overlayStyles="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"
													btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
													btnHoverStyles="hover:bg-default-100 dark:border-knight"
													imageWidth={795}
													imageHeight={515}
													imageClass="w-full h-full object-cover"
													onClick={() => handleProjectClick("improvisationTutor")}
													description="An AI-powered tool designed to help musicians improve their improvisation skills through real-time feedback and personalized exercises."
												/>
											</motion.div>
										);
									default:
										return null;
								}
							}
						)}
					</Responsive>
				</>
			)}
		</div>
	);
};

export default Home;
