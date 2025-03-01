import { FaGraduationCap, FaBriefcase, FaFileAlt, FaClipboardCheck } from 'react-icons/fa';
import React from 'react';

export const categories = [
  {
    title: "Latest Results",
    icon: React.createElement(FaGraduationCap, { className: "text-3xl" }),
    items: [
      {
        name: "UPSC Civil Services Final Result 2023",
        date: "Declared",
        examDate: "4 June 2023",
        lastDate: "15 May 2023",
        posts: "5000+ Vacancies",
        link: "https://www.upsc.gov.in/results/upsc-civil-services-2023-result"
      },
      {
        name: "SSC CGL Tier II Results",
        date: "Declared", 
        examDate: "1 June 2023",
        lastDate: "12 May 2023",
        posts: "8000+ Posts",
        link: "/results/ssc-cgl-tier2"
      },
      {
        name: "IBPS PO Final Results",
        date: "Declared",
        examDate: "28 May 2023", 
        lastDate: "10 May 2023",
        posts: "4000+ Openings",
        link: "/results/ibps-po-final"
      }
    ]
  },
  {
    title: "Upcoming Results", 
    icon: React.createElement(FaBriefcase, { className: "text-3xl" }),
    items: [
      {
        name: "RRB NTPC Final Results",
        date: "Coming Soon",
        examDate: "15 July 2023",
        lastDate: "Expected 30 June 2023", 
        posts: "35000+ Vacancies",
        link: "/results/rrb-ntpc-final"
      },
      {
        name: "NEET UG Results 2023",
        date: "Coming Soon",
        examDate: "5 July 2023",
        lastDate: "Expected 20 June 2023",
        posts: "Medical Admissions",
        link: "/results/neet-ug-2023"
      },
      {
        name: "JEE Main Session 2 Results",
        date: "Coming Soon",
        examDate: "30 June 2023",
        lastDate: "Expected 15 June 2023",
        posts: "Engineering Seats",
        link: "/results/jee-main-2"
      }
    ]
  },
  {
    title: "Previous Results",
    icon: React.createElement(FaFileAlt, { className: "text-3xl" }),
    items: [
      {
        name: "SSC MTS Final Results",
        date: "Declared",
        examDate: "15 April 2023",
        lastDate: "1 May 2023",
        posts: "7500+ Posts",
        link: "/results/ssc-mts-final"
      },
      {
        name: "GATE 2023 Results",
        date: "Declared",
        examDate: "10 April 2023",
        lastDate: "25 April 2023",
        posts: "MTech Admissions",
        link: "/results/gate-2023"
      },
      {
        name: "CTET January Results",
        date: "Declared",
        examDate: "5 April 2023",
        lastDate: "20 April 2023",
        posts: "Teaching Eligibility",
        link: "/results/ctet-jan"
      }
    ]
  },
  {
    title: "Re-evaluation Results",
    icon: React.createElement(FaClipboardCheck, { className: "text-3xl" }),
    items: [
      {
        name: "UPSC CSE Mains Re-evaluation",
        date: "Coming Soon",
        examDate: "Original: 1 April 2023",
        lastDate: "5 May 2023",
        posts: "Re-evaluation Open",
        link: "/results/upsc-cse-reeval"
      },
      {
        name: "SSC CHSL Re-evaluation",
        date: "Coming Soon",
        examDate: "Original: 25 March 2023",
        lastDate: "2 May 2023",
        posts: "Re-check Available",
        link: "/results/ssc-chsl-reeval"
      },
      {
        name: "IBPS Clerk Re-evaluation",
        date: "Coming Soon",
        examDate: "Original: 20 March 2023",
        lastDate: "28 April 2023",
        posts: "Score Verification",
        link: "/results/ibps-clerk-reeval"
      }
    ]
  }
];
