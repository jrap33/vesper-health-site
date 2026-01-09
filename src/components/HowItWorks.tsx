import { ListChecks, FileText, Video, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ListChecks,
      title: 'Join Waitlist',
      description: 'Secure early access and priority placement for February 2026',
    },
    {
      icon: FileText,
      title: 'Complete Assessment',
      description: "We'll notify you to fill out your health questionnaire before launch",
    },
    {
      icon: Video,
      title: 'Consult with Physician',
      description: 'Connect with a licensed Canadian doctor via secure video',
    },
    {
      icon: Zap,
      title: 'Start Treatment',
      description: 'Begin your personalized weight management program',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Four steps to get started
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500/20 via-teal-500 to-teal-500/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30 relative z-10">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-900 font-bold text-sm z-20">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
