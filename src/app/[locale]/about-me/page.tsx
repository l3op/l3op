import { getTranslations } from "next-intl/server";
import { LocaleProps } from "@/lib/types";

export async function generateMetadata({ params }: LocaleProps) {
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
