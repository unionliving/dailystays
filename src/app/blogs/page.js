import Link from "next/link";
import Image from "next/image";
import NavbarTwo from "@/components/Layout/Navbar";
import FooterSection from "@/components/Layout/FooterSection";
import { blogs } from "./blogs-data";

export const metadata = {
  title: "Blogs | Daily By Union",
  description:
    "Read minimal, practical ideas on calm stays, thoughtful design, and easy routines.",
};

const categoryList = ["All", "Design", "Lifestyle", "Work"];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarTwo />
      <main className="md:mx-12 mx-6  px-6 pb-16 pt-12 lg:pt-16">
        <section className=" text-center rounded-[16px] border border-neutral-200 bg-white p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Daily by Union
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-neutral-900 lg:text-5xl">
            Our Blogs
          </h1>
        </section>

        <section className="mt-12 grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group"
            >
              <article className="h-full rounded-[10px] border border-neutral-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg">
                <div className="relative w-full aspect-[7/5] rounded-[16px] border border-neutral-200">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="rounded-[16px] object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-neutral-500">
                  <span>{blog.category}</span>
                  <span className="text-neutral-300">/</span>
                  <span>{blog.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-neutral-900 group-hover:text-neutral-700">
                  {blog.title}
                </h2>
                <p className="mt-3 text-sm text-neutral-600">
                  {blog.excerpt} ... read more
                </p>
                
              </article>
            </Link>
          ))}
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
