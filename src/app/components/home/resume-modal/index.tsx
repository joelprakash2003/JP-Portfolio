"use client";
import { useState, useEffect } from "react";
import { FaTimes, FaDownload } from "react-icons/fa";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Joel Prakash</h3>
            <p className="text-gray-600">Cybersecurity Analyst & Frontend Developer</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf`}
              download="Joel-Prakash-Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md"
            >
              <FaDownload className="w-4 h-4" />
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="p-6 bg-gray-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* PDF Viewer */}
              <div className="h-[60vh] overflow-auto">
                <iframe
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                  width="100%"
                  height="100%"
                  className="border-0"
                  title="Joel Prakash Resume"
                />
              </div>
            </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-6 bg-white border-t">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
