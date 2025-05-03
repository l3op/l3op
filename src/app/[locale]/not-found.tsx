import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function LocaleNotFound() {
  const t = await getTranslations('Pages.NotFoundPage');
  return (
    <main className="flex h-[calc(100svh-5rem)] flex-col items-center justify-center p-2 border border-dashed rounded-md">
      <title>{t('meta.title')}</title>
      <div className="relative text-center max-w-md">
        <h1 className="text-foreground mt-4 text-xl font-bold tracking-tight xl:text-2xl md">{`${t('title')} :(`}</h1>
        <Link href="/">{t("backToHome")}</Link>
      </div>
    </main>
  );
}
