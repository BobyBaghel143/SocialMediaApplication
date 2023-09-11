import { Routes, Route } from "react-router-dom";

// Components import
import SocialApp from "../component/SocialApp.jsx";
import UserProfileDetails from "../component/UserProfieDetails/UserProfileDetails.jsx";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SocialApp />} />
      <Route path="/user/:userId" element={<UserProfileDetails />} />
    </Routes>
  );
}

export default CustomRoutes;
