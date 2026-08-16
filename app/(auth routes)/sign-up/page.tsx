"use client";

import { register } from "@/lib/api/clientApi";
import css from "./SignUpPage.module.css";
import { useAuthStore } from "@/lib/store/userStore";

export default function SignUpPage() {
  const setUser = useAuthStore((store) => store.setUser);

  async function handleSubmit(formData: FormData) {
    const registerData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const user = await register(registerData);
    setUser(user)
  }

  return (
    <main className={css.mainContent}>
      <h1 className={css.formTitle}>Sign up</h1>
      <form action={handleSubmit} className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </div>

        <p className={css.error}>Error</p>
      </form>
    </main>
  );
}
