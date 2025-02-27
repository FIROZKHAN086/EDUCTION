import { FaGraduationCap, FaBriefcase, FaFileAlt, FaClipboardCheck } from 'react-icons/fa';
import React from 'react';

export const categories = [
  {
    title: "Latest Results",
    icon: React.createElement(FaGraduationCap, { className: "text-3xl" }),
    items: [
      {
        name: "UPSC Civil Services Final Result 2023",
        date: "15 May 2023",
        link: "/results/upsc-civil-services-2023"
      },
      {
        name: "SSC CGL Tier II Results", 
        date: "12 May 2023",
        link: "/results/ssc-cgl-tier2"
      },
      {
        name: "IBPS PO Final Results",
        date: "10 May 2023",
        link: "/results/ibps-po-final"
      }
    ]
  },
  {
    title: "Latest Jobs",
    icon: React.createElement(FaBriefcase, { className: "text-3xl" }),
    items: [
      {
        name: "Indian Army Recruitment 2023",
        lastDate: "30 May 2023",
        posts: "1500 Posts",
        link: "/jobs/indian-army-2023"
      },
      {
        name: "SBI Clerk Recruitment 2023",
        lastDate: "25 May 2023", 
        posts: "8000 Posts",
        link: "/jobs/sbi-clerk-2023"
      },
      {
        name: "Railway NTPC Recruitment",
        lastDate: "20 May 2023",
        posts: "3000 Posts",
        link: "/jobs/railway-ntpc"
      }
    ]
  },
  {
    title: "Admit Cards",
    icon: React.createElement(FaFileAlt, { className: "text-3xl" }),
    items: [
      {
        name: "NEET Admit Card 2023",
        examDate: "20 May 2023",
        link: "/admit-cards/neet-2023"
      },
      {
        name: "SSC CHSL Tier I Admit Card",
        examDate: "18 May 2023",
        link: "/admit-cards/ssc-chsl"
      },
      {
        name: "GATE 2023 Admit Card",
        examDate: "15 May 2023",
        link: "/admit-cards/gate-2023"
      }
    ]
  },
  {
    title: "Answer Keys",
    icon: React.createElement(FaClipboardCheck, { className: "text-3xl" }),
    items: [
      {
        name: "UPSC Prelims Answer Key 2023",
        date: "10 May 2023",
        link: "/answer-keys/upsc-prelims-2023"
      },
      {
        name: "SSC MTS Answer Key",
        date: "08 May 2023",
        link: "/answer-keys/ssc-mts"
      },
      {
        name: "CTET Answer Key 2023",
        date: "05 May 2023",
        link: "/answer-keys/ctet-2023"
      }
    ]
  }
];