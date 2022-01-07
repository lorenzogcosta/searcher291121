import { Outlet , Navigate } from "react-router-dom";
import { isLogin } from '../utils/Logged' 

function PrivateRoute() {

  return isLogin() ? <Outlet/> : <Navigate to="/login" />;
}

export default PrivateRoute

