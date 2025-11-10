import { Home, Building2, Sparkles, Square, Sofa, Droplet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Home,
    title: 'Прибирання квартир',
    description: 'Комплексне прибирання вашої квартири з використанням професійного обладнання',
    features: ['Вологе прибирання', 'Миття вікон', 'Чистка меблів'],
  },
  {
    icon: Building2,
    title: 'Прибирання офісів',
    description: 'Підтримка чистоти у ваших офісних приміщеннях для комфортної роботи',
    features: ['Щоденне прибирання', 'Дезінфекція', 'Прибирання після ремонту'],
  },
  {
    icon: Sparkles,
    title: 'Генеральне прибирання',
    description: 'Глибоке очищення всіх приміщень, включаючи важкодоступні місця',
    features: ['Повне прибирання', 'Чистка всіх поверхонь', 'Миття люстр'],
  },
  {
    icon: Square,
    title: 'Миття вікон',
    description: 'Професійне миття вікон з обох сторін на будь-якій висоті',
    features: ['Зовнішнє миття', 'Внутрішнє миття', 'Чистка підвіконь'],
  },
  {
    icon: Sofa,
    title: 'Хімчистка меблів',
    description: 'Глибока очистка меблів та килимів з професійним обладнанням',
    features: ['М\'які меблі', 'Килими', 'Матраци'],
  },
  {
    icon: Droplet,
    title: 'Прибирання після ремонту',
    description: 'Очищення приміщень після ремонтних робіт від будівельного пилу',
    features: ['Видалення пилу', 'Миття всіх поверхонь', 'Полірування'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Наші послуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ми пропонуємо широкий спектр клінінгових послуг для дому та бізнесу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
