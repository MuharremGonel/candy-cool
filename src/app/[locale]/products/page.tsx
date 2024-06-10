'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


interface Product {
    id: number;
    title: string;
    image: string;
    boxSize: string;
    display: number;
    masterCase: number;
    netWeight: string;
    grossWeight: string;
    volume: string;
    shelfLife: string;
}

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts(data.products);
        }

        fetchProducts();
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap text-center justify-center">
                    {products.map((product) => (
                        <div key={product.id} className="">
                            <Image src={product.image} alt={product.title} />
                            <Link href={`products/${product.id}`}>
                                <h2 className="text-xl text-center font-semibold">{product.title}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default ProductsPage;
