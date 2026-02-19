import Link from "next/link"

export default function BlogCard({ activity }) {

    const formattedDate = Intl.DateTimeFormat("da-DK", {dateStyle: "long"}).format(new Date(activity.createdAt))
    return (
        <>
        <Link href={`/blog/${activity.id}`} aria-labelledby={"blog-card-" + activity.id}>
            <article>
                <h2 id={"blog-card-" + activity.id}>{activity.name}</h2>
                <p>{activity.author}</p>
                <p>{formattedDate}</p>
                <p>{activity.content}</p>
            </article>
        </Link>
        </>
    )
}