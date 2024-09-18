"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface ItemDetailsProps {
	itemKey: string;
	mediaUrls: Record<string, string[]>;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ itemKey: itemKey, mediaUrls }) => {
	const router = useRouter();

	const researchKeys = ['ethnomusicology', 'vtmp', 'boulez', 'deep-drawing'];

	const handleBack = () => {
		const isResearch = researchKeys.includes(itemKey);

		router.push(`/${isResearch ? 'research' : 'projects'}`);
	};

	const getItemTitle = (key: string): string => {
		switch (key) {
			// Research
			case "ethnomusicology":
				return "Ethnomusicology Research on Ancient Chinese Musical Instruments";
			case "vtmp":
				return "Visualizing Telematic Music Performance";
			case "boulez":
				return "Web-based Spatial Audio Playground for IRCAM";
			case "deep-drawing":
				return "Deep Drawing: An Intermedia AI Co-Performer";
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

	const renderItemContent = () => {
		switch (itemKey) {
		// Research
		case "ethnomusicology":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						My research in ethnomusicology explores the tapestry of ancient Chinese musical instruments, examining their continuity and transformation across various historical periods. I focus on their intricate relationship with social, cultural, and political structures. My work in this area has led to a conference paper presentation, a conference poster presentation, and a journal article for the American Musical Instrument Society (AMIS) in 2023 and 2024.
					</p>
					<p className="text-lg">
						In collaboration with Professor Stewart Carter at Wake Forest University, I zoom in on the evolution of Chinese musical instruments and practices during the Ming and Qing dynasties. We examine sources in both classical Chinese and French, such as <i>Daqing huidian (大清会典)</i>, <i>Lülü zhengyi (律吕正义)</i>, and the manuscripts of Joseph-Marie Amiot, an 18th-century Jesuit missionary to China. Our analysis evaluates and compares the measurements of musical instruments in these treatises, highlighting both the overall accuracy of Amiot&apos;s descriptions and some subtle yet intriguing flaws. Ultimately, our work sheds light on the broader landscape of early musical exchange between China and Europe.
					</p>
					<p className="text-lg">
						Our research also delves into earlier periods, leveraging the iconography of terracotta musicians and dancers from the Former and Later Shu kingdoms of the 10th century. Another joint effort with Professor Carter shows how these regional powers emulated musical traditions of the preceding Tang Dynasty to establish legitimacy. Analyzing artifacts from the Yongling Mausoleum and the Chengdu Museum reveals the enduring influence of Tang court music and dance, while also highlighting unique regional adaptations.
					</p>
					<div className="h-6"> </div>
				</div>
			);
		case "vtmp":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						Visualizing Telematic Music Performance, directed by Professors Michael Gurevich, John Granzow, and Brent Gillespie at the University of Michigan, investigates the interplay between human gesture, embodiment, and musical expression in the context of networked music performances. We seek not only to overcome the latencies caused by video transmissions with new forms of visual data transmission, but also to provide insights into how technology can extend our understanding of presence and agency in distributed performance environments. Can robotic avatars driven by performers enhance the depth and richness of musical interactions?
					</p>
					<p className="text-lg">
					Central to our system is LARS (Lamp Arm Robot <i>Something</i>), a robotic avatar designed by the team that serves as a physical proxy to translate remote performers’ gestures into meticulously abstracted and meaningful movements. The system leverages Qualysis, JackTrip, MaxMSP, Processing, Arduino, and 3D fabrication.
					</p>
					<p className="text-lg">
						We conduct pilot studies, including interviews with chamber musicians and surveys for audience members. Our goal is to explore how mechatronic representations influence ensemble coordination, expressive phrasing, and the overall musical experience for both performers and spectators.
					</p>
					<p className="text-lg">
						Visualizing Telematic Music Performance is part of the Faculty Engineering/Arts Student Teams (FEAST) Program, sponsored by ArtsEngine and the Arts Initiative at the University of Michigan.
					</p>
					<div className="h-6"> </div>
				</div>
			);
		case "boulez":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						As part of my visiting position at NYU Shanghai&apos;s Music Experience Design (MusED) Lab, headed by Professor Alex Ruthmann, in 2024, we are developing an immersive web-based educational tool that presents Pierre Boulez&apos;s <i>Dialogue de l&apos;ombre double (Dialogue of the Double Shadow)</i>. This project, coinciding with Boulez&apos;s 100th birthday anniversary in 2025, stems from Professor Ruthmann&apos;s artistic research residency with the pedagogical team at IRCAM. It will be submitted to the Computer Music Journal and presented at the IRCAM Forum in 2025.
					</p>
					<p className="text-lg">
						Our goal is to create an immersive experience accessible to novice audiences worldwide, bringing spatial audio and experimental electronic music out of the ivory tower while deterritorializing traditional musicianship, highlighting the indispensable contributions made by technologists and engineers. Additionally, we aim to provide a prototype for archives, performance organizations, and music educators to better showcase and advocate for historical musical works in the digital age.
					</p>
					<p className="text-lg">
						Our team is applying design-based research methodologies and pedagogical principles pioneered at the NYU MusEDLab within an iterative development process to explore the multifaceted nature of this masterpiece. The playground offers multiple entry points, allowing users to explore the piece from the perspectives of the composer, the composition itself, performers, and the often-overlooked technologists crucial to realizing computer music. Our interface aims to unveil the compositional processes and ideas sometimes obscured by the composers while respecting the complexity and depth of their artistic vision. By leveraging the Web Audio API, we are tackling the technical challenges of faithfully reproducing Boulez&apos;s intricate spatial audio concepts in a browser-based format.
					</p>
					<p className="text-lg">
						We are continuing the development of the spatial audio playground with user experiments and ongoing user interface optimization.
					</p>
					<div className="h-6"> </div>
				</div>
			);
		case "deep-drawing":
			return (
				<div className="space-y-6">
					<p className="text-lg">
						Deep Drawing, led by Dr. Julie Zhu and Professor John Granzow at the University of Michigan, utilizes artificial intelligence to create a novel form of intermedia performance while investigating the unique relationship between the auditory and visual aspects of hand drawing. Deep Drawing was presented as a performance at the 2024 Conference on AI and Musical Creativity (AIMC).
					</p>
					<p className="text-lg">
						Our system interprets the sounds of drawing in real-time, generating predicted visual outputs projected on top of the artist&apos;s physical drawing. By focusing on these subtle, often ignored noises, we propose an alternative philosophy of human-machine creativity that embraces the aesthetic value of AI&apos;s misinterpretations and errors. These so-called mistakes—moments when the AI&apos;s visual output diverges from the human&apos;s actual drawing—become integral to the artistic process.
					</p>
					<p className="text-lg">
						The AI&apos;s unexpected interpretations can prompt the human artist to explore and diverge from the original momentum, creating a unique aesthetic tension. We invite the audience to reconsider the evolving role of AI as a collaborator in a dynamic feedback loop of creativity with humans and its potential to augment, rather than replace, human creativity.
					</p>
					<p className="text-lg">
						At the core of our system is a convolutional neural network (CNN)—a fine-tuned ResNet 50 trained on our dataset of four-channel spectrograms and 2D coordinates, with its input and output layers modified for our specific task. The system captures sound from an audio interface routed to four contact microphones attached to a wooden drawing surface, processes the audio into spectrograms, and generates continuous 2D coordinates that drive a live visual display in the browser, overlaid with the video capture of the drawing.
					</p>
					<p className="text-lg">
						We are continuing the development of Deep Drawing with novel forms of data and neural network architectures.
					</p>
					<p className="text-lg">
						Deep Drawing is supported by the Performing Arts Technology Department and the ADVANCE program at the University of Michigan.
					</p>
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
				{mediaUrls[itemKey] && (
					<div className="w-full flex flex-wrap justify-center gap-4">
						{mediaUrls[itemKey].map((url, index) => (
							<Image
								key={index}
								alt={`${itemKey} media ${index + 1}`}
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
					{mediaUrls[itemKey] && (
						<div className="w-full flex flex-wrap justify-center gap-4">
							{mediaUrls[itemKey].map((url, index) => (
								<Image
									key={index}
									alt={`${itemKey} media ${index + 1}`}
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
				<h2 className="text-2xl font-bold">{getItemTitle(itemKey)}</h2>
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
					{renderItemContent()}
				</motion.div>
				</CardBody>
			</Card>
			</motion.div>
		</motion.div>
		</AnimatePresence>
	);
};

export default ItemDetails;