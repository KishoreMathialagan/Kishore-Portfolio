import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  mockNiches, 
  mockAudiences, 
  mockObjectives, 
  generateCampaign 
} from '../data';
import { 
  Sparkles, 
  ChevronRight, 
  Terminal, 
  Copy, 
  Check, 
  Volume2, 
  Share2, 
  Compass, 
  Eye, 
  MousePointerClick,
  Smartphone,
  Cpu,
  RefreshCw,
  Clock
} from 'lucide-react';
import { CampaignConcept } from '../types';

export default function CampaignLabTab() {
  // Selector States
  const [selectedNiche, setSelectedNiche] = useState(mockNiches[0].value);
  const [selectedAudience, setSelectedAudience] = useState(mockAudiences[2].label);
  const [selectedObjective, setSelectedObjective] = useState(mockObjectives[0].label);

  // Simulation States
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [simLogs, setSimLogs] = useState<string[]>([]);
  const [campaignResult, setCampaignResult] = useState<any | null>(null);

  // Copy Feedback States
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopy = (text: string, type: 'caption' | 'prompt') => {
    navigator.clipboard.writeText(text);
    if (type === 'caption') {
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2000);
    } else {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(0);
    setCampaignResult(null);
    
    const logs = [
      `[ANALYTICS] Fetching demographic traits for "${selectedAudience}"...`,
      `[STRATEGY] Grounding objective: "${selectedObjective}" inside "${selectedNiche}"...`,
      `[AI-ENGINE] Prompting Gemini AI API for hook formulations and direct-response matrices...`,
      `[CREATIVE] Constructing canvas visual directives and Dall-E/Canva layouts...`,
      `[COMPLETE] Assembly finalized. Campaign package successfully compiled!`
    ];

    setSimLogs([logs[0]]);

    // Step-by-step logs simulation
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      setSimStep(currentStep);
      
      if (currentStep < logs.length) {
        setSimLogs(prev => [...prev, logs[currentStep]]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          const result = generateCampaign(selectedNiche, selectedAudience, selectedObjective);
          setCampaignResult(result);
          setIsSimulating(false);
        }, 600);
      }
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 xl:grid-cols-12 gap-8"
      id="campaign-lab-root"
    >
      {/* Left Column: Interactive Campaign Controls */}
      <div className="xl:col-span-5 space-y-6" id="simulator-inputs-panel">
        <div className="bg-brand-card border border-stone-800/60 p-6 rounded-3xl" id="sandbox-controls-card">
          <div className="flex items-center gap-2 text-amber-500 font-mono text-xs tracking-wider mb-4" id="sandbox-header-badge">
            <Cpu className="w-4 h-4 animate-spin-slow" />
            <span>AI-MARKETING SANDBOX</span>
          </div>

          <h3 className="text-xl font-display font-bold text-white mb-1" id="sandbox-title">
            Interactive Campaign Lab
          </h3>
          <p className="text-xs text-stone-400 font-sans mb-6">
            Configure target profiles below and simulate Kishore's process of building high-conversion social assets.
          </p>

          <div className="space-y-5" id="parameter-selectors">
            {/* 1. SELECT BUSINESS NICHE */}
            <div id="select-niche-section">
              <label className="block text-xs font-mono text-stone-500 mb-2 uppercase tracking-wide">
                1. Select Target Niche
              </label>
              <div className="grid grid-cols-2 gap-2" id="niche-options-grid">
                {mockNiches.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setSelectedNiche(n.value)}
                    className={`p-3 text-left rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer ${
                      selectedNiche === n.value
                        ? 'bg-amber-500/10 border-amber-500/60 text-white'
                        : 'bg-stone-900/40 border-stone-800/40 hover:bg-stone-900 text-stone-400 hover:text-stone-200'
                    }`}
                    id={`niche-opt-${n.id}`}
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. SELECT TARGET AUDIENCE */}
            <div id="select-audience-section">
              <label className="block text-xs font-mono text-stone-500 mb-2 uppercase tracking-wide">
                2. Select Target Audience
              </label>
              <div className="grid grid-cols-2 gap-2" id="audience-options-grid">
                {mockAudiences.map((aud) => (
                  <button
                    key={aud.id}
                    onClick={() => setSelectedAudience(aud.label)}
                    className={`p-3 text-left rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer ${
                      selectedAudience === aud.label
                        ? 'bg-amber-500/10 border-amber-500/60 text-white'
                        : 'bg-stone-900/40 border-stone-800/40 hover:bg-stone-900 text-stone-400 hover:text-stone-200'
                    }`}
                    id={`aud-opt-${aud.id}`}
                  >
                    <span className="block font-semibold mb-0.5">{aud.label}</span>
                    <span className="text-[10px] text-stone-500 group-hover:text-stone-400 font-normal leading-tight line-clamp-1">{aud.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. SELECT CAMPAIGN OBJECTIVE */}
            <div id="select-objective-section">
              <label className="block text-xs font-mono text-stone-500 mb-2 uppercase tracking-wide">
                3. Choose Objective Model
              </label>
              <div className="space-y-2" id="objective-options-list">
                {mockObjectives.map((obj) => (
                  <button
                    key={obj.id}
                    onClick={() => setSelectedObjective(obj.label)}
                    className={`w-full p-3 text-left rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      selectedObjective === obj.label
                        ? 'bg-amber-500/10 border-amber-500/60 text-white'
                        : 'bg-stone-900/40 border-stone-800/40 hover:bg-stone-900 text-stone-400 hover:text-stone-200'
                    }`}
                    id={`obj-opt-${obj.id}`}
                  >
                    <div>
                      <span className="block font-semibold mb-0.5">{obj.label}</span>
                      <span className="text-[10px] text-stone-500 font-normal">{obj.desc}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedObjective === obj.label ? 'text-amber-500 translate-x-1' : 'text-stone-600'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SIMULATION ACTION TRIGGER */}
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className={`w-full mt-6 py-4 px-4 rounded-2xl font-display font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
              isSimulating 
                ? 'bg-stone-800 text-stone-500 border border-stone-700/50 cursor-not-allowed' 
                : 'bg-amber-500 text-black hover:bg-amber-400 hover:shadow-amber-500/10 hover:shadow-xl active:scale-[0.98]'
            }`}
            id="trigger-sim-btn"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Simulating AI Content Pipeline...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-black animate-pulse" />
                <span>Formulate Concept Blueprint</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Right Column: Dynamic Terminal Logs & Outputs */}
      <div className="xl:col-span-7 space-y-6" id="simulator-output-panel">
        <div className="bg-stone-950 border border-stone-800/80 p-6 rounded-3xl h-full flex flex-col min-h-[480px] relative overflow-hidden" id="simulation-output-wrapper">
          {/* Subtle grid lines background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Dynamic Console Window Headers */}
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-4 mb-4 z-10" id="console-header">
            <div className="flex items-center gap-2 font-mono text-xs" id="console-title-block">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
              <span className="text-stone-500 ml-2 font-semibold">CONSOLE // KISHORE_MARKETING_BOT v2.1</span>
            </div>
            
            <span className="text-[10px] font-mono text-stone-500 flex items-center gap-1">
              <Clock className="w-3 h-3" /> REALTIME STREAM
            </span>
          </div>

          {/* ACTIVE SIMULATION LOGS TERMINAL */}
          <AnimatePresence mode="wait">
            {isSimulating ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-mono text-xs text-stone-400 space-y-2 flex-grow"
                key="terminal-logs-view"
                id="terminal-logs-view"
              >
                <div className="flex items-center gap-2 text-amber-500 mb-4" id="log-running-alert">
                  <Terminal className="w-4 h-4 animate-pulse" />
                  <span>[SYSTEM] CALIBRATING STRATEGIC MARKETING MATRIX...</span>
                </div>
                
                {simLogs.map((log, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={index}
                    className={`leading-relaxed ${index === simStep ? 'text-amber-400/90' : 'text-stone-500'}`}
                    id={`log-line-${index}`}
                  >
                    {log}
                  </motion.div>
                ))}
              </motion.div>
            ) : campaignResult ? (
              /* DYNAMIC VISUAL CAMPAIGN PACKAGE DISPLAY */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-5 flex-grow z-10"
                key="campaign-concept-view"
                id="campaign-concept-view"
              >
                {/* Smartphone mock outline holding the generated Ad visual and hook */}
                <div className="bg-stone-900/60 border border-stone-800/60 p-5 rounded-2xl" id="mock-smartphone-frame">
                  <div className="flex items-center justify-between mb-3" id="mock-instagram-header">
                    <div className="flex items-center gap-2.5">
                      {/* Kishore small dynamic user avatar */}
                      <div className="w-7 h-7 rounded-full bg-amber-500 text-black font-display font-black text-[10px] flex items-center justify-center border border-amber-500/20">
                        KM
                      </div>
                      <div>
                        <span className="text-xs font-bold text-stone-200 block">kishore.marketing</span>
                        <span className="text-[9px] text-stone-500 block">Coimbatore, India</span>
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-mono text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/10">
                      LIVE CONCEPT PREVIEW
                    </span>
                  </div>

                  {/* High-conversion Visual Hook banner */}
                  <div className="aspect-[1.91/1] w-full rounded-xl bg-stone-950 flex flex-col justify-between p-4 border border-stone-800/80 relative overflow-hidden" id="hook-visual-stage">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
                    
                    <span className="text-[8px] font-mono text-stone-500 tracking-wider">REEL/POST VISUAL OVERLAY HOOK</span>
                    
                    <h4 className="text-sm font-display font-black text-amber-500 tracking-tight leading-tight uppercase my-auto max-w-sm">
                      {campaignResult.hook}
                    </h4>

                    <span className="text-[9px] font-mono text-stone-500 text-right block uppercase">
                      swipe for value card ›
                    </span>
                  </div>

                  {/* Copywriting captions compartment */}
                  <div className="mt-4 space-y-3" id="caption-compartment">
                    <div className="flex items-center justify-between" id="caption-header">
                      <span className="text-[10px] font-mono text-stone-500 uppercase">Caption Copywriting Template</span>
                      <button
                        onClick={() => handleCopy(`${campaignResult.hook}\n\n${campaignResult.copy}\n\n${campaignResult.hashtags.join(' ')}`, 'caption')}
                        className="text-[10px] font-mono text-stone-400 hover:text-white flex items-center gap-1 py-1 px-2 hover:bg-stone-800 rounded-lg transition-colors"
                        id="copy-caption-btn"
                      >
                        {copiedCaption ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Caption</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800/80 max-h-[140px] overflow-y-auto" id="caption-content">
                      <p className="text-[11px] font-mono text-stone-300 leading-relaxed whitespace-pre-line">
                        <strong className="text-amber-500 font-sans block mb-2">{campaignResult.hook}</strong>
                        {campaignResult.copy}
                        <span className="block mt-3 text-stone-500 font-sans text-[10px]">
                          {campaignResult.hashtags.join(' ')}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Creative Directives Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="concept-directives-grid">
                  <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-800/60" id="visual-directive-card">
                    <span className="text-[10px] font-mono text-stone-500 block mb-1 uppercase">Creative Art Direction</span>
                    <p className="text-xs text-stone-300 font-sans leading-relaxed">
                      {campaignResult.visualConcept}
                    </p>
                  </div>

                  <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-800/60 flex flex-col justify-between" id="ai-directive-card">
                    <div>
                      <div className="flex items-center justify-between mb-1" id="ai-prompt-header">
                        <span className="text-[10px] font-mono text-stone-500 uppercase">Midjourney Prompt Directive</span>
                        <button
                          onClick={() => handleCopy(campaignResult.posterDesignPrompt, 'prompt')}
                          className="text-stone-500 hover:text-white p-0.5 rounded transition-colors"
                          title="Copy prompt to clipboard"
                          id="copy-prompt-btn"
                        >
                          {copiedPrompt ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                      <p className="text-[11px] text-stone-400 font-mono italic leading-normal line-clamp-2">
                        "{campaignResult.posterDesignPrompt}"
                      </p>
                    </div>

                    {/* Workflow recommendations tags */}
                    <div className="pt-3 border-t border-stone-800/60 mt-3" id="workflow-stack">
                      <span className="text-[9px] font-mono text-stone-500 block mb-1">RECOMMENDED WORKFLOW STACK</span>
                      <div className="flex gap-1.5" id="workflow-tags-list">
                        {campaignResult.suggestedTools.map((tool: string) => (
                          <span key={tool} className="text-[9px] font-mono bg-stone-950 px-2 py-0.5 rounded border border-stone-800 text-stone-400">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* IDLE STATE: PROMPT USER TO TRY THE LAB */
              <div className="flex-grow flex flex-col items-center justify-center text-center p-8 z-10" id="sandbox-idle-view">
                <div className="p-4 bg-stone-900 rounded-full border border-stone-800 text-amber-500/80 mb-4 animate-bounce-slow" id="idle-icon-container">
                  <Terminal className="w-8 h-8" />
                </div>
                
                <h4 className="text-lg font-display font-semibold text-white mb-2">
                  Awaiting Configuration Parameters
                </h4>
                
                <p className="text-xs text-stone-400 max-w-sm mb-6 leading-relaxed">
                  Select target attributes on the left panel (e.g. niche, target audience, marketing goals) and trigger the concept engine to compile high-conversion assets.
                </p>

                <button
                  onClick={runSimulation}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-amber-500 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2"
                  id="start-demo-btn"
                >
                  <MousePointerClick className="w-4 h-4 text-amber-500" /> Quick-Start Simulation
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
