import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations('Pages.NotFoundPage');
  return (
    <main>
      <title>{t('meta.title')}</title>
      <div>
        <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="w-full space-y-6 text-center">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce">404</h1>
              <p>{t('title')}</p>
            </div>
            <Link href="/">{t("backToHome")}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
