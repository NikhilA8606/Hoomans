import React from "react"
import { Globe, ChevronRight } from "lucide-react"

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
          <span
            className="ml-3 text-xl font-black"
            style={{ fontFamily: "Cabinet Grotesk" }}
          >
            task.com
          </span>
        </a>
      </div>
    </header>
  )
}

export default Navbar
