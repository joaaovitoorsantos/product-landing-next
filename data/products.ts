export interface Product {
    id: number;
    name: string;
    img?: string;
    launch?: boolean;
    sku?: string;
    code?: string;
    description?: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Órtese Soft Curta com Polegar",
        img: "/images/products/ortese-soft-curta.png", 
        launch: false,
        sku: "OR1065", 
        description: "Órtese Soft Curta com Polegar indicada para imobilização e suporte articular do punho e polegar em casos de tendinites, tenossinovites, artrites, artroses, entorses leves e pós-operatório.",
    },
    {
        id: 2,
        name: "Órtese Soft Curta sem Polegar",
        img: "/images/products/ortese-soft-curta-sem.png",
        code: "OR1066",
        launch: true,
        description: "Órtese indicada para imobilização e suporte articular do punho.",
    },
    {
        id: 3,
        name: "Órtese Soft Curta com Polegar",
        img: "/images/products/ortese-soft-curta-com.png",
        code: "OR1065",
        description: "Órtese indicada para imobilização e suporte articular do punho.",
    },
    {
        id: 4,
        name: "Órtese Safe Air",
        img: "/images/products/ortese-safe-air.jpg",
        launch: true,
        code: "OR1051",
        description: "Órtese indicada para imobilização e suporte articular do punho.",
    },
];
