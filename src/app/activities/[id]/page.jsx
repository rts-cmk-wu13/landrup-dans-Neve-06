
import { getActivityById } from "../../lib/dal";
import Link from "next/link";
// import CommentSection from "@/app/components/CommentSection/page.jsx";
import { notFound } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
export default async function ActivityDetailPage({ params }) {


    const { id } = await params;
    const activity = await getActivityById(id);
    console.log(activity);
 
    if (!activity) return notFound();
    
    return (
        <main>
            <Link href="/activities"><IoIosArrowBack/></Link>
            <article>
                <figure className="activity__image-figure">
                <img src={activity.asset.url} alt={activity.name} />
                </figure>
                <h1>
                    {activity.name}
                </h1>
                <p>{activity.minAge}+ år</p>
                <div dangerouslySetInnerHTML={{ __html: activity.description }}></div>

                {/* <CommentSection comments={activity.data.comments} /> */}
            </article>
        </main>
    )
}