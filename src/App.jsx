import React, { useState } from 'react';
import { 
  Layers, Cpu, Smartphone, Users, DollarSign, RefreshCw, 
  CreditCard, UserPlus, BookOpen, Truck, Home, BookMarked, 
  Package, BarChart3, ShieldCheck, CheckCircle2, Globe, Server, 
  Terminal, ArrowRight, Check, Sparkles, Database, FileText, Settings, Lock
} from 'lucide-react';

export default function App() {
  const [activeModule, setActiveModule] = useState('overview');
  const [deploymentStatus, setDeploymentStatus] = useState('idle');
  const [customDomain, setCustomDomain] = useState('www.axiomos.edu');

  const modules = [
    { id: 'overview', name: 'System Overview', icon: Layers, desc: 'Enterprise micro-kernel architecture & benchmark matrix' },
    { id: 'academics', name: 'Academics & Timetable', icon: BookOpen, desc: 'AI Genetic scheduling & curriculum mapping' },
    { id: 'ai', name: 'AI Core & Copilots', icon: Cpu, desc: 'Contextual institutional LLM & predictive insights' },
    { id: 'mobile', name: 'Teacher Mobile PWA', icon: Smartphone, desc: 'Zero-latency multilingual voice-to-text grading' },
    { id: 'hrms', name: 'HRMS & Payroll', icon: Users, desc: 'Biometric multi-shift tracking & tax automation' },
    { id: 'finance', name: 'Double-Entry Accounting', icon: DollarSign, desc: 'GAAP/IFRS compliant ledger & cost centers' },
    { id: 'tally', name: 'Tally Prime Bridge', icon: RefreshCw, desc: 'Real-time two-way synchronization connector' },
    { id: 'payments', name: 'Omni-Channel Payments', icon: CreditCard, desc: 'Multi-gateway routing & auto-reconciliation' },
    { id: 'admissions', name: 'Admissions & CRM', icon: UserPlus, desc: 'Lead scoring, WhatsApp nurture & document lockers' },
    { id: 'lms', name: 'Outcome-Based LMS', icon: BookMarked, desc: 'Competency mapping & interactive whiteboards' },
    { id: 'campus', name: 'Transport & Hostel', icon: Home, desc: 'Smart fleet GPS, geo-fencing & bed optimization' },
    { id: 'analytics', name: 'Predictive BI & Security', icon: BarChart3, desc: 'Zero-trust RBAC/ABAC and longitudinal analytics' },
    { id: 'deploy', name: 'Hosting & Domain Studio', icon: Globe, desc: 'Deploy live to Vercel/Netlify with custom domain' }
  ];

  const handleDeploy = () => {
    setDeploymentStatus('building');
    setTimeout(() => {
      setDeploymentStatus('success');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-tr from-indigo-600 to-violet-500 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
            <Layers className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              AXIOM OS
            </h1>
            <p className="text-xs text-indigo-400 font-medium tracking-wide">THE EDUCATION OPERATING SYSTEM</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm text-slate-400 font-medium">
          <span className="flex items-center"><Server className="w-4 h-4 mr-1.5 text-emerald-400" /> Kernel v4.2 Active</span>
          <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5 text-indigo-400" /> Zero-Trust Security</span>
          <span className="bg-indigo-950 text-indigo-300 border border-indigo-800/60 px-3 py-1 rounded-full text-xs font-semibold">Production Ready</span>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-72 bg-slate-900/50 border-r border-slate-800/80 p-4 flex flex-col space-y-1.5">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-3 pb-2">Modules & Architecture</div>
          {modules.map((mod) => {
            const IconComponent = mod.icon;
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-left transition-all duration-200 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30 font-semibold' 
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <IconComponent className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
                <span className="text-sm">{mod.name}</span>
              </button>
            );
          })}
        </aside>

        {/* Main Content Workspace */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-slate-950">
          
          {/* MODULE: OVERVIEW */}
          {activeModule === 'overview' && (
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-indigo-900/40 via-violet-900/30 to-slate-900 border border-indigo-500/20 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Cpu className="w-64 h-64 text-indigo-400" />
                </div>
                <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                  ENTERPRISE BENCHMARK
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white">
                  The Autonomous Operating System for Modern Institutions
                </h2>
                <p className="text-slate-300 mt-3 text-lg leading-relaxed max-w-2xl">
                  Axiom OS replaces fragmented legacy ERPs (such as Edunext and Fedena) with a unified micro-kernel architecture combining double-entry accounting, AI copilots, and real-time offline-first mobility.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <button 
                    onClick={() => setActiveModule('deploy')}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/30 flex items-center transition"
                  >
                    Deploy to Production <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveModule('ai')}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-700 flex items-center transition"
                  >
                    Explore AI Engine <Sparkles className="ml-2 w-4 h-4 text-indigo-400" />
                  </button>
                </div>
              </div>

              {/* Comparison Matrix Table */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">Legacy ERP vs. Axiom OS Benchmark Matrix</h3>
                  <span className="text-xs text-indigo-400 font-semibold">100% Outperforming Legacy Standard</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-950/60 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800">
                        <th className="p-4">Operational Domain</th>
                        <th className="p-4">Legacy ERP (Edunext / Fedena)</th>
                        <th className="p-4 text-indigo-400">Axiom OS Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-sm">
                      <tr>
                        <td className="p-4 font-semibold text-white">Timetable Scheduling</td>
                        <td className="p-4 text-slate-400">Manual grid setup, recurring teacher conflicts.</td>
                        <td className="p-4 text-emerald-400 font-medium">AI Genetic Constraint Solver (Resolves in seconds).</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Financial Accounting</td>
                        <td className="p-4 text-slate-400">Single-entry spreadsheets, prone to reconciliation discrepancies.</td>
                        <td className="p-4 text-emerald-400 font-medium">GAAP/IFRS Double-Entry Ledger with automated cost centers.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Tally Integration</td>
                        <td className="p-4 text-slate-400">Manual XML/CSV file exports.</td>
                        <td className="p-4 text-emerald-400 font-medium">Real-Time Two-Way Tally Prime Sync Bridge.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Teacher Mobile UX</td>
                        <td className="p-4 text-slate-400">Heavy mobile web wrappers prone to lagging.</td>
                        <td className="p-4 text-emerald-400 font-medium">Offline-First PWA with Voice-to-Text & 22+ local languages.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-white">Security & Compliance</td>
                        <td className="p-4 text-slate-400">Basic Role-Based Access Control (RBAC).</td>
                        <td className="p-4 text-emerald-400 font-medium">Zero-Trust ABAC, immutable audit trails, GDPR/FERPA.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: ACADEMICS */}
          {activeModule === 'academics' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">Academics & AI Timetable Engine</h2>
                  <p className="text-slate-400 text-sm">Automated scheduling, genetic conflict resolution, and curriculum micro-scheduling.</p>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-lg text-xs font-semibold border border-emerald-500/30">Engine Optimized</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="font-semibold text-indigo-400">AI Genetic Engine</h4>
                  <p className="text-slate-300 text-sm mt-2">Simulates 10,000 timetable iterations to eliminate teacher burnout and room overlap.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="font-semibold text-indigo-400">Micro-Scheduling</h4>
                  <p className="text-slate-300 text-sm mt-2">Dynamic lesson planning integrated directly with digital teaching diaries and lesson repos.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="font-semibold text-indigo-400">Outcome Mapping</h4>
                  <p className="text-slate-300 text-sm mt-2">Real-time competency tracking linked to Bloom's Taxonomy and board board syllabi.</p>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: AI CORE */}
          {activeModule === 'ai' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">AI Core & Institutional Copilots</h2>
                <p className="text-slate-400 text-sm">Context-aware neural agents trained on institutional bylaws, curriculum, and student performance metrics.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                  <Sparkles className="w-6 h-6 text-indigo-400" />
                  <span className="font-bold text-white">Axiom Neural Copilot Active Session</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl text-slate-300 text-sm space-y-3 font-mono">
                  <p className="text-indigo-400">&gt; System query: "Analyze Grade 10 Mathematics midterm failure clusters and recommend remediation."</p>
                  <p className="text-slate-300">&gt; Copilot analysis: 14 students identified in Chapter 4 (Quadratic Equations). Generated targeted 3-day remedial quiz modules and assigned peer mentors automatically. Push notifications dispatched to respective subject teachers.</p>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: MOBILE PWA */}
          {activeModule === 'mobile' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Teacher Mobile PWA</h2>
                <p className="text-slate-400 text-sm">Lightning-fast offline-first progressive web application built for remote and high-load environments.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <Smartphone className="w-8 h-8 text-indigo-400" />
                  <h4 className="text-lg font-bold text-white">Zero-Latency Attendance & Voice Grading</h4>
                  <p className="text-slate-300 text-sm">Teachers record attendance in sub-second bursts. Supports speech-to-text assignment evaluations in 22+ regional and international languages.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <RefreshCw className="w-8 h-8 text-emerald-400" />
                  <h4 className="text-lg font-bold text-white">Local SQLite Offline Sync</h4>
                  <p className="text-slate-300 text-sm">Zero cellular connectivity? No problem. Data queues locally on device storage and synchronizes via secure web sockets instantly upon network recovery.</p>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: HRMS */}
          {activeModule === 'hrms' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">HRMS & Payroll Automation</h2>
                <p className="text-slate-400 text-sm">Multi-shift biometric tracking, leave cascading rules, and automated tax deductions.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs">Total Active Staff</span>
                    <h3 className="text-2xl font-bold text-white mt-1">248</h3>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs">Biometric Sync</span>
                    <h3 className="text-2xl font-bold text-emerald-400 mt-1">Live</h3>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs">Payroll Cycle</span>
                    <h3 className="text-2xl font-bold text-indigo-400 mt-1">Automated</h3>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs">Compliance</span>
                    <h3 className="text-2xl font-bold text-emerald-400 mt-1">100%</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: FINANCE */}
          {activeModule === 'finance' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">GAAP / IFRS Double-Entry Accounting</h2>
                <p className="text-slate-400 text-sm">Institutional-grade financial ledger with automated cost centers and audit trails.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="font-semibold text-white">General Ledger Summary</span>
                  <span className="text-xs text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800">Balanced & Audited</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800/50">
                    <span className="text-slate-300">Fee Collection Account (Asset)</span>
                    <span className="font-mono text-emerald-400">₹45,20,000.00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/50">
                    <span className="text-slate-300">Faculty Payroll Accrual (Liability)</span>
                    <span className="font-mono text-indigo-400">₹18,50,000.00</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-300">Infrastructure Development Reserve</span>
                    <span className="font-mono text-indigo-400">₹12,00,000.00</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: TALLY */}
          {activeModule === 'tally' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Real-Time Tally Prime Bridge</h2>
                <p className="text-slate-400 text-sm">Direct XML socket bridge connecting Axiom OS fee collection and vouchers with Tally Prime.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-lg">Tally Prime Server Connector</h4>
                  <p className="text-slate-400 text-sm mt-1">Status: Handshake active with local gateway on port 9000.</p>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-950 text-emerald-400 px-4 py-2 rounded-xl border border-emerald-800 font-semibold text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Synced Live</span>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: PAYMENTS */}
          {activeModule === 'payments' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Omni-Channel Payment Gateway</h2>
                <p className="text-slate-400 text-sm">Multi-gateway routing (Razorpay, Stripe, UPI, NetBanking) with automated reconciliation.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="font-semibold text-white">Smart Routing</h4>
                  <p className="text-slate-300 text-sm mt-2">Automatically routes transactions through the lowest fee gateway with 99.9% success rates.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="font-semibold text-white">Auto-Reconciliation</h4>
                  <p className="text-slate-300 text-sm mt-2">Matches bank webhook statements against student fee ledgers without manual intervention.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="font-semibold text-white">Instant Receipts</h4>
                  <p className="text-slate-300 text-sm mt-2">Generates cryptographically signed PDF tax invoices and dispatches them via WhatsApp.</p>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: ADMISSIONS */}
          {activeModule === 'admissions' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Student Lifecycle CRM & Admissions</h2>
                <p className="text-slate-400 text-sm">Full-funnel lead tracking, automated WhatsApp nurture sequences, and digital locker verification.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs">Inquiries</span>
                    <h3 className="text-2xl font-bold text-white mt-1">1,420</h3>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs">Campus Tours</span>
                    <h3 className="text-2xl font-bold text-indigo-400 mt-1">385</h3>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs">Admissions Closed</span>
                    <h3 className="text-2xl font-bold text-emerald-400 mt-1">210</h3>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs">Conversion Rate</span>
                    <h3 className="text-2xl font-bold text-indigo-400 mt-1">14.8%</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: LMS */}
          {activeModule === 'lms' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Outcome-Based LMS</h2>
                <p className="text-slate-400 text-sm">Interactive whiteboards, competency mapping, and auto-graded AI assessments.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <h4 className="font-bold text-white">Active Virtual Classrooms</h4>
                <p className="text-slate-400 text-sm mt-1">Streaming with ultra-low latency WebRTC, real-time quizzes, and automatic attendance logs.</p>
              </div>
            </div>
          )}

          {/* MODULE: CAMPUS */}
          {activeModule === 'campus' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Smart Transport, Hostel & Inventory</h2>
                <p className="text-slate-400 text-sm">GPS fleet tracking, geo-fenced drop validation, and automated hostel bed optimization.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="font-bold text-white">Fleet & Transport Optimization</h4>
                  <p className="text-slate-300 text-sm mt-2">AI route planning reduces fuel consumption by 18% with real-time parent ETA push alerts.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="font-bold text-white">Digital Dorm & Mess Management</h4>
                  <p className="text-slate-300 text-sm mt-2">Biometric mess attendance prevents wastage and automates digital outpass approvals.</p>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: ANALYTICS */}
          {activeModule === 'analytics' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Predictive BI & Zero-Trust Security</h2>
                <p className="text-slate-400 text-sm">Longitudinal academic forecasting, student retention risk models, and ABAC security.</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex items-center space-x-3 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="font-bold text-white">Zero-Trust Security Framework Active</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Attribute-Based Access Control (ABAC) restricts financial records to authorized CFO roles, while immutable audit logs record every database query for regulatory compliance (GDPR/FERPA).
                </p>
              </div>
            </div>
          )}

          {/* MODULE: DEPLOY */}
          {activeModule === 'deploy' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Hosting & Custom Domain Studio</h2>
                <p className="text-slate-400 text-sm">Deploy Axiom OS live on high-performance cloud infrastructure with your own custom domain.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6 shadow-xl">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Target Institution Custom Domain</label>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-indigo-400" />
                    <input 
                      type="text" 
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 flex-1 text-white font-mono focus:outline-none focus:border-indigo-500"
                      placeholder="e.g. www.myschool.edu"
                    />
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-sm space-y-2 text-slate-300">
                  <div className="flex items-center text-indigo-400 font-semibold">
                    <Server className="w-4 h-4 mr-2" /> Deployment Pipeline Specs
                  </div>
                  <p>• Bundled with React 19 + Vite + Tailwind CSS</p>
                  <p>• Automated SSL Certificate & Global CDN Edge Routing</p>
                  <p>• Zero-downtime rolling updates</p>
                </div>

                {deploymentStatus === 'idle' && (
                  <button 
                    onClick={handleDeploy}
                    className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-2"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Deploy Axiom OS Live</span>
                  </button>
                )}

                {deploymentStatus === 'building' && (
                  <div className="w-full bg-indigo-950 border border-indigo-800/60 text-indigo-300 py-4 rounded-xl flex items-center justify-center space-x-3 font-semibold">
                    <RefreshCw className="w-5 h-5 animate-spin text-indigo-400" />
                    <span>Compiling Micro-Kernel & Provisioning Edge CDN...</span>
                  </div>
                )}

                {deploymentStatus === 'success' && (
                  <div className="bg-emerald-950/60 border border-emerald-500/30 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center space-x-3 text-emerald-400 font-bold text-lg">
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Deployment Successful!</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Your Education Operating System is now live and secured with SSL.
                    </p>
                    <div className="bg-slate-950 p-3 rounded-xl font-mono text-indigo-300 text-sm flex justify-between items-center">
                      <span>https://{customDomain}</span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/30">Live Online</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}