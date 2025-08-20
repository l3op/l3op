import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { MetadataProps } from "@/lib/types";

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.NotFoundPage' });
  return { title: t('meta.title'), description: t('meta.description') };
}

export default function CatchAllPage() { notFound(); }