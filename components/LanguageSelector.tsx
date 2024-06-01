"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations();
  const [locale, setLocale] = useState('');

  useEffect(() => {
    const currentLocale = searchParams.get('locale') || 'en'; // Default locale
    setLocale(currentLocale);
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    router.push(`/${newLocale}`);
  };

  return (
    <div className="mb-4 text-black">
      <label htmlFor="language" className="mr-2">{t('selectLanguage')}</label>
      <select
        id="language"
        onChange={handleChange}
        defaultChecked={true}
        defaultValue={locale}
        value={locale}
        className="border rounded p-1"
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
