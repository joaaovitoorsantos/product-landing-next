import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

const NAV_LINKS = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#contato', label: 'Contato' },
  { href: '#catalogos', label: 'Catálogos' },
] as const;

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className={`bg-white shadow-sm sticky top-0 z-50 transition-transform duration-300 ${
                isMobileMenuOpen ? 'md:translate-y-0 -translate-y-full' : 'translate-y-0'
            }`}>
                <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                    <a href="/" className="text-3xl font-medium text-gray-dark">
                        LOGO
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="text-gray-dark font-medium">
                                {link.label}
                            </a>
                        ))}
                        <button className="text-gray-600 bg-gray-50 p-2 rounded-full">
                            <img src="/icons/search.svg" alt="Search" className='w-4 h-4' />
                        </button>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="bg-orange-brand font-medium text-white px-3 py-2 rounded-lg transition-colors">
                            Fale conosco
                        </button>

                        <button className="flex items-center">
                            <img src="/icons/flag_brazil.svg" alt="Brasil" />
                            <img src="/icons/arrow-down.svg" alt='arrow-down' className="w-4 h-4" />
                        </button>
                    </div>

                    <button 
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
};
