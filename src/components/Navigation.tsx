"use client";

const Navigation = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Gautam Gadipudi</span>
          </div>
          <div className="flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              About
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
