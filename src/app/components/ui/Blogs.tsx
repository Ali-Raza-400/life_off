// import React from 'react'

// const Blogs = () => {
//   return (
//     <div>Blogs</div>
//   )
// }

// export default Blogs

'use client'


import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    author: "Shannon Flynn",
    date: "October 22, 2025",
    description: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    image: "/assets/blog.svg"
  },
  {
    id: 2,
    title: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    author: "Shannon Flynn",
    date: "October 22, 2025",
    description: "The Walmart Deals Event is a great excuse to stock up on all the gear and accessories needed to build an awesome game room",
    image: "/assets/blog.svg"
  },
  {
    id: 3,
    title: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    author: "Shannon Flynn",
    date: "October 22, 2025",
    description: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    image: "/assets/blog.svg"
  },
  {
    id: 4,
    title: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    author: "Shannon Flynn",
    date: "October 22, 2025",
    description: "The Walmart Deals Event is a great excuse to stock up on all the gear and accessories needed to build an awesome game room",
    image: "/assets/blog.svg"
  },
  {
    id: 5,
    title: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    author: "Shannon Flynn",
    date: "October 22, 2025",
    description: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    image: "/assets/blog.svg"
  },
  {
    id: 6,
    title: "Get Ready for Cooler Weather With the Best Winter Home Goods From Walmart",
    author: "Shannon Flynn",
    date: "October 22, 2025",
    description: "The Walmart Deals Event is a great excuse to stock up on all the gear and accessories needed to build an awesome game room",
    image: "/assets/blog.svg"
  }
];

function Blogs() {
  return (
    <div className="max-w-[1440px] mx-auto  p-4 md:p-8">
      <div className="h-full mx-auto">
        <h1 className="text-[35px] font-bold mb-8" style={{ fontSize: "clamp(24px, 1vw, 35px)" }}>Blogs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="flex bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="w-1/3 bg-purple-100 relative">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="w-2/3 p-6">
                <h2 className="text-[18.18px] font-semibold mb-2 line-clamp-2" style={{ fontSize: "clamp(14px, 1vw, 18.18px)" }}>
                  {post.title}
                </h2>
                
                <div className="flex items-center gap-2 text-[12.73px] text-gray-600 mb-3" style={{ fontSize: "clamp(10px, 1vw, 12px)" }}>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                
                <p className="text-gray-600 line-clamp-2 text-[15.66px]" style={{ fontSize: "clamp(12px, 1vw, 15.66px)" }}>
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;