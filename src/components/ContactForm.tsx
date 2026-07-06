import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Send, 
  Check, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  MessageSquare, 
  Building, 
  User, 
  Inbox, 
  Clock, 
  ArrowRight,
  X
} from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
}

interface ContactFormProps {
  onClose?: () => void;
  inlineMode?: boolean;
  key?: string;
}

export default function ContactForm({ onClose, inlineMode = false }: ContactFormProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('Collaboration');

  // Request Status
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Real-time server inquiries (inbox)
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [showInbox, setShowInbox] = useState(false);
  const [isLoadingInbox, setIsLoadingInbox] = useState(false);

  // Fetch submitted inquiries from the backend
  const fetchInquiries = async () => {
    setIsLoadingInbox(true);
    try {
      const response = await fetch('/api/admin/inquiries');
      const data = await response.json();
      if (data.success) {
        setInquiries(data.inquiries);
      }
    } catch (err) {
      console.error("Failed to load inquiries from server:", err);
    } finally {
      setIsLoadingInbox(false);
    }
  };

  useEffect(() => {
    if (showInbox) {
      fetchInquiries();
    }
  }, [showInbox]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("All fields except company are required.");
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          message: `[Type: ${inquiryType}] ${message}`
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Clear fields
        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
        // Refresh local inbox count/list if inbox is active
        fetchInquiries();
      } else {
        setErrorMessage(data.error || "Something went wrong. Please check your details.");
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error: Could not contact backend server.");
      setStatus('error');
    }
  };

  const formContent = (
    <div className="space-y-6" id="contact-form-stage">
      <div id="contact-form-intro">
        <div className="flex items-center gap-2 text-amber-500 font-mono text-xs tracking-wider mb-2" id="form-tagline">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>DIRECT EMAIL TRANSMISSION API</span>
        </div>
        <h3 className="text-xl font-display font-bold text-white" id="form-heading">
          Initialize Project Inquiry
        </h3>
        <p className="text-xs text-stone-400 font-sans mt-1">
          Complete the secure dossier below. Submissions directly bind into the express service listener in real-time.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" id="inquiry-form">
        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="form-row-1">
          <div className="space-y-1.5" id="input-group-name">
            <label className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">Your Name *</label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-stone-500"><User className="w-4 h-4" /></span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Connor"
                className="w-full bg-stone-900/60 hover:bg-stone-900 border border-stone-800 focus:border-amber-500/60 focus:bg-stone-950 rounded-xl py-2.5 pl-10 pr-4 text-xs text-stone-100 outline-none transition-all placeholder:text-stone-600"
                id="input-name"
              />
            </div>
          </div>

          <div className="space-y-1.5" id="input-group-company">
            <label className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">Company (Optional)</label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-stone-500"><Building className="w-4 h-4" /></span>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Acme Corporation"
                className="w-full bg-stone-900/60 hover:bg-stone-900 border border-stone-800 focus:border-amber-500/60 focus:bg-stone-950 rounded-xl py-2.5 pl-10 pr-4 text-xs text-stone-100 outline-none transition-all placeholder:text-stone-600"
                id="input-company"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Email & Reason */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="form-row-2">
          <div className="space-y-1.5" id="input-group-email">
            <label className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">Email Address *</label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-stone-500"><Mail className="w-4 h-4" /></span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. sarah@acme.com"
                className="w-full bg-stone-900/60 hover:bg-stone-900 border border-stone-800 focus:border-amber-500/60 focus:bg-stone-950 rounded-xl py-2.5 pl-10 pr-4 text-xs text-stone-100 outline-none transition-all placeholder:text-stone-600"
                id="input-email"
              />
            </div>
          </div>

          <div className="space-y-1.5" id="input-group-reason">
            <label className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">Inquiry Focus *</label>
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full bg-stone-900/60 hover:bg-stone-900 border border-stone-800 focus:border-amber-500/60 focus:bg-stone-950 rounded-xl py-2.5 px-4 text-xs text-stone-100 outline-none transition-all cursor-pointer"
              id="input-inquiry-type"
            >
              <option value="Collaboration">Collaboration / Project</option>
              <option value="Freelance">Freelance Social Media Management</option>
              <option value="Poster Design">Creative Brand Poster Design</option>
              <option value="Hiring">Full-Time / Contract Placement</option>
              <option value="General">General Inquiry / Saying Hello</option>
            </select>
          </div>
        </div>

        {/* Message Input */}
        <div className="space-y-1.5" id="input-group-message">
          <label className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">Message Details *</label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Introduce your brand objectives, campaign timeline, or let us know about your event concepts..."
            className="w-full bg-stone-900/60 hover:bg-stone-900 border border-stone-800 focus:border-amber-500/60 focus:bg-stone-950 rounded-xl p-4 text-xs text-stone-100 outline-none resize-none transition-all placeholder:text-stone-600 font-sans"
            id="input-message"
          />
        </div>

        {/* Feedback Messages */}
        <AnimatePresence mode="wait">
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex items-center gap-2 text-xs text-red-400 bg-red-500/5 border border-red-500/20 p-3 rounded-xl"
              id="form-error-feedback"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 p-3.5 rounded-xl"
              id="form-success-feedback"
            >
              <Check className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              <span>Your message was sent! It is now logged in the express storage cache below.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        <div className="flex gap-3 pt-2" id="form-actions-row">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`flex-1 py-3 px-4 rounded-xl font-display font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
              status === 'submitting'
                ? 'bg-stone-800 text-stone-500 border border-stone-700/50 cursor-not-allowed'
                : 'bg-amber-500 text-black hover:bg-amber-400'
            }`}
            id="submit-inquiry-btn"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Data...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send Direct Inquiry</span>
              </>
            )}
          </button>

          {/* Inbox Peek Toggle */}
          <button
            type="button"
            onClick={() => setShowInbox(!showInbox)}
            className="px-4 rounded-xl bg-stone-900 hover:bg-stone-850 text-stone-300 border border-stone-800 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer"
            id="toggle-inbox-btn"
          >
            <Inbox className={`w-4 h-4 ${showInbox ? 'text-amber-500' : 'text-stone-400'}`} />
            <span className="hidden sm:inline">{showInbox ? "Hide Logs" : "Inspect Logs"}</span>
            <span className="bg-stone-800 text-stone-300 px-1.5 py-0.5 rounded text-[9px] font-bold">
              {inquiries.length || "?"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="space-y-6" id="contact-form-root">
      <div className={`${inlineMode ? '' : 'bg-brand-card border border-stone-800/60 p-6 sm:p-8 rounded-3xl'} relative`} id="form-container-card">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-200 rounded-lg hover:bg-stone-800 transition-colors"
            title="Close modal"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {formContent}

        {/* Dynamic Inbox Logs Section */}
        <AnimatePresence>
          {showInbox && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-stone-800/80 overflow-hidden"
              id="live-inbox-container"
            >
              <div className="flex items-center justify-between mb-4" id="inbox-title-bar">
                <span className="text-[10px] font-mono text-stone-500 flex items-center gap-1.5 uppercase">
                  <Inbox className="w-3.5 h-3.5 text-amber-500" /> Server-Side Memory Inbox Stream
                </span>
                <button
                  onClick={fetchInquiries}
                  className="text-[9px] font-mono text-stone-400 hover:text-amber-400 flex items-center gap-1 bg-stone-950 border border-stone-850 px-2 py-1 rounded hover:bg-stone-900 transition-colors"
                  id="refresh-inquiries-btn"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoadingInbox ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {isLoadingInbox && inquiries.length === 0 ? (
                <div className="text-center py-6 text-stone-500 font-mono text-xs flex items-center justify-center gap-2" id="inbox-loading-placeholder">
                  <Loader2 className="w-4 h-4 animate-spin text-amber-500" /> Reading express instance memory cache...
                </div>
              ) : inquiries.length === 0 ? (
                <div className="text-center py-6 text-stone-600 font-mono text-xs border border-dashed border-stone-850 rounded-xl bg-stone-950/20" id="inbox-empty-placeholder">
                  No inquiries recorded in this server session yet. Submit yours above to see it populate here in real-time!
                </div>
              ) : (
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1" id="inbox-inquiries-list">
                  {inquiries.slice().reverse().map((inq) => (
                    <div
                      key={inq.id}
                      className="p-3 bg-stone-950 border border-stone-850 rounded-xl hover:border-stone-800 transition-colors"
                      id={`inq-item-${inq.id}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-stone-200 font-sans">{inq.name}</span>
                        <span className="text-[9px] font-mono text-stone-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {new Date(inq.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-amber-500/80 mb-2">
                        {inq.email} {inq.company ? `• ${inq.company}` : ''}
                      </div>
                      <p className="text-[11px] text-stone-400 font-sans line-clamp-2 leading-relaxed">
                        {inq.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Custom simple refresh component to prevent typescript errors
function RefreshCw(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}
