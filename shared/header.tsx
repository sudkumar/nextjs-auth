import Link from "next/link";

export default function Header({ user }: { user?: Auth.IUser }) {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Dashboard</a>
        </Link>{" "}
        •{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        •{" "}
        {user ? (
          <>
            <Link href="/hotels">
              <a>Hotels</a>
            </Link>
            {" • "}
            <span>Hellow {user.name}</span>
            {" • "}
            <Link href="/logout">
              <a>Logout</a>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </nav>
    </header>
  );
}
