import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.AboutMePage' });
  return { title: t('meta.title'), description: t('meta.description') };
}

export default async function AboutMePage() {
  const t = await getTranslations('Pages.AboutMePage');
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
