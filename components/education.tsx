import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const Education = () => {
    return (
        <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
                <h2 className="text-xl font-bold">Education</h2>
            </CardHeader>
            <Divider />
            <CardBody>
                <ul className="list-disc pl-5">
                    <li>
                        <strong>University of Michigan</strong> (Jan 2022 - Present)
                        <div className="mt-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">• BS in Computer Science (Dual Degree)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">• BA in Music (Dual Degree)</p>
                        </div>
                    </li>
                    <li>
                        <strong>Wake Forest University</strong> (Sep 2020 - Dec 2021)
                        <div className="mt-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">• Transferred to the University of Michigan</p>
                        </div>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

export default Education;