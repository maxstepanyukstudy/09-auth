import { User } from "@/types/user";
import { FetchNotesResponse, nextApi } from "./api";
import { cookies } from "next/headers";
import { NOTES_PER_PAGE } from "../const";
import { Note } from "@/types/note";

export async function fetchNotes(
  page?: number,
  search?: string,
  tag?: string,
): Promise<FetchNotesResponse> {
  tag = tag !== "all" ? tag : undefined;
  const cookiesStore = await cookies();

  const { data } = await nextApi.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      search,
      tag,
      perPage: NOTES_PER_PAGE,
    },
    headers: {
      Cookie: cookiesStore.toString(),
    },
  });

  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const cookiesStore = await cookies();
  const { data } = await nextApi.get<Note>("/notes/" + id, {
    headers: {
      Cookie: cookiesStore.toString(),
    },
  });
  return data;
}

export async function getMe(): Promise<User> {
  const cookiesStore = await cookies();
  const { data } = await nextApi.get<User>("/users/me", {
    headers: {
      Cookie: cookiesStore.toString(),
    },
  });
  return data;
}

export async function checkSession() {
  const cookiesStore = await cookies();
  const res = await nextApi.get("/auth/session", {
    headers: {
      Cookie: cookiesStore.toString(),
    },
  });
  return res;
}
