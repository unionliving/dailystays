import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase.config";
import { getBlogPosts } from "./firebasefunctions";

const fetchBlogs = async () =>{
  const data = []
  
  
}


export default async function sitemap() {
  
  
  return [
    {
      url: 'https://daily.unionliving.in',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://daily.unionliving.in/mumbai/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://daily.unionliving.in/pune/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://daily.unionliving.in/about/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://daily.unionliving.in/contact/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://daily.unionliving.in/southside/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://daily.unionliving.in/varsity/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://daily.unionliving.in/hamlet/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}