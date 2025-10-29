import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://joelprakash.github.io'),
  title: "Joel Prakash — Portfolio",
  description: "Joel Prakash — Aspiring Cybersecurity Analyst & Frontend Developer. Portfolio showcasing projects, internships, and resume.",
  openGraph: {
    title: "Joel Prakash — Portfolio",
    description: "Cybersecurity, Systems Administration, and Frontend Projects.",
    images: ['/social-preview.png'],
    url: 'https://joelprakash.github.io',
    siteName: 'Joel Prakash',
  },
};

export const viewport: Viewport = {
  themeColor: '#1c1339',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
