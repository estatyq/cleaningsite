import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const reviews = [
  {
    name: 'Олена Коваленко',
    rating: 5,
    text: 'Чудова робота! Квартира сяє чистотою. Дуже уважні до деталей. Обов\'язково замовлю знову!',
    date: '2 тижні тому',
    initials: 'ОК',
  },
  {
    name: 'Андрій Петренко',
    rating: 5,
    text: 'Професійна команда, приїхали вчасно. Після ремонту квартира була в жахливому стані, але вони впоралися на відмінно!',
    date: '1 місяць тому',
    initials: 'АП',
  },
  {
    name: 'Марина Сидорчук',
    rating: 5,
    text: 'Замовляю послуги регулярно для прибирання офісу. Завжди якісно, акуратно та в строк. Рекомендую!',
    date: '3 тижні тому',
    initials: 'МС',
  },
  {
    name: 'Володимир Шевченко',
    rating: 5,
    text: 'Відмінне генеральне прибирання! Почистили навіть те, про що я й не думав. Ціна адекватна якості.',
    date: '1 тиждень тому',
    initials: 'ВШ',
  },
  {
    name: 'Тетяна Бондаренко',
    rating: 5,
    text: 'Дуже задоволена хімчисткою дивану. Виглядає як новий! Дякую за професійність!',
    date: '2 місяці тому',
    initials: 'ТБ',
  },
  {
    name: 'Ігор Мельник',
    rating: 5,
    text: 'Замовляв миття вікон у новобудові. Швидко, якісно, без розлучень. Дякую команді!',
    date: '3 тижні тому',
    initials: 'ІМ',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Відгуки наших клієнтів
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Нам довіряють тисячі клієнтів по всій Україні
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-blue-600 text-white">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
