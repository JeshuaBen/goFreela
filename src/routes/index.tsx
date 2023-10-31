import {
  BrowserRouter as Router,
  Routes as RootRoutes,
  Route,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";
import PrivateRoutes from "./private/PrivateRoutes";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Router>
      <RootRoutes>
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </RootRoutes>
    </Router>
  );
};

export default Routes;
