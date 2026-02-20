import Link from "next/link"

export default function BlogCard({ activity }) {

    // const formattedDate = Intl.DateTimeFormat("da-DK", {dateStyle: "long"}).format(new Date(activity.createdAt))
    return (
        <>
        <Link href={`/activities/${activity.id}`} aria-labelledby={"activities" + activity.id}>
            <article>
                <h2 id={"activities" + activity.id}>{activity.name}</h2>
                {/* <p>{formattedDate}</p> */}
                <figure className="activity__image-figure">
                <img className="activity__image" src={activity.asset.url} alt={activity.name}/>
                </figure>
                <p>{activity.minAge} år</p>
            </article>
        </Link>
        </>
    )
}