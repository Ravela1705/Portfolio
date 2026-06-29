"use client";

import { motion } from "framer-motion";

const EduIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>);
const BookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const AwardIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>);

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Background & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* COLUMN 1: EDUCATION TIMELINE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-400/30 hover:bg-white/10 backdrop-blur-sm flex flex-col lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <EduIcon />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="relative pl-6 border-l border-white/10 ml-3 space-y-8">
              {/* B.Tech */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-400 ring-4 ring-black"></div>
                <h4 className="text-lg font-medium text-white">SRM University AP</h4>
                <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider">Class of 2026</p>
                <p className="text-gray-400 text-sm mt-1">B.Tech Computer Science • CGPA: 7.84/10</p>
              </div>

              {/* 12th */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-black"></div>
                <h4 className="text-lg font-medium text-white">SDM PU College</h4>
                <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider">12th Grade (Pre-University)</p>
                <p className="text-gray-400 text-sm mt-1">Karnataka State Board • Aggregate: 79.5%</p>
              </div>

              {/* 10th */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-purple-400 ring-4 ring-black"></div>
                <h4 className="text-lg font-medium text-white">Satyam International School</h4>
                <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider">10th Grade (Secondary School)</p>
                <p className="text-gray-400 text-sm mt-1">CBSE Board • Aggregate: 65.2%</p>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: PUBLICATIONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-400/30 hover:bg-white/10 backdrop-blur-sm flex flex-col lg:col-span-1 h-full justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4"><BookIcon /><h3 className="text-2xl font-semibold">Publications</h3></div>
              <div className="pl-10 border-l border-white/20 ml-3">
                <h4 className="text-lg font-medium text-white leading-snug">An Enhanced CNN BILSTM Autoencoder for Robust Anomaly Detection in PowerGrid's</h4>
                <p className="text-emerald-400 text-sm mb-2 mt-1">MAI-2025 Conference • Dec 2025</p>
                <p className="text-gray-400 text-sm leading-relaxed">Introduced a hybrid deep learning model (E-AE) to robustly identify anomalies by learning complex spatial-temporal patterns to prevent False Data Injection attacks.</p>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3: CERTIFICATIONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-400/30 hover:bg-white/10 backdrop-blur-sm flex flex-col lg:col-span-1 h-full justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4"><AwardIcon /><h3 className="text-2xl font-semibold">Certifications</h3></div>
              <div className="pl-10 border-l border-white/20 ml-3 space-y-6">
                <div>
                  <h4 className="text-md font-medium text-white">AWS Certified Cloud Practitioner</h4>
                  <p className="text-gray-400 text-sm">Amazon Web Services • Nov 2024</p>
                </div>
                <div>
                  <h4 className="text-md font-medium text-white">Ransomware Techniques</h4>
                  <p className="text-gray-400 text-sm">IT Masters • Oct 2025</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}