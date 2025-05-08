import { FaCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { convertToSecureUrl } from "../utils/convertToSecureUrl";
export default function BlogBanner({ data }: any) {
  dayjs.extend(utc);
  const formattedDate = dayjs.utc(data?.createdAt).format("MMMM D, YYYY");
  // Fallback static data
  const defaultTitle = "11 Size-Inclusive Fashion Brands That Should Be on Your Radar";
  const defaultAuthor = "Maria Lalonde";
  const defaultDate = "February 28, 2025";
  const defaultImage = "https://via.placeholder.com/800x400";
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <article className="space-y-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {data?.title || defaultTitle}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>
            By {" "}
            <a href="#" className="font-medium text-black hover:underline">
              {data?.__author__?.name ?? defaultAuthor}
            </a>
          </span>
          <span className="text-gray-400">•</span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="h-4 w-4" />
            {formattedDate || defaultDate}
          </span>
        </div>

        {/* Featured Image */}
        <div className="relative w-full">
          <img
            src={convertToSecureUrl(data?.featuredImage )|| defaultImage}
            alt={data?.title || "Blog Image"}
            className="w-full max-h-[506px] object-cover rounded-md"
          />
        </div>

        {/* Article Content */}

      </article>
    </div>
  );
}
