import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";
// import SignUp from "./component/SignUp/SignUp";


function App() {
  return (
    <>
      <Navbar />
      <CustomRoutes />
      {/* <SignUp /> */}
    </>
  );
}

export default App;
