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
			case "ethnomusicology":
				return "Ethnomusicology Research on Ancient Chinese Musical Instruments";
			case "vtmp":
				return "VTMP Research";
			case "boulez":
				return "Boulez Research";
			case "deep-drawing":
				return "Deep Drawing Research";
			// Publications
			// Projects
			case "multimeter":
				return "MultiMeter";
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
						Coming soon.
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
					<div className="h-6"> </div>
				</div>
			);
		case "vtmp":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						Coming soon.
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
					<div className="h-6"> </div>
				</div>
			);
		case "boulez":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						Coming soon.
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
					<div className="h-6"> </div>
				</div>
			);
		case "deep-drawing":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						Coming soon.
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
								height={390}
								src={url}
								width={650}
							/>
						))}
					</div>
				)}
				<h3 className="text-xl font-semibold">Key Features:</h3>
				<ul className="list-none space-y-6">
					<li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
						<h4 className="text-lg font-semibold mb-2">General Metering</h4>
						<ul className="list-disc pl-5 space-y-2">
							<li>Employs a high-performance FIFO (First In, First Out) buffer to efficiently handle audio data between DSP and GUI threads.</li>
							<li>Features a series of comboboxes and sliders to personalize metering behavior, including averager durations and various meter displays.</li>
						</ul>
					</li>

					<li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
						<h4 className="text-lg font-semibold mb-2">Level Meter</h4>
						<ul className="list-disc pl-5 space-y-2">
							<li>Provides instantaneous visual feedback of audio signal levels with numeric value displays of signal levels in decibels.</li>
							<li>Supports Root Mean Squared (RMS) readings to show the effective signal average and provide a representative overview of perceived volume levels.</li>
							<li>Supports peak readings to show peak levels accurately.</li>
							<li>Enables user adjustment of the decay rate of meter ticks with multiple responsiveness options.</li>
							<li>Allows holding peak tick values for a specified duration to enhance the analysis of transient audio materials.</li>
						</ul>
					</li>

					<li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
						<h4 className="text-lg font-semibold mb-2">Histogram</h4>
						<ul className="list-disc pl-5 space-y-2">
							<li>Visualizes the distribution of signal level dynamics over time.</li>
						</ul>
					</li>

					<li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
						<h4 className="text-lg font-semibold mb-2">Goniometer</h4>
						<ul className="list-disc pl-5 space-y-2">
							<li>Converts L/R audio signals into Mid/Side representations that provide insights into the coherence of the stereo field distribution and phase differences between the left and right channels.</li>
						</ul>
					</li>

					<li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
						<h4 className="text-lg font-semibold mb-2">Correlation Meter</h4>
						<ul className="list-disc pl-5 space-y-2">
							<li>Provides real-time readings of the phase correlation between left and right audio channels, ranging from +1 (fully in-phase) to 0 (wide stereo) to negative values (out-of-phase), to help identify potential phase issues and ensure mono compatibility.</li>
						</ul>
					</li>

					<li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
						<h4 className="text-lg font-semibold mb-2">FFT Spectrogram Analyzer</h4>
						<ul className="list-disc pl-5 space-y-2">
							<li>Presents a high-resolution Fast Fourier Transform (FFT) spectrum with logarithmically scaled frequency bins, displaying the frequency content over time with a curve of all frequency components in the incoming signal and enabling in-depth spectral balance analysis.</li>
						</ul>
					</li>
				</ul>
				<div className="h-6"> </div> { /* This adds consistent spacing */ }
				</div>
			);
		case "improvisationTutor":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						Coming soon.
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