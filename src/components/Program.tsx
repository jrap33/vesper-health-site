import { ClipboardCheck, Package, Activity, Heart } from 'lucide-react';

export default function Program() {
  const features = [
    {
      icon: ClipboardCheck,
      title: 'Medical Assessment',
      description: 'Comprehensive evaluation by licensed Canadian physicians to determine eligibility',
    },
    {
      icon: Package,
      title: 'Prescription & Delivery',
      description: 'GLP-1 medication prescribed if appropriate, delivered to your door',
    },
    {
      icon: Activity,
      title: 'Ongoing Monitoring',
      description: 'Regular check-ins to track progress and adjust treatment as needed',
    },
    {
      icon: Heart,
      title: 'Lifestyle Guidance',
      description: 'Support for nutrition and exercise to maximize your results',
    },
  ];

  return (
    <section id="program" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Our Program
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Comprehensive care, not just a prescription
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
