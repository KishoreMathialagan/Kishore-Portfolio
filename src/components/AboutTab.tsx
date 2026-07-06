import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Mail, Phone, MapPin, Award, Check, Copy, Sparkles, BookOpen, MessageSquare } from 'lucide-react';
import { personalInfo, education } from '../data';

export default function AboutTab() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const triggerDirectInquiry = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      id="about-tab-container"
    >
      {/* Profile summary & Contact */}
      <div className="lg:col-span-7 space-y-6" id="about-intro-section">
        <div className="bg-brand-card border border-stone-800/60 p-8 rounded-3xl relative overflow-hidden" id="about-card-hero">
          {/* Subtle design accent lights */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 text-amber-500 font-mono text-xs tracking-wider mb-4" id="intro-badge">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>DESIGN & ANALYTICS INTERSECT</span>
          </div>

          <h2 className="text-3xl font-display font-bold text-white mb-4 leading-tight" id="about-heading">
            Bridging Creative Artistry with Analytical Precision
          </h2>
          
          <p className="text-stone-300 leading-relaxed font-sans text-base mb-6" id="about-bio">
            {personalInfo.bio}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 border-t border-stone-800/80 pt-6" id="quick-stats-grid">
            <div id="stat-role">
              <span className="text-xs font-mono text-stone-500 block mb-1">CURRENT STATUS</span>
              <span className="text-stone-200 font-medium text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                Open to Opportunities
              </span>
            </div>
            <div id="stat-focus">
              <span className="text-xs font-mono text-stone-500 block mb-1">PRIMARY FOCUS</span>
              <span className="text-stone-200 font-medium text-sm">AI Content & Organic SMM</span>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Contacts */}
        <div className="bg-brand-card border border-stone-800/60 p-8 rounded-3xl" id="contact-panel">
          <h3 className="text-lg font-display font-semibold text-white mb-6 flex items-center gap-2" id="contact-header">
            <Award className="w-5 h-5 text-amber-500" /> Direct Communication Lines
          </h3>
          
          <div className="space-y-4" id="contacts-list">
            {/* Email card */}
            <div 
              className="flex items-center justify-between p-4 rounded-2xl bg-stone-900/60 hover:bg-stone-900 border border-stone-800/40 transition-colors group"
              id="contact-email-card"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-500 block">EMAIL ADDRESS</span>
                  <span className="text-sm font-mono text-stone-200">{personalInfo.email}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2.5 rounded-xl hover:bg-stone-800 text-stone-400 hover:text-white transition-all active:scale-95"
                title="Copy email to clipboard"
                id="copy-email-btn"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone card */}
            <div 
              className="flex items-center justify-between p-4 rounded-2xl bg-stone-900/60 hover:bg-stone-900 border border-stone-800/40 transition-colors group"
              id="contact-phone-card"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-500 block">PHONE NUMBER</span>
                  <span className="text-sm font-mono text-stone-200">{personalInfo.phone}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2.5 rounded-xl hover:bg-stone-800 text-stone-400 hover:text-white transition-all active:scale-95"
                title="Copy phone to clipboard"
                id="copy-phone-btn"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location card */}
            <div 
              className="flex items-center justify-between p-4 rounded-2xl bg-stone-900/40 border border-stone-800/20 mb-2"
              id="contact-location-card"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-stone-800 rounded-xl text-stone-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-500 block">BASED IN</span>
                  <span className="text-sm text-stone-300 font-sans">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry CTA button */}
            <button
              onClick={triggerDirectInquiry}
              className="w-full py-3.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-display font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] shadow-md hover:shadow-amber-500/10"
              id="about-direct-inquiry-btn"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>Initialize Direct Inquiry Form</span>
            </button>
          </div>
        </div>
      </div>

      {/* Education & Academic Rigor */}
      <div className="lg:col-span-5 space-y-6" id="about-academic-section">
        <div className="bg-brand-card border border-stone-800/60 p-8 rounded-3xl relative overflow-hidden h-full flex flex-col justify-between" id="education-card">
          <div id="education-card-top">
            <div className="flex items-center gap-3 text-amber-500 font-mono text-xs tracking-wider mb-6" id="edu-badge">
              <GraduationCap className="w-5 h-5" />
              <span>EDUCATION</span>
            </div>

            <span className="inline-block px-3 py-1 bg-stone-900 border border-stone-800 text-amber-500 rounded-full font-mono text-xs mb-4">
              {education.period}
            </span>

            <h3 className="text-2xl font-display font-bold text-white mb-1" id="inst-name">
              {education.institution}
            </h3>
            <p className="text-stone-400 font-sans text-sm mb-6" id="inst-loc">
              {education.location}, Tamil Nadu
            </p>

            <div className="space-y-4 border-l-2 border-stone-800 pl-4 py-1" id="degree-bullets">
              <div>
                <span className="text-xs font-mono text-stone-500 block">DEGREE</span>
                <span className="text-stone-200 font-medium font-sans">{education.degree}</span>
              </div>
              <div>
                <span className="text-xs font-mono text-stone-500 block">MAJOR FIELD OF STUDY</span>
                <span className="text-stone-200 font-medium font-sans text-amber-500">{education.field}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800/80 space-y-4" id="education-insights">
            <h4 className="text-xs font-mono text-stone-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-500" /> HOW AI / DATA SCIENCE ENHANCES MY MARKETING
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed font-sans">
              Studying AI and Data Science grants a structural edge in digital marketing. It allows me to construct targeted analytics funnels, automate complex copywriting matrices via programmatic API chaining, and analyze performance dashboards with data-driven accuracy.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
