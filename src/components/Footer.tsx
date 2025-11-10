import { Sparkles, Facebook, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-xl">БлискКлінінг</span>
            </div>
            <p className="text-gray-400 text-sm">
              Професійні послуги прибирання для вашого комфорту та чистоти
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Послуги</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Прибирання квартир</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Прибирання офісів</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Генеральне прибирання</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Миття вікон</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Компанія</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#benefits" className="hover:text-white transition-colors">Про нас</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Відгуки</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакти</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вакансії</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Контакти</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+380123456789" className="hover:text-white transition-colors">
                  +380 (12) 345-67-89
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@bliskcleaning.ua" className="hover:text-white transition-colors">
                  info@bliskcleaning.ua
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} БлискКлінінг. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
