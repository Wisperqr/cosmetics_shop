import { SearchAppBar } from "../components/appBar/AppBar";
import { Login } from "../components/login/Login";
import { ToastElement } from "../components/toast/toast";

export const LoginPage = () => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      <Login />
      <ToastElement />
    </div>
  );
};
