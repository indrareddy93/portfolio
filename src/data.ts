/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import profilePic from "./assects/profile_pic.JPG";
import profilePicNav from "./assects/profile.jpeg";
import resumePdf from "./assects/indrasenareddy_pythonfullstackdev.pdf";

export const PERSONAL_INFO = {
  name: "Balapanuru Indra Sena Reddy",
  nameShort: "Indra Reddy",
  title: "Python Fullstack Developer",
  // summary: "Python Fullstack Developer and Team Lead with 2+ years of experience in building scalable, high-performance applications. Expert in Python (Django/FastAPI) and React. Proven track record of leading development teams and architecting end-to-end solutions, from enterprise RAG systems and bill delivery operations to government analytics platforms.",
  summary: "Python Full Stack Developer & Team Lead with 2+ years of experience building scalable, high-performance applications across enterprise and government domains. Proficient in Python (Django/FastAPI) and React, with hands-on expertise in end-to-end architecture, legacy codebase navigation, system design, and performance optimization. Proven track record of leading cross-functional teams, enforcing engineering best practices, and delivering production-grade platforms — adapting quickly to any stack, architecture, or technical challenge at scale.",
  email: "indrasenareddy279@gmail.com",
  phone: "6301320414",
  github: "https://github.com/indrareddy93",
  linkedin: "https://www.linkedin.com/in/indra-sena-reddy-balapanuru-294414258/",
  profileImage: profilePic,
  profileImageNav: profilePicNav,
  resumeUrl: resumePdf,
};

export const ATTRIBUTES = [
  "B2B & B2C Expertise",
  "Immediate Joiner (30 Days)",
  "Full-stack Independence",
  "Freelance Available",
  "Cross-Team Collaborator (QA/Prod)",
  "AI/ML & RAG Integration",
];

