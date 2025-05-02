import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: ""
}

export default function CatchAllPage() {
  notFound();
}
