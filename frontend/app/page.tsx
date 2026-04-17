import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] font-sans selection:bg-indigo-500/30">
      {/* Background Gradients & Sports Analytics Dashboard Vibe */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Analytics lines decorative background overlay */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,800 Q400,700 800,900 T1600,600 T2400,800" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5, 5" />
          <path d="M0,600 Q300,800 600,500 T1200,700 T1800,400" fill="none" stroke="#3b82f6" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto w-full">
        
        {/* Top Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_0_15px_rgba(79,70,229,0.15)] group animate-fade-in-up" style={{ animationDuration: '0.5s' }}>
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide text-indigo-200">System Online</span>
        </div>

        {/* Main Headings */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-4 animate-fade-in-up drop-shadow-lg" style={{ animationDuration: '0.7s', animationFillMode: 'both', animationDelay: '0.1s' }}>
          EventApp
        </h1>
        
        <p className="text-lg md:text-2xl font-light tracking-[0.2em] text-slate-400 mb-16 uppercase animate-fade-in-up" style={{ animationDuration: '0.7s', animationFillMode: 'both', animationDelay: '0.2s' }}>
          AI Smart Venue Assistant
        </p>

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-2xl px-4 animate-fade-in-up" style={{ animationDuration: '0.7s', animationFillMode: 'both', animationDelay: '0.3s' }}>
          
          {/* Attendee View Button */}
          <Link href="/attendee" className="group relative w-full flex-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex flex-col items-center justify-center p-8 bg-black/40 hover:bg-black/60 border border-white/10 rounded-2xl backdrop-blur-xl transition-all duration-300 overflow-hidden transform group-hover:scale-[1.02] group-hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="text-indigo-400 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </span>
              <span className="text-xl font-semibold text-white tracking-wide">Attendee View</span>
              <span className="text-xs text-slate-400 mt-2 font-medium tracking-wider uppercase">Join Experience</span>
            </div>
          </Link>

          {/* Admin View Button */}
          <Link href="/admin" className="group relative w-full flex-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex flex-col items-center justify-center p-8 bg-black/40 hover:bg-black/60 border border-white/10 rounded-2xl backdrop-blur-xl transition-all duration-300 overflow-hidden transform group-hover:scale-[1.02] group-hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <span className="text-emerald-400 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </span>
              <span className="text-xl font-semibold text-white tracking-wide">Admin View</span>
              <span className="text-xs text-slate-400 mt-2 font-medium tracking-wider uppercase">Command Center</span>
            </div>
          </Link>

        </div>
        
      </div>
      
      {/* Required basic custom CSS inside a style block since globals.css is plain Next.js by default without our custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />
    </main>
  );
}
