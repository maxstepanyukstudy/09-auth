import { Note } from "@/types/note";
import axios from "axios";

export const nextApi = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
