import Head from "next/head";
import Link from "next/link";

import { withRedirectGuest } from "../packages/auth";
import Header from "../shared/header";
import { xhr } from "../packages/hotels";
import { NextComponentType } from "next";

const HotelList: NextComponentType<
  { user: Auth.IUser },
  { data: Array<Hotels.IItem>; meta: any }
> = function HotelList({ user, data, meta }) {
  return (
    <>
      <Head>
        <title>Hotels</title>
      </Head>
      <Header user={user} />
      <h2>Hotels</h2>
      <div>
        {meta && (
          <div>
            Showing {meta.from} to {meta.to} of {meta.total}
          </div>
        )}
      </div>
      <ol>
        {data &&
          data.map((hotel) => (
            <li key={hotel.id}>
              <Link href={`/hotel?id=${hotel.id}`} as={`/hotel/${hotel.id}`}>
                <a>
                  {hotel.name} - {hotel.stars} Stars
                </a>
              </Link>
            </li>
          ))}
      </ol>
    </>
  );
};

HotelList.getInitialProps = async function getInitialProps() {
  const { data, meta } = await xhr.get("/hotels");
  return {
    data,
    meta,
  };
};

export default withRedirectGuest(HotelList);
