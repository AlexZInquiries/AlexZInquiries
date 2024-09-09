import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

interface ProjectDetailsProps {
	projectKey: string;
	onBack: () => void;
	mediaUrls: Record<string, string[]>;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
	projectKey,
	onBack,
	mediaUrls,
}) => {
	const getProjectTitle = (key: string): string => {
		switch (key) {
			// Research
			// Publications
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
		// Projects
		case "multimeter":
			return (
				<div className="space-y-6">
				<p className="text-lg">
					MultiMeter is an aesthetic AU/VST audio analyzer catering to audio engineers, producers, and musicians seeking precision and versatility. Leveraging the JUCE framework, it delivers a robust array of functions for pristine real-time audio analysis to empower mixing, mastering, and sound design.
				</p>
				<p className="text-lg">
					For more details and source code, visit the <a href="https://github.com/RealAlexZ/MultiMeter" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub repository</a>.
				</p>
				{mediaUrls[projectKey] && (
					<div className="w-full flex flex-wrap justify-center gap-4">
						{mediaUrls[projectKey].map((url, index) => (
							<Image
								key={index}
								src={url}
								alt={`${projectKey} media ${index + 1}`}
								width={500}
								height={300}
								className="rounded-lg"
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
		default:
			return null;
		}
	};

	return (
		<AnimatePresence>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto"
		>
			<motion.div
			initial={{ y: "100%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: "100%", opacity: 0 }}
			transition={{ type: "spring", damping: 25, stiffness: 200 }}
			className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
			>
			<Card className="w-full h-full bg-white dark:bg-gray-900 overflow-hidden rounded-2xl">
			<CardHeader className="flex justify-between items-center p-6 sticky top-0 bg-white dark:bg-gray-900 z-10 rounded-t-2xl">
				<h2 className="text-2xl font-bold">{getProjectTitle(projectKey)}</h2>
				<button
					onClick={onBack}
					className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
				>
					<IoCloseOutline size={24} />
				</button>
				</CardHeader>
				<CardBody className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)] rounded-b-2xl">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
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