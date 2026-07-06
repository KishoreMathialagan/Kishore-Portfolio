import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { coreSkills, toolCategories } from '../data';
import { 
  Palette, 
  Sparkles, 
  BarChart3, 
  Database, 
  Code2, 
  MessageSquareText, 
  Layers, 
  Film, 
  Compass, 
  Globe, 
  Image,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Layout,
  Clock,
  ChevronRight
} from 'lucide-react';
import { CoreSkill } from '../types';

// Helper to resolve Lucide Icon dynamically
function getToolIcon(iconName: string) {
  switch (iconName) {
    case 'Palette': return <Palette className="w-5 h-5 text-amber-500" />;
    case 'Image': return <Image className="w-5 h-5 text-amber-500" />;
    case 'Layers': return <Layers className="w-5 h-5 text-amber-500" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />;
    case 'MessageSquareText': return <MessageSquareText className="w-5 h-5 text-amber-500" />;
    case 'Compass': return <Compass className="w-5 h-5 text-amber-500" />;
    case 'Film': return <Film className="w-5 h-5 text-amber-500" />;
    case 'Globe': return <Globe className="w-5 h-5 text-amber-500" />;
    case 'BarChart3': return <BarChart3 className="w-5 h-5 text-amber-500" />;
    case 'Database': return <Database className="w-5 h-5 text-amber-500" />;
    case 'Code2': return <Code2 className="w-5 h-5 text-amber-500" />;
    default: return <Sparkles className="w-5 h-5 text-amber-500" />;
  }
}

export default function SkillsTab() {
  const [selectedSkill, setSelectedSkill] = useState<CoreSkill | null>(coreSkills[0]);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      id="skills-tab-root"
    >
      {/* Left Column: Interactive Tools & Technologies Grid */}
      <div className="lg:col-span-6 space-y-6" id="tools-and-tech-panel">
        <div className="bg-brand-card border border-stone-800/60 p-6 md:p-8 rounded-3xl" id="tools-card-container">
          <div className="mb-6" id="tools-header-block">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-amber-500" /> Digital Stack & Ecosystem
            </h3>
            <p className="text-xs text-stone-400 font-sans">
              Curated suite of design suites, AI systems, and technical stacks utilized in my workflow. Hover to inspect competence levels.
            </p>
          </div>

          <div className="space-y-6" id="tool-categories-list">
            {toolCategories.map((cat, idx) => (
              <div key={idx} className="border-t border-stone-800/60 pt-4 first:border-0 first:pt-0" id={`tool-cat-${idx}`}>
                <h4 className="text-xs font-mono text-stone-500 mb-3 tracking-wider uppercase">
                  {cat.category}
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id={`tool-cat-grid-${idx}`}>
                  {cat.tools.map((tool) => (
                    <div
                      key={tool.name}
                      onMouseEnter={() => setHoveredTool(tool.name)}
                      onMouseLeave={() => setHoveredTool(null)}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-stone-900/40 hover:bg-stone-900/90 border border-stone-800/30 transition-all duration-300 relative group cursor-default"
                      id={`tool-item-${tool.name.replace(/\s+/g, '')}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-stone-800/60 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                          {getToolIcon(tool.iconName)}
                        </div>
                        <span className="text-sm text-stone-200 font-sans font-medium">{tool.name}</span>
                      </div>

                      {/* Tool Level Status Badge */}
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        tool.level === 'Advanced' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                        tool.level === 'Intermediate' ? 'bg-stone-800 text-stone-400 border border-stone-700/50' :
                        'bg-stone-900/80 text-stone-500 border border-stone-800/80'
                      }`}>
                        {tool.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Core Strategic Skills & Detailed Playbook */}
      <div className="lg:col-span-6 space-y-6" id="core-skills-playbook-panel">
        <div className="bg-brand-card border border-stone-800/60 p-6 md:p-8 rounded-3xl" id="skills-card-container">
          <div className="mb-6" id="skills-header-block">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-amber-500" /> Core Strategic Capabilities
            </h3>
            <p className="text-xs text-stone-400 font-sans">
              Click on a capability card to view my tactical execution approach and methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 max-h-[360px] overflow-y-auto pr-1" id="skills-click-list">
            {coreSkills.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-amber-500/10 border-amber-500/50 text-white' 
                      : 'bg-stone-900/40 border-stone-800/40 hover:bg-stone-900 text-stone-400 hover:text-stone-200'
                  }`}
                  id={`skill-btn-${skill.name.replace(/\s+/g, '')}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isSelected ? 'bg-amber-500 animate-pulse' : 'bg-stone-700 group-hover:bg-amber-400'
                    }`} />
                    <span className="text-sm font-sans font-medium">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono opacity-60 uppercase">{skill.category}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-amber-500' : 'opacity-40 group-hover:translate-x-0.5'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-dive detailed playbook content of selected skill */}
          <AnimatePresence mode="wait">
            {selectedSkill && (
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="mt-6 p-5 rounded-2xl bg-stone-950/80 border border-stone-800/80 relative"
                id="selected-skill-playbook"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {selectedSkill.category} Playbook
                  </span>
                  
                  {/* Visual Quality Indicator */}
                  <div className="flex gap-1" id="skill-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full ${
                          i < selectedSkill.proficiency ? 'bg-amber-500' : 'bg-stone-800'
                        }`} 
                      />
                    ))}
                  </div>
                </div>

                <h4 className="text-md font-display font-bold text-stone-100 mb-2">
                  {selectedSkill.name}
                </h4>
                
                <p className="text-xs text-stone-400 leading-relaxed">
                  {selectedSkill.description} For campaigns in our active client files (e.g. Scandy, Physio One), this competency ensures layout accuracy, narrative structure, and optimized user interaction models that convert impressions into organic foot traffic.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
