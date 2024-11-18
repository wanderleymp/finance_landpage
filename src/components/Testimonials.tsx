import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO, TechSolutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'O AgileFinance revolucionou nossa gestão financeira. A automação inteligente economiza horas de trabalho manual.',
    rating: 5
  },
  {
    name: 'Ana Martins',
    role: 'CFO, Inovare',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'A análise preditiva nos ajudou a tomar decisões mais assertivas. Os insights gerados pela IA são impressionantes.',
    rating: 5
  },
  {
    name: 'Roberto Santos',
    role: 'Diretor Financeiro, GrowthCorp',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
    content: 'As integrações automáticas e o processamento inteligente de documentos tornaram nossa operação muito mais eficiente.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Empresas que transformaram sua gestão financeira com o AgileFinance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;