import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getAllBlogs, getBlogBySlug } from "@/data/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Aspiration Blog",
    };
  }

  const description =
    blog.leadParagraph.length > 160
      ? `${blog.leadParagraph.slice(0, 157)}...`
      : blog.leadParagraph;

  return {
    title: `${blog.title} | Aspiration Blog`,
    description,
    openGraph: {
      title: `${blog.title} | Aspiration Blog`,
      description,
      type: "article",
      images: [
        {
          url: blog.heroImage,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="blog1">
      <div className="max-w-[1300px] mx-auto px-4 blog1_top">
        <div id="flexi_blog1">
          <Link className="blog1_link flex items-center gap-2" href="/blog">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Blogs
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 my-4 leading-tight">
            &ldquo;{blog.title}&rdquo;
          </h1>
          <div className="blog1_img_contain">
            <Image
              className="blog1_img"
              src={blog.author.avatar}
              alt={blog.author.name}
              width={90}
              height={90}
            />
            <div>
              <h4 className="blog1_img_title">{blog.author.name}</h4>
              <h6 className="blog1_img_title1">{blog.author.role}</h6>
              <p className="text-sm text-gray-500 mt-1">
                <span className="font-medium text-gray-700">{blog.tag}</span> •{" "}
                <span>{blog.date}</span>
              </p>
            </div>
          </div>
        </div>

        <div id="flexi_blog1_1">
          <Image
            src={blog.heroImage}
            alt={blog.title}
            width={1200}
            height={600}
            priority
            className="w-full max-w-[1200px] h-auto object-cover rounded-xl shadow-md"
          />
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">{blog.leadParagraph}</p>

          {blog.sections.map((section, index) => (
            <section key={index} className="my-6">
              <h2 className="blog1_point1">{section.heading}</h2>
              <p className="blog1_text">{section.content}</p>
              {section.image && (
                <Image
                  className="blog1_img1"
                  src={section.image}
                  alt={section.heading}
                  width={800}
                  height={510}
                  style={{ height: "auto" }}
                />
              )}
            </section>
          ))}

          {blog.conclusion && (
            <p className="blog1_bottom">{blog.conclusion}</p>
          )}
        </div>
      </div>
    </article>
  );
}
