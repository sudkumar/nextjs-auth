import Head from "next/head";
import Link from "next/link";
import { NextComponentType, NextContext } from "next";

import { withRedirectGuest } from "../packages/auth";
import Header from "../shared/header";
import { xhr } from "../packages/hotels";

const Hotel: NextComponentType<
  { user: Auth.IUser },
  { data: Hotels.IItem }
> = function Hotel({ user, data }) {
  return (
    <>
      <Header user={user} />
      <Link href="/hotels" prefetch>
        <a>Back to listing</a>
      </Link>
      {!data ? (
        <div>Loading..</div>
      ) : (
        <>
          <Head>
            <title>{data.name}</title>
          </Head>
          <h2>{data.name}</h2>
          <p>{data.location.short_name}</p>
        </>
      )}
    </>
  );
};

Hotel.getInitialProps = async function getInitiaProps({
  query
}: NextContext<Record<string, string>>) {
  const data = await xhr.show(query.id);
  return {
    data
  };
};

export default withRedirectGuest(Hotel);