export const NAV_LINKS = [
  { name: "About", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Architecture", href: "#architecture" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    category: "Backend & AI/ML",
    items: [
      { name: "Python (FastAPI/Django)", proficiency: 95 },
      { name: "LangChain & RAG Systems", proficiency: 92 },
      { name: "pgvector & Vector DBs", proficiency: 90 },
      { name: "REST APIs & OAuth", proficiency: 92 },
      { name: "PostgreSQL & SQL", proficiency: 90 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (S3, EC2, Lambda)", proficiency: 90 },
      { name: "Docker & Containerization", proficiency: 92 },
      { name: "Redis & Celery (Async)", proficiency: 90 },
      { name: "CI/CD & GitHub Actions", proficiency: 88 },
    ],
  },
  {
    category: "Frontend & Collab",
    items: [
      { name: "React.js & Redux", proficiency: 94 },
      { name: "SSE & Real-time AI UI", proficiency: 90 },
      { name: "HTML5 & Tailwind CSS", proficiency: 95 },
      { name: "Engineering Collab (QA/Prod)", proficiency: 92 },
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "Team Lead & Python Fullstack Developer",
    company: "Sujanix Private Limited",
    period: "Dec 2024 - Present",
    location: "Bengaluru",
    description: "> Leading a development team of 4+ engineers while architecting scalable enterprise solutions using Python (Django/FastAPI) and React.\n> Improved system reliability by 35% through implementation of automated health checks and robust error logging mechanisms.\n> Optimized REST API performance, achieving a 50% increase in data exchange speed by implementing Redis caching and database query optimization.\n> Mentoring junior developers and conducting weekly code reviews to maintain high standards of code quality and security.",
  },
];

export const PROJECTS = [
  {
    title: "Bill Delivery Mgmt System",
    tech: "Python, FastAPI, PostgreSQL, JWT, Android",
    period: "2024 - 2025",
    description: "Enterprise scalability platform for utility billing. Solved heavy processing challenges by optimizing reporting queries via PostgreSQL materialized views, resulting in an 85% reduction in dashboard load times for 20M+ records.",
    link: "#",
  },
  {
    title: "DocuNexus AI SaaS",
    tech: "FastAPI, React, pgvector, LangChain, AWS, Docker",
    period: "April 2026 - Present",
    description: "Advanced RAG platform for unstructured document intelligence. Engineered strict multi-tenant data isolation at the vector level and implemented real-time AI streaming (SSE) for a seamless user experience.",
    link: "#",
  },
  {
    title: "True Read Analytics",
    tech: "Python, Django, React, PostgreSQL, AWS",
    period: "Apr 2025 - Present",
    description: "Role-based analytics platform for Government utility records supporting 500+ concurrent users. Integrated OCR extraction from electricity meters using Bluetooth optical probes and Python logic to process 50K+ daily readings. Optimized PostgreSQL performance for 20M+ records using materialized views, reducing query response times by 60%.",
    link: "https://www.trueread.net/",
  },
  {
    title: "Quality Check Management System (WBSEDCL)",
    tech: "Python, Flask, React, PostgreSQL, PWA",
    period: "2025 - Present",
    description: "Digital inspection Progressive Web App (PWA) to modernize electrical infrastructure workflows. Built offline-first functionality for remote areas with automated real-time syncing, alongside administrative dashboards for defect analysis, compliance monitoring, and field performance tracking.",
    link: "#",
  },
  {
    title: "Teamxel - Project Mgmt",
    tech: "Python, Flask, React, PostgreSQL, REST APIs",
    period: "Feb 2025 - Apr 2025",
    description: "Comprehensive platform featuring Agile workflows and employee performance tracking. Engineered secure Flask REST APIs with strict Role-Based Access Control (RBAC) and optimized backend performance, reducing API response times by ~35%.",
    link: "https://pmp.teamxel.com/",
  },
  {
    title: "Crux Unified Endpoint Mgmt",
    tech: "Python, Flask, React, PostgreSQL, AWS",
    period: "Dec 2024 - Feb 2025",
    description: "Enterprise solution for managing and enforcing policies across 1000+ Chrome OS devices. Automated GCP account creation and policy assignments via Google Admin SDK and REST APIs, reducing setup time from 15 minutes to under 2 minutes.",
    link: "https://dev.cruxuem.com/",
  },
];



// export const PROJECTS = [
//   {
//     title: "Bill Delivery Mgmt System",
//     tech: "Python, FastAPI, PostgreSQL, JWT, Android",
//     period: "2024 - 2025",
//     description: "Enterprise scalability platform for utility billing. Solved heavy processing challenges by optimizing reporting queries via PostgreSQL materialized views, resulting in an 85% reduction in dashboard load times for 20M+ records.",
//     link: "#",
//   },
//   {
//     title: "DocuNexus AI SaaS",
//     tech: "FastAPI, React, pgvector, LangChain, AWS, Docker",
//     period: "April 2026 - Present",
//     description: "Advanced RAG platform for unstructured document intelligence. Engineered strict multi-tenant data isolation at the vector level and implemented real-time AI streaming (SSE) for a seamless user experience.",
//     link: "#",
//   },
//   {
//     title: "True Read Analytics",
//     tech: "Python, Django, React, PostgreSQL, AWS",
//     period: "2025 - Present",
//     description: "Role-based analytics platform for Government utility records. Supports 500+ concurrent users managing 20M+ records using materialized views and optimized queries.",
//     link: "https://www.trueread.net/",
//   },
//   {
//     title: "Teamxel - Project Mgmt",
//     tech: "Python, Flask, React, PostgreSQL, REST APIs",
//     period: "2025",
//     description: "Comprehensive platform with Agile workflows and performance tracking. Engineered secure REST APIs with strict Role-Based Access Control (RBAC).",
//     link: "https://pmp.teamxel.com/",
//   },
//   {
//     title: "Crux Unified Endpoint Mgmt",
//     tech: "Python, Flask, React, PostgreSQL, AWS",
//     period: "2024",
//     description: "Enterprise solution for 1000+ Chrome OS devices. Automated GCP account creation via Google Admin SDK, reducing setup time by 85%.",
//     link: "https://dev.cruxuem.com/",
//   },
// ];
