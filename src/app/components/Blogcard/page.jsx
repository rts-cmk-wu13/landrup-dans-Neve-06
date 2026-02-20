import Link from "next/link"

export default function BlogCard({ activity }) {

    return (
        <>
        <Link href={`/activities/${activity.id}`} aria-labelledby={"activities" + activity.id}>
            <article>
                <figure className="activity__image-figure">
                <img className="activity__image" src={activity.asset.url} alt={activity.name}/>
                <div className="activity__image-description">
                <h2 id={"activities" + activity.id}>{activity.name}</h2>
                <p>{activity.minAge} år</p>
                </div>
                </figure>
            </article>
        </Link>
        </>
    )
}