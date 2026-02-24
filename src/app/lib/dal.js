"use server"
import { cookies } from "next/headers"
const cookieStore = await cookies()
const authToken = cookieStore.get("authToken")

export async function getAllActivities(){
    const response = await fetch(`http://localhost:4000/api/v1/activities/`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
    

}
export async function getActivityById(id) {
    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()

}

export async function getTestimonials() {
    const response = await fetch(`http://localhost:4000/api/v1/testimonials/`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}

export async function getUsersById(userId) {
    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken.value}`
            }
        }
    )
    console.log(response);
    
    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}

