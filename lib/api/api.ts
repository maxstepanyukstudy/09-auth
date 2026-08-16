import { Note } from "@/types/note";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL + "/api";

export const nextApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
