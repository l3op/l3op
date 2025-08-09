import styles from './page.module.css'

import { Locale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.HomePage' });
  return { title: { absolute: t('meta.title') }, description: t('meta.description') };
}

export default async function LocalePage() {
  const t = await getTranslations('Pages.HomePage');
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={"/about-me"}>{t("about")}</Link>
    </div>
  );
}
