import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { IoCloseOutline } from "react-icons/io5";

interface ProjectDetailsProps {
	projectKey: string;
	onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
	projectKey,
	onBack,
}) => {
	const getProjectTitle = (key: string): string => {
		switch (key) {
			// Research
			// Publications
			case "amis2023":
				return "AMIS 2023";
			// Projects
			case "multimeter":
				return "MultiMeter";
			default:
				return "Error";
		}
	  };

	const renderProjectContent = () => {
		switch (projectKey) {
		// Research
		// Publications
		case "amis2023":
			return (
			<div className="space-y-6">
				<p className="text-lg">
				The AMIS 2023 (Advanced Music Information Systems) project
				focuses on developing cutting-edge algorithms for music analysis
				and recommendation. This research aims to enhance the way we
				interact with and discover music in the digital age.
				</p>
				<h3 className="text-xl font-semibold">Research Highlights:</h3>
				<ul className="list-disc list-inside space-y-2">
				<li>Novel machine learning techniques for music genre classification</li>
				<li>Improved algorithms for music similarity detection</li>
				<li>User behavior analysis for personalized music recommendations</li>
				<li>Integration of cultural and contextual factors in music analysis</li>
				<li>Exploration of cross-modal approaches combining audio and visual data</li>
				</ul>
			</div>
			);
		// Projects
		case "multimeter":
			return (
				<div className="space-y-6">
					<p className="text-lg">
					The MultiMeter project is an innovative approach to measuring
					multiple electrical properties simultaneously. It combines
					advanced sensor technology with user-friendly interface design
					to create a versatile tool for both professionals and hobbyists.
					</p>
					<h3 className="text-xl font-semibold">Key Features:</h3>
					<ul className="list-disc list-inside space-y-2">
					<li>Simultaneous measurement of voltage, current, and resistance</li>
					<li>Data logging and export capabilities</li>
					<li>Intuitive digital interface with color display</li>
					<li>High-precision sensors for accurate readings</li>
					</ul>
				</div>
			);
		default:
			return null;
		}
	};

	return (
		<AnimatePresence>
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
		>
			<motion.div
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 50, opacity: 0 }}
			transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			className="w-full max-w-4xl"
			>
			<Card className="w-full bg-white dark:bg-gray-900 overflow-hidden">
				<CardHeader className="flex justify-between items-center p-6">
				<h2 className="text-2xl font-bold">{getProjectTitle(projectKey)}</h2>
				<button
					onClick={onBack}
					className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
				>
					<IoCloseOutline size={24} />
				</button>
				</CardHeader>
				<CardBody className="p-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
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