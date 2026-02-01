import { useRouter } from 'next/router';
import { products } from '@/data/products';
import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { ProductFAQ } from '@/components/ProductFAQ';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl">Produto não encontrado</h1>
      </div>
    );
  }

  const carouselImages = [
    product.img || '/product-placeholder.jpg',
    '/images/carousel/1.png',
    '/images/carousel/2.png',
    '/images/carousel/3.png',
    '/images/carousel/4.png',
    '/images/carousel/5.png',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-8">
        <a href="/" className="text-gray-dark font-medium">Início</a>
        <span className="mx-2 text-gray-dark">&gt;</span>
        <a href="/" className="text-gray-dark font-medium">Linha Orthopedic</a>
        <span className="mx-2 text-gray-dark">&gt;</span>
        <span className="text-black font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
        <div>
          <div className="bg-white border border-[#D5D7D8] rounded-lg mb-4 relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            <img
              src={carouselImages[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#121212] bg-opacity-50 text-white px-3 py-1 rounded-md font-roboto text-sm">
              {currentImageIndex + 1}/{carouselImages.length}
            </div>
            <button className="absolute bottom-4 right-4 bg-gray-800 bg-opacity-50 text-white p-2 rounded-md hover:bg-opacity-70 transition-opacity">
              <img src="/icons/lupa.svg" alt="Zoom" className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setCurrentImageIndex(currentImageIndex > 0 ? currentImageIndex - 1 : carouselImages.length - 1)}
              className="p-3 md:p-4 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2 overflow-hidden relative flex-1">
              <div className="flex gap-2">
                {carouselImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 border-b-4 rounded overflow-hidden transition-all ${currentImageIndex === idx ? 'border-b-orange-brand' : 'border-b-transparent'
                      }`}
                    style={{ width: 'calc((100% - 3 * 8px) / 4.5)', aspectRatio: '1/1' }}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

            <button
              onClick={() => setCurrentImageIndex(currentImageIndex < carouselImages.length - 1 ? currentImageIndex + 1 : 0)}
              className="p-3 md:p-4 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <button className="text-orange-brand flex items-center gap-2 mb-4 font-medium hover:text-orange-80 transition-colors text-sm md:text-base">
            Baixar Folder do Produto
            <img src="/icons/download.svg" alt="Download" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div>
          <div className="mb-2">
            <span className="text-sm text-gray-dark font-raleway font-medium">Hidrolight Neo®</span>
          </div>

          <div
            className="text-white p-2 rounded-lg mb-4 inline-block bg-purple-brand"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{product.name}</h1>
          </div>

          <div className="mb-6">
            <p className="text-gray-brand font-roboto">
              Código SKU OR83, Lado direito / Código SKU OR83, Lado esquerdo
            </p>
          </div>

          <div className="mb-6">
            <h2 className=" mb-3">Descrição</h2>
            <p className="text-gray-dark leading-relaxed">
              A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush, com propriedades isolantes térmicas e um acabamento elegante em plush. Possui ampla capacidade de ajuste devido à aderência do tecido. Em repouso, a órtese já está pré-ajustada, com fechamento do polegar e uma membrana elástica que funciona como um bolso, facilitando a colocação pelo próprio paciente. As talas internas são facilmente ajustáveis para se adaptarem à mão desejada. São fornecidas duas talas removíveis, uma com curvatura ideal para sustentar o punho até a palma da mão, e a segunda reta na parte dorsal do punho, impedindo movimentos para cima e para baixo. O elástico aderente envolve a articulação, proporcionando compressão de acordo com a indicação médica e a necessidade do paciente.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-black">
              Nível 3
            </p>
            <p className="text-gray-dark">Recuperação e tratamento de lesões GRAVES</p>
            <div className="mt-6 border-b border-gray-80"></div>
          </div>

            <div className="mb-3">
            <p className="text-black mb-2 flex items-center gap-2">
              Cores disponíveis:
              <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 bg-black rounded-full border"></span>
              <span className='text-gray-dark'>Preto</span>
              </span>
            </p>
            </div>

          <div className="mb-3">
            <p className="text-black">Modelo:
              <span className='text-gray-dark'> Bilateral</span>
            </p>
          </div>

          <div className="mb-3">
            <p className="text-black mb-2 inline-block mr-4">Tamanhos disponíveis:</p>
            <div className="inline-flex gap-2">
              <button className="px-2 bg-gray-200 rounded text-gray-dark">
                Único
              </button>
              <button className="px-2 bg-gray-200 rounded text-gray-dark">
                Especial
              </button>
            </div>
          </div>

          <div className="mb-6 flex gap-4">
            <button className="text-orange-brand flex items-center gap-1 font-medium">
              <img src="/icons/size.svg" alt="Size" className="w-6 h-6" />
              Descubra o seu tamanho ideal
            </button>
            <button className="text-gray-dark flex items-center gap-1 font-medium">
              <img src="/icons/fita.svg" alt="Fita" className='w-6 h-6' />
              Tabela de medidas
            </button>
          </div>

          <button className="bg-orange-brand hover:bg-orange-600 text-white px-2 py-2 mt-6 rounded-lg font-medium mb-4 w-full md:w-auto">
            Encontrar lojas online
          </button>

          <div>
            <a href="#" className="text-gray-dark hover:text-gray-800 underline">
              Gostou desse produto? Seja um vendedor
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative flex items-center justify-center">
          <img
            src="/images/banners/video.png"
            alt="Vídeo do produto"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <button className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-16 rounded-lg py-8">
        <h1 className="text-4xl text-gray-brand">
          Fabricação <span className="text-orange-brand font-medium">própria</span> e nacional.
        </h1>
        <h3 className="text-4xl mb-6 text-gray-brand">
          <span className="text-orange-brand font-medium">Qualidade</span> garantida!
        </h3>
        <p className="text-gray-brand mb-8 font-medium">
          Antes de utilizar o produto, leia atentamente as precauções e instruções de uso.
        </p>

        <div className="flex items-center justify-center">
          <img src="/images/banners/demonstracao-mobile.svg" alt="" className="w-full md:hidden" />
          <img src="/images/banners/demonstracao.svg" alt="" className="hidden md:block w-auto" />
        </div>
      </div>

      <ProductFAQ />

      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-medium">Conheça também<br />nossos outros produtos</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
              disabled={carouselIndex === 0}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCarouselIndex(Math.min(products.length * 2 - 4, carouselIndex + 1))}
              disabled={carouselIndex >= products.length * 2 - 4}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${carouselIndex * (100 / 4 + 1.5)}%)` }}
          >
            {Array.from({ length: 2 }).flatMap((_, repeatIndex) =>
              products.map((product, productIndex) => (
                <div key={`${product.id}-${repeatIndex}-${productIndex}`} className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]">
                  <ProductCard
                    product={{
                      ...product,
                      code: product.code || product.sku || '',
                      image: product.img || '/product-placeholder.jpg',
                      isLaunch: product.launch || false,
                    }}
                  />
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
