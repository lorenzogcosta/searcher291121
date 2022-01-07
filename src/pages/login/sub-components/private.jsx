// Dependencies Import

import { Outlet , Navigate } from "react-router-dom";
import { isLogin } from '../utils/Logged' 

function PrivateRoute() {

  // If Token Is OK Show Pages Else Goes To Login Page
  return isLogin() ? <Outlet/> : <Navigate to="/login" />;
}

export default PrivateRoute

