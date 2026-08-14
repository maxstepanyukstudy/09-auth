"use client";

import { UserDataRegister } from "@/types/user";
import css from "./SignUpPage.module.css";
import { register } from "@/lib/api/clientApi";

export default function SignUpPage() {
  function handleSubmit(formData: FormData) {
    const registerData: UserDataRegister = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    register(registerData);
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
