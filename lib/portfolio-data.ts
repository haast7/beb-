// Arquivo gerado automaticamente - não edite manualmente
// Execute: node scripts/generate-portfolio-data.js

export interface PortfolioItem {
  id: string;
  name: string;
  logo: string;
  cover: string;
  pieces: string[];
}

export const portfolioItems: PortfolioItem[] = [
  // Portfolio items serão adicionados quando as pastas existirem
];

export const getPortfolioItem = (id: string): PortfolioItem | undefined => {
  return portfolioItems.find(item => item.id === id);
};

export const getPortfolioItems = (): PortfolioItem[] => {
  return portfolioItems;
};
