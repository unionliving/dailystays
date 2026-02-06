import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { notFound } from "next/navigation";
import NavbarTwo from "@/components/Layout/Navbar";
import FooterSection from "@/components/Layout/FooterSection";
import { blogs, getBlogBySlug } from "../blogs-data";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) {
    return {
      title: "Blog | Daily By Union",
    };
  }

  return {
    title: blog.metaTitle || `${blog.title} | Daily By Union`,
    description: blog.metaDescription || blog.excerpt,
  };
}

export default function BlogDetailPage({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const moreReads = blogs.filter((item) => item.slug !== blog.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <NavbarTwo />
      <main className="md:mx-12 mx-6  px-6 pb-16 pt-12 lg:pt-16">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-700"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to blogs
        </Link>

        <article className="mt-6 rounded-[16px] border border-neutral-200 bg-white p-6 lg:p-10">
          <div className="relative w-full aspect-[7/5] rounded-[16px] border border-neutral-200">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="rounded-[16px] object-cover"
              sizes="(min-width: 1024px) 720px, (min-width: 768px) 85vw, 95vw"
            />
          </div>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              {blog.category}
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-neutral-900 lg:text-4xl">
              {blog.introTitle || blog.title}
            </h1>
            <p className="mt-4 text-base text-neutral-600">
              {blog.introText || blog.description}
            </p>
            
          </div>

          <div className="mt-10 space-y-10">
            {blog.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-neutral-900">
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-relaxed text-neutral-600"
                  >
                    {paragraph}
                  </p>
                ))}
                  {section.bullets ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-neutral-600">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.afterBullets ? (
                    <p className="mt-4 text-base leading-relaxed text-neutral-600">
                      {section.afterBullets}
                    </p>
                  ) : null}
              </section>
            ))}
          </div>

          
        </article>

      </main>
      <FooterSection />
    </div>
  );
}
