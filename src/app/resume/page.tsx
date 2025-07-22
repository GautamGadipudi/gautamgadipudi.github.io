"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

export default function Resume() {
  const [isClient, setIsClient] = useState(false);
  const resumePdfUrl = "/resume.pdf"; // Place your resume.pdf in the public folder

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('a');
      link.href = resumePdfUrl;
      link.download = 'Gautam_Gadipudi_Resume.pdf';
      link.click();
    }
  };

  return (
    <>
      <Navigation />
      <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Gautam Gadipudi - Software Engineer
            </p>
            
            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button 
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
              
              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in New Tab
              </a>
              
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium text-sm rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                ← Back to Portfolio
              </a>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="w-full" style={{height: '80vh'}}>
              {isClient ? (
                <iframe
                  src={resumePdfUrl}
                  className="w-full h-full border-0"
                  title="Gautam Gadipudi Resume"
                >
                  <p className="p-8 text-center text-gray-600 dark:text-gray-300">
                    Your browser does not support PDF viewing. 
                    <a 
                      href={resumePdfUrl} 
                      className="text-blue-600 hover:text-blue-700 underline ml-1"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Click here to download the PDF
                    </a>
                  </p>
                </iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading PDF viewer...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
