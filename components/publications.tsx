import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";

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
            Zhu, J., E. Ackley, Z. Zhang, and J. Granzow 2024. <Link href="#" className="text-primary">Deep Drawing: An Intermedia AI Co-Performer.</Link> The 2024 International Conference on AI and Musical Creativity (AIMC 2024).
            </li>
            <li>
            Carter, S. and Z. Zhang 2024. <Link href="#" className="text-primary">Father Amiot&apos;s Report of the Kangxi Emperor&apos;s &quot;Improvements&quot; to Ritual Instruments in Eighteenth-Century China.</Link> Journal of the American Musical Instrument Society.
            </li>
            <li>
            Zhang, Z. 2019. <Link href="#" className="text-primary">Alex&apos;s Musical Picture Book.</Link> East China Normal University Press. (ISBN: 978-7-5675-9374-9)
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
            Ljunggren, C. 2018. <Link href="#" className="text-primary">The Choral World: A Chronological, Historical, and Geographical Approach.</Link> Translated from English by Wang, Y. and Z. Zhang. Shanghai Conservatory of Music Press. (ISBN: 978-7-5566-0171-4)
            </li>
        </PublicationCard>
        </div>
    );
};

const InvitedTalks = () => {
    return (
        <div className="w-full h-full">
        <PublicationCard title="Invited Talks and Presentations">
            <li>
            May 2024. The 53rd Annual Meeting of the American Musical Instrument Society (AMIS). <Link href="#" className="text-primary">&quot;Music, Instruments, and Dance in Tenth-Century Shu: Echoes of the Great Tang&quot;.</Link> (Poster Presentation)
            </li>
            <li>
            June 2023. The 52nd Annual Meeting of the American Musical Instrument Society (AMIS). <Link href="#" className="text-primary">&quot;Kangxi, Father Amiot, and &apos;Improvements&apos; to Ritual Instruments in Eighteenth-Century China&quot;.</Link> (Paper Presentation)
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
            <Link href="#" className="text-primary">&quot;Grandpa Cao and His Angels&quot;.</Link> 2018. Produced by Yu, D. and Z. Zhang for the Music Education in China (MEiC) series at the Shanghai Conservatory of Music Press.
            </li>
        </PublicationCard>
        </div>
    );
};

export { Publications, Translations, InvitedTalks, MediaProduction };