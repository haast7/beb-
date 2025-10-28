import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Termos de Uso - Haast Marketing de Performance',
  description: 'Termos de Uso da Haast - Infraestrutura Digital de Alta Performance para clínicas e laboratórios. Conheça nossas condições de uso e políticas.',
  keywords: 'termos de uso, haast, marketing digital, clínicas, laboratórios, infraestrutura digital',
  openGraph: {
    title: 'Termos de Uso - Haast Marketing de Performance',
    description: 'Termos de Uso da Haast - Infraestrutura Digital de Alta Performance para clínicas e laboratórios.',
    type: 'website',
    url: 'https://haast.com.br/termos',
  },
  alternates: {
    canonical: 'https://haast.com.br/termos',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://haast.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Termos de Uso",
      "item": "https://haast.com.br/termos"
    }
  ]
};

export default function TermosPage() {
  return (
    <>
      <JsonLd json={breadcrumbSchema} />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-haast-primary to-haast-black-graphite">
          {/* Background com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-haast-primary to-haast-black-graphite" />
          
          {/* Elementos decorativos */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-haast-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-haast-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Termos de Uso
              </h1>
              <p className="text-white/90 text-lg">
                Última atualização: Outubro de 2025
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-gray max-w-none">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    1. INFORMAÇÕES GERAIS
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Bem-vindo ao site da <strong>Haast – Infraestrutura Digital de Alta Performance</strong>.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Estes Termos de Uso regulam o acesso e a utilização do site haast.com.br e de todos os serviços digitais oferecidos pela empresa.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Dados da Empresa:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Razão Social:</strong> Haast LTDA</li>
                      <li><strong>CNPJ:</strong> 49.810.921/0001-09</li>
                      <li><strong>Telefone:</strong> +55 77 9180-5013</li>
                      <li><strong>E-mail:</strong> contato@haast.com.br</li>
                      <li><strong>Endereço:</strong> Av Juracy Magalhães - Bairro Felícia - Quadra 07, Lote 3340 A, Sala 1210</li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-700">
                    Ao acessar ou utilizar qualquer parte deste site, você concorda integralmente com estes Termos de Uso. Caso não concorde com alguma cláusula, recomendamos que não utilize nossos serviços.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    2. DEFINIÇÕES
                  </h2>
                  <p className="text-gray-700 mb-4">Para fins destes Termos de Uso, consideram-se:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Usuário:</h3>
                      <p className="text-gray-700">Qualquer pessoa que acesse ou utilize o site haast.com.br, seja como visitante, lead ou cliente contratante.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cliente:</h3>
                      <p className="text-gray-700">Pessoa física ou jurídica que contrata formalmente os serviços da Haast mediante proposta comercial assinada.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Serviços:</h3>
                      <p className="text-gray-700">Serviços de marketing digital, gestão de tráfego pago, criação de landing pages, desenvolvimento web, consultoria estratégica, treinamento comercial e demais soluções oferecidas pela Haast.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Conteúdo:</h3>
                      <p className="text-gray-700">Textos, imagens, vídeos, códigos, designs, layouts, logotipos e qualquer material publicado no site ou fornecido durante a prestação de serviços.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Plataforma:</h3>
                      <p className="text-gray-700">O site haast.com.br e todas as suas páginas, ferramentas, formulários e funcionalidades.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    3. ACEITAÇÃO DOS TERMOS
                  </h2>
                  <p className="text-gray-700 mb-4">Ao navegar no site, preencher formulários, solicitar diagnósticos, agendar reuniões ou contratar serviços, você declara que:</p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Leu, compreendeu e concorda com estes Termos de Uso;</li>
                    <li>Tem capacidade jurídica para assumir obrigações;</li>
                    <li>Fornecerá informações verdadeiras, precisas e atualizadas;</li>
                    <li>É responsável pela confidencialidade de suas credenciais de acesso (quando aplicável).</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    A Haast reserva-se o direito de modificar estes Termos a qualquer momento. Alterações entrarão em vigor imediatamente após publicação no site. O uso continuado da plataforma após modificações implica aceitação dos novos termos.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    4. SERVIÇOS OFERECIDOS
                  </h2>
                  <p className="text-gray-700 mb-6">
                    A Haast é uma agência especializada em infraestrutura digital e marketing de performance para clínicas e laboratórios, oferecendo:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1. Gestão de Tráfego Pago</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Criação e gestão de campanhas no Google Ads (Pesquisa, Display, YouTube)</li>
                        <li>Criação e gestão de campanhas no Meta Ads (Facebook e Instagram)</li>
                        <li>Otimização contínua de campanhas com foco em ROI</li>
                        <li>Implementação de tracking avançado (Pixel, Conversões API, GTM)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2. Infraestrutura Digital</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Desenvolvimento de landing pages de alta conversão</li>
                        <li>Implementação de ferramentas de tracking e análise</li>
                        <li>Configuração de automações de marketing</li>
                        <li>Otimização de sites para performance e conversão</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3. Criação de Conteúdo</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Peças criativas para redes sociais</li>
                        <li>Copy persuasiva orientada a conversão</li>
                        <li>Materiais para campanhas de tráfego pago</li>
                        <li>Identidade visual para campanhas</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4. Consultoria e Treinamento</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Treinamento de equipes comerciais</li>
                        <li>Scripts de vendas para WhatsApp</li>
                        <li>Playbooks de atendimento</li>
                        <li>Consultoria estratégica mensal</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.5. Gestão e Relatórios</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Relatórios de performance semanais ou mensais</li>
                        <li>Acesso transparente às contas de anúncio</li>
                        <li>Reuniões estratégicas periódicas</li>
                        <li>Suporte via WhatsApp e Trello</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                    <p className="text-blue-800 font-medium">
                      <strong>Importante:</strong> Os serviços específicos contratados, prazos, valores e condições serão formalizados mediante proposta comercial individual e contrato de prestação de serviços.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    5. CADASTRO E RESPONSABILIDADES DO USUÁRIO
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1. Informações Fornecidas</h3>
                      <p className="text-gray-700 mb-3">Ao preencher formulários ou solicitar contato, você se compromete a:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Fornecer dados verdadeiros, completos e atualizados</li>
                        <li>Manter suas informações de contato válidas</li>
                        <li>Não utilizar identidade falsa ou de terceiros</li>
                        <li>Não fornecer informações que violem direitos de terceiros</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2. Uso Adequado da Plataforma</h3>
                      <p className="text-gray-700 mb-3">É vedado ao usuário:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Utilizar a plataforma para fins ilícitos ou não autorizados</li>
                        <li>Tentar acessar áreas restritas sem permissão</li>
                        <li>Interferir no funcionamento do site ou servidores</li>
                        <li>Extrair dados através de robôs, scrapers ou métodos automatizados</li>
                        <li>Reproduzir, distribuir ou modificar conteúdos sem autorização expressa</li>
                        <li>Transmitir vírus, malware ou qualquer código malicioso</li>
                        <li>Utilizar a plataforma para spam, phishing ou fraudes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3. Consequências de Uso Inadequado</h3>
                      <p className="text-gray-700 mb-3">A Haast reserva-se o direito de:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Suspender ou cancelar acesso de usuários que violem estes termos</li>
                        <li>Remover conteúdos inadequados ou ofensivos</li>
                        <li>Reportar atividades ilegais às autoridades competentes</li>
                        <li>Tomar medidas legais cabíveis para ressarcimento de danos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    6. PROPRIEDADE INTELECTUAL
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1. Direitos da Haast</h3>
                      <p className="text-gray-700 mb-3">Todos os elementos do site haast.com.br são protegidos por direitos autorais, incluindo:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Marca "Haast" e logotipos</li>
                        <li>Layout, design e identidade visual</li>
                        <li>Textos, imagens e vídeos publicados</li>
                        <li>Códigos-fonte e estrutura do site</li>
                        <li>Metodologias e processos proprietários</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        É proibida a reprodução, distribuição, modificação ou uso comercial de qualquer conteúdo sem autorização prévia por escrito.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2. Direitos dos Clientes</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Materiais criados para campanhas:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Peças criativas (artes de redes sociais, banners, etc.) pertencem ao cliente após quitação do pagamento</li>
                            <li>Landing pages desenvolvidas podem ser transferidas ao cliente conforme contrato</li>
                            <li>Códigos de tracking e configurações técnicas podem ser exportados</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Materiais que permanecem propriedade da Haast:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Metodologias, processos e frameworks internos</li>
                            <li>Templates base e estruturas reutilizáveis</li>
                            <li>Dashboards e ferramentas proprietárias</li>
                            <li>Playbooks e materiais de treinamento (fornecidos em licença de uso)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3. Licença de Uso de Imagem</h3>
                      <p className="text-gray-700 mb-3">Ao contratar nossos serviços, o cliente autoriza a Haast a:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Utilizar resultados obtidos como prova social (dados anonimizados)</li>
                        <li>Publicar peças criativas em portfólio (salvo solicitação contrária expressa)</li>
                        <li>Mencionar a parceria em materiais de marketing (sem divulgar dados sensíveis)</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        O cliente pode solicitar a não divulgação de sua marca mediante aviso por escrito.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    7. POLÍTICA DE PRIVACIDADE
                  </h2>
                  <p className="text-gray-700 mb-4">
                    O tratamento de dados pessoais coletados através do site segue nossa <strong>Política de Privacidade</strong>, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1. Dados Coletados</h3>
                      <p className="text-gray-700 mb-3">Podemos coletar:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Nome completo, e-mail, telefone</li>
                        <li>Nome da empresa, cargo, segmento</li>
                        <li>Endereço IP, cookies, dados de navegação</li>
                        <li>Informações fornecidas voluntariamente em formulários</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2. Finalidade</h3>
                      <p className="text-gray-700 mb-3">Os dados são utilizados para:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Responder solicitações de contato</li>
                        <li>Enviar propostas comerciais</li>
                        <li>Prestar serviços contratados</li>
                        <li>Melhorar a experiência do usuário</li>
                        <li>Enviar comunicações de marketing (com opt-in)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3. Compartilhamento</h3>
                      <p className="text-gray-700 mb-3">Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros, exceto:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Quando necessário para prestação de serviços (ex: plataformas de anúncios)</li>
                        <li>Por exigência legal ou ordem judicial</li>
                        <li>Com consentimento expresso do titular</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4. Direitos do Titular</h3>
                      <p className="text-gray-700 mb-3">Você tem direito a:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Confirmar existência de tratamento de seus dados</li>
                        <li>Acessar seus dados pessoais</li>
                        <li>Corrigir dados incompletos ou desatualizados</li>
                        <li>Solicitar anonimização, bloqueio ou eliminação</li>
                        <li>Revogar consentimento a qualquer momento</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        Para exercer seus direitos, entre em contato através de: <strong>contato@haast.com.br</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    8. COOKIES E TECNOLOGIAS DE RASTREAMENTO
                  </h2>
                  <p className="text-gray-700 mb-6">
                    O site haast.com.br utiliza cookies e tecnologias similares para melhorar a experiência do usuário.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1. Tipos de Cookies Utilizados</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">Cookies essenciais:</h4>
                          <p className="text-gray-700">Necessários para funcionamento básico do site (não podem ser desativados)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Cookies de desempenho:</h4>
                          <p className="text-gray-700">Google Analytics para análise de tráfego e comportamento</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Cookies de marketing:</h4>
                          <p className="text-gray-700">Meta Pixel, Google Ads para remarketing e otimização de campanhas</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Cookies de terceiros:</h4>
                          <p className="text-gray-700">Integração com plataformas de CRM, agendamento e comunicação</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2. Gerenciamento de Cookies</h3>
                      <p className="text-gray-700 mb-3">Você pode gerenciar preferências de cookies através:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Do banner de consentimento ao acessar o site</li>
                        <li>Das configurações do seu navegador</li>
                        <li>De ferramentas de opt-out de plataformas (Google, Meta)</li>
                      </ul>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                        <p className="text-yellow-800 font-medium">
                          <strong>Importante:</strong> Desabilitar cookies pode limitar funcionalidades do site.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    9. ISENÇÃO DE GARANTIAS E LIMITAÇÃO DE RESPONSABILIDADE
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1. Disponibilidade do Site</h3>
                      <p className="text-gray-700 mb-3">A Haast se esforça para manter o site disponível 24/7, mas não garante:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Funcionamento ininterrupto ou livre de erros</li>
                        <li>Ausência de vírus ou componentes nocivos</li>
                        <li>Compatibilidade com todos os dispositivos e navegadores</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        Podemos suspender, modificar ou descontinuar funcionalidades a qualquer momento.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2. Resultados de Marketing</h3>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <p className="text-red-800 font-medium mb-3">
                          <strong>Importante:</strong> A Haast não garante resultados específicos de campanhas de marketing, pois estes dependem de múltiplos fatores:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-red-700">
                          <li>Qualidade do produto/serviço do cliente</li>
                          <li>Competitividade do mercado</li>
                          <li>Orçamento investido em mídia paga</li>
                          <li>Sazonalidade e fatores externos</li>
                          <li>Qualidade do atendimento comercial do cliente</li>
                        </ul>
                        <p className="text-red-800 mt-3">
                          Fornecemos melhor esforço técnico, processos comprovados e transparência total, mas ROI não pode ser garantido contratualmente.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3. Conteúdo de Terceiros</h3>
                      <p className="text-gray-700 mb-3">O site pode conter links para sites externos. Não somos responsáveis por:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Conteúdo, precisão ou práticas de sites de terceiros</li>
                        <li>Produtos ou serviços oferecidos por terceiros</li>
                        <li>Danos decorrentes do uso de recursos externos</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.4. Limitação de Responsabilidade</h3>
                      <p className="text-gray-700 mb-3">Dentro dos limites legais, a Haast não se responsabiliza por:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Danos indiretos, incidentais ou consequentes</li>
                        <li>Perda de lucros, receita ou oportunidades de negócio</li>
                        <li>Interrupção de serviços por caso fortuito ou força maior</li>
                        <li>Ações de terceiros (hackers, ataques DDoS, etc.)</li>
                        <li>Uso inadequado da plataforma pelo usuário</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    10. CONDIÇÕES COMERCIAIS
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1. Propostas e Contratos</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Propostas comerciais têm validade especificada no documento</li>
                        <li>Serviços são formalizados mediante contrato assinado</li>
                        <li>Pagamentos seguem condições acordadas na proposta</li>
                        <li>Prazos de entrega são estimativas e podem variar</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2. Política de Cancelamento</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Condições de cancelamento são especificadas no contrato individual</li>
                        <li>Clientes devem comunicar cancelamento por escrito com antecedência</li>
                        <li>Serviços já executados ou materiais entregues são cobrados proporcionalmente</li>
                        <li>Investimento em mídia paga não é reembolsável</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">10.3. Responsabilidades do Cliente</h3>
                      <p className="text-gray-700 mb-3">Para execução adequada dos serviços, o cliente deve:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Fornecer informações, acessos e materiais necessários nos prazos acordados</li>
                        <li>Aprovar materiais criativos e estratégias dentro dos prazos estipulados</li>
                        <li>Manter comunicação ativa e responsiva</li>
                        <li>Seguir orientações técnicas e comerciais fornecidas</li>
                        <li>Respeitar prazos de pagamento</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        O não cumprimento dessas obrigações pode impactar prazos e resultados.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    11. COMUNICAÇÕES
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1. Canais Oficiais</h3>
                      <p className="text-gray-700 mb-3">Comunicações oficiais da Haast ocorrem através de:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>E-mail institucional: contato@haast.com.br</li>
                        <li>WhatsApp: +55 77 9180-5013</li>
                        <li>Plataformas especificadas em contrato (Trello, etc.)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">11.2. Notificações</h3>
                      <p className="text-gray-700 mb-3">Ao fornecer seus dados de contato, você concorda em receber:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Respostas às suas solicitações</li>
                        <li>Propostas comerciais</li>
                        <li>Comunicações relacionadas a serviços contratados</li>
                        <li>Materiais educativos e newsletters (com opção de descadastro)</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        Você pode solicitar a interrupção de comunicações de marketing a qualquer momento através do link de descadastro ou por e-mail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    12. LEI APLICÁVEL E FORO
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
                  </p>
                  <p className="text-gray-700">
                    Para solução de controvérsias decorrentes destes Termos, as partes elegem o foro da comarca de Vitória da Conquista-BA, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    13. DISPOSIÇÕES GERAIS
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1. Integralidade</h3>
                      <p className="text-gray-700">
                        Estes Termos, juntamente com a Política de Privacidade e contratos individuais, constituem o acordo integral entre usuário e Haast.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">13.2. Independência das Cláusulas</h3>
                      <p className="text-gray-700">
                        Caso qualquer disposição seja considerada inválida, as demais cláusulas permanecerão em pleno vigor.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">13.3. Não Renúncia</h3>
                      <p className="text-gray-700">
                        A tolerância quanto ao descumprimento de qualquer cláusula não constitui renúncia de direitos.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">13.4. Cessão</h3>
                      <p className="text-gray-700">
                        O usuário não pode transferir direitos ou obrigações sem autorização prévia da Haast.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">13.5. Contato para Dúvidas</h3>
                      <p className="text-gray-700 mb-3">Para esclarecimentos sobre estes Termos de Uso:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>E-mail: contato@haast.com.br</li>
                        <li>Telefone: +55 77 9180-5013</li>
                        <li>Site: haast.com.br</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    14. CONSENTIMENTO
                  </h2>
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <p className="text-lg font-semibold mb-4">
                      AO UTILIZAR O SITE HAAST.COM.BR, VOCÊ DECLARA QUE LEU, COMPREENDEU E CONCORDA INTEGRALMENTE COM ESTES TERMOS DE USO E COM NOSSA POLÍTICA DE PRIVACIDADE.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-haast-black-graphite mb-4">
                      Haast – Infraestrutura Digital de Alta Performance
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>CNPJ: 49.810.921/0001-09</p>
                      <p>contato@haast.com.br | +55 77 9180-5013</p>
                      <p>haast.com.br</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 italic">
                      Documento atualizado em outubro de 2025
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
