export default function CTABanner() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 bg-teal-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Be First in Line
        </h2>
        <p className="text-xl text-teal-50 mb-8 leading-relaxed">
          Waitlist members get early access and priority scheduling when we launch.
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-colors font-semibold text-lg shadow-xl"
        >
          Join Waitlist
        </button>
      </div>
    </section>
  );
}
