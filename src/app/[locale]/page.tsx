import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MetadataProps } from '@/lib/types';

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.HomePage' });
  return { title: t('meta.title'), description: t('meta.description') };
}

export default async function LocaleHomePage() {
  const t = await getTranslations('Pages.HomePage');
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={"/about-me"}>{t("about")}</Link>
    </div>
  );
}
