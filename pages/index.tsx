import { withRedirectGuest } from "../packages/auth";
import Header from "./../shared/header";
import { NextComponentType } from "next";

const Dashboard: NextComponentType<{ user: Auth.IUser }> = function Dashboard({
  user
}) {
  return (
    <div>
      <Header user={user} />
      <h2>Dashboard</h2>
      <p>
        Here is your dashboard. Soon you will see activities related to trips,
        payments and transactions
      </p>
    </div>
  );
};

export default withRedirectGuest(Dashboard);
