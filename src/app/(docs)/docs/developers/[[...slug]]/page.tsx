import DocContent from "@/components/docs/DocContent";
import { getAllDocs } from "@/lib/docs/nav";

export async function generateStaticParams() {
  const docs = await getAllDocs();
  const devDocs = docs.filter(
    (doc) => doc.frontmatter.audience === "developers"
  );
  return [
    { slug: [] },
    ...devDocs.map((doc) => ({
      slug: doc.slug.slice(1)
    }))
  ];
}

export default async function DevelopersDocsPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = ["developers", ...(resolvedParams.slug ?? [])];
  return <DocContent slug={slug} />;
}
