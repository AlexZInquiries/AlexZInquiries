import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const linkClasses = "font-medium text-primary-600 px-1 py-0.5 rounded transition-all duration-300 ease-in-out hover:bg-primary-100 dark:hover:bg-primary-800/30 hover:scale-105";

const PublicationCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Card className="w-full h-full">
        <CardHeader className="flex gap-3">
            <h2 className="text-xl font-bold">{title}</h2>
        </CardHeader>
        <Divider />
        <CardBody className="overflow-hidden">
            <ul className="list-disc pl-5 mb-4">
            {children}
            </ul>
        </CardBody>
    </Card>
);

// TODO: JAMIS 2024 link needs to be updated
const Publications = ({ aimc2024Url }: { aimc2024Url: string }) => {
    return (
        <div className="w-full h-full">
        <PublicationCard title="Publications">
            <li>
            Zhu, J., E. Ackley, Z. Zhang, and J. Granzow 2024.<a href={aimc2024Url} target="_blank" rel="noopener noreferrer" className={linkClasses}>Deep Drawing: An Intermedia AI Co-Performer.</a>The 2024 International Conference on AI and Musical Creativity (AIMC 2024).
            </li>
            <li>
            Carter, S. and Z. Zhang 2024.<a href="https://www.amis.org/journal" className={linkClasses}>Father Amiot&apos;s Report of the Kangxi Emperor&apos;s &quot;Improvements&quot; to Ritual Instruments in Eighteenth-Century China.</a>Journal of the American Musical Instrument Society.
            </li>
            <li>
            Zhang, Z. 2019.<a href="https://www.amazon.com/%E5%B0%8F%E6%99%BA%E5%93%A5%E6%95%99%E9%9F%B3%E4%B9%90-%E6%B1%89%E8%8B%B1%E5%AF%B9%E7%85%A7-%E7%B2%BE-%E5%BC%A0%E6%99%BA%E7%91%9C/dp/7567593742" className={linkClasses}>Alex&apos;s Musical Picture Book.</a>East China Normal University Press. (ISBN: 978-7-5675-9374-9)
            </li>
        </PublicationCard>
        </div>
    );
};

const Translations = () => {
    return (
        <div className="w-full h-full">
        <PublicationCard title="Translations">
            <li>
            Ljunggren, C. 2018.<a href="https://www.amazon.com/-/he/%E7%91%9E%E5%85%B8-%E5%85%8B%E9%87%8C%E6%96%AF%E8%92%82%E5%AE%89%C2%B7%E8%8D%A3%E6%A0%BC%E4%BB%81-%E4%BD%99%E4%B8%B9%E7%BA%A2-%E7%8E%8B%E6%87%BF%EF%BC%8C%E5%BC%A0%E6%99%BA%E7%91%9C/dp/7556601714" className={linkClasses}>The Choral World: A Chronological, Historical, and Geographical Approach.</a>Translated from English by Wang, Y. and Z. Zhang. Shanghai Conservatory of Music Press. (ISBN: 978-7-5566-0171-4)
            </li>
        </PublicationCard>
        </div>
    );
};

const InvitedTalks = ({ amis2023Url, amis2024Url }: { amis2023Url: string, amis2024Url: string }) => {
    return (
        <div className="w-full h-full">
        <PublicationCard title="Invited Talks and Presentations">
            <li>
            May 2024. The 53rd Annual Meeting of the American Musical Instrument Society (AMIS).<a href={amis2024Url} target="_blank" rel="noopener noreferrer" className={linkClasses}>&quot;Music, Instruments, and Dance in Tenth-Century Shu: Echoes of the Great Tang&quot;.</a>(Poster Presentation)
            </li>
            <li>
            June 2023. The 52nd Annual Meeting of the American Musical Instrument Society (AMIS).<a href={amis2023Url} target="_blank" rel="noopener noreferrer" className={linkClasses}>&quot;Kangxi, Father Amiot, and &apos;Improvements&apos; to Ritual Instruments in Eighteenth-Century China&quot;.</a>(Paper Presentation)
            </li>
        </PublicationCard>
        </div>
    );
};

const MediaProduction = () => {
    return (
        <div className="w-full h-full">
        <PublicationCard title="Media Production">
            <li>
            <a href="https://youtu.be/t_k_IGbnKIQ?si=jujzDW7cHgbGuvie" className={linkClasses}>&quot;Grandpa Cao and His Angels&quot;.</a>2018. Produced by Yu, D. and Z. Zhang for the Music Education in China (MEiC) series at the Shanghai Conservatory of Music Press.
            </li>
        </PublicationCard>
        </div>
    );
};

export { Publications, Translations, InvitedTalks, MediaProduction };