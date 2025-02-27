import { FaGraduationCap, FaBook, FaUniversity } from 'react-icons/fa';
import React from 'react';

export const noteCategories = [
    {
      title: "Competitive Exams",
      icon: React.createElement(FaGraduationCap, { className: "text-3xl" }),
      color: "from-blue-500 to-blue-700",
      notes: [
        {
          name: "UPSC Complete Study Material",
          description: "Comprehensive notes covering all UPSC subjects",
          size: "25 MB",
          format: "PDF", 
          downloadUrl: "/assets/pdfs/upsc-study-material.pdf"
        },
        {
          name: "SSC Study Notes Bundle",
          description: "Complete SSC preparation material", 
          size: "18 MB",
          format: "PDF",
          downloadUrl: "/assets/pdfs/ssc-study-notes.pdf"
        },
        {
          name: "Banking Exams Notes",
          description: "Study material for all banking examinations",
          size: "15 MB",
          format: "PDF",
          downloadUrl: "/assets/pdfs/banking-exam-notes.pdf"
        }
      ]
    },
    {
      title: "Board Exams",
      icon: React.createElement(FaBook, { className: "text-3xl" }),
      color: "from-purple-500 to-purple-700",
      notes: [
        {
          name: "Class 12 Science Notes",
          description: "Complete Physics, Chemistry & Mathematics",
          size: "30 MB",
          format: "PDF",
          downloadUrl: "/assets/pdfs/class12-science.pdf"
        },
        {
          name: "Class 12 Commerce Notes",
          description: "Accounts, Economics & Business Studies",
          size: "22 MB",
          format: "PDF",
          downloadUrl: "/assets/pdfs/class12-commerce.pdf"
        },
        {
          name: "Class 10 Complete Notes",
          description: "All subjects comprehensive material",
          size: "20 MB",
          format: "PDF",
          downloadUrl: "/assets/pdfs/class10-notes.pdf"
        }
      ]
    },
    {
      title: "University Exams",
      icon: React.createElement(FaUniversity, { className: "text-3xl" }),
      color: "from-green-500 to-green-700",
      notes: [
        {
          name: "Engineering Notes Bundle",
          description: "Notes for all engineering branches",
          size: "40 MB",
          format: "PDF",
          downloadUrl: "/assets/pdfs/engineering-notes.pdf"
        },
        {
          name: "Medical Studies Material",
          description: "Complete medical course notes",
          size: "35 MB",
          format: "PDF",
          downloadUrl: "/assets/pdfs/medical-notes.pdf"
        },
        {
          name: "Law Studies Notes",
          description: "Comprehensive law course material",
          size: "28 MB",
          format: "PDF",
          downloadUrl: "/assets/pdfs/law-notes.pdf"
        }
      ]
    }
  ];