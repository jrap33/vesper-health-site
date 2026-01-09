import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Opportunity from './components/Opportunity';
import Program from './components/Program';
import HowItWorks from './components/HowItWorks';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Opportunity />
        <Program />
        <HowItWorks />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
