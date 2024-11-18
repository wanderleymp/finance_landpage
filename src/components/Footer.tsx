import { Mail, Phone, Instagram, Twitter, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AgileFinance</h3>
            <p className="text-gray-400">
              Automação financeira inteligente para impulsionar seu negócio ao próximo nível.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/#features" className="text-gray-400 hover:text-white">Funcionalidades</Link></li>
              <li><Link to="/#plans" className="text-gray-400 hover:text-white">Planos</Link></li>
              <li><Link to="/#contact" className="text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Política de Privacidade</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Termos de Uso</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">contato@agilefinance.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">(69) 3301-7414</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">
                  Rua Buenos Aires, 1475<br />
                  CEP: 76820-137
                </span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AgileFinance. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;