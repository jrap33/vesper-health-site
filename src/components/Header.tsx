import { Star, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-teal-500 fill-teal-500" />
            <span className="text-xl font-bold text-zinc-900 dark:text-white">
              Vesper Health
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
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
            <button
              onClick={() => scrollToSection('contact')}
              className="text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              For Partners
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors font-medium"
            >
              Join Waitlist
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-zinc-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('program')}
              className="text-left text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              For Partners
            </button>
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                onClick={toggleTheme}
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex-1 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors font-medium"
              >
                Join Waitlist
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
