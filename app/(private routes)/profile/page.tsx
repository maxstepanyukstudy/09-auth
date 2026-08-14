import Image from "next/image";
import css from "./ProfilePage.module.css";
import Link from "next/link";
import Avatar from "@/app/favicon.ico"; // todo: remove temp img
import { Metadata } from "next";
import { METADATA_OG_IMG_URL, METADATA_OG_URL } from "@/lib/const";

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

export default function ProfilePage() {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          {/* todo? upd Link href */}
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          {/* todo: upd Image src */}
          <Image
            src={Avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: your_username</p>
          <p>Email: your_email@example.com</p>
        </div>
      </div>
    </main>
  );
}
