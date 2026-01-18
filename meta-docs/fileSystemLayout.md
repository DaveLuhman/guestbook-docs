guestbook-docs/
  README.md
  AGENTS.md

  meta-docs/
    projectDesignModel.md
    implementation-plan.md
    silo-specs/
      userSiloSpec.md
      adminSiteSpec.md
      developerSiloSpec.md

  src/
    app/
      (docs)/
        layout.tsx
        page.tsx

        docs/
          layout.tsx                 # docs shell: top nav + sidebar + content pane
          page.tsx                   # redirect or docs home (optional)

          users/
            page.mdx                 # audience landing page (required)
            getting-started.mdx
            signing-in.mdx

          admin/
            page.mdx                 # audience landing page (required)
            deployment-models.mdx
            device-management.mdx

          developers/
            page.mdx                 # audience landing page (required)
            architecture-overview.mdx
            integration-patterns.mdx

    components/
      docs/
        DocsShell.tsx                # renders top nav + sidebar + main
        SidebarAccordion.tsx         # one-open-at-a-time audience nav
        NavTree.ts                   # builds tree from frontmatter
        PageHeader.tsx               # title + summary + audience label
        CrossAudienceLink.tsx        # optional: forces explicit cross-audience labeling

    lib/
      docs/
        frontmatter.ts               # parse + validate schema
        nav.ts                       # build nav model
        constants.ts                 # audience enums, url prefixes

  content/
    docs/
      users/
        page.mdx
        getting-started.mdx
        signing-in.mdx
      admin/
        page.mdx
        deployment-models.mdx
        device-management.mdx
      developers/
        page.mdx
        architecture-overview.mdx
        integration-patterns.mdx

  scripts/
    lint-docs.ts                     # build-time checks: frontmatter + landing pages + reachability

  public/
    images/
      logo.svg
    docs/
      shared/
        ui/
        icons/
        screenshots/
        diagrams/
      users/
        kiosks/
        flows/
        screenshots/
      admin/
        kiosks/
        flows/
        diagrams/
        screenshots/
      developers/
        diagrams/
        flows/
        screenshots/
