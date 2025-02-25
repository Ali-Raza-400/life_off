// import type React from "react"
// import { BiSearch } from "react-icons/bi"

// const Navbar = () => {
//   return (
//     <nav className="bg-[#14303B] h-[65px] w-full">
//       <div className="h-full flex items-center justify-between px-4 lg:px-8">
//         {/* Left side - Logo */}
//         <div className="flex items-center bg-white">
         
//           <img src="/assets/logo.svg" alt="Logo" className="h-12" />
//         </div>

//         {/* Center navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <NavLink href="#">Stores</NavLink>
//           <NavLink href="#">Categories</NavLink>
//           <NavLink href="#">Best Deals</NavLink>
//           <NavLink href="#">Savings Tips</NavLink>
//         </div>

//         {/* Right side - Search */}
//         <div className="flex items-center">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search Store Here"
//               className="w-[280px] pl-4 pr-12 py-2 border-none focus:outline-none focus:ring-0"
//             />
//             <button className="absolute right-0 top-0 h-full px-4 bg-[#96C121] text-white">
//               <BiSearch className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// // NavLink component for consistent styling
// const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
//   return (
//     <a href={href} className="text-[16px] font-medium text-white hover:text-gray-200 transition-colors">
//       {children}
//     </a>
//   )
// }

// export default Navbar




import type React from "react"
import { BiSearch } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav className="h-[65px] w-full mt-4">
      <div className="h-full flex">
        {/* Left side with white background */}
        <div className="bg-white flex items-center px-8">
        <img src="/assets/logo.svg" alt="Logo" className="h-12" />
        </div>

        {/* Rest of navbar with dark background */}
        <div className="flex-1 bg-[#14303B]">
          <div className="h-full flex items-center justify-around px-8">
            {/* Center navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#">Stores</NavLink>
              <NavLink href="#">Categories</NavLink>
              <NavLink href="#">Best Deals</NavLink>
              <NavLink href="#">Savings Tips</NavLink>
            </div>

            {/* Right side - Search */}
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Store Here"
                  className="w-[280px] pl-4 pr-12 py-2 border-none focus:outline-none focus:ring-0"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-[#96C121] text-white">
                  <BiSearch className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// NavLink component for consistent styling
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a href={href} className="text-[16px] font-medium text-white hover:text-gray-200 transition-colors">
      {children}
    </a>
  )
}

export default Navbar

