import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { Metadata } from "next";
import { METADATA_OG_IMG_URL, METADATA_OG_URL } from "@/lib/const";

export const metadata: Metadata = {
  title: "Create note - NoteHub",
  description:
    "Create note at NoteHub (a simple and efficient personal notes manager)",
  openGraph: {
    title: "Create note - NoteHub",
    description:
      "Create note at NoteHub (a simple and efficient personal notes manager)",
    url: `${METADATA_OG_URL}/notes/action/create`,
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

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
