import { Calendar, TrendingDown, Users } from 'lucide-react';

export default function Opportunity() {
  const opportunities = [
    {
      icon: Calendar,
      title: 'Patent Expiry',
      description: 'Generic semaglutide becomes available in Canada early 2026, breaking the brand-name monopoly',
    },
    {
      icon: TrendingDown,
      title: 'Price Gap',
      description: "Canadians currently pay $300+/month. We're targeting $149/month through generics and telehealth efficiency.",
    },
    {
      icon: Users,
      title: 'Unmet Demand',
      description: 'Millions of Canadians could benefit from medical weight management but have been priced out',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Why Now
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            A rare market window is opening
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
