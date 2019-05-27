import { logout } from "../packages/auth";
import { redirectInGetInitialProps } from "../packages/utils/redirect";
import { NextContext } from "next";

export default function Logout() {
  return <div>Please wait. Logging out...</div>;
}

Logout.getInitialProps = async function logoutAndRedirect(ctx: NextContext) {
  // logout, no need to wait
  try {
    logout();
  } catch (e) {}
  // and redirect
  redirectInGetInitialProps(ctx, "/about");
  return {};
};
