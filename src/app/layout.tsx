import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const basePath = process.env.NODE_ENV === "production" ? "/JP-Portfolio" : "";

export const metadata: Metadata = {
  metadataBase: new URL('https://joelprakash2003.github.io'),
  title: "Joel Prakash — Portfolio",
  description: "Joel Prakash — Aspiring Cybersecurity Analyst & Frontend Developer. Portfolio showcasing projects, internships, and resume.",
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
  openGraph: {
    title: "Joel Prakash — Portfolio",
    description: "Cybersecurity, Systems Administration, and Frontend Projects.",
    images: [`${basePath}/social-preview.png`],
    url: 'https://joelprakash2003.github.io/JP-Portfolio',
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
      <body className="font-cereal" suppressHydrationWarning>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
