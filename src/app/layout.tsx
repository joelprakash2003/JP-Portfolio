import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const basePath = process.env.NODE_ENV === "production" ? "/JP-Portfolio" : "";

export const metadata: Metadata = {
  metadataBase: new URL('https://joelprakash2003.github.io'),
  title: "Joel Prakash — Portfolio",
  description: "Joel Prakash — Aspiring Cybersecurity Analyst & Frontend Developer. Portfolio showcasing projects, internships, and resume.",
  referrer: "strict-origin-when-cross-origin",
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
  other: {
    "Content-Security-Policy": [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self'",
      "connect-src 'self'",
      "object-src 'none'"
    ].join("; "),
    "Permissions-Policy": [
      "accelerometer=()",
      "camera=()",
      "geolocation=()",
      "gyroscope=()",
      "microphone=()",
      "payment=()",
      "usb=()"
    ].join(", "),
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Resource-Policy": "same-origin",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff"
  },
};

export const viewport: Viewport = {
  themeColor: '#fdf8f3',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
