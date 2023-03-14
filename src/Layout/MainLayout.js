import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="flex ">
      <div>
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <a href="#" className="text-[#8b5cf6] font-semibold text-2xl">
            Dashboard
          </a>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="flex-1 -mx-3 space-y-3 ">
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#">
                <span className="mx-2 text-sm font-medium">Analytical</span>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#">
                <span className="mx-2 text-sm font-medium">Ecommerce</span>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#">
                <span className="mx-2 text-sm font-medium">Notes</span>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#">
                <span className="mx-2 text-sm font-medium">Calendar</span>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#">
                <span className="mx-2 text-sm font-medium">Extras</span>
              </a>
            </nav>
          </div>
        </aside>
      </div>
      <div>{children}</div>
    </div>
  );
}
