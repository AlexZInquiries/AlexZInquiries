const linkClasses = "font-medium text-primary-600 px-1 py-0.5 rounded transition-all duration-300 ease-in-out hover:bg-primary-100 dark:hover:bg-primary-800/30 hover:scale-105";

const CreativeExperience = () => {
    return (
        <div className="w-full h-full p-4">
            <h2 className="text-xl font-bold mb-2">Creative Experience</h2>
            <ul className="list-disc pl-5 mb-4">
                <li>
                    <strong>Student Researcher</strong> - 
                    <a 
                        className={linkClasses} 
                        href="https://cicabeq.bnu.edu.cn/fzx/index.htm" 
                        rel="noopener noreferrer" 
                        target="_blank"
                    >
                        China Basic Education Quality Monitoring Collaborative Innovation Center
                    </a>(Sep 2020 - Aug 2024)
                </li>
                <li>
                    <strong>Composer and Lyricist</strong>
                    <div className="mt-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            • <a className={linkClasses} href="https://www.smph.cn/" rel="noopener noreferrer" target="_blank">
                                Shanghai Music Publishing House
                            </a>(Sep 2022 - May 2024)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            • <a className={linkClasses} href="https://zjeph.com" rel="noopener noreferrer" target="_blank">
                                Zhejiang Education Publishing House
                            </a>(Sep 2020 - Aug 2024)
                        </p>
                    </div>
                </li>
                <li>
                    <strong>Freelance Translator</strong>
                    <div className="mt-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            • <a className={linkClasses} href="http://www.seph.com.cn/" rel="noopener noreferrer" target="_blank">
                                Shanghai Educational Publishing House
                            </a>(Apr 2023 - Present)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            • <a className={linkClasses} href="https://shcmpress.com/" rel="noopener noreferrer" target="_blank">
                                Shanghai Conservatory of Music Press
                            </a>(Jan 2018 - Jun 2018)
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CreativeExperience;