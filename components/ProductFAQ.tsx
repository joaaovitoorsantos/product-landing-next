export const ProductFAQ = () => {
    return (
        <div className="mb-16">
            <details open className="border-t border-gray-80">
                <summary className="px-0 py-6 cursor-pointer font-medium text-lg flex justify-between items-center">
                    Detalhes
                   <img src="/icons/arrow-down.svg" alt="" className="w-6"/>
                </summary>
                <div className="pb-4 text-gray-dark space-y-2">
                    <p className="font-medium text-black">Nível 3 - Recuperação e tratamento de lesões GRAVES</p>
                    <p><span className="font-medium">Nome Comercial:</span> Órtese Splint Bilateral</p>
                    <p><span className="font-medium">Linha:</span> Orthopedic</p>
                    <p><span className="font-medium">Cod. Produto (referências/SKU):</span> OR83</p>
                    <p><span className="font-medium">Família de Produtos:</span> Hidrolight Neo</p>
                    <p><span className="font-medium">Modelos do produto(esquerda/direita-bilateral):</span> Bilateral</p>
                    <p><span className="font-medium">Composição:</span> 74% borracha de cloropreno, 16% poliamida, 9%poliestireno e 1%PVC</p>
                    <p className="font-medium">PRODUTO TÉRMICO</p>
                </div>
            </details>

            <details className="border-t border-gray-80">
                <summary className="px-0 py-6 cursor-pointer font-medium text-lg flex justify-between items-center">
                    Especificações técnicas
                    <img src="/icons/arrow-down.svg" alt="" className="w-6"/>
                </summary>
                <div className="pb-4 text-gray-600">
                    <p>Especificações técnicas do produto...</p>
                </div>
            </details>

            <details className="border-t border-gray-80">
                <summary className="px-0 py-6 cursor-pointer font-medium text-lg flex justify-between items-center">
                    <span>Indicações e Instrução de uso</span>
                    <img src="/icons/arrow-down.svg" alt="" className="w-6"/>
                </summary>
                <div className="pb-4 text-gray-600">
                    <p>Instruções de uso e indicações...</p>
                </div>
            </details>

            <details className="border-t border-b border-gray-80">
                <summary className="px-0 py-6 cursor-pointer font-medium text-lg flex justify-between items-center">
                    Garantia
                   <img src="/icons/arrow-down.svg" alt="" className="w-6"/>
                </summary>
                <div className="pb-4 text-gray-600">
                    <p>Informações sobre garantia...</p>
                </div>
            </details>
        </div>
    );
};
