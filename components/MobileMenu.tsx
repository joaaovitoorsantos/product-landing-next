interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const NAV_LINKS = [
    { href: '#produtos', label: 'Produtos' },
    { href: '#sobre', label: 'Sobre nós' },
    { href: '#contato', label: 'Contato' },
    { href: '#catalogos', label: 'Catálogos' },
] as const;

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    return (
        <>
            <div 
                className={`fixed inset-0 bg-black z-40 md:hidden transition-opacity duration-300 ${
                    isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg md:hidden transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <span className="text-2xl font-medium text-gray-dark">LOGO</span>
                        <button 
                            onClick={onClose}
                            className="text-gray-700 hover:text-gray-900"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto p-4">
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a 
                                        href={link.href}
                                        onClick={onClose}
                                        className="block py-3 px-4 text-gray-dark font-medium hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full mt-4 flex items-center gap-3 py-3 px-4 text-gray-dark font-medium hover:bg-gray-50 rounded-lg transition-colors">
                            <img src="/icons/search.svg" alt="Search" className='w-5 h-5' />
                            <span>Buscar</span>
                        </button>
                    </nav>

                    <div className="p-4 border-t border-gray-200 space-y-3">
                        <button className="w-full bg-orange-brand font-medium text-white px-4 py-3 rounded-lg transition-colors">
                            Fale conosco
                        </button>

                        <button className="w-full flex items-center justify-center gap-2 py-2 text-gray-dark">
                            <img src="/icons/flag_brazil.svg" alt="Brasil" />
                            <span>Português (BR)</span>
                            <img src="/icons/arrow-down.svg" alt='arrow-down' className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
