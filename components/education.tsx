const Education = () => {
    return (
        <div className="w-full h-full p-4">
            <h2 className="text-xl font-bold mb-2">Education</h2>
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
        </div>
    );
};

export default Education;