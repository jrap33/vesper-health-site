import { Star } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-teal-500 fill-teal-500" />
            <span className="text-xl font-bold text-zinc-900 dark:text-white">
              Vesper Health
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('program')}
              className="text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>

        <div className="text-center text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
          <p>For partnership inquiries: jonathan@projectnorthhealth.com</p>
          <p>© 2026 Vesper Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
