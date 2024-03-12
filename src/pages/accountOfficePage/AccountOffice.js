import * as React from "react";

import { SearchAppBar } from "../../components/appBar/AppBar";

import { getUser } from "../../redux/user/userSelectors";
import { useSelector } from "react-redux";
import { FooterNavBar } from "../../components/footerNavBar/FooterNavBar";
import { AdminOffice } from "./adminOfiice/adminOfiice";
import { UserOffice } from "./userOfiice/userOffice";

export const AccountOffice = () => {
  const authUser = useSelector(getUser);
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      {authUser.login.toLowerCase() === "admin" ? (
        <AdminOffice />
      ) : (
        <UserOffice />
      )}
      <FooterNavBar />
    </div>
  );
};
