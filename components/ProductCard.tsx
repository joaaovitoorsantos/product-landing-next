import Link from 'next/link';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        image?: string;
        isLaunch?: boolean;
        code?: string;
    };
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { id, name, image = '/product-placeholder.jpg', isLaunch, code } = product;

    return (
        <Link href={`/produto/${id}`} className="bg-white overflow-hidden rounded-lg cursor-pointer block w-full">
            <div className="relative w-full aspect-[4/5] bg-transparent flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden">
                {isLaunch && (
                    <span
                        className="absolute top-3 left-3 text-white font-medium px-2 py-1.5 rounded-lg z-10"
                        style={{ backgroundColor: 'rgba(154, 26, 128, 0.6)' }}
                    >
                        Lançamento
                    </span>
                )}

                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <div className="p-4">
                <h3 className="font-medium text-black mb-1">{name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className='text-gray-dark font-bold'>Cód. Produto</span>
                    <span className="font-roboto text-sm">{code}</span>
                </div>
            </div>
        </Link>
    );
};
