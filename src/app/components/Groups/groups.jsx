import Image from "next/image"
export default function Groups() {

    return (
        <>
            <section className="columns">
                <h2 className="groups__title">Vores holdtyper</h2>

                <h3>Børnehold</h3>
                <figure>
                <Image loading="lazy" src="/boernedans.jpg" width={330} height={200} alt="children-group"></Image>
                </figure>
                <p>På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi. Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer. Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med.</p>

                <h3>Selskabs- og seniordans</h3>
                <figure>
                <Image loading="lazy" src="/seniordans.jpg" width={330} height={200} alt="senior-group"></Image>
                </figure>
                <p>
                    Selskabs- og seniordans kombinerer hyggeligt samvær med skånsom motion. Vi danser klassiske pardanse i et tempo, hvor alle kan følge med. Undervisningen styrker balance, koordination og kondition, samtidig med at fællesskabet og danseglæden er i centrum.

                </p>
                <h3>Moderne dans og ballet</h3>
                <figure>
                <Image loading="lazy" src="/modernedans.jpg" width={330} height={200} alt="modern-group"></Image>
                </figure>
                <p>
                    Moderne dans og ballet forener teknik, kropskontrol og musikalsk udtryk. Træningen forbedrer styrke, smidighed og holdning gennem varierede øvelser. Undervisningen foregår i en positiv atmosfære, hvor bevægelsesglæde og koncentration skaber både fordybelse og effektiv motion.
                </p>
                <h3>Streetdance og hiphop</h3>
                <figure>
                <Image loading="lazy" src="/streethiphop.jpg" width={330} height={200} alt="street-hiphop-group"></Image>
                </figure>
                <p>
                    Streetdance og hiphop er energifyldt træning med fokus på rytme, attitude og fællesskab. Vi arbejder med grooves, koreografier og grundtrin, der styrker kondition og koordination. Stemningen er uformel og motiverende, så motion og danseglæde går hånd i hånd.
                </p>
            </section>

        </>
    )
}