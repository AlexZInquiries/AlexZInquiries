const linkClasses = "font-medium text-primary-600 px-1 py-0.5 rounded transition-all duration-300 ease-in-out hover:bg-primary-100 dark:hover:bg-primary-800/30 hover:scale-105";

const IndustryExperience = () => {
    return (
        <div className="w-full h-full p-4">
            <h2 className="text-xl font-bold mb-2">Industry Experience</h2>
            <ul className="list-disc pl-5 mb-4">
                <li>
                    <strong>Software Engineer Intern</strong> - 
                    <a 
                        href="https://www.soundbug.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={linkClasses}
                    >
                        SoundBug
                    </a> (May 2023 - Aug 2023)
                </li>
                <li>
                    <strong>R&D Intern</strong> - 
                    <a 
                        href="https://microport.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={linkClasses}
                    >
                        MicroPort NaviBot
                    </a> (May 2022 - Aug 2022)
                </li>
            </ul>
        </div>
    );
};

export default IndustryExperience;