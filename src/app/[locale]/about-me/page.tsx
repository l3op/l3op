import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MetadataProps } from "@/lib/types";

export async function generateMetadata({ params }: MetadataProps) {
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
