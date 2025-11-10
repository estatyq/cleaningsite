import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Reviews } from './components/Reviews';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
