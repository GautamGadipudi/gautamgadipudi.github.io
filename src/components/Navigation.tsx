"use client";

import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold hover:text-blue-600 transition-colors">
              Gautam Gadipudi
            </a>
          </div>
          <div className="flex items-center space-x-8">
            {isResumePage ? (
              <>
                <a
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Portfolio
                </a>
                <a
                  href="/resume"
                  className="text-blue-600 dark:text-blue-400 px-3 py-2 text-sm font-medium border-b-2 border-blue-600"
                >
                  Resume
                </a>
              </>
            ) : (
              <>
                <a
                  href="#about"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
                <a
                  href="/resume"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Resume
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
