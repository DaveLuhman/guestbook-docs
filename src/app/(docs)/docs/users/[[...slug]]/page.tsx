import DocContent from "@/components/docs/DocContent";
import { getAllDocs } from "@/lib/docs/nav";

export async function generateStaticParams() {
  const docs = await getAllDocs();
  const usersDocs = docs.filter((doc) => doc.frontmatter.audience === "users");
  return [
    { slug: [] },
    ...usersDocs.map((doc) => ({
      slug: doc.slug.slice(1)
    }))
  ];
}

export default async function UsersDocsPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = ["users", ...(resolvedParams.slug ?? [])];
  return <DocContent slug={slug} />;
}
