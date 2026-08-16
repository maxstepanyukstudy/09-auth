import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";
import { METADATA_OG_IMG_URL, METADATA_OG_URL } from "@/lib/const";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "NoteHub is a simple and efficient personal notes manager ",
  openGraph: {
    title: "NoteHub",
    description: "NoteHub is a simple and efficient personal notes manager ",
    url: METADATA_OG_URL,
    images: [
      {
        url: METADATA_OG_IMG_URL,
        width: 1471,
        height: 980,
        alt: "NoteHub Logo",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  modal,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <TanStackProvider>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
            {modal}
            <Toaster />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
