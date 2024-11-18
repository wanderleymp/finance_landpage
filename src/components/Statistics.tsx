import { Users, TrendingUp, Building2, Award } from 'lucide-react';

const Statistics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">10k+</h3>
            <p className="text-gray-600">Usuários Ativos</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">85%</h3>
            <p className="text-gray-600">Redução em Erros</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Building2 className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">5000+</h3>
            <p className="text-gray-600">Empresas Atendidas</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">Satisfação dos Clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;