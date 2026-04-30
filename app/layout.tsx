// Root layout required by Next.js App Router.
// All real layout logic (fonts, providers, metadata) lives in app/[locale]/layout.tsx
// This shell is needed so Next.js doesn't complain about missing html/body at root.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as any
}
