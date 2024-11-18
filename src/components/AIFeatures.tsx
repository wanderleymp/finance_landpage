import { Brain, Sparkles, LineChart, Shield } from 'lucide-react';

const AIFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recursos Impulsionados por IA
          </h2>
          <p className="text-xl text-gray-600">
            Tecnologia de ponta para revolucionar sua gestão financeira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Brain className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Análise Preditiva Avançada
            </h3>
            <p className="text-gray-600">
              Previsões precisas de fluxo de caixa e tendências financeiras baseadas em machine learning,
              permitindo tomadas de decisão mais assertivas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Sparkles className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Automação Inteligente de Processos
            </h3>
            <p className="text-gray-600">
              Reconhecimento automático de documentos e categorização de transações usando
              processamento de linguagem natural.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <LineChart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Insights Personalizados
            </h3>
            <p className="text-gray-600">
              Recomendações customizadas para otimização de custos e oportunidades de
              investimento baseadas no perfil da sua empresa.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Detecção de Fraudes
            </h3>
            <p className="text-gray-600">
              Sistema avançado de detecção de anomalias e prevenção de fraudes
              utilizando algoritmos de machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;