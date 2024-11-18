import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    whatsapp: '',
    businessNeeds: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically send this data to your backend
      // For now, we'll just simulate sending an email
      console.log('Form submitted:', formData);
      console.log('Email would be sent to: contato@agilefinance.com.br');
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Agradecemos seu interesse!</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Sua inscrição na lista de espera do AgileFinance foi confirmada com sucesso.
            </p>
            <p>
              Em breve, nossa equipe entrará em contato através do WhatsApp para entender melhor suas necessidades e apresentar como podemos ajudar sua empresa.
            </p>
            <p className="text-sm text-gray-500">
              Fique atento ao seu WhatsApp e e-mail para novidades exclusivas!
            </p>
          </div>
          <a
            href="/"
            className="inline-flex items-center mt-8 text-blue-600 hover:text-blue-800 font-medium"
          >
            Voltar para a página inicial
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Lista de Espera Exclusiva</h2>
        <p className="text-gray-600 mb-8">
          Estamos selecionando empresas para serem as primeiras a experimentar o poder da automação financeira inteligente.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu nome completo"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail Profissional
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Empresa
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nome da sua empresa"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
              WhatsApp
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(69) 99999-9999"
            />
          </div>
          
          <div>
            <label htmlFor="businessNeeds" className="block text-sm font-medium text-gray-700 mb-2">
              Quais são seus principais desafios na gestão financeira?
            </label>
            <textarea
              id="businessNeeds"
              name="businessNeeds"
              value={formData.businessNeeds}
              onChange={handleChange}
              required
              rows={4}
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Conte-nos sobre suas necessidades e objetivos..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Entrar na Lista de Espera
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Ao se inscrever, você concorda em receber comunicações sobre o AgileFinance.
            Seus dados estão seguros conosco.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;