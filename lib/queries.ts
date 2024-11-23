import {defineQuery} from "groq";

export const STARTUPS_QUERY =
    defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    slug,
     author -> {
    _id, name, image, bio
    },
    views,
    description,
    category,
    image
}`)