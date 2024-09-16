"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

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
import {
	JournalArticles,
	Performances,
	InvitedTalks,
	Books,
	Translations,
	MediaProduction,
} from "@/components/publications";
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
	const router = useRouter();
	const pathname = usePathname();
	const width = useWindowWidth();
	const [selectedProject, setSelectedProject] = useState<string | null>(null);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	// Determine the selected tab based on the pathname
	const determineTab = () => {
		switch (pathname) {
			case "/":
			case "/#":
				return "about";
			case "/research":
				return "research";
			case "/publications":
				return "publications";
			case "/projects":
				return "projects";
			default:
				return "about";
		}
	};

	useEffect(() => {
		const preloadImages = () => {
			const urls = [
				// About Images
				avatarUrl,
				cartoonUrl,
				// Research Images
				ethnomusicologyUrl,
				// Publications Images
				amis2023Url,
				amis2024Url,
				aimc2024Url,
				// Projects Images
				multimeterUrl,
				improvisationTutorUrl,
				// Media URLs
				...Object.values(mediaUrls).flat(),
			];

			urls.forEach((url) => {
				const img = new Image();
				img.src = url;
			});
		};

		preloadImages();
	}, [
		avatarUrl,
		cartoonUrl,
		ethnomusicologyUrl,
		amis2023Url,
		amis2024Url,
		aimc2024Url,
		multimeterUrl,
		improvisationTutorUrl,
		mediaUrls,
	]);

	const handleTabChange = (selected: React.Key) => {
		const selectedKey = typeof selected === "number" ? selected.toString() : String(selected);

		setSelectedProject(null);
		setIsLoading(true);

		switch (selectedKey) {
			case "about":
				router.push("/#");
				break;
			case "research":
				router.push("/research");
				break;
			case "publications":
				router.push("/publications");
				break;
			case "projects":
				router.push("/projects");
				break;
			default:
				router.push("/#");
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 200);

		return () => clearTimeout(timer);
	}, [pathname]);

	const handleProjectClick = (projectKey: string) => {
		setSelectedProject(projectKey);
	};

	const handleBackToProjects = () => {
		setSelectedProject(null);
	};

	const handleTagFilterChange = (newSelectedTags: string[]) => {
		setSelectedTags(newSelectedTags);
	};

	const allTags = Array.from(new Set(Object.values(projectTags).flat())).map((tag) => ({
		name: tag,
		color: getTagColor(tag),
	}));

	const filteredProjects =
		selectedTags.length === 0
			? Object.keys(projectTags)
			: Object.keys(projectTags).filter((project) =>
					selectedTags.some((tag) => projectTags[project]?.includes(tag))
			  );

	const currentTab = determineTab();

	return (
		<div className="flex justify-center flex-col items-center">
			<Tabs
				aria-label="Tabs"
				className="mb-2 md:mb-6 rounded-full"
				classNames={{
					cursor: "shadow-none",
					tabList: "bg-[#ece7e7] dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-full",
				}}
				motionProps={{
					initial: { scale: 0.8 },
					animate: { scale: 1 },
					exit: { scale: 0.8 },
					transition: { type: "spring", stiffness: 300, damping: 15 },
				}}
				radius={"full"}
				onSelectionChange={handleTabChange}
				selectedKey={currentTab}>
				<Tab key="about" title="About" />
				<Tab key="research" title="Research" />
				<Tab key="publications" title="Publications" />
				<Tab key="projects" title="Projects" />
			</Tabs>

			<AnimatePresence mode="wait">
				{isLoading ? (
					<motion.div
						key="loader"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="flex items-center justify-center w-full h-[60vh]">
						<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
					</motion.div>
				) : (
					<motion.div
						key="content"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="w-full">
						{selectedProject ? (
							<ProjectDetails
								mediaUrls={mediaUrls}
								projectKey={selectedProject}
								onBack={handleBackToProjects}
							/>
						) : (
							<>
								{currentTab === "projects" && (
									<TagFilter tags={allTags} onFilterChange={handleTagFilterChange} />
								)}
								<Responsive
								breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
								className="layout w-full h-full"
								cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
								compactType={null}
								isDraggable={false}
								isResizable={false}
								layouts={layouts[currentTab]}
								margin={[15, 15]}
								preventCollision={true}
								width={width}>
									{Object.entries(selectedCard[currentTab]).map(([key, isSelected]) => {
										if (!isSelected) return null;

										const opacity =
											currentTab === "projects"
												? selectedTags.length > 0 &&
												  !selectedTags.some((tag) => projectTags[key]?.includes(tag))
													? 0.3
													: 1
												: 1;

										const commonClasses =
											"bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex overflow-hidden z-[1]";

										switch (key) {
											// About
											case "avatar":
												return (
													<motion.div
														key={key}
														animate={{ opacity }}
														className={`${commonClasses} flex-col justify-between p-5`}
														initial={{ opacity }}
														style={{
															pointerEvents: opacity === 1 ? "auto" : "none",
														}}
														transition={{ duration: 0.3 }}>
														<AvatarTransition avatarUrl={avatarUrl} cartoonUrl={cartoonUrl} />
														<p className="text-sm md:text-medium">
															<span className="text-xl">
																<b>Zhiyu Alex Zhang 张智瑜</b>
															</span>
															, an undergraduate student at the University of Michigan pursuing a dual degree in computer
															science and music, is an interdisciplinary researcher with interests in
															<b>
																<i> education technology for the creative arts</i>
															</b>
															, <b>
																<i> human-centered user experience design</i>
															</b>
															, and <b>
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
															animate={{ opacity }}
															className={`${commonClasses} justify-center items-center`}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<ThemeSwitch />
														</motion.div>
													);
												case "animatedEmoji":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<AnimatedEmoji />
														</motion.div>
													);
												case "iconCloud":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={`${commonClasses} relative p-10 md:p-8`}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<IconCloud iconSlugs={icons} />
														</motion.div>
													);
												case "education":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<Education />
														</motion.div>
													);
												case "industryExperience":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<IndustryExperience />
														</motion.div>
													);
												case "creativeExperience":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<CreativeExperience />
														</motion.div>
													);
												// Research
												case "ethnomusicology":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<Item
																btnHoverStyles="hover:bg-default-100 dark:border-knight"
																btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
																containerStyles="bg-cardBlue dark:bg-darkBg"
																description="Exploring musical, cultural, and historical significance of Chinese musical instruments from the Tang, Ming, and Qing dynasties."
																imageClass="w-full h-full object-cover"
																imageHeight={515}
																imageStyles="w-full h-full object-cover"
																imageUrl={ethnomusicologyUrl}
																imageWidth={795}
																linkText="Ethnomusicology Research on Ancient Chinese Musical Instruments"
																overlayStyles="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"
																onClick={() =>
																	handleProjectClick("ethnomusicology")
																}
															/>
														</motion.div>
													);
												// Publications
												case "journalArticles":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<JournalArticles />
														</motion.div>
													);
												case "performances":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<Performances aimc2024Url={aimc2024Url} />
														</motion.div>
													);
												case "invitedTalks":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<InvitedTalks
																amis2023Url={amis2023Url}
																amis2024Url={amis2024Url}
															/>
														</motion.div>
													);
												case "books":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<Books />
														</motion.div>
													);
												case "translations":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<Translations />
														</motion.div>
													);
												case "mediaProduction":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<MediaProduction />
														</motion.div>
													);
												// Projects
												case "multimeter":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<Item
																btnHoverStyles="hover:bg-default-100 dark:border-knight"
																btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
																containerStyles="bg-cardPurple dark:bg-darkBg"
																description="A comprehensive set of AU/VST real-time audio analysis tools in one window implemented with JUCE 6."
																imageClass="w-full h-full object-cover"
																imageHeight={515}
																imageStyles="w-full h-full object-cover"
																imageUrl={multimeterUrl}
																imageWidth={795}
																linkText="MultiMeter"
																overlayStyles="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"
																onClick={() => handleProjectClick("multimeter")}
															/>
														</motion.div>
													);
												case "improvisationTutor":
													return (
														<motion.div
															key={key}
															animate={{ opacity }}
															className={commonClasses}
															initial={{ opacity }}
															style={{
																pointerEvents: opacity === 1 ? "auto" : "none",
															}}
															transition={{ duration: 0.3 }}>
															<Item
																btnHoverStyles="hover:bg-default-100 dark:border-knight"
																btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
																containerStyles="bg-cardGreen dark:bg-darkBg"
																description="An AI-powered tool designed to help musicians improve their improvisation skills through real-time feedback and personalized exercises."
																imageClass="w-full h-full object-cover"
																imageHeight={515}																imageStyles="w-full h-full object-cover"
																imageUrl={improvisationTutorUrl}
																imageWidth={795}
																linkText="Improvisation Tutor"
																overlayStyles="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"
																onClick={() =>
																	handleProjectClick("improvisationTutor")
																}
															/>
														</motion.div>
													);
											default:
												return null;
										}
									})}
								</Responsive>
							</>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Home;
