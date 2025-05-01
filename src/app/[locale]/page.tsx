import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function LocalePage() {
  const t = await getTranslations('HomePage');
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={"/ar"}>Home</Link>
    </div>
  );
}
