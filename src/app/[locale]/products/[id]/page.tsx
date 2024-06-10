"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from "next-intl";
import Image from 'next/image';

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
  description: string
}

const fetchProduct = async (id: string | string[]) => {
  const res = await fetch(`/api/products/${id}`);
  if (!res.ok) {
    throw new Error('Product not found');
  }
  const data = await res.json();
  return data.product;
};

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  const router = useRouter();
  const t = useTranslations("Index");

  useEffect(() => {
    if (id) {
      fetchProduct(id)
        .then(setProduct)
        .catch(() => {
          router.replace('/not-found'); 
        });
    }
  }, [id, router]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-44">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image src={product.image} alt={product.title} className="mb-2" />
      <p>Description: {t(product.description)}</p>
      <p>Box Size: {product.boxSize}</p>
      <p>Display: {product.display}</p>
      <p>Master Case: {product.masterCase}</p>
      <p>Net Weight: {product.netWeight}</p>
      <p>Gross Weight: {product.grossWeight}</p>
      <p>Volume: {product.volume}</p>
      <p>Shelf Life: {product.shelfLife}</p>
    </div>
  );
};

export default ProductDetailPage;
