import { Link } from 'react-router-dom';
import { ArrowRight, Bot, BarChart3, Zap, RefreshCw } from 'lucide-react';
import Statistics from '../components/Statistics';
import AIFeatures from '../components/AIFeatures';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Automação Financeira Inteligente para o Seu Negócio
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Simplifique sua gestão financeira com o poder da inteligência artificial
              </p>
              <Link
                to="/waitlist"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para uma gestão financeira eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <Bot className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gestão Automatizada
              </h3>
              <p className="text-gray-600">
                Automatize suas finanças com inteligência artificial avançada
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Análise em Tempo Real
              </h3>
              <p className="text-gray-600">
                Acompanhe seus resultados com dashboards intuitivos
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Integrações Poderosas
              </h3>
              <p className="text-gray-600">
                Conecte-se com bancos, WhatsApp, Instagram e muito mais
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <RefreshCw className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Processos Otimizados
              </h3>
              <p className="text-gray-600">
                Simplifique suas operações com automação inteligente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <AIFeatures />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section id="cta" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar suas finanças?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre na lista de espera e seja um dos primeiros a experimentar o poder da automação financeira
          </p>
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
          >
            Entrar na Lista de Espera
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;