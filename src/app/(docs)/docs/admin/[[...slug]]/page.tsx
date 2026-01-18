import DocContent from "@/components/docs/DocContent";
import { getAllDocs } from "@/lib/docs/nav";

export async function generateStaticParams() {
  const docs = await getAllDocs();
  const adminDocs = docs.filter(
    (doc) => doc.frontmatter.audience === "administrators"
  );
  return [
    { slug: [] },
    ...adminDocs.map((doc) => ({
      slug: doc.slug.slice(1)
    }))
  ];
}

export default async function AdminDocsPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = ["admin", ...(resolvedParams.slug ?? [])];
  return <DocContent slug={slug} />;
}
