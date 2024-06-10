"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const [locale, setLocale] = useState('');

  useEffect(() => {
    const pathSegments = pathname.split('/');
    const currentLocale = pathSegments[1] || 'en'; // Default locale 'en'
    setLocale(currentLocale);
  }, [pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLocale(newLocale);

    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="mb-4 text-black">
      <label htmlFor="language" className="mr-2">{t('selectLanguage')}</label>
      <select
        id="language"
        onChange={handleChange}
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
