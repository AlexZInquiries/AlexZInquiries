const linkClasses = "font-medium text-primary-600 px-1 py-0.5 rounded transition-all duration-300 ease-in-out hover:bg-primary-100 dark:hover:bg-primary-800/30 hover:scale-105";

const PublicationCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="w-full h-full p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <ul className="list-disc pl-5 mb-4">
            {children}
        </ul>
    </div>
);

const JournalArticles = () => {
    return (
        <PublicationCard title="Journal Articles">
            <li>
                Carter, S. and <b>Z. Zhang</b>. 2024.
                <a className={linkClasses} href="https://www.amis.org/journal">Father Amiot&apos;s Report of the Kangxi Emperor&apos;s &quot;Improvements&quot; to Ritual Instruments in Eighteenth-Century China.</a>
                <i>Journal of the American Musical Instrument Society (JAMIS).</i>
            </li>
        </PublicationCard>
    );
};

const Performances = ({ aimc2024Url }: { aimc2024Url: string }) => {
    return (
        <PublicationCard title="Performances">
            <li>
                Zhu, J., E. Ackley, <b>Z. Zhang</b>, and J. Granzow. 2024.
                <a className={linkClasses} href={aimc2024Url} rel="noopener noreferrer" target="_blank">Deep Drawing: An Intermedia AI Co-Performer.</a>
                <i>The International Conference on AI and Musical Creativity (AIMC).</i>
            </li>
        </PublicationCard>
    );
};

const InvitedTalks = ({ amis2023Url, amis2024Url }: { amis2023Url: string, amis2024Url: string }) => {
    return (
        <PublicationCard title="Invited Talks and Presentations">
            <li>
                May 2024. The 53rd Annual Meeting of the American Musical Instrument Society (AMIS).
                <a className={linkClasses} href={amis2024Url} rel="noopener noreferrer" target="_blank">&quot;Music, Instruments, and Dance in Tenth-Century Shu: Echoes of the Great Tang&quot;.</a>
                (Poster Presentation with S. Carter)
            </li>
            <li>
                June 2023. The 52nd Annual Meeting of the American Musical Instrument Society (AMIS).
                <a className={linkClasses} href={amis2023Url} rel="noopener noreferrer" target="_blank">&quot;Kangxi, Father Amiot, and &apos;Improvements&apos; to Ritual Instruments in Eighteenth-Century China&quot;.</a>
                (Paper Presentation with S. Carter)
            </li>
        </PublicationCard>
    );
};

const Books = () => {
    return (
        <PublicationCard title="Books">
            <li>
                <b>Zhang, Z.</b> 2019.
                <a className={linkClasses} href="https://www.amazon.com/%E5%B0%8F%E6%99%BA%E5%93%A5%E6%95%99%E9%9F%B3%E4%B9%90-%E6%B1%89%E8%8B%B1%E5%AF%B9%E7%85%A7-%E7%B2%BE-%E5%BC%A0%E6%99%BA%E7%91%9C/dp/7567593742">
                    <i>Alex&apos;s Musical Picture Book (小智哥教音乐).</i>
                </a>
                East China Normal University Press. (ISBN: 978-7-5675-9374-9)
            </li>
        </PublicationCard>
    );
};

const Translations = () => {
    return (
        <PublicationCard title="Translations">
            <li>
                Ljunggren, C. 2018.
                <a className={linkClasses} href="https://www.amazon.com/-/he/%E7%91%9E%E5%85%B8-%E5%85%8B%E9%87%8C%E6%96%AF%E8%92%82%E5%AE%89%C2%B7%E8%8D%A3%E6%A0%BC%E4%BB%81-%E4%BD%99%E4%B8%B9%E7%BA%A2-%E7%8E%8B%E6%87%BF%EF%BC%8C%E5%BC%A0%E6%99%BA%E7%91%9C/dp/7556601714">
                    <i>The Choral World: A Chronological, Historical, and Geographical Approach (合唱的世界：年代、历史与地理概述).</i>
                </a>
                Translated from English into Chinese by Wang, Y. and <b>Z. Zhang</b>. 
                Shanghai Conservatory of Music Press. (ISBN: 978-7-5566-0171-4)
            </li>
        </PublicationCard>
    );
};

const MediaProduction = () => {
    return (
        <PublicationCard title="Media Production">
            <li>
                <a className={linkClasses} href="https://youtu.be/t_k_IGbnKIQ?si=jujzDW7cHgbGuvie"><i>Grandpa Cao and His Angels (曹爷爷和他的天使们).</i></a>
                2018. Produced by Yu, D. and <b>Z. Zhang</b> for the Shanghai Conservatory of Music Press&apos;s Music Education in China (MEiC) series.
            </li>
        </PublicationCard>
    );
};

export { JournalArticles, Performances, InvitedTalks, Books, Translations, MediaProduction };