import xhr from "../xhr";
import { redirectInGetInitialProps } from "../utils/redirect";
import withMergeInitialProps from "../utils/mergeInitialProps";
import { NextContext } from "next";

export async function getUser(): Promise<Auth.IUser> {
  return xhr
    .get(`/me`)
    .then(resp => {
      return resp.data.data;
    })
    .catch(e => {
      return Promise.reject(e);
    });
}

export async function getAuthInitialProps() {
  let userData = null;
  try {
    userData = await getUser();
  } catch (e) {}
  return {
    user: userData
  };
}

export async function redirectAuthenticated(ctx: NextContext) {
  const { user } = await getAuthInitialProps();
  if (user) {
    // redirect
    redirectInGetInitialProps(ctx, "/");
  }
  return {
    user
  };
}

export const withRedirectAuthenticated = withMergeInitialProps(
  redirectAuthenticated
);

export async function redirectGuest(ctx: NextContext) {
  const { user } = await getAuthInitialProps();
  if (!user) {
    // redirect
    redirectInGetInitialProps(ctx, "/login");
  }
  return {
    user
  };
}

export const withRedirectGuest = withMergeInitialProps(redirectGuest);
