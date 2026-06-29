"use client";

import { motion } from "framer-motion";

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
);

const projects = [
  {
    title: "Lost and Found Mobile App",
    description: "A community-focused mobile application designed for university students to post, track, and locate missing items across campus with real-time updates and status tracking.",
    liveLink: "https://github.com/Ravela1705/Lost-and-Found", // Replace with your exact repository link if different
    tags: ["React Native", "Mobile Development", "Node.js", "Database Management"]
  },
  {
    title: "Blockchain Voting Application",
    description: "A secure, decentralized student election portal built with a full-stack Next.js and Node.js pipeline, leveraging Supabase and cryptographic verification.",
    liveLink: "https://github.com/Ravela1705/blockvote-frontend",
    tags: ["Next.js", "Node.js", "Supabase", "Blockchain Architecture", "PostgreSQL"]
  },
  {
    title: "Heart Attack Risk Prediction",
    description: "A machine learning and predictive analytics web application designed to analyze clinical cardiovascular risk factors and deliver early diagnostic health insights.",
    liveLink: "https://github.com/Ravela1705/Heart-Attack-Prediction",
    tags: ["Python", "Machine Learning", "Streamlit", "Data Analytics", "Predictive Modeling"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent text-white px-6 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:border-emerald-500/30 transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold tracking-tight text-white">{project.title}</h3>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <ExternalLinkIcon />
                  </a>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md">
                    {tag}
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