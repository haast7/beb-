import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Política de Cookies - Haast Marketing de Performance',
  description: 'Política de Cookies da Haast - Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência no site.',
  keywords: 'política de cookies, haast, cookies, lgpd, rastreamento, privacidade',
  openGraph: {
    title: 'Política de Cookies - Haast Marketing de Performance',
    description: 'Política de Cookies da Haast - Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência no site.',
    type: 'website',
    url: 'https://haast.com.br/cookies',
  },
  alternates: {
    canonical: 'https://haast.com.br/cookies',
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
      "name": "Política de Cookies",
      "item": "https://haast.com.br/cookies"
    }
  ]
};

export default function CookiesPage() {
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
                Política de Cookies
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
                    A <strong>Haast LTDA</strong>, inscrita no CNPJ sob o nº <strong>49.810.921/0001-09</strong>, utiliza cookies e tecnologias similares no site <strong>haast.com.br</strong> para melhorar a experiência do usuário, personalizar conteúdo e anúncios, fornecer funcionalidades de redes sociais e analisar nosso tráfego.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Esta Política de Cookies explica o que são cookies, como os utilizamos, que tipos implementamos e como você pode controlá-los.
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
                    <p className="text-gray-700 mt-3">
                      Para questões sobre cookies e privacidade: <strong>privacidade@haast.com.br</strong>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    2. O QUE SÃO COOKIES?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Cookies são pequenos arquivos de texto armazenados no seu navegador ou dispositivo quando você visita um site. Eles permitem que o site "lembre" de suas ações e preferências (como idioma, tamanho da fonte, outras preferências de exibição) durante um período de tempo, para que você não precise reinseri-las sempre que voltar ao site ou navegar de uma página para outra.
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Tipos de arquivos similares que utilizamos:</h3>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="font-semibold text-gray-900">Cookies:</span>
                        <span className="text-gray-700">Pequenos arquivos de texto armazenados pelo navegador</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="font-semibold text-gray-900">Pixel Tags (Web Beacons):</span>
                        <span className="text-gray-700">Pequenas imagens invisíveis incorporadas em páginas web ou e-mails que rastreiam visualizações e interações</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="font-semibold text-gray-900">Local Storage:</span>
                        <span className="text-gray-700">Tecnologia HTML5 que armazena dados localmente no navegador</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="font-semibold text-gray-900">Session Storage:</span>
                        <span className="text-gray-700">Armazenamento temporário que expira quando você fecha o navegador</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="font-semibold text-gray-900">Scripts:</span>
                        <span className="text-gray-700">Códigos JavaScript que rastreiam interações no site</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">
                    Por simplicidade, nos referimos a todas essas tecnologias coletivamente como "cookies" nesta política.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    3. POR QUE USAMOS COOKIES?
                  </h2>
                  <p className="text-gray-700 mb-6">Utilizamos cookies para diversos propósitos:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">3.1. Funcionalidade Essencial</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Manter você conectado durante a sessão</li>
                        <li>Lembrar preferências de navegação</li>
                        <li>Garantir segurança e prevenir fraudes</li>
                        <li>Equilibrar carga entre servidores</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">3.2. Análise e Performance</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Entender como visitantes usam nosso site</li>
                        <li>Identificar páginas mais visitadas</li>
                        <li>Analisar tempo de permanência e taxa de rejeição</li>
                        <li>Detectar problemas técnicos e erros</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">3.3. Personalização</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Lembrar formulários parcialmente preenchidos</li>
                        <li>Adaptar conteúdo aos seus interesses</li>
                        <li>Melhorar experiência de navegação</li>
                        <li>Exibir conteúdo relevante</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">3.4. Marketing e Publicidade</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Rastrear conversões de campanhas</li>
                        <li>Realizar remarketing (mostrar anúncios após visitar o site)</li>
                        <li>Medir eficácia de anúncios</li>
                        <li>Segmentar públicos para campanhas</li>
                        <li>Evitar exibir o mesmo anúncio repetidamente</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    4. TIPOS DE COOKIES QUE UTILIZAMOS
                  </h2>
                  <p className="text-gray-700 mb-6">Classificamos nossos cookies de acordo com sua finalidade e duração:</p>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1. COOKIES ESSENCIAIS (NECESSÁRIOS)</h3>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                        <p className="text-red-800 font-medium mb-2">
                          <strong>O que são:</strong> Cookies indispensáveis para o funcionamento básico do site. Sem eles, o site não pode operar adequadamente.
                        </p>
                        <p className="text-red-800 font-medium">
                          <strong>Podem ser desativados?</strong> Não. Estes cookies são estritamente necessários.
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Exemplos de uso:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Manter sessão de navegação ativa</li>
                          <li>Lembrar escolhas feitas (idioma, região)</li>
                          <li>Gerenciar consentimento de cookies</li>
                          <li>Garantir segurança e prevenir ataques CSRF</li>
                        </ul>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Provedor</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidade</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duração</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">PHPSESSID</td>
                              <td className="border border-gray-300 px-4 py-2">haast.com.br</td>
                              <td className="border border-gray-300 px-4 py-2">Identificador de sessão do usuário</td>
                              <td className="border border-gray-300 px-4 py-2">Sessão</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
                              <td className="border border-gray-300 px-4 py-2">haast.com.br</td>
                              <td className="border border-gray-300 px-4 py-2">Armazena preferências de cookies</td>
                              <td className="border border-gray-300 px-4 py-2">1 ano</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">csrf_token</td>
                              <td className="border border-gray-300 px-4 py-2">haast.com.br</td>
                              <td className="border border-gray-300 px-4 py-2">Proteção contra ataques CSRF</td>
                              <td className="border border-gray-300 px-4 py-2">Sessão</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <p className="text-gray-700 mt-4">
                        <strong>Base legal:</strong> Interesse legítimo (funcionamento do site)
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2. COOKIES DE DESEMPENHO (ANALÍTICOS)</h3>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                        <p className="text-blue-800 font-medium mb-2">
                          <strong>O que são:</strong> Cookies que coletam informações sobre como visitantes usam o site, como quais páginas são mais visitadas e se recebem mensagens de erro.
                        </p>
                        <p className="text-blue-800 font-medium">
                          <strong>Podem ser desativados?</strong> Sim, através das configurações de cookies.
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Exemplos de uso:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Contar número de visitantes</li>
                          <li>Identificar páginas populares</li>
                          <li>Medir tempo médio de visita</li>
                          <li>Analisar origem do tráfego</li>
                          <li>Detectar erros técnicos</li>
                        </ul>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Provedor</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidade</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duração</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">_ga</td>
                              <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                              <td className="border border-gray-300 px-4 py-2">Distinguir usuários únicos</td>
                              <td className="border border-gray-300 px-4 py-2">2 anos</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">_ga_*</td>
                              <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                              <td className="border border-gray-300 px-4 py-2">Manter estado de sessão</td>
                              <td className="border border-gray-300 px-4 py-2">2 anos</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">_gid</td>
                              <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                              <td className="border border-gray-300 px-4 py-2">Distinguir usuários</td>
                              <td className="border border-gray-300 px-4 py-2">24 horas</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">_gat</td>
                              <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                              <td className="border border-gray-300 px-4 py-2">Limitar taxa de requisições</td>
                              <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-4 space-y-2 text-gray-700">
                        <p><strong>Ferramenta:</strong> Google Analytics (Google LLC)</p>
                        <p><strong>Dados coletados:</strong> Páginas visitadas, duração da visita, origem do tráfego, tipo de dispositivo, sistema operacional, resolução de tela (todos anonimizados).</p>
                        <p><strong>Política de privacidade:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></p>
                        <p><strong>Base legal:</strong> Consentimento</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">4.3. COOKIES DE FUNCIONALIDADE</h3>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <p className="text-yellow-800 font-medium mb-2">
                          <strong>O que são:</strong> Cookies que permitem ao site lembrar escolhas que você faz e fornecer recursos aprimorados e mais personalizados.
                        </p>
                        <p className="text-yellow-800 font-medium">
                          <strong>Podem ser desativados?</strong> Sim, mas você pode perder funcionalidades personalizadas.
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Exemplos de uso:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Lembrar formulários preenchidos</li>
                          <li>Armazenar preferências de visualização</li>
                          <li>Lembrar conteúdos já vistos</li>
                          <li>Fornecer funcionalidades de chat (quando disponível)</li>
                        </ul>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Provedor</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidade</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duração</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">form_data</td>
                              <td className="border border-gray-300 px-4 py-2">haast.com.br</td>
                              <td className="border border-gray-300 px-4 py-2">Lembrar dados de formulários</td>
                              <td className="border border-gray-300 px-4 py-2">30 dias</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">video_progress</td>
                              <td className="border border-gray-300 px-4 py-2">haast.com.br</td>
                              <td className="border border-gray-300 px-4 py-2">Lembrar progresso de vídeos</td>
                              <td className="border border-gray-300 px-4 py-2">30 dias</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">last_visit</td>
                              <td className="border border-gray-300 px-4 py-2">haast.com.br</td>
                              <td className="border border-gray-300 px-4 py-2">Rastrear última visita</td>
                              <td className="border border-gray-300 px-4 py-2">90 dias</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <p className="text-gray-700 mt-4">
                        <strong>Base legal:</strong> Consentimento
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">4.4. COOKIES DE MARKETING E PUBLICIDADE</h3>
                      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                        <p className="text-purple-800 font-medium mb-2">
                          <strong>O que são:</strong> Cookies usados para rastrear visitantes em diferentes sites e exibir anúncios relevantes e envolventes.
                        </p>
                        <p className="text-purple-800 font-medium">
                          <strong>Podem ser desativados?</strong> Sim, através das configurações de cookies ou ferramentas de opt-out.
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Exemplos de uso:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Rastrear conversões de campanhas</li>
                          <li>Realizar remarketing (exibir anúncios após visitar o site)</li>
                          <li>Criar públicos personalizados</li>
                          <li>Medir ROI de campanhas publicitárias</li>
                          <li>Limitar frequência de exibição de anúncios</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Google Ads (Google LLC)</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300 rounded-lg">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Provedor</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidade</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duração</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">_gcl_*</td>
                                  <td className="border border-gray-300 px-4 py-2">Google</td>
                                  <td className="border border-gray-300 px-4 py-2">Rastrear conversões do Google Ads</td>
                                  <td className="border border-gray-300 px-4 py-2">90 dias</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">IDE</td>
                                  <td className="border border-gray-300 px-4 py-2">doubleclick.net</td>
                                  <td className="border border-gray-300 px-4 py-2">Rastreamento entre sites para publicidade</td>
                                  <td className="border border-gray-300 px-4 py-2">1 ano</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">test_cookie</td>
                                  <td className="border border-gray-300 px-4 py-2">doubleclick.net</td>
                                  <td className="border border-gray-300 px-4 py-2">Verificar se navegador aceita cookies</td>
                                  <td className="border border-gray-300 px-4 py-2">15 minutos</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-gray-700 mt-2">
                            <strong>Política de privacidade:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Meta Pixel (Meta Platforms Inc.)</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300 rounded-lg">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Provedor</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidade</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duração</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">_fbp</td>
                                  <td className="border border-gray-300 px-4 py-2">Facebook</td>
                                  <td className="border border-gray-300 px-4 py-2">Rastrear visitantes entre sites</td>
                                  <td className="border border-gray-300 px-4 py-2">3 meses</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">fr</td>
                                  <td className="border border-gray-300 px-4 py-2">Facebook</td>
                                  <td className="border border-gray-300 px-4 py-2">Entregar publicidade direcionada</td>
                                  <td className="border border-gray-300 px-4 py-2">3 meses</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">_fbc</td>
                                  <td className="border border-gray-300 px-4 py-2">Facebook</td>
                                  <td className="border border-gray-300 px-4 py-2">Armazenar ID de clique em anúncios</td>
                                  <td className="border border-gray-300 px-4 py-2">2 anos</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-gray-700 mt-2">
                            <strong>Política de privacidade:</strong> <a href="https://www.facebook.com/privacy/policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a>
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mt-4">
                        <strong>Base legal:</strong> Consentimento
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">4.5. COOKIES DE REDES SOCIAIS</h3>
                      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
                        <p className="text-indigo-800 font-medium mb-2">
                          <strong>O que são:</strong> Cookies definidos por serviços de redes sociais que adicionamos ao site para permitir que você compartilhe conteúdo com amigos e redes.
                        </p>
                        <p className="text-indigo-800 font-medium">
                          <strong>Podem ser desativados?</strong> Sim, mas você não conseguirá compartilhar conteúdo diretamente.
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Exemplos de uso:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Botões de compartilhamento (Facebook, LinkedIn, WhatsApp)</li>
                          <li>Incorporar vídeos (YouTube)</li>
                          <li>Integração de feeds sociais</li>
                        </ul>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Provedor</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidade</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duração</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">VISITOR_INFO1_LIVE</td>
                              <td className="border border-gray-300 px-4 py-2">YouTube</td>
                              <td className="border border-gray-300 px-4 py-2">Rastrear preferências de vídeo</td>
                              <td className="border border-gray-300 px-4 py-2">6 meses</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">YSC</td>
                              <td className="border border-gray-300 px-4 py-2">YouTube</td>
                              <td className="border border-gray-300 px-4 py-2">Rastrear visualizações de vídeo</td>
                              <td className="border border-gray-300 px-4 py-2">Sessão</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <p className="text-gray-700 mt-4">
                        <strong>Política de privacidade YouTube:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
                      </p>
                      <p className="text-gray-700">
                        <strong>Base legal:</strong> Consentimento
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    5. COOKIES DE TERCEIROS
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Além dos cookies que definimos diretamente, também permitimos que empresas terceiras coloquem cookies no seu dispositivo quando você visita haast.com.br.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Google (Analytics, Ads, Tag Manager):</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Finalidade:</strong> Análise de tráfego, rastreamento de conversões, gestão de tags</li>
                        <li><strong>Política:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Meta/Facebook (Pixel):</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Finalidade:</strong> Rastreamento de conversões, remarketing, públicos personalizados</li>
                        <li><strong>Política:</strong> <a href="https://www.facebook.com/privacy/policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">WhatsApp (Chat Widget - quando implementado):</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Finalidade:</strong> Suporte via chat</li>
                        <li><strong>Política:</strong> <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">whatsapp.com/legal/privacy-policy</a></li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Hotjar (quando implementado):</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Finalidade:</strong> Análise de comportamento (heatmaps, gravações de sessão)</li>
                        <li><strong>Política:</strong> <a href="https://www.hotjar.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">hotjar.com/privacy</a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                    <p className="text-yellow-800 font-medium">
                      <strong>Importante:</strong> Não temos controle direto sobre como esses terceiros usam cookies. Recomendamos verificar as políticas de privacidade deles.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    6. DURAÇÃO DOS COOKIES
                  </h2>
                  <p className="text-gray-700 mb-6">Cookies podem ser temporários ou permanentes:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Cookies de Sessão (Session Cookies)</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Expiram quando você fecha o navegador</li>
                        <li>Usados para funcionalidades essenciais</li>
                        <li>Não armazenam informações permanentes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Cookies Persistentes (Persistent Cookies)</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Permanecem no dispositivo por período específico</li>
                        <li>Usados para lembrar preferências</li>
                        <li>Duração varia de 1 dia a 2 anos</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Resumo de durações:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Essenciais: Sessão a 1 ano</li>
                      <li>Analíticos: 1 minuto a 2 anos</li>
                      <li>Funcionais: 30 dias a 1 ano</li>
                      <li>Marketing: 3 meses a 2 anos</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      Você pode deletar cookies manualmente a qualquer momento através das configurações do navegador.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    7. COMO GERENCIAR E DESATIVAR COOKIES
                  </h2>
                  <p className="text-gray-700 mb-6">Você tem controle total sobre cookies. Pode aceitar, rejeitar ou gerenciar preferências de várias formas:</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1. Banner de Consentimento no Site</h3>
                      <p className="text-gray-700 mb-4">Quando você acessa haast.com.br pela primeira vez, exibimos um banner de consentimento onde você pode:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                        <li><strong>Aceitar todos os cookies</strong></li>
                        <li><strong>Rejeitar cookies não essenciais</strong></li>
                        <li><strong>Personalizar preferências</strong> (escolher quais categorias aceitar)</li>
                      </ul>
                      <p className="text-gray-700">Para alterar suas preferências posteriormente:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Clique no link "Configurações de Cookies" no rodapé do site</li>
                        <li>Ou delete cookies do navegador e visite o site novamente</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2. Configurações do Navegador</h3>
                      <p className="text-gray-700 mb-4">Todos os navegadores permitem gerenciar cookies:</p>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Google Chrome:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Menu (três pontos) &gt; Configurações</li>
                            <li>Privacidade e segurança &gt; Cookies e outros dados do site</li>
                            <li>Escolha: Permitir, Bloquear ou Limpar cookies</li>
                          </ol>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Menu (três linhas) &gt; Configurações</li>
                            <li>Privacidade e Segurança</li>
                            <li>Cookies e dados de sites</li>
                          </ol>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Safari:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Preferências &gt; Privacidade</li>
                            <li>Gerenciar dados de sites</li>
                            <li>Bloquear todos os cookies (opcional)</li>
                          </ol>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Menu (três pontos) &gt; Configurações</li>
                            <li>Cookies e permissões de site</li>
                            <li>Gerenciar e excluir cookies</li>
                          </ol>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Modo de navegação privada/anônima:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Chrome: Ctrl + Shift + N</li>
                          <li>Firefox: Ctrl + Shift + P</li>
                          <li>Safari: Cmd + Shift + N</li>
                          <li>Edge: Ctrl + Shift + N</li>
                        </ul>
                        <p className="text-gray-700 mt-2">
                          Neste modo, cookies são deletados automaticamente ao fechar o navegador.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3. Ferramentas de Opt-Out Específicas</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Google Ads:</h4>
                          <p className="text-gray-700">Acesse: <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a></p>
                          <p className="text-gray-700">Desative "Personalização de anúncios"</p>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Google Analytics:</h4>
                          <p className="text-gray-700">Instale: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></p>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Meta/Facebook:</h4>
                          <p className="text-gray-700">Acesse: <a href="https://www.facebook.com/ads/preferences" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/ads/preferences</a></p>
                          <p className="text-gray-700">Ajuste preferências de anúncios</p>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Network Advertising Initiative (NAI):</h4>
                          <p className="text-gray-700">Acesse: <a href="http://optout.networkadvertising.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></p>
                          <p className="text-gray-700">Opt-out de múltiplas redes de anúncios</p>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Digital Advertising Alliance:</h4>
                          <p className="text-gray-700">Acesse: <a href="http://www.youradchoices.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">youradchoices.com</a></p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4. Extensões de Navegador</h3>
                      <p className="text-gray-700 mb-3">Ferramentas que bloqueiam rastreamento:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Privacy Badger</strong> (EFF)</li>
                        <li><strong>uBlock Origin</strong></li>
                        <li><strong>Ghostery</strong></li>
                        <li><strong>DuckDuckGo Privacy Essentials</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    8. CONSEQUÊNCIAS DE DESATIVAR COOKIES
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies essenciais:</h3>
                      <p className="text-gray-700 mb-2">Se bloqueados, o site pode não funcionar corretamente. Você pode experimentar:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Problemas de login/sessão</li>
                        <li>Perda de preferências</li>
                        <li>Funcionalidades limitadas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies analíticos:</h3>
                      <p className="text-gray-700">Não afetam funcionalidade, mas nos impedem de melhorar o site baseado em dados de uso.</p>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies de funcionalidade:</h3>
                      <p className="text-gray-700 mb-2">Você perderá personalizações como:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Formulários pré-preenchidos</li>
                        <li>Preferências salvas</li>
                        <li>Conteúdo recomendado</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies de marketing:</h3>
                      <p className="text-gray-700 mb-2">Você verá anúncios menos relevantes (mas ainda verá anúncios). Não conseguiremos:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Medir eficácia de campanhas</li>
                        <li>Evitar anúncios repetitivos</li>
                        <li>Criar públicos personalizados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    9. TRANSFERÊNCIA INTERNACIONAL DE DADOS
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Alguns cookies que utilizamos são fornecidos por empresas sediadas fora do Brasil (Google nos EUA, Meta nos EUA). Isso significa que dados coletados por esses cookies podem ser transferidos, armazenados e processados internacionalmente.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Proteções implementadas:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Utilizamos apenas fornecedores que aderem a frameworks de proteção reconhecidos</li>
                      <li>Contratos incluem cláusulas padrão de proteção de dados</li>
                      <li>Conformidade com LGPD (Lei 13.709/2018)</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      Para mais informações sobre transferências internacionais, consulte nossa <a href="/privacidade" className="text-blue-600 hover:underline">Política de Privacidade</a>.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    10. COOKIES E CRIANÇAS
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="text-red-800 font-medium mb-3">
                      O site haast.com.br não se destina a menores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes através de cookies.
                    </p>
                    <p className="text-red-700">
                      Se você é pai ou responsável e acredita que seu filho forneceu dados pessoais, entre em contato conosco em: <strong>privacidade@haast.com.br</strong>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    11. ATUALIZAÇÕES DESTA POLÍTICA
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Podemos atualizar esta Política de Cookies periodicamente para refletir:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Mudanças em nossas práticas</li>
                    <li>Implementação de novas tecnologias</li>
                    <li>Alterações na legislação</li>
                    <li>Feedback de usuários</li>
                  </ul>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      <strong>Data da última atualização:</strong> Outubro de 2025
                    </p>
                    <p className="text-blue-800 font-medium mb-2">
                      <strong>Como você será notificado:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-blue-700">
                      <li>Alterações substanciais: Notificação no site ou por e-mail</li>
                      <li>Alterações menores: Data de atualização no topo da política</li>
                    </ul>
                    <p className="text-blue-800 mt-3 font-medium">
                      <strong>Recomendamos revisar esta política periodicamente.</strong>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    12. LEGISLAÇÃO APLICÁVEL
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Esta Política de Cookies é regida pela legislação brasileira, em especial:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Lei nº 13.709/2018 (LGPD - Lei Geral de Proteção de Dados)</li>
                    <li>Lei nº 12.965/2014 (Marco Civil da Internet)</li>
                    <li>Decreto nº 8.771/2016 (regulamenta o Marco Civil)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    13. SEUS DIREITOS SOB A LGPD
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Conforme a LGPD, você tem direito a:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Confirmar existência de tratamento de dados</li>
                    <li>Acessar seus dados</li>
                    <li>Corrigir dados incompletos ou inexatos</li>
                    <li>Solicitar anonimização, bloqueio ou eliminação</li>
                    <li>Solicitar portabilidade de dados</li>
                    <li>Revogar consentimento</li>
                    <li>Obter informações sobre compartilhamento</li>
                  </ul>
                  
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <p className="text-white font-medium mb-2">Para exercer esses direitos, entre em contato:</p>
                    <div className="space-y-1 text-white/90">
                      <p><strong>E-mail:</strong> privacidade@haast.com.br</p>
                      <p><strong>Telefone:</strong> +55 77 9180-5013</p>
                    </div>
                    <p className="text-white/90 mt-3">
                      Para mais detalhes, consulte nossa <a href="/privacidade" className="text-blue-400 hover:underline">Política de Privacidade completa</a>.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    14. GLOSSÁRIO
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">Cookie:</h3>
                        <p className="text-gray-700 text-sm">Pequeno arquivo de texto armazenado no navegador</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Pixel Tag/Web Beacon:</h3>
                        <p className="text-gray-700 text-sm">Imagem invisível que rastreia visualizações</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Local Storage:</h3>
                        <p className="text-gray-700 text-sm">Armazenamento local no navegador (HTML5)</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Session Storage:</h3>
                        <p className="text-gray-700 text-sm">Armazenamento temporário que expira com a sessão</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">First-party Cookie:</h3>
                        <p className="text-gray-700 text-sm">Cookie definido por haast.com.br</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">Third-party Cookie:</h3>
                        <p className="text-gray-700 text-sm">Cookie definido por domínio externo (Google, Meta, etc.)</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Opt-out:</h3>
                        <p className="text-gray-700 text-sm">Ato de desativar/recusar cookies</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Opt-in:</h3>
                        <p className="text-gray-700 text-sm">Ato de aceitar/consentir cookies</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">LGPD:</h3>
                        <p className="text-gray-700 text-sm">Lei Geral de Proteção de Dados (Lei 13.709/2018)</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Remarketing:</h3>
                        <p className="text-gray-700 text-sm">Exibir anúncios para quem já visitou o site</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Conversão:</h3>
                        <p className="text-gray-700 text-sm">Ação desejada (preencher formulário, agendar reunião)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    15. PERGUNTAS FREQUENTES
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">1. Cookies são prejudiciais ao meu dispositivo?</h3>
                      <p className="text-gray-700">Não. Cookies são simples arquivos de texto e não podem executar código, instalar vírus ou acessar informações sensíveis do seu dispositivo.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">2. Posso usar o site sem aceitar cookies?</h3>
                      <p className="text-gray-700">Sim, mas apenas cookies essenciais serão usados. Você pode ter experiência limitada.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">3. Por quanto tempo cookies ficam armazenados?</h3>
                      <p className="text-gray-700">Varia de sessão (deletados ao fechar navegador) até 2 anos, dependendo do tipo.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">4. Vocês vendem dados coletados por cookies?</h3>
                      <p className="text-gray-700">Não. Jamais vendemos, alugamos ou comercializamos dados pessoais.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">5. Cookies contêm dados sensíveis (senhas, cartões)?</h3>
                      <p className="text-gray-700">Não. Cookies não armazenam informações sensíveis como senhas ou dados bancários.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">6. Como sei quais cookies estão no meu navegador?</h3>
                      <p className="text-gray-700">Use as configurações do navegador (veja seção 7.2) ou ferramentas como "EditThisCookie" (Chrome).</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">7. Posso escolher quais cookies aceitar?</h3>
                      <p className="text-gray-700">Sim! Use nosso banner de consentimento e clique em "Personalizar" ou "Configurações de Cookies".</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">8. Deletar cookies afeta minha conta/login?</h3>
                      <p className="text-gray-700">Pode deslogar você de sites, mas não afeta dados da conta (que ficam em servidores).</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    16. CONTATO
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Para dúvidas, solicitações ou reclamações sobre cookies:</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">Haast LTDA</h4>
                        <p className="text-gray-700">Encarregado de Proteção de Dados (DPO)</p>
                      </div>
                      
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Endereço:</strong> Av Juracy Magalhães - Bairro Felícia - Quadra 07, Lote 3340 A, Sala 1210, Vitória da Conquista/BA</p>
                        <p><strong>CNPJ:</strong> 49.810.921/0001-09</p>
                        <p><strong>E-mail:</strong> privacidade@haast.com.br</p>
                        <p><strong>Telefone:</strong> +55 77 9180-5013</p>
                        <p><strong>Website:</strong> haast.com.br</p>
                        <p><strong>Horário de atendimento:</strong> Segunda a sexta, 9h às 18h (horário de Brasília)</p>
                        <p><strong>Tempo de resposta:</strong> Até 15 dias corridos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    17. AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS (ANPD)
                  </h2>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-blue-800 font-medium mb-3">
                      Se suas preocupações não forem resolvidas, você pode contatar a autoridade reguladora:
                    </p>
                    <div className="space-y-2 text-blue-700">
                      <p><strong>ANPD - Autoridade Nacional de Proteção de Dados</strong></p>
                      <p><strong>Website:</strong> <a href="https://www.gov.br/anpd" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">gov.br/anpd</a></p>
                      <p><strong>Ouvidoria:</strong> <a href="https://www.gov.br/anpd/pt-br/canais_atendimento" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.gov.br/anpd/pt-br/canais_atendimento</a></p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
                    18. CONSENTIMENTO
                  </h2>
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <p className="text-lg font-semibold mb-4">
                      AO CONTINUAR NAVEGANDO EM HAAST.COM.BR E ACEITAR COOKIES NO BANNER DE CONSENTIMENTO, VOCÊ CONCORDA COM O USO DE COOKIES CONFORME DESCRITO NESTA POLÍTICA.
                    </p>
                    <p className="text-white/90">
                      Você pode retirar seu consentimento a qualquer momento através das configurações de cookies no site ou navegador.
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
                      Política de Cookies atualizada em outubro de 2025
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





