import { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

const FAMILIES = [
  { id: 'hidrolight', name: 'Hidrolight Neo' },
  { id: 'comfort', name: 'Comfort Air' },
  { id: 'ortho', name: 'Ortho Recovery' },
  { id: 'airflex', name: 'Air Flex' },
  { id: 'softline', name: 'Softline' },
  { id: 'footcare', name: 'Foot Care' },
  { id: 'lean', name: 'Lean' },
] as const;

const PRODUCTS_PER_PAGE = 9;
const MOCK_PRODUCT_MULTIPLIER = 22;

export const ProductsSection = () => {
  const [activeFamily, setActiveFamily] = useState('hidrolight');
  const [currentPage, setCurrentPage] = useState(1);
  
  const { allProducts, totalPages, currentProducts } = useMemo(() => {
    const allProducts = Array(MOCK_PRODUCT_MULTIPLIER).fill(products).flat();
    const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = allProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    
    return { allProducts, totalPages, currentProducts };
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const renderPageNumbers = () => {
    const maxVisiblePages = 5;
    const pages = [];
    
    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 flex items-center justify-center rounded-full font-roboto font-medium transition-all ${
            currentPage === i
              ? 'text-black shadow-lg'
              : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          {i}
        </button>
      );
    }

    if (totalPages > maxVisiblePages) {
      pages.push(<span key="ellipsis" className="text-gray-400 font-roboto">...</span>);
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-10 h-10 flex items-center justify-center rounded-full font-roboto font-medium transition-all ${
            currentPage === totalPages
              ? 'text-black shadow-md border-gray-dark'
              : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  const FilterSection = ({ title }: { title: string }) => (
    <div className="px-6 py-4 border-b border-gray-200 bg-[#F8F8F8]">
      <button className="flex items-center justify-between w-full text-gray-dark">
        {title === 'Filtros' ? title : <span className="font-raleway">{title}</span>}
        <img src="/icons/arrow-down.svg" alt="" className='w-5' />
      </button>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl mb-2 text-dark-gray font-medium">
            Conheça as <span className="font-semibold text-purple-brand">famílias exclusivas</span> <br />da linha Orthopedic
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {FAMILIES.map((family) => (
            <button
              key={family.id}
              onClick={() => setActiveFamily(family.id)}
              className={`px-2 py-2 rounded-lg text-sm font-medium transition-colors ${activeFamily === family.id
                ? 'text-white'
                : 'bg-gray-100 text-purple-brand hover:bg-gray-200'
                }`}
              style={activeFamily === family.id ? { backgroundColor: '#80276C' } : {}}
            >
              {family.name}
              <sup className="text-xs">®</sup>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <p className="text-gray-dark">
            Família voltada para extrair os benefícios do Neoprene. <br /> <span className='text-black'>Propriedades térmicas, compressivas e elásticas:</span> são essas três <br />propriedades que fazem do Neoprene uma ferramenta eficaz no <br /> tratamento e prevenção de lesões no tratamento ortopédico.
          </p>
        </div>

        <div className="border-t border-gray-200 mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="font-raleway font-medium text-lg">Filtros</h3>
              </div>

              <FilterSection title="Lançamentos" />
              <FilterSection title="Famílias/Tecnologias" />
              
              <div className="px-6 py-4 bg-[#F8F8F8]">
                <button className="flex items-center justify-between w-full text-gray-dark">
                  <span className="font-raleway">Produtos</span>
                  <img src="/icons/arrow-down.svg" alt="" className='w-5' />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div className='flex gap-3'>
                <div className="text-black font-roboto font-bold bg-gray-50 font-medium p-2 rounded-xl">
                  {allProducts.length} produtos
                </div>
                <button className="text-gray-600 bg-gray-50 p-2 rounded-full">
                  <img src="/icons/search.svg" alt="" className='w-5' />
                </button>
              </div>

              <button className="bg-orange-brand text-white px-2 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
                Baixar Catálogo
                <img src="/icons/download.svg" alt="" className='w-4 brightness-0 invert' />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentProducts.map((product, index) => (
                <ProductCard
                  key={`${product.id}-${(currentPage - 1) * PRODUCTS_PER_PAGE + index}`}
                  product={{
                    id: product.id,
                    name: product.name,
                    code: product.code || product.sku || '',
                    image: product.img || '/product-placeholder.jpg',
                    isLaunch: product.launch || false,
                  }}
                />
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {renderPageNumbers()}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
