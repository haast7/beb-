import { Heart } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Não dorme mais de 2 horas seguidas há semanas (ou meses)",
    "Já tentou de tudo, mas nada funcionou de verdade",
    "Sente que está falhando como mãe porque \"todo mundo dorme, menos o seu bebê\"",
    "Tem medo de usar métodos que deixam o bebê chorando sozinho",
    "Está esgotada, mas não sabe mais o que fazer"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem do bebê */}
            <div className="order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-glow)] border-4 border-primary/20">
                <img 
                  src="/bebê.png" 
                  alt="Bebê dormindo tranquilamente"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="order-1 md:order-2">
              {/* Icon */}
              <div className="flex justify-center md:justify-start mb-6">
                <Heart className="w-10 h-10 text-primary fill-primary/20" />
              </div>

              {/* Heading */}
              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-foreground text-center md:text-left">
                Você está exausta. E se sente culpada por isso.
              </h2>

              {/* Problem List */}
              <div className="mb-8">
                <p className="mb-6 text-lg text-foreground/80">
                  Se você está lendo isso agora, provavelmente:
                </p>
                
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-base text-foreground/70"
                    >
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empathy Statement com mais contraste */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-300 shadow-xl">
                <p className="text-xl font-bold text-gray-800 mb-3">
                  Eu te entendo. E você não está sozinha.
                </p>
                <p className="text-lg text-pink-600 font-bold">
                  A boa notícia? Não precisa ser assim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
