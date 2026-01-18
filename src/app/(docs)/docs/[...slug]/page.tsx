import DocContent from "@/components/docs/DocContent";
import { getAllDocs } from "@/lib/docs/nav";

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug
  }));
}

export default async function DocPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ?? [];
  return <DocContent slug={slug} />;
}
