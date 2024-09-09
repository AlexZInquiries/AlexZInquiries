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

const Publications = () => {
    return (
        <div className="w-full h-full">
        <PublicationCard title="Publications">
            <li>
            Zhu, J., E. Ackley, Z. Zhang, and J. Granzow 2024. <a href="#" className={linkClasses}>Deep Drawing: An Intermedia AI Co-Performer.</a> The 2024 International Conference on AI and Musical Creativity (AIMC 2024).
            </li>
            <li>
            Carter, S. and Z. Zhang 2024. <a href="#" className={linkClasses}>Father Amiot&apos;s Report of the Kangxi Emperor&apos;s &quot;Improvements&quot; to Ritual Instruments in Eighteenth-Century China.</a> Journal of the American Musical Instrument Society.
            </li>
            <li>
            Zhang, Z. 2019. <a href="#" className={linkClasses}>Alex&apos;s Musical Picture Book.</a> East China Normal University Press. (ISBN: 978-7-5675-9374-9)
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
            Ljunggren, C. 2018. <a href="#" className={linkClasses}>The Choral World: A Chronological, Historical, and Geographical Approach.</a> Translated from English by Wang, Y. and Z. Zhang. Shanghai Conservatory of Music Press. (ISBN: 978-7-5566-0171-4)
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
            May 2024. The 53rd Annual Meeting of the American Musical Instrument Society (AMIS). <a href={amis2024Url} target="_blank" rel="noopener noreferrer" className={linkClasses}>&quot;Music, Instruments, and Dance in Tenth-Century Shu: Echoes of the Great Tang&quot;.</a> (Poster Presentation)
            </li>
            <li>
            June 2023. The 52nd Annual Meeting of the American Musical Instrument Society (AMIS). <a href={amis2023Url} target="_blank" rel="noopener noreferrer" className={linkClasses}>&quot;Kangxi, Father Amiot, and &apos;Improvements&apos; to Ritual Instruments in Eighteenth-Century China&quot;.</a> (Paper Presentation)
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
            <a href="#" className={linkClasses}>&quot;Grandpa Cao and His Angels&quot;.</a> 2018. Produced by Yu, D. and Z. Zhang for the Music Education in China (MEiC) series at the Shanghai Conservatory of Music Press.
            </li>
        </PublicationCard>
        </div>
    );
};

export { Publications, Translations, InvitedTalks, MediaProduction };