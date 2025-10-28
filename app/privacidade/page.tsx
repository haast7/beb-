import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Haast Marketing de Performance',
  description: 'Política de Privacidade da Haast - Conheça como protegemos e tratamos seus dados pessoais em conformidade com a LGPD.',
  keywords: 'política de privacidade, haast, lgpd, proteção de dados, privacidade, dados pessoais',
  openGraph: {
    title: 'Política de Privacidade - Haast Marketing de Performance',
    description: 'Política de Privacidade da Haast - Conheça como protegemos e tratamos seus dados pessoais em conformidade com a LGPD.',
    type: 'website',
    url: 'https://haast.com.br/privacidade',
  },
  alternates: {
    canonical: 'https://haast.com.br/privacidade',
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
      "name": "Política de Privacidade",
      "item": "https://haast.com.br/privacidade"
    }
  ]
};

export default function PrivacidadePage() {
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
                Política de Privacidade
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
                    A <strong>Haast LTDA</strong>, inscrita no CNPJ sob o nº <strong>49.810.921/0001-09</strong>, com sede na <strong>Av Juracy Magalhães - Bairro Felícia - Quadra 07, Lote 3340 A, Sala 1210, Vitória da Conquista/BA</strong>, está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários, clientes e visitantes.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais, em total conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)</strong> e demais legislações aplicáveis.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Dados de Contato</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Razão Social:</strong> Haast LTDA</li>
                      <li><strong>CNPJ:</strong> 49.810.921/0001-09</li>
                      <li><strong>Endereço:</strong> Av Juracy Magalhães - Bairro Felícia - Quadra 07, Lote 3340 A, Sala 1210, Vitória da Conquista/BA</li>
                      <li><strong>Telefone:</strong> +55 77 9180-5013</li>
                      <li><strong>E-mail:</strong> contato@haast.com.br</li>
                      <li><strong>Website:</strong> haast.com.br</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Encarregado de Dados (DPO)</h3>
                    <p className="text-gray-700 mb-2">Para questões relacionadas à proteção de dados pessoais:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li><strong>E-mail do DPO:</strong> privacidade@haast.com.br</li>
                      <li><strong>Telefone:</strong> +55 77 9180-5013</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    2. DEFINIÇÕES
                  </h2>
                  <p className="text-gray-700 mb-4">Para fins desta Política, considera-se:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Dados Pessoais:</h3>
                      <p className="text-gray-700">Qualquer informação relacionada a pessoa natural identificada ou identificável (nome, e-mail, telefone, CPF, etc.).</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Dados Sensíveis:</h3>
                      <p className="text-gray-700">Dados pessoais sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato, dados referentes à saúde ou à vida sexual, dado genético ou biométrico (quando aplicável).</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Titular dos Dados:</h3>
                      <p className="text-gray-700">Pessoa natural a quem se referem os dados pessoais.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tratamento:</h3>
                      <p className="text-gray-700">Toda operação realizada com dados pessoais (coleta, armazenamento, uso, compartilhamento, eliminação, etc.).</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Controlador:</h3>
                      <p className="text-gray-700">A Haast LTDA, que toma decisões sobre o tratamento de dados pessoais.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Operador:</h3>
                      <p className="text-gray-700">Pessoa física ou jurídica que realiza tratamento de dados em nome do Controlador.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Consentimento:</h3>
                      <p className="text-gray-700">Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    3. DADOS PESSOAIS COLETADOS
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1. Dados Fornecidos Diretamente pelo Usuário</h3>
                      <p className="text-gray-700 mb-4">Coletamos dados pessoais que você fornece voluntariamente ao:</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Preencher formulários de contato:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Nome completo</li>
                            <li>E-mail</li>
                            <li>Telefone/WhatsApp</li>
                            <li>Nome da empresa</li>
                            <li>Cargo/função</li>
                            <li>Segmento de atuação</li>
                            <li>Mensagem/descrição da necessidade</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solicitar propostas ou diagnósticos:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Dados profissionais</li>
                            <li>Informações sobre seu negócio</li>
                            <li>Objetivos e desafios</li>
                            <li>Faturamento estimado (quando aplicável)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Contratar serviços:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Dados cadastrais completos</li>
                            <li>CNPJ/CPF</li>
                            <li>Endereço comercial</li>
                            <li>Dados bancários (para faturamento)</li>
                            <li>Documentos necessários para formalização</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Comunicar-se conosco:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Histórico de conversas (e-mail, WhatsApp, Trello)</li>
                            <li>Preferências de comunicação</li>
                            <li>Feedback e avaliações</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2. Dados Coletados Automaticamente</h3>
                      <p className="text-gray-700 mb-4">Quando você acessa nosso site, coletamos automaticamente:</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Dados de navegação:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Endereço IP</li>
                            <li>Tipo de navegador e versão</li>
                            <li>Sistema operacional</li>
                            <li>Páginas visitadas e tempo de permanência</li>
                            <li>Origem do acesso (referrer)</li>
                            <li>Data e hora de acesso</li>
                            <li>Resolução de tela</li>
                            <li>Idioma do navegador</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies e tecnologias similares:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Cookies de sessão e persistentes</li>
                            <li>Pixel de rastreamento (Meta Pixel, Google Analytics)</li>
                            <li>Local Storage e Session Storage</li>
                            <li>Identificadores únicos de dispositivo</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Dados de interação:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Cliques em botões e links</li>
                            <li>Formulários iniciados/abandonados</li>
                            <li>Downloads de materiais</li>
                            <li>Vídeos assistidos</li>
                            <li>Scroll depth (profundidade de rolagem)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3. Dados que NÃO Coletamos</h3>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <p className="text-red-800 font-medium mb-3">A Haast <strong>NÃO coleta intencionalmente</strong>:</p>
                        <ul className="list-disc list-inside space-y-1 text-red-700">
                          <li>Dados de menores de 18 anos sem autorização dos pais/responsáveis</li>
                          <li>Dados sensíveis (raça, religião, saúde, etc.) salvo quando estritamente necessário e com consentimento expresso</li>
                          <li>Informações de cartões de crédito (pagamentos via intermediários certificados PCI-DSS)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    4. FINALIDADES DO TRATAMENTO DE DADOS
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Utilizamos seus dados pessoais para as seguintes finalidades, sempre com base legal adequada:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1. Prestação de Serviços (Base Legal: Execução de Contrato)</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Executar serviços de marketing digital contratados</li>
                        <li>Criar e gerenciar campanhas de tráfego pago</li>
                        <li>Desenvolver landing pages e sites</li>
                        <li>Fornecer relatórios e análises de performance</li>
                        <li>Prestar suporte técnico e atendimento</li>
                        <li>Processar pagamentos e emitir notas fiscais</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2. Comunicação (Base Legal: Consentimento / Interesse Legítimo)</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Responder solicitações de contato</li>
                        <li>Enviar propostas comerciais</li>
                        <li>Enviar atualizações sobre projetos em andamento</li>
                        <li>Comunicar alterações em serviços ou políticas</li>
                        <li>Realizar pesquisas de satisfação</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3. Marketing (Base Legal: Consentimento)</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Enviar newsletters e conteúdos educativos</li>
                        <li>Promover novos serviços e ofertas</li>
                        <li>Realizar remarketing e publicidade direcionada</li>
                        <li>Personalizar experiência no site</li>
                        <li>Convidar para eventos e webinars</li>
                      </ul>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                        <p className="text-blue-800 font-medium">
                          <strong>Você pode revogar consentimento para comunicações de marketing a qualquer momento</strong> através do link de descadastro nos e-mails ou entrando em contato conosco.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4. Melhorias e Análises (Base Legal: Interesse Legítimo)</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Analisar comportamento de navegação para melhorar o site</li>
                        <li>Realizar testes A/B e otimizações</li>
                        <li>Gerar estatísticas e relatórios internos (dados anonimizados)</li>
                        <li>Desenvolver novos produtos e serviços</li>
                        <li>Prevenir fraudes e garantir segurança</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.5. Cumprimento Legal (Base Legal: Obrigação Legal)</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Cumprir ordens judiciais</li>
                        <li>Atender requisições de autoridades competentes</li>
                        <li>Manter registros contábeis e fiscais</li>
                        <li>Defender direitos em processos judiciais</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    5. BASES LEGAIS PARA TRATAMENTO DE DADOS
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Tratamos seus dados pessoais com fundamento nas seguintes bases legais previstas na LGPD:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Consentimento (Art. 7º, I):</h3>
                      <p className="text-gray-700">Quando você autoriza expressamente o tratamento (ex: aceitar receber newsletters).</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Execução de Contrato (Art. 7º, V):</h3>
                      <p className="text-gray-700">Quando necessário para prestação de serviços contratados.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Interesse Legítimo (Art. 7º, IX):</h3>
                      <p className="text-gray-700">Para melhorias internas, segurança e prevenção de fraudes (sempre respeitando seus direitos fundamentais).</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Obrigação Legal (Art. 7º, II):</h3>
                      <p className="text-gray-700">Quando exigido por legislação ou regulamentação.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Exercício de Direitos (Art. 7º, VI):</h3>
                      <p className="text-gray-700">Para defesa em processos judiciais, administrativos ou arbitrais.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    6. COMPARTILHAMENTO DE DADOS
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                    <p className="text-red-800 font-medium text-lg">
                      A Haast <strong>NÃO vende, aluga ou comercializa</strong> dados pessoais de seus usuários em nenhuma hipótese.
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Seus dados podem ser compartilhados apenas nas seguintes situações:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1. Com Prestadores de Serviços (Operadores)</h3>
                      <p className="text-gray-700 mb-4">Compartilhamos dados com fornecedores que nos auxiliam na prestação de serviços, incluindo:</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Plataformas de anúncios:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Google Ads (Google LLC)</li>
                            <li>Meta Ads (Meta Platforms Inc.)</li>
                            <li>LinkedIn Ads (quando aplicável)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Ferramentas de análise e tracking:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Google Analytics (Google LLC)</li>
                            <li>Google Tag Manager (Google LLC)</li>
                            <li>Hotjar ou similares (análise de comportamento)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Ferramentas de comunicação:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>WhatsApp Business API (Meta Platforms Inc.)</li>
                            <li>Trello (Atlassian Inc.)</li>
                            <li>Serviços de e-mail marketing (ex: MailChimp, RD Station)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Infraestrutura e hospedagem:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Provedores de cloud (AWS, Google Cloud, etc.)</li>
                            <li>CDN e serviços de performance</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Processamento de pagamentos:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Gateways de pagamento certificados PCI-DSS</li>
                            <li>Instituições financeiras</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                        <p className="text-blue-800 font-medium">
                          <strong>Importante:</strong> Todos os operadores são cuidadosamente selecionados, assinam contratos de confidencialidade e seguem padrões rigorosos de segurança e privacidade.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2. Por Exigência Legal</h3>
                      <p className="text-gray-700 mb-3">Podemos divulgar dados pessoais quando:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Exigido por lei, decreto ou ordem judicial</li>
                        <li>Solicitado por autoridades governamentais</li>
                        <li>Necessário para proteger direitos, propriedade ou segurança da Haast</li>
                        <li>Requerido em processos judiciais ou administrativos</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3. Transferência Internacional</h3>
                      <p className="text-gray-700 mb-3">Alguns dos serviços que utilizamos (Google, Meta, AWS) podem armazenar dados em servidores localizados fora do Brasil. Nesses casos:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Garantimos que o país destino oferece grau adequado de proteção (conforme LGPD)</li>
                        <li>Exigimos cláusulas contratuais padrão de proteção de dados</li>
                        <li>Você será informado sobre transferências internacionais quando aplicável</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4. Casos de Fusão ou Aquisição</h3>
                      <p className="text-gray-700">
                        Em caso de fusão, aquisição ou venda de ativos da Haast, seus dados pessoais poderão ser transferidos para a entidade sucessora, mediante comunicação prévia aos titulares.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    7. SEGURANÇA E ARMAZENAMENTO DE DADOS
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1. Medidas de Segurança</h3>
                      <p className="text-gray-700 mb-4">
                        A Haast implementa medidas técnicas e organizacionais para proteger dados pessoais contra:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                        <li>Acesso não autorizado</li>
                        <li>Destruição, perda ou alteração acidental ou ilícita</li>
                        <li>Comunicação ou difusão não autorizada</li>
                        <li>Qualquer forma de tratamento inadequado ou ilícito</li>
                      </ul>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Medidas técnicas implementadas:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Criptografia SSL/TLS em todas as comunicações</li>
                            <li>Criptografia de dados sensíveis em repouso</li>
                            <li>Firewalls e sistemas de detecção de intrusão</li>
                            <li>Controle de acesso baseado em função (RBAC)</li>
                            <li>Autenticação de dois fatores quando possível</li>
                            <li>Backups regulares e seguros</li>
                            <li>Monitoramento contínuo de segurança</li>
                            <li>Patches e atualizações de segurança</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Medidas organizacionais:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Política interna de segurança da informação</li>
                            <li>Treinamento regular da equipe em proteção de dados</li>
                            <li>Acesso a dados pessoais apenas por colaboradores autorizados</li>
                            <li>Contratos de confidencialidade com colaboradores e fornecedores</li>
                            <li>Análise de riscos e planos de resposta a incidentes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2. Prazo de Armazenamento</h3>
                      <p className="text-gray-700 mb-4">
                        Mantemos dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, observando:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Dados de clientes ativos:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Durante toda a vigência do contrato</li>
                            <li>Até 5 anos após o término para fins contábeis e fiscais (obrigação legal)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Dados de leads e prospects:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Até 2 anos após o último contato (interesse legítimo)</li>
                            <li>Podem ser mantidos por mais tempo se houver consentimento expresso</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Dados de navegação e cookies:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Cookies de sessão: deletados ao fechar o navegador</li>
                            <li>Cookies persistentes: até 2 anos (pode ser configurado pelo usuário)</li>
                            <li>Logs de acesso: até 6 meses</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Após os prazos:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Dados são anonimizados (tornados não identificáveis) para fins estatísticos</li>
                            <li>Ou eliminados de forma segura e irreversível</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                        <p className="text-blue-800 font-medium">
                          <strong>Você pode solicitar a eliminação antecipada</strong> de seus dados, exceto quando houver obrigação legal de retenção.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3. Incidentes de Segurança</h3>
                      <p className="text-gray-700 mb-3">Em caso de incidente de segurança que possa gerar risco aos seus direitos e liberdades:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Comunicaremos à Autoridade Nacional de Proteção de Dados (ANPD) em até 72 horas</li>
                        <li>Notificaremos os titulares afetados em prazo razoável</li>
                        <li>Tomaremos medidas imediatas para mitigar danos</li>
                        <li>Investigaremos causas e implementaremos correções</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    8. COOKIES E TECNOLOGIAS DE RASTREAMENTO
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1. O Que São Cookies</h3>
                      <p className="text-gray-700">
                        Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre preferências.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2. Tipos de Cookies Que Usamos</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 border-l-4 border-green-400 p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies Essenciais (Necessários)</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li><strong>Finalidade:</strong> Funcionamento básico do site</li>
                            <li><strong>Exemplos:</strong> Sessão de navegação, preferências de idioma</li>
                            <li><strong>Podem ser desativados?</strong> Não (site pode não funcionar corretamente)</li>
                            <li><strong>Prazo:</strong> Sessão ou até 1 ano</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies de Desempenho (Analíticos)</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li><strong>Finalidade:</strong> Entender como visitantes usam o site</li>
                            <li><strong>Ferramentas:</strong> Google Analytics</li>
                            <li><strong>Dados coletados:</strong> Páginas visitadas, tempo de permanência, origem do tráfego</li>
                            <li><strong>Podem ser desativados?</strong> Sim</li>
                            <li><strong>Prazo:</strong> Até 2 anos</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies de Funcionalidade</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li><strong>Finalidade:</strong> Lembrar escolhas e preferências</li>
                            <li><strong>Exemplos:</strong> Formulários preenchidos, vídeos assistidos</li>
                            <li><strong>Podem ser desativados?</strong> Sim (perderá funcionalidades)</li>
                            <li><strong>Prazo:</strong> Até 1 ano</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies de Publicidade/Marketing</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li><strong>Finalidade:</strong> Remarketing e anúncios personalizados</li>
                            <li><strong>Ferramentas:</strong> Meta Pixel, Google Ads Conversion</li>
                            <li><strong>Dados coletados:</strong> Interações, conversões, público-alvo</li>
                            <li><strong>Podem ser desativados?</strong> Sim</li>
                            <li><strong>Prazo:</strong> Até 2 anos</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">8.3. Gerenciamento de Cookies</h3>
                      <p className="text-gray-700 mb-4">Você pode controlar e gerenciar cookies das seguintes formas:</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">No site:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Configurações no banner de consentimento de cookies</li>
                            <li>Aceitar todos, rejeitar não essenciais ou personalizar</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">No navegador:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Chrome: Configurações &gt; Privacidade e segurança &gt; Cookies</li>
                            <li>Firefox: Preferências &gt; Privacidade e segurança</li>
                            <li>Safari: Preferências &gt; Privacidade</li>
                            <li>Edge: Configurações &gt; Cookies e permissões de site</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Ferramentas de opt-out:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Google Ads: adssettings.google.com</li>
                            <li>Meta: facebook.com/ads/preferences</li>
                            <li>Network Advertising Initiative: optout.networkadvertising.org</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                        <p className="text-yellow-800 font-medium">
                          <strong>Importante:</strong> Desabilitar cookies pode limitar sua experiência no site.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">8.4. Outras Tecnologias de Rastreamento</h3>
                      <p className="text-gray-700 mb-3">Além de cookies, utilizamos:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Pixels de rastreamento:</strong> Imagens invisíveis que rastreiam abertura de e-mails e conversões</li>
                        <li><strong>Web beacons:</strong> Pequenos objetos gráficos que monitoram interações</li>
                        <li><strong>Local Storage:</strong> Armazenamento local no navegador para preferências e dados de sessão</li>
                        <li><strong>Fingerprinting:</strong> Não utilizamos técnicas de fingerprinting de dispositivo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    9. DIREITOS DOS TITULARES DE DADOS
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Em conformidade com a LGPD (Art. 18), você tem os seguintes direitos sobre seus dados pessoais:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">9.1. Confirmação e Acesso (Art. 18, I e II)</h3>
                        <p className="text-gray-700 text-sm">Você pode solicitar confirmação sobre a existência de tratamento de seus dados e acessar os dados pessoais que mantemos sobre você.</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">9.2. Correção (Art. 18, III)</h3>
                        <p className="text-gray-700 text-sm">Você pode solicitar a correção de dados incompletos, inexatos ou desatualizados.</p>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">9.3. Anonimização, Bloqueio ou Eliminação (Art. 18, IV)</h3>
                        <p className="text-gray-700 text-sm">Você pode solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados irregularmente.</p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">9.4. Portabilidade (Art. 18, V)</h3>
                        <p className="text-gray-700 text-sm">Você pode solicitar a portabilidade de seus dados a outro fornecedor de serviço.</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.5. Informação sobre Compartilhamento (Art. 18, VII)</h3>
                      <p className="text-gray-700">Você pode solicitar informações sobre com quais entidades públicas e privadas compartilhamos seus dados.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.6. Revogação do Consentimento (Art. 18, IX)</h3>
                      <p className="text-gray-700 mb-3">Você pode revogar consentimento previamente fornecido a qualquer momento, sem justificativa.</p>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <p className="text-blue-800 font-medium mb-2">
                          <strong>Como revogar:</strong> Através do link de descadastro em e-mails ou entrando em contato conosco.
                        </p>
                        <p className="text-blue-800">
                          <strong>Consequência:</strong> Poderemos não conseguir prestar determinados serviços que dependem do consentimento.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.7. Oposição ao Tratamento (Art. 18, § 2º)</h3>
                      <p className="text-gray-700">Você pode se opor ao tratamento de dados realizado com base em interesse legítimo, caso entenda que viola seus direitos.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.8. Revisão de Decisões Automatizadas (Art. 18, § 1º)</h3>
                      <p className="text-gray-700 mb-3">Caso utilizemos decisões automatizadas que afetem seus interesses, você pode solicitar revisão humana.</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 font-medium">
                          <strong>Atualmente, não tomamos decisões automatizadas que afetem significativamente direitos dos titulares.</strong>
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9.9. Como Exercer Seus Direitos</h3>
                      <p className="text-gray-700 mb-4">Para exercer qualquer direito acima:</p>
                      
                      <div className="bg-gray-900 text-white p-6 rounded-lg">
                        <div className="space-y-2">
                          <p><strong>E-mail:</strong> privacidade@haast.com.br</p>
                          <p><strong>Assunto:</strong> Solicitação LGPD - [Tipo de Solicitação]</p>
                          <p><strong>Telefone:</strong> +55 77 9180-5013</p>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <p className="text-sm text-gray-300">
                            <strong>Prazo de resposta:</strong> Até 15 dias corridos (podendo ser prorrogado por mais 15 dias mediante justificativa)
                          </p>
                          <p className="text-sm text-gray-300">
                            <strong>Documentação necessária:</strong> Comprovante de identidade para validar solicitação
                          </p>
                          <p className="text-sm text-gray-300">
                            <strong>Gratuidade:</strong> O primeiro atendimento é gratuito. Solicitações subsequentes manifestamente infundadas ou excessivas podem ser cobradas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    10. DADOS DE MENORES DE IDADE
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="text-red-800 font-medium mb-3">
                      O site da Haast não se destina a menores de 18 anos e não coletamos intencionalmente dados de crianças ou adolescentes.
                    </p>
                    <p className="text-red-700">
                      Se tomarmos conhecimento de que coletamos dados de menores sem consentimento dos pais ou responsáveis, tomaremos medidas para eliminar tais informações.
                    </p>
                    <p className="text-red-700 mt-3">
                      Pais ou responsáveis que acreditam que coletamos dados de menores podem entrar em contato através de: <strong>privacidade@haast.com.br</strong>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    11. ALTERAÇÕES NESTA POLÍTICA
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Esta Política de Privacidade pode ser atualizada periodicamente para refletir:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Mudanças em nossas práticas de tratamento de dados</li>
                    <li>Alterações na legislação aplicável</li>
                    <li>Implementação de novas tecnologias</li>
                    <li>Melhorias em processos de segurança</li>
                  </ul>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-blue-800 font-medium mb-3">
                      <strong>Comunicação de alterações:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-blue-700">
                      <li>Alterações substanciais serão comunicadas por e-mail ou aviso no site</li>
                      <li>Alterações não substanciais serão indicadas pela data de atualização</li>
                      <li>A versão atual sempre estará disponível em haast.com.br/privacidade</li>
                    </ul>
                    <p className="text-blue-800 mt-3 font-medium">
                      <strong>Recomendamos revisar esta política periodicamente.</strong>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    12. LEGISLAÇÃO E FORO
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil, especialmente:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Lei nº 13.709/2018 (LGPD)</li>
                    <li>Lei nº 12.965/2014 (Marco Civil da Internet)</li>
                    <li>Lei nº 8.078/1990 (Código de Defesa do Consumidor)</li>
                  </ul>
                  <p className="text-gray-700">
                    Fica eleito o foro da comarca de <strong>Vitória da Conquista/BA</strong> para dirimir quaisquer controvérsias decorrentes desta política.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    13. CONTATO E DÚVIDAS
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais:</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">Haast LTDA</h4>
                        <p className="text-gray-700">Encarregado de Proteção de Dados (DPO)</p>
                      </div>
                      
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Endereço:</strong> Av Juracy Magalhães - Bairro Felícia - Quadra 07, Lote 3340 A, Sala 1210, Vitória da Conquista/BA</p>
                        <p><strong>E-mail:</strong> privacidade@haast.com.br</p>
                        <p><strong>Telefone:</strong> +55 77 9180-5013</p>
                        <p><strong>Website:</strong> haast.com.br</p>
                        <p><strong>Horário de atendimento:</strong> Segunda a sexta, das 9h às 18h (horário de Brasília)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    14. AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS (ANPD)
                  </h2>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-blue-800 font-medium mb-3">
                      Você tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) caso entenda que seus direitos não foram respeitados:
                    </p>
                    <div className="space-y-2 text-blue-700">
                      <p><strong>ANPD - Autoridade Nacional de Proteção de Dados</strong></p>
                      <p><strong>Website:</strong> gov.br/anpd</p>
                      <p><strong>Ouvidoria:</strong> https://www.gov.br/anpd/pt-br/canais_atendimento</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    15. CONSENTIMENTO
                  </h2>
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <p className="text-lg font-semibold mb-4">
                      AO UTILIZAR O SITE HAAST.COM.BR E FORNECER SEUS DADOS PESSOAIS, VOCÊ DECLARA QUE LEU, COMPREENDEU E CONCORDA COM ESTA POLÍTICA DE PRIVACIDADE.
                    </p>
                    <p className="text-white/90">
                      Para tratamentos de dados que exigem consentimento expresso, solicitaremos sua autorização específica antes de coletar ou processar tais dados.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-haast-black-graphite mb-4">
                      Haast LTDA
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-4">
                      Infraestrutura Digital de Alta Performance
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p>CNPJ: 49.810.921/0001-09</p>
                      <p>Av Juracy Magalhães - Bairro Felícia - Quadra 07, Lote 3340 A, Sala 1210</p>
                      <p>Vitória da Conquista/BA</p>
                    </div>
                    <div className="mt-4 space-y-1 text-gray-600">
                      <p>contato@haast.com.br | privacidade@haast.com.br</p>
                      <p>+55 77 9180-5013</p>
                      <p>haast.com.br</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 italic">
                      Política de Privacidade atualizada em outubro de 2025
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


