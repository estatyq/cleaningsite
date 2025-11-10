import { Shield, Clock, Award, ThumbsUp, Users, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  {
    icon: Shield,
    title: 'Гарантія якості',
    description: 'Повернемо кошти, якщо ви не задоволені результатом',
  },
  {
    icon: Clock,
    title: 'Пунктуальність',
    description: 'Завжди приїжджаємо вчасно та дотримуємось графіку',
  },
  {
    icon: Award,
    title: 'Професіоналізм',
    description: 'Наші співробітники пройшли спеціальне навчання',
  },
  {
    icon: ThumbsUp,
    title: 'Досвід',
    description: 'Понад 5 років успішної роботи на ринку',
  },
  {
    icon: Users,
    title: 'Індивідуальний підхід',
    description: 'Врахуємо всі ваші побажання та особливості',
  },
  {
    icon: Leaf,
    title: 'Екологічність',
    description: 'Використовуємо безпечні та екологічні засоби',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gray-900 mb-6">
              Чому обирають нас
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ми прагнемо забезпечити найвищу якість послуг та комфорт для наших клієнтів
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-2 animate-fadeInUp transition-smooth hover:scale-105" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scaleIn">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-smooth hover:shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758523670634-df4e12ed7a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGhvbWV8ZW58MXx8fHwxNzYyNjgwODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Чистий дім"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
