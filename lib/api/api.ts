import { Note } from "@/types/note";
import axios from "axios";

export const nextApi = axios.create({
  baseURL: "https://notehub-api.goit.study",
  withCredentials: true,
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
