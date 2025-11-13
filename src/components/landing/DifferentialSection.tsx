import { Check } from "lucide-react";

const DifferentialSection = () => {
  const benefits = [
    "O ritmo natural do seu bebê",
    "O vínculo entre vocês",
    "Sua intuição de mãe",
    "A ciência do sono infantil"
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--gradient-soft)]">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-foreground">
              O que torna o Método Sono do Amor diferente?
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Aqui, <strong>não há choro controlado, nem abandono emocional.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
            {/* Benefits */}
            <div>
              <p className="text-lg text-foreground/70 mb-8">
                É um método que respeita:
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-6 rounded-xl bg-white border-2 border-pink-200 shadow-lg hover:shadow-2xl hover:border-pink-300 transition-all hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shadow-md">
                      <Check className="w-6 h-6 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-gray-800">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagem mãe e bebê */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-glow)] border-4 border-secondary/30">
                <img 
                  src="/mamãe (1).png" 
                  alt="Mãe e bebê dormindo juntos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Statement com mais contraste */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-300 shadow-lg">
            <p className="text-lg md:text-xl text-gray-800 font-semibold leading-relaxed">
              Você vai ensinar seu bebê a dormir <strong className="text-pink-600">com segurança, carinho e consistência</strong> do jeito que funciona de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
