import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const ProfessionalExperience = () => {
    return (
        <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
                <h2 className="text-xl font-bold">Professional Experience</h2>
            </CardHeader>
            <Divider />
            <CardBody>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <strong>Visiting Researcher</strong> - NYU Shanghai (June 2024 - Aug 2024)
                    </li>
                    <li>
                        <strong>Software Engineer Intern</strong> - SoundBug (May 2023 - Aug 2023)
                    </li>
                    <li>
                        <strong>R&D Intern</strong> - MicroPort NaviBot (May 2022 - Aug 2022)
                    </li>
                    <li>
                        <strong>Freelance Translator</strong> (Jun 2018 - Present)
                        <div className="mt-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">• Shanghai Education Press House (Apr 2023 - Present)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">• Shanghai Conservatory of Music Press (Jan 2018 - Jun 2018)</p>
                        </div>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

export default ProfessionalExperience;