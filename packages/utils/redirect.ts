import Router from "next/router";
import { NextContext } from "next";

export async function redirectInGetInitialProps(
  { res }: NextContext,
  redirectTo: string
) {
  if (res) {
    if (res.writeHead) {
      res.writeHead(302, {
        Location: redirectTo
      });
      res.end();
    }
  } else {
    Router.replace(redirectTo);
  }
  return {};
}
