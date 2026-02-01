import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: 'calc(100dvh - 80px)' }}>
      <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url('${isMobile ? '/images/banners/banner-mobile.svg' : '/img.svg'}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",}}
      />


      <div className="relative z-10 container mx-auto px-4 py-8 h-full flex flex-col">
        <nav className="text-sm mb-12">
          <a href="/" className="text-gray-dark font-medium">Início</a>
          <span className="mx-2 text-black">&gt;</span>
          <span className="text-black font-medium">Linha Orthopedic</span>
        </nav>

        <div className="max-w-2xl flex-1 flex flex-col justify-center -mt-24">
          <div className="mb-8">
            <img
              src="/orthopedic.svg"
              alt="Linha Orthopedic"
              className="w-auto h-24"
            />
          </div>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-2xl font-medium">•</span>
              <p className="text-2xl text-black font-medium">
                Produtos desenvolvidos para auxiliar na prevenção e retorno das atividades, no tratamento e recuperação <br/>de pacientes com lesões ortopédicas.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};