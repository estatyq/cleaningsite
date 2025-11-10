import { Sparkles, Phone, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-2xl text-gray-900">БлискКлінінг</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Послуги
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Переваги
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Відгуки
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Контакти
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+380123456789" className="flex items-center gap-2 text-blue-600">
              <Phone className="w-5 h-5" />
              <span>+380 (12) 345-67-89</span>
            </a>
            <Button onClick={() => scrollToSection('contact')}>
              Замовити
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Послуги
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Переваги
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Відгуки
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Контакти
              </button>
              <a href="tel:+380123456789" className="flex items-center gap-2 text-blue-600">
                <Phone className="w-5 h-5" />
                <span>+380 (12) 345-67-89</span>
              </a>
              <Button onClick={() => scrollToSection('contact')} className="w-full">
                Замовити
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
