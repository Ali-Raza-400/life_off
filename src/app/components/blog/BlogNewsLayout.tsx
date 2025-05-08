'use client';

import { FaCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
import PATH from "../utils/path";
import { convertToSecureUrl } from "../utils/convertToSecureUrl";

type Props = {
  posts: any[];
  authorDetails: any;
};

export default function BlogLayoutClient({ posts, authorDetails }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Author Profile Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={convertToSecureUrl(authorDetails?.imageUrl) || "/placeholder.svg?height=100&width=100"}
            alt="Author profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-green-600 font-medium text-lg mb-1">
            {authorDetails?.name || "MARIA LALONDE"}
          </h2>
          <p className="text-gray-800 leading-relaxed">
            {authorDetails?.description ||
              "MARIA LALONDE A globe-trotting, Topo Chico-swilling and ukulele-pickin' writer, Maria Cristina Lalonde loves saving money as much as she hates Oxford commas."}
          </p>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="my-8">
        <h2 className="text-center text-[19.03px] font-semibold uppercase tracking-wider mb-8">
          Latest Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              onClick={() => window.open(PATH.SINGLE_BLOG.replace(":id", post?.slug || "no-slug"), "_blank")}
              className="cursor-pointer border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={convertToSecureUrl(post.featuredImage) || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 transition-colors">
                  {post.title}
                </h3>
                <div className="text-sm font-medium mb-2 text-[#7FA842]">
                  {post?.category?.categoryTitle || "General"}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaCalendarAlt className="mr-2" />
                  <span>Published {dayjs(post.createdAt).format("MMMM D, YYYY")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
