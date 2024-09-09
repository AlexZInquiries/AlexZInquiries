import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";

const PublicationCard = ({ title, children }) => (
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
            <Link href="#" className="text-primary">Zhu, J., E. Ackley, Z. Zhang, and J. Granzow 2024. Deep Drawing: An Intermedia AI Co-Performer.</Link> The International Conference on AI and Musical Creativity.
            </li>
            <li>
            <Link href="#" className="text-primary">Carter, S. and Z. Zhang 2024. Father Amiot's Report of the Kangxi Emperor's "Improvements" to Ritual Instruments in Eighteenth-Century China.</Link> Journal of the American Musical Instrument Society.
            </li>
            <li>
            <Link href="#" className="text-primary">Zhang, Z. 2019. Alex's Musical Picture Book.</Link> East China Normal University Press. (ISBN: 978-7-5675-9374-9)
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
            <Link href="#" className="text-primary">Ljunggren, C. 2018. The Choral World: A Chronological, Historical, and Geographical Approach.</Link> Translated from English by Wang, Y. and Z. Zhang. Shanghai Conservatory of Music Press. (ISBN: 978-7-5566-0171-4)
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
            May 2024. The 53rd Annual Meeting of the American Musical Instrument Society (AMIS). <Link href="#" className="text-primary">"Music, Instruments, and Dance in Tenth-Century Shu: Echoes of the Great Tang".</Link> (Poster Presentation)
            </li>
            <li>
            June 2023. The 52nd Annual Meeting of the American Musical Instrument Society (AMIS). <Link href="#" className="text-primary">"Kangxi, Father Amiot, and 'Improvements' to Ritual Instruments in Eighteenth-Century China".</Link> (Paper Presentation)
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
            <Link href="#" className="text-primary">"Grandpa Cao and His Angels".</Link> 2018. Produced by Yu, D. and Z. Zhang for the Music Education in China (MEiC) series at the Shanghai Conservatory of Music Press.
            </li>
        </PublicationCard>
        </div>
    );
};

export { Publications, Translations, InvitedTalks, MediaProduction };