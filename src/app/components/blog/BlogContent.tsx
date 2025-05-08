import Script from "next/script"
import BlogBanner from "./BlogBanner"
import RelatedBlogs from "./RelatedBlogs"

interface BlogContentProps {
  slug: string
  initialData: any
}

export default function BlogContent({ slug, initialData }: BlogContentProps) {
  const blog = initialData
  const blogTitle = blog?.metaTitle || blog?.title || blog?.slug || "Blog | LiveOffCoupon"
  const blogDescription =
    blog?.metaDescription ||
    blog?.content ||
    "Learn how to save money on utilities with simple habits and tools. Cut down your bills without sacrificing comfort."

  return (
    <div>
      <Script id="schema-script" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blogTitle,
          image: blog?.bannerImage || "/images/store-logo.png",
          author: {
            "@type": "Organization",
            name: blog?.__author__?.name || "LiveOffCoupon",
          },
          publisher: {
            "@type": "Organization",
            name: blog?.__author__?.name || "LiveOffCoupon",
            logo: {
              "@type": "ImageObject",
              url: blog?.__author__?.imageUrl || "https://liveoffcoupon.com/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://liveoffcoupon.com/blog/${blog?.slug}`,
          },
          description: blogDescription,
          datePublished: blog?.createdAt || "2025-04-25",
        })}
      </Script>

      <div className="mt-[200px] md:mt-[100px]">
        <BlogBanner data={blog} />
      </div>
      <RelatedBlogs SingBlogdata={blog} />
    </div>
  )
}
