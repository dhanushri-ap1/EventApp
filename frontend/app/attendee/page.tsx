import Link from 'next/link';
import React from 'react';

export default function AttendeeDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 font-sans relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
         <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-900/10 blur-[100px]" />
         <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col h-full min-h-[calc(100vh-4rem)]">
        
        {/* Top Header / Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span className="font-medium tracking-wide">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
               <span className="font-bold text-sm tracking-tighter">AT</span>
             </div>
             <span className="text-sm font-semibold tracking-wide hidden sm:block text-slate-300">Attendee Profile</span>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="mb-6 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-4 rounded-2xl flex items-center gap-4 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.1)] animate-pulse">
          <div className="p-2 bg-amber-500/20 rounded-full text-amber-400 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
              <path d="M12 9v4"/><path d="M12 17h.01"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold tracking-wide text-amber-300">Live Alert</h3>
            <p className="text-sm opacity-90 font-medium">Exit A is crowded. Use Exit B.</p>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6 flex-grow">
          
          {/* Left Section: AI Assistant Chat */}
          <div className="flex-grow lg:w-2/3 flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20 hover:shadow-indigo-500/5 h-[600px] lg:h-auto">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-white/5 bg-gradient-to-r from-white/[0.03] to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </div>
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0f0f13]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-lg tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Event Assistant</h2>
                  <p className="text-xs text-indigo-400 font-medium tracking-wider uppercase">AI Powered</p>
                </div>
              </div>
              <button className="text-slate-500 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
              
              <div className="flex gap-4 max-w-[85%]">
                <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                  <span className="text-xs font-bold text-indigo-300">AI</span>
                </div>
                <div className="bg-white/5 border border-white/5 text-slate-300 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm leading-relaxed">
                  Welcome to EventApp! How can I assist you with your venue experience today?
                </div>
              </div>

              <div className="flex gap-4 max-w-[85%] self-end flex-row-reverse">
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <span className="text-xs font-bold text-slate-300">AT</span>
                </div>
                <div className="bg-indigo-600/30 border border-indigo-500/30 text-indigo-50 p-4 rounded-2xl rounded-tr-none shadow-sm text-sm leading-relaxed backdrop-blur-sm">
                  What is the fastest way to get food right now?
                </div>
              </div>

              <div className="flex gap-4 max-w-[85%]">
                <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                  <span className="text-xs font-bold text-indigo-300">AI</span>
                </div>
                <div className="bg-white/5 border border-white/5 text-slate-300 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm leading-relaxed whitespace-pre-wrap">
                  Based on current crowd metrics, <strong>Gate 3 Food</strong> has the lowest waiting time (approx. 5 minutes). I recommend heading there!
                </div>
              </div>
              
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/5 bg-black/20">
              <div className="flex gap-3 items-center bg-white/5 border border-white/10 rounded-xl p-1 pr-2 transition-colors focus-within:border-indigo-500/50 focus-within:bg-white/10">
                <input 
                  type="text" 
                  placeholder="Ask the Event Assistant..." 
                  className="flex-grow bg-transparent border-none outline-none text-sm px-4 py-3 text-white placeholder-slate-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-indigo-600/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Live Venue Status */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20 flex flex-col h-full">
              
              <div className="px-6 py-5 border-b border-white/5 bg-gradient-to-r from-white/[0.03] to-transparent flex items-center justify-between">
                <h2 className="font-semibold text-lg tracking-wide text-white flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  Live Venue Status
                </h2>
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></span>
              </div>

              <div className="p-6 flex flex-col gap-5">
                
                {/* Status Card 1 */}
                <div className="group relative bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-emerald-500/20 transition-colors"></div>
                  <div className="relative z-10 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                          <path d="M7 2v20"></path>
                          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-200">Gate 3 Food</h4>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">Crowd Level</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold tracking-wide">
                        LOW
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Card 2 */}
                <div className="group relative bg-white/5 border border-red-500/20 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300 overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.05)]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-red-500/20 transition-colors"></div>
                  <div className="relative z-10 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5"></path>
                          <path d="M9 22v-4h6v4"></path>
                          <path d="M19 17v4"></path>
                          <path d="M19 13v.01"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-200">Exit A</h4>
                        <p className="text-xs text-red-400/80 font-medium uppercase tracking-wider mt-0.5">Crowd Level</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/50 rounded-full text-xs font-bold tracking-wide animate-pulse">
                        HIGH
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Card 3 */}
                <div className="group relative bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-amber-500/20 transition-colors"></div>
                  <div className="relative z-10 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/20">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path>
                          <path d="M12 7v5l3 3"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-200">Restroom B</h4>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">Crowd Level</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-full text-xs font-bold tracking-wide">
                        MEDIUM
                      </span>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
            
            {/* Quick Actions */}
            <div className="flex gap-4">
              <button className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium text-sm transition-colors text-slate-300 flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                Feedback
              </button>
              <button className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium text-sm transition-colors text-slate-300 flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Favorites
              </button>
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
}
