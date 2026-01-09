import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-transparent to-transparent dark:from-teal-950/40" />

      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute top-1/4 left-1/3 w-32 h-32 text-teal-500/10 dark:text-teal-500/20 -rotate-12" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Affordable GLP-1s Are Coming to Canada
        </h1>

        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-3xl mx-auto">
          Canada's first affordable weight management platform. Launching February 2026 as generic semaglutide becomes available. $149/month, all-in.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors font-semibold text-lg shadow-lg shadow-teal-500/20"
          >
            Join Waitlist
          </button>
          <button
            onClick={() => scrollToSection('program')}
            className="px-8 py-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500/10 rounded-lg transition-colors font-semibold text-lg"
          >
            Learn More
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span>Licensed Canadian Doctors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span>Launching Feb 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
