import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

import { login, withRedirectAuthenticated } from "../packages/auth";

function useInput<T>(
  defaultValue: T = "" as any
): [
  T,
  (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => any
] {
  const [value, setValue] = useState<T>(defaultValue);
  return [value, e => setValue(e.target.value as any)];
}

type TOnSubmit = (credentials: { email: string; password: string }) => void;

export function LoginForm({ onSubmit }: { onSubmit: TOnSubmit }) {
  const [email, onChangeEmail] = useInput<string>();
  const [password, onChangePasssord] = useInput<string>();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit({ email, password });
      }}
    >
      <Head>
        <title>Login</title>
      </Head>
      <fieldset>
        <legend>Login</legend>
        <label>
          {" "}
          Email{" "}
          <input
            type="email"
            name="email"
            id="email"
            autoFocus
            placeholder="email@domain.com"
            required
            value={email}
            onChange={onChangeEmail}
          />
        </label>
        <br />
        <label>
          Password{" "}
          <input
            type="password"
            name="email"
            required
            id="password"
            value={password}
            onChange={onChangePasssord}
          />
        </label>
        <button type="submit">Login</button>
      </fieldset>
      <Link href="/forgot-password">
        <a>Forgot Password</a>
      </Link>
    </form>
  );
}

export function Login() {
  return (
    <LoginForm
      onSubmit={data => {
        login(data.email, data.password).then(() => {
          Router.replace("/");
        });
      }}
    />
  );
}

export default withRedirectAuthenticated(Login);
