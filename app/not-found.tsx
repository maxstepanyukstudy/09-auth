import { Metadata } from "next";
import css from "./page.module.css";
import { METADATA_OG_IMG_URL, METADATA_OG_URL } from "@/lib/const";

export const metadata: Metadata = {
  title: "Not found - NoteHub",
  description: "This page is not found - NoteHub",
  openGraph: {
    title: "Not found - NoteHub",
    description: "This page is not found - NoteHub",
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

export default function NotFound() {
  return (
    <main>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </main>
  );
}
