import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { workExperience, projects } from '../data';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  TrendingUp, 
  Target, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Award
} from 'lucide-react';
import { Project } from '../types';

export default function ExperienceTab() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0]);
  const [expandedWork, setExpandedWork] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      id="experience-tab-root"
    >
      {/* Left Column: Work Experience Timeline */}
      <div className="lg:col-span-5 space-y-6" id="work-experience-column">
        <div className="bg-brand-card border border-stone-800/60 p-6 md:p-8 rounded-3xl relative overflow-hidden" id="work-history-card">
          <div className="flex items-center justify-between mb-6" id="work-history-header">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-amber-500" /> Career Milestones
            </h3>
            
            <button 
              onClick={() => setExpandedWork(!expandedWork)}
              className="text-stone-500 hover:text-white p-1 rounded-lg hover:bg-stone-800/50 transition-colors"
              id="toggle-work-btn"
            >
              {expandedWork ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expandedWork && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-6"
                id="work-history-timeline"
              >
                {workExperience.map((work, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-stone-800/80 last:pb-0 pb-2" id={`work-item-${idx}`}>
                    {/* Glowing indicator timeline dot */}
                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-amber-500 border-4 border-brand-card shadow-[0_0_8px_rgba(245,158,11,0.6)]" />

                    <div className="mb-2" id={`work-header-${idx}`}>
                      <span className="text-[10px] font-mono text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">
                        {work.period}
                      </span>
                      <h4 className="text-md font-display font-bold text-white">
                        {work.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-400 mt-1" id={`work-metadata-${idx}`}>
                        <span className="font-medium text-stone-200">{work.company}</span>
                        <span className="text-stone-600">•</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {work.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-stone-400 leading-relaxed font-sans" id={`work-bullets-${idx}`}>
                      {work.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex gap-2">
                          <span className="text-amber-500 mt-1 select-none">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Work Summary Indicator Footer */}
          <div className="mt-8 pt-4 border-t border-stone-800/60 flex items-center gap-3 text-stone-500 font-mono text-[10px]" id="work-summary-footer">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>FOCUSING ON ORGANIC METRIC OPTIMIZATION</span>
          </div>
        </div>
      </div>

      {/* Right Column: Case Studies & Creative Campaigns */}
      <div className="lg:col-span-7 space-y-6" id="projects-showcase-column">
        <div className="bg-brand-card border border-stone-800/60 p-6 md:p-8 rounded-3xl" id="projects-showcase-card">
          <div className="mb-6" id="projects-header-block">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-amber-500" /> Campaign Showcase
            </h3>
            <p className="text-xs text-stone-400 font-sans">
              Select a project from the menu to see target challenges, client briefs, and outcome summaries.
            </p>
          </div>

          {/* Horizontal project select menu */}
          <div className="flex flex-wrap gap-2 mb-6" id="project-tabs-menu">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  selectedProject?.id === proj.id 
                    ? 'bg-amber-500 text-black font-semibold shadow-md' 
                    : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border border-stone-800/50 hover:bg-stone-900'
                }`}
                id={`proj-tab-${proj.id}`}
              >
                {proj.client.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Project Details Panel */}
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
                id="active-project-details"
              >
                {/* Simulated Grid Mockup Background / Category badge */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-stone-800/40 bg-stone-950/80 group flex items-center justify-center p-4 text-center" id="project-mock-img">
                  {/* Backdrop blur with warm color gradient */}
                  <div className="absolute inset-0 bg-radial-gradient from-amber-500/20 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.7),rgba(18,18,18,0.95))]" />
                  
                  {/* Mock Poster Artwork Styling */}
                  <div className="z-10 border border-stone-800 bg-stone-900/80 p-6 rounded-xl max-w-sm shadow-xl" id="mock-artwork">
                    <span className="text-[9px] font-mono text-amber-500 tracking-wider block uppercase mb-1">CAMPAIGN PREVIEW</span>
                    <h4 className="text-lg font-display font-bold text-white tracking-tight leading-none mb-2">
                      {selectedProject.title}
                    </h4>
                    <p className="text-[10px] text-stone-400 leading-normal max-w-xs mx-auto">
                      {selectedProject.description.substring(0, 80)}...
                    </p>
                    <div className="flex gap-1.5 justify-center mt-3 flex-wrap">
                      {selectedProject.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[9px] font-mono bg-stone-950 px-2 py-0.5 rounded text-amber-500/80 border border-amber-500/10">#{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Aesthetic Label */}
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono text-stone-600 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500/50" /> COMPLETED CREATIVE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="project-info-grid">
                  <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800/60" id="project-brief">
                    <h4 className="text-xs font-mono text-stone-500 mb-2 flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-amber-500" /> CLIENT & BRIEF
                    </h4>
                    <p className="text-xs text-stone-200 font-sans leading-relaxed">
                      For <strong className="text-white">{selectedProject.client}</strong>: {selectedProject.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10" id="project-outcome">
                    <h4 className="text-xs font-mono text-amber-500 mb-2 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-amber-500" /> RECORDED OUTCOME
                    </h4>
                    <p className="text-xs text-stone-200 font-sans leading-relaxed">
                      {selectedProject.outcome}
                    </p>
                  </div>
                </div>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-1.5 pt-2" id="project-tags">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-stone-950 border border-stone-800 text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
