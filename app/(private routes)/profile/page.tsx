import Image from "next/image";
import css from "./ProfilePage.module.css";
import Link from "next/link";
import { Metadata } from "next";
import { METADATA_OG_IMG_URL, METADATA_OG_URL } from "@/lib/const";
import { getMe } from "@/lib/api/serverApi";

export const metadata: Metadata = {
  title: "Profile - NoteHub",
  description:
    "Profile profile page at  NoteHub (a simple and efficient personal notes manager)",
  openGraph: {
    title: "Profile - NoteHub",
    description:
      "Profile profile page at  NoteHub (a simple and efficient personal notes manager)",
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

export default async function ProfilePage() {
  const user = await getMe();
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  );
}
