import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'When do you launch?',
      answer: 'February 2026, timed with generic semaglutide availability in Canada.',
    },
    {
      question: 'How much will it cost?',
      answer: "$149/month all-in. That includes your consultation, prescription if appropriate, and ongoing physician support.",
    },
    {
      question: 'Who is eligible?',
      answer: 'Adults with BMI 27+ with weight-related health conditions, or BMI 30+. Final eligibility is determined by our physicians during consultation.',
    },
    {
      question: 'Is this legitimate?',
      answer: 'Yes. All prescriptions are written by licensed Canadian physicians. Medications are dispensed through licensed Canadian pharmacies.',
    },
    {
      question: 'Why is it so much cheaper?',
      answer: 'Generic medications, telehealth efficiency, and direct pharmacy partnerships. No middleman markup.',
    },
    {
      question: 'What provinces do you serve?',
      answer: 'Launching in Ontario, BC, and Alberta. More provinces coming soon.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <span className="text-lg font-semibold text-zinc-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
