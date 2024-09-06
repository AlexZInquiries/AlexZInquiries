import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

interface ProjectDetailsProps {
	projectKey: string;
	onBack: () => void;
	tabSelected: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
	projectKey,
	onBack,
	tabSelected,
}) => {
	const renderProjectContent = () => {
		switch (projectKey) {
			case "multimeter":
				return (
					<div className="m-6">
						<CardHeader className="flex gap-3">
							<div className="flex flex-col">
								<p className="text-md">Project</p>
								<p className="text-2xl font-bold">MultiMeter</p>
							</div>
						</CardHeader>
						<CardBody>
							<p className="text-lg mb-4">
								The MultiMeter project is an innovative approach to measuring
								multiple electrical properties simultaneously. It combines
								advanced sensor technology with user-friendly interface design
								to create a versatile tool for both professionals and hobbyists.
							</p>
							<h3 className="text-xl font-semibold mb-2">Key Features:</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									Simultaneous measurement of voltage, current, and resistance
								</li>
								<li>High-precision sensors for accurate readings</li>
								<li>Intuitive digital interface with color display</li>
								<li>Data logging and export capabilities</li>
								<li>Compact and durable design for field use</li>
							</ul>
						</CardBody>
					</div>
				);
			case "amis2023":
				return (
					<div className="m-6">
						<CardHeader className="flex gap-3">
							<div className="flex flex-col">
								<p className="text-md">Research Project</p>
								<p className="text-2xl font-bold">AMIS 2023</p>
							</div>
						</CardHeader>
						<CardBody>
							<p className="text-lg mb-4">
								The AMIS 2023 (Advanced Music Information Systems) project
								focuses on developing cutting-edge algorithms for music analysis
								and recommendation. This research aims to enhance the way we
								interact with and discover music in the digital age.
							</p>
							<h3 className="text-xl font-semibold mb-2">
								Research Highlights:
							</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									Novel machine learning techniques for music genre
									classification
								</li>
								<li>Improved algorithms for music similarity detection</li>
								<li>
									User behavior analysis for personalized music recommendations
								</li>
								<li>
									Integration of cultural and contextual factors in music
									analysis
								</li>
								<li>
									Exploration of cross-modal approaches combining audio and
									visual data
								</li>
							</ul>
						</CardBody>
					</div>
				);
			default:
				return <p>Project details not available.</p>;
		}
	};

	return (
		<Card className="w-[calc(100%-30px)] bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-[2rem] m-[15px]">
			{renderProjectContent()}
			<CardBody>
				<Button
					onClick={onBack}
					className="flex mt-4 bg-blue-500 hover:bg-blue-600 text-white w-2/3 mx-auto justify-center">
					Back to {tabSelected}
				</Button>
			</CardBody>
		</Card>
	);
};

export default ProjectDetails;
