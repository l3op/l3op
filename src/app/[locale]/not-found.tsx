import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function LocaleNotFound() {
  const t = await getTranslations('NotFoundPage');

  return (
    <div className="mb-40 mt-52 flex flex-col items-center justify-center gap-12">
      <h1>{t("title")}</h1>
      <Link href="/">{t("backToHome")}</Link>
    </div>
  );
}
