/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, ArrowRight, Github, Linkedin, Mail, Cloud, Database, Code, ShieldCheck, MessageCircle, Send, MapPin } from "lucide-react";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import emailjs from '@emailjs/browser';
import { NAV_LINKS, SKILLS, EXPERIENCE, PROJECTS, PERSONAL_INFO, ATTRIBUTES } from "../data";

// --- Previous components remain unchanged ---
// I will only update the Contact component and icons import at the top

// --- Navbar ---
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.98)"]);
  const shadow = useTransform(scrollY, [0, 50], ["none", "0 10px 30px -10px rgba(0,0,0,0.1)"]);

  return (
    <motion.nav
      style={{ backgroundColor: navBg, boxShadow: shadow }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-brand-gray/50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
    >
      <div className="container-width flex items-center justify-between h-24 px-6 sm:px-12">
        <a href="#hero" className="flex items-center gap-4 group">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-red/30 group-hover:border-brand-red transition-all duration-500 shadow-lg">
             <img 
               src={PERSONAL_INFO.profileImageNav} 
               alt={PERSONAL_INFO.nameShort} 
               className="w-full h-full object-cover scale-[1.08] group-hover:scale-[1.16] transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black text-brand-black tracking-tighter uppercase leading-none">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-black uppercase text-brand-red tracking-[0.2em]">
              {PERSONAL_INFO.title}
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-widest text-brand-black/50 hover:text-brand-red transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden lg:block bg-brand-black text-white px-8 py-3 rounded-xl font-black uppercase text-xs hover:bg-brand-red transition-all shadow-xl hover:-translate-y-1">
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-black p-2 bg-brand-gray rounded-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:hidden fixed top-24 left-0 w-full bg-white border-b border-brand-gray px-6 py-12 flex flex-col gap-8 shadow-2xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter text-brand-black hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-red text-white py-6 rounded-2xl font-black uppercase text-center shadow-lg">
            Let's Talk
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

// --- Hero ---
export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-brand-white pt-32 overflow-hidden">
      <div className="container-width section-padding grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 py-2 px-4 bg-brand-red-xlight border border-brand-red/20 text-brand-red rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            Available for Professional Opportunities
          </motion.div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.85] uppercase mb-8 tracking-tighter text-brand-black">
            Indra <br />
            <span className="text-brand-red">Sena</span> <br />
            Reddy.
          </h1>
          <p className="text-lg text-brand-black/60 max-w-lg mb-10 font-medium leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <a href="#experience" className="bg-brand-black text-white px-8 py-4 rounded-xl font-black uppercase text-xs flex items-center gap-3 hover:bg-brand-red transition-all">
              Professional Journey <ArrowRight size={18} />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="bg-white text-brand-black border border-brand-gray/60 px-8 py-4 rounded-xl font-black uppercase text-xs flex items-center gap-3 hover:border-brand-red hover:text-brand-red transition-all"
            >
              Download Resume <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-6 text-brand-black/30">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                <Github size={28} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xl">
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-gray to-white rounded-[5rem] relative overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.35)] group p-1.5 transition-transform duration-700 hover:-translate-y-2">
               <div className="w-full h-full rounded-[4.6rem] overflow-hidden bg-white">
                 <img 
                   src={PERSONAL_INFO.profileImage} 
                   alt={PERSONAL_INFO.name} 
                   className="w-full h-full object-cover object-[50%_20%] scale-[1.06] transition-transform duration-1000 group-hover:scale-[1.12]"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
               <div className="absolute bottom-12 left-12 right-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-black text-3xl uppercase tracking-tighter leading-none mb-1 shadow-sm">Indra Sena Reddy</p>
                  <p className="text-brand-red font-black text-xs uppercase tracking-[0.25em] shadow-sm">{PERSONAL_INFO.title}</p>
               </div>
            </div>
            
            {/* Float Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-brand-gray hidden sm:flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center font-black">TL</div>
              <div>
                <p className="text-[10px] font-black uppercase text-brand-black/40 tracking-widest">Leadership</p>
                <p className="text-sm font-black text-brand-black">Team Lead</p>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-brand-gray hidden sm:flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-brand-green text-white rounded-2xl flex items-center justify-center font-black">RAG</div>
              <div>
                <p className="text-[10px] font-black uppercase text-brand-black/40 tracking-widest">Specialization</p>
                <p className="text-sm font-black text-brand-black">AI Architect</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Attribute Ticker ---
export function AttributeTicker() {
  return (
    <div className="bg-brand-black py-8 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[...ATTRIBUTES, ...ATTRIBUTES].map((attr, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <div className="w-2 h-2 bg-brand-red rounded-full" />
              <span className="text-white font-black uppercase text-sm tracking-[0.3em]">{attr}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// --- Skills ---
export function Skills() {
  return (
    <section id="skills" className="bg-brand-gray">
      <div className="container-width section-padding">
    <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-brand-red font-black uppercase tracking-widest text-[10px] mb-3">Professional Mastery</p>
            <h2 className="text-4xl font-black uppercase text-brand-black tracking-tighter">Skills</h2>
          </div>
          <p className="max-w-xs text-brand-black/50 text-xs font-medium">
            Core technical specialties for building modern web applications.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-brand-gray/50 hover:border-brand-red transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 ${idx % 2 === 0 ? 'bg-brand-red' : 'bg-brand-green'} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                  {idx === 0 ? <Code size={24} /> : idx === 1 ? <Cloud size={24} /> : <Database size={24} />}
                </div>
                <h3 className="font-black uppercase text-xs tracking-widest text-brand-black">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="px-4 py-2 bg-brand-gray text-brand-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-brand-black hover:text-white transition-colors border border-transparent hover:border-brand-red cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Project Modal ---
function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-brand-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white w-full max-w-4xl rounded-[4rem] overflow-hidden shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-4 bg-brand-gray rounded-full hover:bg-brand-red hover:text-white transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="bg-brand-gray p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-block py-2 px-4 bg-brand-green-light border border-brand-green/20 text-brand-green rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              Project Details
            </div>
            <h3 className="text-5xl font-black uppercase text-brand-black leading-none mb-6 tracking-tighter">
              {project.title}
            </h3>
            <p className="text-brand-red font-black uppercase text-[10px] tracking-[0.3em] mb-10">
              {project.tech}
            </p>
            <div className="flex gap-4">
               <ShieldCheck className="text-brand-red" />
               <Database className="text-brand-green" />
               <Cloud className="text-brand-black" />
            </div>
          </div>
          
          <div className="p-12 lg:p-16 flex flex-col">
            <h4 className="text-[10px] font-black uppercase text-brand-black/40 tracking-[0.4em] mb-6">Overview</h4>
            <p className="text-lg text-brand-black/70 font-medium leading-relaxed mb-12 italic">
              {project.description}
            </p>
            
            <div className="mt-auto space-y-4">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-brand-black text-white py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-brand-red transition-all flex items-center justify-center gap-3 group"
                >
                  View Case Study <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>
              )}
              <button 
                onClick={onClose}
                className="w-full text-brand-black/40 font-black uppercase text-[10px] tracking-widest hover:text-brand-red transition-colors"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Projects ---
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="bg-brand-white">
      <div className="container-width section-padding">
        <header className="mb-16">
          <p className="text-brand-red font-black uppercase tracking-widest text-[10px] mb-3">Portfolio</p>
          <h2 className="text-4xl font-black uppercase text-brand-black tracking-tighter">Recent Projects</h2>
        </header>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-brand-gray rounded-[2.5rem] p-10 lg:p-12 border-2 border-transparent group-hover:border-brand-red transition-all duration-700 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[9px] font-black uppercase text-brand-green tracking-[0.2em]">
                      {project.period}
                    </span>
                    <ArrowRight size={20} className="text-brand-black/20 group-hover:text-brand-red group-hover:translate-x-2 transition-all" />
                  </div>
                  <h3 className="text-3xl font-black uppercase text-brand-black tracking-tighter group-hover:text-brand-red transition-colors leading-[0.9]">
                    {project.title}
                  </h3>
                </div>
                <div className="mt-8 flex justify-between items-end">
                   <p className="text-[8px] font-black uppercase text-brand-black/40 tracking-[0.3em]">{project.tech.split(',').slice(0, 3).join(' •')}</p>
                   <span className="text-[9px] font-black uppercase border-b-2 border-brand-red">Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

// --- Architecture Section ---
export function Architecture() {
  return (
    <section id="architecture" className="bg-brand-white text-brand-black">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-brand-red font-black uppercase tracking-widest text-[10px] mb-3">Architecture</p>
            <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter text-brand-black leading-tight">
              System Design.
            </h2>
            <p className="text-base text-brand-black/60 mb-10 font-medium leading-relaxed">
              Leading teams and designing systems that balance immediate monolithic efficiency with sustainable microservices scalability.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 bg-brand-gray rounded-[2rem] border-b-4 border-brand-red shadow-sm group">
                <h4 className="text-brand-red font-black uppercase text-xs mb-3 tracking-widest">Leadership</h4>
                <p className="text-xs text-brand-black/50 font-medium leading-relaxed group-hover:text-brand-black transition-colors">Guiding development teams through SDLC with focus on quality and mentorship.</p>
              </div>
              <div className="p-8 bg-brand-gray rounded-[2rem] border-b-4 border-brand-green shadow-sm group">
                <h4 className="text-brand-green font-black uppercase text-xs mb-3 tracking-widest">Distributed Systems</h4>
                <p className="text-xs text-brand-black/50 font-medium leading-relaxed group-hover:text-brand-black transition-colors">Decoupled, containerized units scale independently on AWS Lambda and ECS.</p>
              </div>
            </div>
          </div>
          <div className="relative p-16 bg-brand-black rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.15),transparent)]" />
             <div className="flex justify-between items-center mb-12 relative z-10">
               <h3 className="text-3xl font-black uppercase tracking-tighter text-white">CI/CD & DevOps</h3>
               <div className="w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center">
                 <ShieldCheck size={28} />
               </div>
             </div>
             <ul className="space-y-8 relative z-10">
               {[
                 "Multi-Tenant RAG Systems", 
                 "Async Ingestion Pipelines", 
                 "Materialized View Optimization", 
                 "Infrastructure as Code (IaC)", 
                 "Real-time AI Streaming (SSE)"
               ].map((item) => (
                 <li key={item} className="flex items-center gap-6 group">
                   <div className="w-3 h-3 bg-brand-green rounded-full shadow-[0_0_15px_#16A34A] group-hover:scale-150 transition-transform" />
                   <span className="text-white/80 font-black uppercase text-xs tracking-[0.2em] group-hover:text-white transition-colors">{item}</span>
                 </li>
               ))}
             </ul>
             <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">AWS Certified Solution Architect</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Experience ---
export function Experience() {
  return (
    <section id="experience" className="bg-brand-black text-white">
      <div className="container-width section-padding">
        <header className="mb-20 text-center md:text-left">
          <p className="text-brand-red font-black uppercase tracking-widest text-[10px] mb-3">Experience</p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Work Career.</h2>
        </header>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="grid gap-20">
            {EXPERIENCE.map((job, idx) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex flex-col md:items-start items-center">
                   <div className="w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-6">
                      <Code size={24} />
                   </div>
                   <p className="text-brand-red font-black uppercase text-xs tracking-widest mb-2">{job.period}</p>
                   <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white mb-2">{job.title}</h3>
                   <p className="text-white/40 font-black uppercase text-[10px] tracking-widest mb-6">{job.company} • {job.location}</p>
                </div>
                
                <div className="md:w-px h-full bg-white/20 self-stretch hidden md:block" />
                
                <div className="md:w-1/2">
                   <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-brand-red transition-all duration-500">
                      <div className="space-y-4">
                        {job.description.split('\n').map((point, i) => (
                          <div key={i} className="flex gap-4 group/point">
                            <span className="text-brand-red font-black group-hover/point:translate-x-1 transition-transform">{'>'}</span>
                            <p className="text-white/70 leading-relaxed font-medium text-sm">
                              {point.replace(/^>\s*/, '').trim()}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 flex flex-wrap gap-2">
                         {["Python", "React", "PostgreSQL", "AWS"].map(tag => (
                           <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/10">{tag}</span>
                         ))}
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Contact Section ---
const SOCIALS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 6301320414',
    href: 'https://wa.me/916301320414',
    bg: 'bg-green-500/10 border-green-500/20 hover:border-green-400/40 hover:bg-green-500/15',
    text: 'text-green-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/Indrasenareddy',
    href: 'https://www.linkedin.com/in/indra-sena-reddy-balapanuru-294414258/',
    bg: 'bg-brand-red/10 border-brand-red/20 hover:border-brand-red/40 hover:bg-brand-red/15',
    text: 'text-brand-red',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/indrareddy93',
    href: 'https://github.com/indrareddy93',
    bg: 'bg-brand-black/5 border-brand-black/10 hover:border-brand-black/20 hover:bg-brand-black/10',
    text: 'text-brand-black',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'indrasenareddy279@gmail.com',
    href: 'mailto:indrasenareddy279@gmail.com',
    bg: 'bg-brand-green/10 border-brand-green/20 hover:border-brand-green/40 hover:bg-brand-green/15',
    text: 'text-brand-green',
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_u9re0dr',
        'template_6pso8ur',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'KjUJ3XFW5HpNGM1OA'
      );

      setSent(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error('Email error:', error);
      alert('Failed to send message');
    }
  };

  return (
    <section id="contact" className="bg-brand-white py-20 relative overflow-hidden">
      <div className="container-width">
        <header className="mb-16 text-center">
          <p className="text-brand-red font-black uppercase tracking-widest text-[10px] mb-3">Connection</p>
          <h2 className="text-4xl font-black uppercase text-brand-black tracking-tighter">Let's <span className="text-brand-red">Connect.</span></h2>
          <p className="text-brand-black/50 text-xs mt-4 max-w-md mx-auto font-medium">
            Open to full-time roles, freelance projects, and professional collaborations.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Social links */}
          <div className="space-y-6">
            <p className="text-[10px] font-black uppercase text-brand-black/40 tracking-[0.3em] mb-8">Direct Channels</p>

            <div className="grid gap-4">
              {SOCIALS.map(({ icon: Icon, label, value, href, bg, text }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-6 px-7 py-5 rounded-[2rem] border transition-all duration-500 group ${bg}`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className={text} />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${text} mb-1 opacity-60`}>{label}</p>
                    <p className="text-brand-black font-bold text-xs sm:text-sm truncate group-hover:text-brand-red transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 px-8 py-4 rounded-[2rem] bg-brand-gray border border-brand-gray/50 mt-8">
              <MapPin size={18} className="text-brand-black/30 flex-shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Based In Bengaluru • Working Globally</span>
            </div>
          </div>

          {/* Right: Contact form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-brand-gray rounded-[3.5rem] p-12 border border-brand-gray/50 shadow-sm"
          >
            <p className="text-[10px] font-black uppercase text-brand-black/40 tracking-[0.3em] mb-10 text-center lg:text-left">Send a Message</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase text-brand-black/40 tracking-widest block mb-3 ml-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white border border-brand-gray/50 rounded-2xl px-6 py-4 text-sm font-medium text-brand-black placeholder-brand-black/20 focus:outline-none focus:border-brand-red transition-all shadow-inner"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-brand-black/40 tracking-widest block mb-3 ml-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-white border border-brand-gray/50 rounded-2xl px-6 py-4 text-sm font-medium text-brand-black placeholder-brand-black/20 focus:outline-none focus:border-brand-red transition-all shadow-inner"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-brand-black/40 tracking-widest block mb-3 ml-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity..."
                  className="w-full bg-white border border-brand-gray/50 rounded-2xl px-6 py-4 text-sm font-medium text-brand-black placeholder-brand-black/20 focus:outline-none focus:border-brand-red transition-all resize-none shadow-inner"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 shadow-xl ${
                  sent 
                    ? 'bg-brand-green text-white scale-95' 
                    : 'bg-brand-black text-white hover:bg-brand-red active:scale-95'
                }`}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// --- Footer ---
export function Footer() {
  return (
    <footer className="bg-white border-t border-brand-gray">
      <div className="container-width section-padding pt-32 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-2xl">
            <h2 className="text-8xl lg:text-9xl font-black text-brand-black leading-[0.8] uppercase mb-12 tracking-tighter">
              Let's <br /> <span className="text-brand-red">Build.</span>
            </h2>
            <div className="flex flex-wrap gap-8 items-center">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg sm:text-xl font-black text-brand-black border-b-4 border-brand-red pb-1 hover:border-transparent transition-all">
                {PERSONAL_INFO.email}
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-10 py-4 rounded-2xl font-black uppercase text-xs shadow-2xl hover:bg-brand-black transition-all flex items-center gap-2"
              >
                Let's Connect <Linkedin size={16} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto mt-20 md:mt-0 p-10 bg-brand-gray rounded-[2.5rem] border border-brand-gray/50 flex flex-col items-center md:items-start">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-black/40 mb-4">Social Ecosystem</p>
             <div className="flex gap-6 text-brand-black/30">
               <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red hover:scale-110 transition-all">
                 <Linkedin size={24} />
               </a>
               <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red hover:scale-110 transition-all">
                 <Github size={24} />
               </a>
             </div>
             <p className="mt-8 text-brand-black/40 font-black uppercase text-[8px] tracking-[0.2em] whitespace-nowrap italic">Based In Anantapur • Working Globally</p>
          </div>
        </div>
        <div className="mt-40 pt-8 border-t border-brand-gray flex flex-col md:flex-row justify-between text-[10px] items-center text-brand-black/30 font-black uppercase tracking-[0.4em] gap-4 text-center">
          <p>© 2026 {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <span className="text-brand-red">SECURE BY DESIGN</span>
            <span className="text-brand-green">CLOUD OPTIMIZED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
