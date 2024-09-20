"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import AvatarTransition from "@/components/avatar";
import { DockDemo } from "@/components/dock-demo";
import { ThemeSwitch } from "@/components/theme-switch";
import AnimatedEmoji from "@/components/animated-emoji";
import Item from "@/components/item";
import Education from "@/components/education";
import IndustryExperience from "@/components/industry-experience";
import CreativeExperience from "@/components/creative-experience";
import IconCloud from "@/components/icon-cloud";
import ItemDetails from "@/components/item-details";
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
import MusicPlayerCard from "@/components/music-player-card";

interface HomeProps {
	selectedTab: string;
	// About
	avatarUrl: string;
	cartoonUrl: string;
	resumeUrl: string;
	// Research
	ethnomusicologyUrl: string;
	vtmpUrl: string;
	boulezUrl: string;
	deepDrawingUrl: string;
	// Publications
	amis2023Url: string;
	amis2024Url: string;
	aimc2024Url: string;
	// Projects
	multimeterUrl: string;
	improvisationTutorUrl: string;

	mediaUrls: Record<string, string[]>;
	projectTags: { [key: string]: string[] };

	// Music
	songs?: { id: string; title: string; soundCloudUrl: string }[];
}

const Home = ({
	selectedTab,
	// About
	avatarUrl,
	cartoonUrl,
	resumeUrl,
	// Research
	ethnomusicologyUrl,
	vtmpUrl,
	boulezUrl,
	deepDrawingUrl,
	// Publications
	amis2023Url,
	amis2024Url,
	aimc2024Url,
	// Projects
	multimeterUrl,
	improvisationTutorUrl,
	mediaUrls,
	projectTags,
	// Music
	songs,
}: HomeProps) => {
	const width = useWindowWidth();
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const router = useRouter();

	const handleTabChange = (selected: React.Key) => {
		const selectedKey = String(selected);

		// Navigate to the new path
		router.push(`/${selectedKey}`);
	};

	const handleProjectClick = (itemKey: string) => {
		router.push(`/${selectedTab}/${itemKey}`);
	};

	const handleTagFilterChange = (newSelectedTags: string[]) => {
		setSelectedTags(newSelectedTags);
	};

	const allTags = Object.keys(getTagColor.colors).map((tag) => ({
		name: tag,
		color: getTagColor(tag),
	}));

	const filteredProjects =
		selectedTags.length === 0
		? Object.keys(projectTags)
		: Object.keys(projectTags).filter((project) =>
			selectedTags.some((tag) => projectTags[project]?.includes(tag))
			);

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
					selectedKey={selectedTab}
				>
					<Tab key="about" title="About" />
					<Tab key="research" title="Research" />
					<Tab key="publications" title="Publications" />
					<Tab key="projects" title="Projects" />
					<Tab key="music" title="Music" />
				</Tabs>

				<AnimatePresence mode="wait">
					<motion.div
					key={selectedTab}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="w-full"
					>
						<>
						{selectedTab === "projects" && (
							<TagFilter tags={allTags} onFilterChange={handleTagFilterChange} />
						)}
						<Responsive
							key={selectedTab}
							breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
							className="layout w-full h-full"
							cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
							compactType={null}
							isDraggable={false}
							isResizable={false}
							layouts={layouts[selectedTab]}
							margin={[15, 15]}
							preventCollision={true}
							width={width}
						>
							{Object.entries(selectedCard[selectedTab]).map(([key, isSelected]) => {
							if (!isSelected) return null;

							const opacity =
								selectedTab === "projects"
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
										<CreativeExperience />
										</motion.div>
									);
								// Research
								case "ethnomusicology":
								case "vtmp":
								case "boulez":
								case "deep-drawing":
									const researchDetails = {
										ethnomusicology: {
											description: "Exploring the Musical, Cultural, and Historical Significance of Chinese Musical Instruments from the Tang, Ming, and Qing Dynasties",
											linkText: "Ethnomusicology Research on Ancient Chinese Musical Instruments",
											imageUrl: ethnomusicologyUrl,
										},
										vtmp: {
											description: "Scrutinizing the Intersection of Embodied Musicianship and Networked Music Performance",
											linkText: "Visualizing Telematic Music Performance",
											imageUrl: vtmpUrl,
										},
										boulez: {
											description: "Designing an Immersive Educational Experience to Celebrate Pierre Boulez's Centenary",
											linkText: "Web-based Spatial Audio Playground for IRCAM",
											imageUrl: boulezUrl,
										},
										'deep-drawing': {
											description: "Bridging Sound, Hand Drawing, and Artificial Intelligence in Live Performances",
											linkText: "Deep Drawing: An Intermedia AI Co-Performer",
											imageUrl: deepDrawingUrl,
										},
									};

									const currentResearch = researchDetails[key as keyof typeof researchDetails];

									return (
										<motion.div
										key={key}
										animate={{ opacity }}
										className={commonClasses}
										initial={{ opacity }}
										style={{
											pointerEvents: opacity === 1 ? "auto" : "none",
										}}
										transition={{ duration: 0.3 }}
										>
										<Item
											btnHoverStyles="hover:bg-default-100 dark:border-knight"
											btnStyles="bg-white dark:bg-darkBg bottom-2 left-2"
											containerStyles="bg-cardBlue dark:bg-darkBg"
											description={currentResearch.description}
											imageClass="w-full h-full object-cover"
											imageHeight={515}
											imageStyles="w-full h-full object-cover"
											imageUrl={currentResearch.imageUrl}
											imageWidth={795}
											linkText={currentResearch.linkText}
											overlayStyles="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"
											onClick={() => handleProjectClick(key)}
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
										transition={{ duration: 0.3 }}
										>
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
												imageHeight={515}
												imageStyles="w-full h-full object-cover"
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
								// Music
								default:
									if (selectedTab === "music") {
										const song = songs?.find((s) => s.id === key);

										if (song) {
											return (
												<motion.div
													key={key}
													animate={{ opacity }}
													className={commonClasses}
													initial={{ opacity }}
													style={{
														pointerEvents: opacity === 1 ? "auto" : "none",
													}}
													transition={{ duration: 0.3 }}
												>
													<MusicPlayerCard
														title={song.title}
														soundCloudUrl={song.soundCloudUrl}
													/>
												</motion.div>
											);
										}
									}
									return null;
								}
									})}
								</Responsive>
							</>
					</motion.div>
				</AnimatePresence>
		</div>
	);
};

export default Home;
