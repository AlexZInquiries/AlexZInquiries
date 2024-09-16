"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface ProjectDetailsProps {
	projectKey: string;
	mediaUrls: Record<string, string[]>;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectKey, mediaUrls }) => {
	const router = useRouter();

	const handleBack = () => {
		const isResearch = projectKey === 'ethnomusicology'; // Adjust this condition based on your project keys
		router.push(`/${isResearch ? 'research' : 'projects'}`);
	};

	const getProjectTitle = (key: string): string => {
		switch (key) {
			// Research
			// Publications
			// Projects
			case "multimeter":
				return "MultiMeter";
			case "ethnomusicology":
				return "Ethnomusicology Research on Ancient Chinese Musical Instruments";
			case "improvisationTutor":
				return "Improvisation Tutor";
			default:
				return "Error";
		}
	};

	const renderProjectContent = () => {
		switch (projectKey) {
		// Research
		case "ethnomusicology":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						This research explores the intersection of music, culture, and technology in ethnomusicological studies. It focuses on how digital tools and methodologies can enhance our understanding of musical traditions and practices across different cultures.
					</p>
					{mediaUrls[projectKey] && (
						<div className="w-full flex flex-wrap justify-center gap-4">
							{mediaUrls[projectKey].map((url, index) => (
								<Image
									key={index}
									alt={`${projectKey} media ${index + 1}`}
									className="rounded-lg"
									height={300}
									src={url}
									width={500}
								/>
							))}
						</div>
					)}
					<h3 className="text-xl font-semibold">Key Areas of Focus:</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Digital ethnography in music research</li>
						<li>Computational analysis of musical patterns across cultures</li>
						<li>Preservation and digitization of traditional music</li>
						<li>Impact of technology on musical practices and transmission</li>
					</ul>
					<div className="h-6"> </div>
				</div>
			);
		// Publications
		// Projects
		case "multimeter":
			return (
				<div className="space-y-6">
				<p className="text-lg">
					MultiMeter is an aesthetic AU/VST audio analyzer catering to audio engineers, producers, and musicians seeking precision and versatility. Leveraging the JUCE framework, it delivers a robust array of functions for pristine real-time audio analysis to empower mixing, mastering, and sound design.
				</p>
				<p className="text-lg">
					For more details and source code, visit the <a className="text-blue-500 hover:underline" href="https://github.com/RealAlexZ/MultiMeter" rel="noopener noreferrer" target="_blank">GitHub repository</a>.
				</p>
				{mediaUrls[projectKey] && (
					<div className="w-full flex flex-wrap justify-center gap-4">
						{mediaUrls[projectKey].map((url, index) => (
							<Image
								key={index}
								alt={`${projectKey} media ${index + 1}`}
								className="rounded-lg"
								height={300}
								src={url}
								width={500}
							/>
						))}
					</div>
				)}
				<h3 className="text-xl font-semibold">Key Features:</h3>
				<ul className="list-disc list-inside space-y-2">
					<li>General Metering with customizable settings</li>
					<li>Level Meter with peak and RMS readings</li>
					<li>Histogram for signal level dynamics visualization</li>
					<li>Goniometer for stereo field and phase relationship analysis</li>
					<li>Correlation Meter for phase issue detection</li>
					<li>High-resolution Spectrogram Analyzer</li>
				</ul>
				<div className="h-6"> </div> { /* This adds consistent spacing */ }
				</div>
			);
		case "improvisationTutor":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						The Improvisation Tutor is an innovative AI-powered application designed to help musicians of all levels improve their improvisation skills. By leveraging machine learning algorithms and real-time audio processing, it provides personalized feedback and exercises tailored to each users skill level and learning goals.
					</p>
					{mediaUrls[projectKey] && (
						<div className="w-full flex flex-wrap justify-center gap-4">
							{mediaUrls[projectKey].map((url, index) => (
								<Image
									key={index}
									alt={`${projectKey} media ${index + 1}`}
									className="rounded-lg"
									height={300}
									src={url}
									width={500}
									/>
							))}
						</div>
					)}
					<h3 className="text-xl font-semibold">Key Features:</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Real-time audio analysis and feedback</li>
						<li>Personalized exercise generation based on users skill level</li>
						<li>Extensive library of backing tracks and chord progressions</li>
						<li>Progress tracking and performance analytics</li>
						<li>Integration with popular Digital Audio Workstations (DAWs)</li>
					</ul>
					<div className="h-6"> </div>
				</div>
			);
		default:
			return null;
		}
	};

	return (
		<AnimatePresence>
		<motion.div
			animate={{ opacity: 1 }}
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto"
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<motion.div
			animate={{ y: 0, opacity: 1 }}
			className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
			exit={{ y: "100%", opacity: 0 }}
			initial={{ y: "100%", opacity: 0 }}
			transition={{ type: "spring", damping: 25, stiffness: 200 }}
			>
			<Card className="w-full h-full bg-white dark:bg-gray-900 overflow-hidden rounded-2xl">
			<CardHeader className="flex justify-between items-center p-6 sticky top-0 bg-white dark:bg-gray-900 z-10 rounded-t-2xl">
				<h2 className="text-2xl font-bold">{getProjectTitle(projectKey)}</h2>
				<button
					className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
					onClick={handleBack}
				>
					<IoCloseOutline size={24} />
				</button>
				</CardHeader>
				<CardBody className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)] rounded-b-2xl">
				<motion.div
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					{renderProjectContent()}
				</motion.div>
				</CardBody>
			</Card>
			</motion.div>
		</motion.div>
		</AnimatePresence>
	);
};

export default ProjectDetails;