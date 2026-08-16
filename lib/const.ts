import { NoteTag } from "@/types/note";

export const validTags: NoteTag[] = [
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];

export const APP_NOTES_FILTER_SLUG_PARAMS_INDEXES = {
  TAG_NAME: 0,
};

export const METADATA_OG_URL = "https://08-zustand-seven-pink.vercel.app"; // todo: upd after deploy

export const METADATA_OG_IMG_URL =
  "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg";

export const NOTES_PER_PAGE = 12;
