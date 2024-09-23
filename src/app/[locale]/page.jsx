'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {usePathname} from '@/i18n/routing';

export default function Home() {

  const t = useTranslations('Home');
  const pathname = usePathname();

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>{t('title')}</h1>
      <Link href="/nosotros">{t('about')}</Link>
      <p>Pathname: {pathname}</p>
    </div>
    </>
  );
}
