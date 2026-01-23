import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guestbook Documentation",
  description: "Audience-scoped documentation for the Guestbook platform."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900 antialiased dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
