import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from './data';
import AboutTab from './components/AboutTab';
import { generateResumePDF } from './utils/pdfGenerator';
import SkillsTab from './components/SkillsTab';
import ExperienceTab from './components/ExperienceTab';
import CampaignLabTab from './components/CampaignLabTab';
import ContactForm from './components/ContactForm';
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Cpu, 
  FileText, 
  ArrowUpRight, 
  Download, 
  Check,
  Compass,
  MessageSquare,
  X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'experience' | 'sandbox' | 'contact'>('about');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  React.useEffect(() => {
    const handleOpenModal = () => {
      setIsContactModalOpen(true);
    };
    window.addEventListener('open-contact-modal', handleOpenModal);
    return () => {
      window.removeEventListener('open-contact-modal', handleOpenModal);
    };
  }, []);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    try {
      generateResumePDF();
    } catch (err) {
      console.error("Resume PDF download failed:", err);
    } finally {
      setTimeout(() => setIsDownloading(false), 1200);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-stone-100 font-sans selection:bg-amber-500 selection:text-black relative" id="app-root">
      {/* Visual Accent glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Frame */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12" id="main-content">
        
        {/* EDITORIAL RESUME STYLE HEADER */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-stone-800/80 pb-12" id="portfolio-header">
          {/* Kishore Name Callout */}
          <div className="lg:col-span-8 space-y-3" id="header-identity">
            <div className="flex items-center gap-2 text-amber-500 font-mono text-xs tracking-widest uppercase" id="header-top-badge">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>DIGITAL MARKETER & CREATIVE SPECIALIST</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-display font-black text-white leading-[0.85] tracking-tighter cursor-pointer" onClick={() => setActiveTab('about')} id="header-name">
              KISHORE<br />
              <span className="text-stone-300">MATHIALAGAN</span>
            </h1>
            
            <p className="text-stone-400 font-mono text-xs sm:text-sm tracking-wide pt-2" id="header-tagline">
              B.Tech in Artificial Intelligence & Data Science • {personalInfo.location}
            </p>
          </div>

          {/* Quick Contact & Action Terminal Card */}
          <div className="lg:col-span-4" id="header-actions">
            <div className="bg-[#1e1e1e] border border-stone-800 p-6 rounded-3xl space-y-4 shadow-xl relative overflow-hidden" id="header-meta-box">
              {/* Geometric ambient lines decoration */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-stone-800/80 pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full border border-stone-800/40 pointer-events-none" />

              <div className="space-y-2 text-xs font-mono text-stone-400 cursor-pointer" onClick={() => setIsContactModalOpen(true)} title="Click to send direct inquiry" id="header-quick-contacts">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-colors" id="header-email-row">
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-amber-400 transition-colors" id="header-phone-row">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>

              {/* Functional Interactive Actions Buttons */}
              <div className="flex gap-2 pt-2" id="header-action-buttons">
                <button
                  onClick={handleDownloadResume}
                  disabled={isDownloading}
                  className="flex-1 py-3 px-4 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white transition-all text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                  id="download-resume-btn"
                >
                  {isDownloading ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                      <span className="text-emerald-500">Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-amber-500" />
                      <span>Download Resume</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black transition-all text-xs font-mono font-bold flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-lg hover:shadow-amber-500/10 active:scale-95"
                  id="header-try-sandbox-btn"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-black" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* NAVIGATION MENUS */}
        <nav className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-stone-950 border border-stone-900 max-w-fit" id="main-navigation">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'about' 
                ? 'bg-[#1e1e1e] text-amber-500 border border-stone-800' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/40'
            }`}
            id="nav-tab-about"
          >
            01 // BIO & BIOGRAPHY
          </button>
          
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'skills' 
                ? 'bg-[#1e1e1e] text-amber-500 border border-stone-800' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/40'
            }`}
            id="nav-tab-skills"
          >
            02 // TOOLS & CAPABILITIES
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'experience' 
                ? 'bg-[#1e1e1e] text-amber-500 border border-stone-800' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/40'
            }`}
            id="nav-tab-experience"
          >
            03 // CASE STUDIES & EXPERIENCE
          </button>

          <button
            onClick={() => setActiveTab('sandbox')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sandbox' 
                ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/40'
            }`}
            id="nav-tab-sandbox"
          >
            <Cpu className="w-3.5 h-3.5" />
            04 // THE CAMPAIGN LAB
            <span className="text-[8px] bg-amber-500/25 text-amber-400 px-1.5 py-0.5 rounded-full font-sans ml-1 font-bold animate-pulse">LAB</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'contact' 
                ? 'bg-[#1e1e1e] text-amber-500 border border-stone-800' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/40'
            }`}
            id="nav-tab-contact"
          >
            <Mail className="w-3.5 h-3.5" />
            05 // SECURE INBOX
          </button>
        </nav>

        {/* ACTIVE STAGE MAIN VIEWS */}
        <div className="pt-2" id="portfolio-main-stage">
          <AnimatePresence mode="wait">
            {activeTab === 'about' && <AboutTab key="about-tab" />}
            {activeTab === 'skills' && <SkillsTab key="skills-tab" />}
            {activeTab === 'experience' && <ExperienceTab key="experience-tab" />}
            {activeTab === 'sandbox' && <CampaignLabTab key="sandbox-tab" />}
            {activeTab === 'contact' && <ContactForm key="contact-tab" />}
          </AnimatePresence>
        </div>

        {/* BRAND MINIMALIST FOOTER */}
        <footer className="pt-16 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-stone-600" id="portfolio-footer">
          <div id="footer-copyright">
            <span>© {new Date().getFullYear()} KISHORE MATHIALAGAN. ALL RIGHTS RESERVED.</span>
          </div>
          
          <div className="flex gap-4 items-center" id="footer-meta">
            <span>COIMBATORE, TAMIL NADU</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-stone-500 hover:text-amber-500/80 transition-colors cursor-pointer" onClick={() => setActiveTab('contact')}>
              <Compass className="w-3.5 h-3.5 text-amber-500/50" />
              <span>AI & DATA SCIENCE ENHANCED MARKETING</span>
            </span>
          </div>
        </footer>
      </main>

      {/* GLOBAL HIGH-FIDELITY OVERLAY CONTACT MODAL */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" id="global-contact-modal">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
              id="modal-body-container"
            >
              <ContactForm onClose={() => setIsContactModalOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
