"use client";

import css from "./EditProfilePage.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import { updateMe, UserPatch } from "@/lib/api/clientApi";
import toast from "react-hot-toast";

export default function EditProfilePage() {
  const router = useRouter();

  const user = useAuthStore((store) => store.user);
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);
  const setUser = useAuthStore((store) => store.setUser);

  async function handleSubmit(formData: FormData) {
    const userPatch: UserPatch = {
      username: formData.get("username") as string,
    };

    try {
      const updatedUser = await updateMe(userPatch);
      setUser(updatedUser);
      toast("User updated");
      router.push('/profile')
    } catch (e) {
      console.log(e)
      toast.error("User update error");
    }
  }

  // todo? form field(s) as controlled element(s) istead of defaultValue. i cant figure it out. add new Store like updateUserDraft?
  return (
    <>
      {user && isAuthenticated && (
        <main className={css.mainContent}>
          <div className={css.profileCard}>
            <h1 className={css.formTitle}>Edit Profile</h1>

            <Image
              src={user.avatar}
              alt="User Avatar"
              width={120}
              height={120}
              className={css.avatar}
            />

            <form className={css.profileInfo} action={handleSubmit}>
              <div className={css.usernameWrapper}>
                <label htmlFor="username">Username: </label>
                <input
                  defaultValue={user.username}
                  id="username"
                  name="username"
                  type="text"
                  className={css.input}
                />
              </div>

              <p>Email: {user.email}</p>

              <div className={css.actions}>
                <button type="submit" className={css.saveButton}>
                  Save
                </button>
                <button onClick={()=> router.push('/profile')} type="button" className={css.cancelButton}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>
      )}
    </>
  );
}
