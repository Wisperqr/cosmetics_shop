import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsUserAuth } from "../../redux/user/userSelectors";

export const PrivateRoute = (props) => {
  const isAuth = useSelector(getIsUserAuth);
  return isAuth ? props.children : <Navigate to="/login" />;
};

export const PrivateRouteForLogin = (props) => {
  const isAuth = useSelector(getIsUserAuth);
  return !isAuth ? props.children : <Navigate to="/accountOffice" />;
};
