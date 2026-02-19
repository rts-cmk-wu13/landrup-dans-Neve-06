import { getAllActivities } from "../lib/dal";
import BlogCard from "@/app/components/BlogCard/page.jsx";

export default async function ActivitiesPage() {

    const activities = await getAllActivities()
    console.log(activities);
    

    if(activities.success === false){
        return (
            <main>
                <h1>Oops something went wrong</h1>
                <p>{activities.message}</p>
            </main>
        )
    }

    return (
        <main>
            <h1 className="mb-4">Aktiviteter</h1>

            {activities.map(activity => (
                <BlogCard activity={activity} key={activity.id} />
            ))}
        </main>

    )


}

