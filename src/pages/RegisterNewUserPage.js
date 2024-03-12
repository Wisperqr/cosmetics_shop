import { SearchAppBar } from "../components/appBar/AppBar";
import { RegisterNewUser } from "../components/registerNewUser/RegisterNewUser";

export const RegisterNewUserPage = () => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      <RegisterNewUser />
    </div>
  );
};
