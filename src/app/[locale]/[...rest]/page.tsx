import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { LocaleProps } from "@/lib/types";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.NotFoundPage' });
  return { title: t('meta.title'), description: t('meta.description') };
}

export default function CatchAllPage() { notFound(); }