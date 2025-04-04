import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router";

import Login from "./Login";
import Body from "./Body";
import Profile from "./Profile";

function App() {
  return (
    <>
     
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={ <Body/>}>
            <Route path="login" element={<Login/>} />
            <Route path="profile" element={<Profile/>} />
          </Route>
          <Route path="/feed" element={<>feed</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
