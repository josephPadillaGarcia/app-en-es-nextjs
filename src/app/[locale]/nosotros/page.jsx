import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function PageNosotros(){
    const t = useTranslations('Nosotros');

    return(
        <>
        <h1>{t('title')}</h1>
        <Link href="/">{t('back')}</Link>
        </>
    )
}