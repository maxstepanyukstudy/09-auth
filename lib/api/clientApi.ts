import axios from "axios";
import type { CreateNote, Note } from "../../types/note";
import { User } from "@/types/user";
import { FetchNotesResponse, nextApi } from "./api";
import { NOTES_PER_PAGE } from "../const";

export interface UserDataRegister {
  email: string;
  password: string;
}

export interface UserDataLogin {
  email: string;
  password: string;
}

export interface UserPatch {
  email?: string;
  username?: string;
}

export async function fetchNotes(
  page?: number,
  search?: string,
  tag?: string,
): Promise<FetchNotesResponse> {
  tag = tag !== "all" ? tag : undefined;

  const { data } = await nextApi.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      search,
      tag,
      perPage: NOTES_PER_PAGE,
    },
  });

  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await nextApi.get<Note>("/notes/" + id);
  return data;
}

export async function createNote(note: CreateNote): Promise<Note> {
  const { data } = await nextApi.post<Note>("/notes", note);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await nextApi.delete<Note>("/notes/" + id);
  return data;
}

export async function register(userData: UserDataRegister): Promise<User> {
  const { data } = await nextApi.post<User>("/auth/register", userData);
  return data;
}

export async function login(userData: UserDataLogin): Promise<User> {
  const { data } = await nextApi.post<User>("/auth/login", userData);
  return data;
}

export async function checkSession(): Promise<boolean> {
  const { data } = await nextApi.get<{ success: boolean }>("/auth/session");
  return data.success;
}

export async function getMe(): Promise<User> {
  const { data } = await nextApi.get<User>("/users/me");
  return data;
}

export async function updateMe(userPatch: UserPatch): Promise<User> {
  const { data } = await nextApi.patch<User>("/users/me", userPatch);
  return data;
}

export async function logout(): Promise<void> {
  await nextApi.post("/auth/logout");
}
