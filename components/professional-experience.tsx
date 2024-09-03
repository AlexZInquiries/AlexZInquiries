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
                        <strong>Visiting Researcher</strong> - Music Experience Design (MusED) Lab at NYU Shanghai (Jun 2024 - Aug 2024)
                    </li>
                    <li>
                        <strong>Software Engineer Intern</strong> - SoundBug (May 2023 - Aug 2023)
                    </li>
                    <li>
                        <strong>R&D Intern</strong> - MicroPort NaviBot (May 2022 - Aug 2022)
                    </li>
                    <li>
                        <strong>Student Researcher</strong> - Center for Assessment of Elementary Education at the Ministry of Education (Sep 2020 - Aug 2024)
                    </li>
                    <li>
                        <strong>Composer and Lyricist</strong>
                        <div className="mt-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">• Shanghai Music Publishing House (Sep 2022 - May 2024)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">• Zhejiang Education Publishing House (Sep 2020 - Aug 2024)</p>
                        </div>
                    </li>
                    <li>
                        <strong>Freelance Translator</strong>
                        <div className="mt-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">• Shanghai Education Publishing House (Apr 2023 - Present)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">• Shanghai Conservatory of Music Press (Jan 2018 - Jun 2018)</p>
                        </div>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

export default ProfessionalExperience;