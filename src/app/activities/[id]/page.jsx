
import { getActivityById } from "../../lib/dal";
import Link from "next/link";
// import CommentSection from "@/app/components/CommentSection/page.jsx";
import { notFound } from "next/navigation";
export default async function ActivityDetailPage({ params }) {


    const { id } = await params;
    const activity = await getActivityById(id);

        if(activity.success === false){
        return (
            <main>
                <h1>Oops something went wrong</h1>
                <p>{activity.message}</p>
            </main>
        )
    }
 
    if (!activity.data) return notFound();

    return (
        <main>
            <Link href="/activities">Return to activities</Link>
            <article>

                <h1>
                    {activity.data.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: activity.data.content }}></div>
                <CommentSection comments={activity.data.comments} />
            </article>
        </main>
    )
}