import Link from "next/link";
import Head from "next/head";
import { withAmp } from "next/amp";

function About() {
  return (
    <div>
      <Head>
        <title>About Tourepedia Admin Dashboard and team</title>
      </Head>
      <Link href="/" prefetch>
        <a>Back to Dashboard</a>
      </Link>
      <h2>Amount Page</h2>
      <p>This page is purely static page with not user and all that stuff.</p>
      <p>We can put things like faqs, contact details, about company here</p>
    </div>
  );
}

export default withAmp(About);
