import { Mail, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="w-14 h-14 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-teal-500" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
              General Inquiries
            </h3>
            <a
              href="mailto:jonathan@projectnorthhealth.com"
              className="text-lg text-teal-500 hover:text-teal-600 transition-colors"
            >
              jonathan@projectnorthhealth.com
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="w-14 h-14 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7 text-teal-500" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
              Partnership & Investment Inquiries
            </h3>
            <a
              href="mailto:jonathan@projectnorthhealth.com"
              className="text-lg text-teal-500 hover:text-teal-600 transition-colors"
            >
              jonathan@projectnorthhealth.com
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-zinc-600 dark:text-zinc-400">
            We respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
