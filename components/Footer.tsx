const INSTITUTIONAL_LINKS = [
    { href: '#sobre', label: 'Sobre nós' },
    { href: '#trabalhe', label: 'Trabalhe conosco' },
];

const CATALOG_LINKS = [
    { href: '#catalogo-geral', label: 'Catálogo geral' },
    { href: '#linha-orthopedic', label: 'Linha Orthopedic' },
    { href: '#linha-sports', label: 'Linha Sports' },
    { href: '#linha-special-cares', label: 'Linha Special Cares' },
    { href: '#catalogo-foot-care', label: 'Catálogo Foot Care' },
    { href: '#catalogo-acessibilidade', label: 'Catálogo Acessibilidade' },
];

const PRODUCT_LINES = [
    { href: '#orthopedic', label: 'Orthopedic' },
    { href: '#sports', label: 'Sports' },
    { href: '#special-cares', label: 'Special Cares' },
];

const SOCIAL_MEDIA = [
    { name: 'Instagram', icon: '/icons/instagram.svg' },
    { name: 'YouTube', icon: '/icons/youtube.svg' },
    { name: 'Facebook', icon: '/icons/facebook.svg' }
];

export const Footer = () => {
    const FooterLink = ({ href, label }: { href: string; label: string }) => (
        <a href={href} className="font-roboto text-gray-60">
            {label}
        </a>
    );

    return (
        <footer className="bg-gray-dark text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-medium mb-4">LOGO</h2>
                    </div>

                    <div>
                        <h3 className="font-roboto font-medium text-lg mb-4">Institucional</h3>
                        <ul className="space-y-2">
                            {INSTITUTIONAL_LINKS.map((link) => (
                                <li key={link.href}>
                                    <FooterLink href={link.href} label={link.label} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-roboto font-medium text-lg mb-4">Download de Catálogos</h3>
                        <ul className="space-y-2">
                            {CATALOG_LINKS.map((link) => (
                                <li key={link.href}>
                                    <FooterLink href={link.href} label={link.label} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-roboto font-medium text-lg mb-4">Linhas de produtos</h3>
                        <ul className="space-y-2">
                            {PRODUCT_LINES.map((link) => (
                                <li key={link.href}>
                                    <FooterLink href={link.href} label={link.label} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-roboto font-medium text-lg mb-4">Entre em contato e tire suas dúvidas</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <img src="/icons/telephone.svg" alt="" className="w-9" />
                                <span className="font-roboto">+55 48 3333 3333</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <img src="/icons/email.svg" alt="" className="w-9" />
                                <div>
                                    <div className="font-roboto">sac@loremipsum.com.br ou</div>
                                    <div className="font-roboto">rp@loremipsum.com.br</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="mb-3 font-roboto font-medium">Nos acompanhe também<br />nas redes sociais</p>
                            <div className="flex gap-3">
                                {SOCIAL_MEDIA.map((social) => (
                                    <img src={social.icon} alt={social.name} className="w-9" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#707372]"></div>
            <div className="bg-gray-dark py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-60">Selecionar País</span>
                        <img
                            src="/icons/flag_brazil.svg"
                            alt="Brasil"
                            className="w-6 object-cover"
                        />
                        <img src="/icons/arrow-down-white.svg" alt="arrow-down" className="w-4" />
                    </div>

                    <div className="text-gray-60 text-right font-roboto">
                        © 2023 Lorem Ipsum. Todos os direitos reservados.
                        <br />
                        Av dos Buriti, 150 - Florianopolis - SC - Brasil
                    </div>
                </div>
            </div>
        </footer>
    );
};