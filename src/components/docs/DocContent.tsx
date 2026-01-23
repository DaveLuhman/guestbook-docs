import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import PageHeader from "@/components/docs/PageHeader";
import PageNavigation from "@/components/docs/PageNavigation";
import { getDocBySlug } from "@/lib/docs/nav";

type DocContentProps = {
  slug: string[];
};

function wrapSectionContainers(source: string): string {
  // Pages that embed complex client-only components (like the OpenAPI reference)
  // tend to be sensitive to MDX/JSX wrapping. Keep their source untouched.
  const lines = source.split(/\r?\n/);
  const output: string[] = [];
  let inFence = false;
  let hasSection = false;

  for (const line of lines) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith("```")) {
      inFence = !inFence;
    }

    if (!inFence && /^##\s+/.test(line)) {
      if (hasSection) {
        output.push("</section>");
      }
      output.push('<section className="docs-section">');
      hasSection = true;
    }

    output.push(line);
  }

  if (hasSection) {
    output.push("</section>");
  }

  return output.join("\n");
}

export default async function DocContent({ slug }: DocContentProps) {
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const { content } = await compileMDX({
    source: wrapSectionContainers(doc.content),
    components: {},
    options: {
      parseFrontmatter: false
    }
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <PageHeader
        title={doc.frontmatter.title}
        summary={doc.frontmatter.summary}
        audience={doc.frontmatter.audience}
        icon={doc.frontmatter.icon}
      />
      <div className="docs-prose prose prose-slate mt-6 max-w-none text-base leading-7">
        {content}
      </div>
      <PageNavigation
        currentHref={doc.href}
        audience={doc.frontmatter.audience}
      />
    </div>
  );
}
