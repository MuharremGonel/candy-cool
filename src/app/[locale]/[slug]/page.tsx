"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface Page {
  slug: string;
  title: string;
  content: string;
}

const fetchPage = async (slug: string | string[]) => {
  const res = await fetch(`/api/pages`);
  if (!res.ok) {
    throw new Error('Pages not found');
  }
  const data = await res.json();
  return data.pages.find((page: Page) => page.slug === slug);
};

const DynamicPage = () => {
  const [page, setPage] = useState<Page | null>(null);
  const { slug } = useParams();
  const router = useRouter();
  const t = useTranslations("Index");

  useEffect(() => {
   
    if (slug) {
      fetchPage(slug)
        .then((page) => {
          if (!page) {
            router.replace('/not-found');
          } else {
            setPage(page);
          }
        })
        .catch(() => {
          router.replace('/not-found'); 
        });
    }
  }, [slug, router]);

  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-44">
      <h1 className="text-2xl font-bold mb-4">{t(page.title)}</h1>
      <p>{t(page.content)}</p>
    </div>
  );
};

export default DynamicPage;
