import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router";

import Login from "./Login";
import Body from "./Body";
import { Provider, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import Feed from "./Feed";
import UpdateProfile from "./UpdateProfile";
import ProfileCard from "./ProfileCard";


function App() {
  return (
    <>
     <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={ <Body/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<ProfileCard/>} />
            <Route path="/feed" element={<Feed/>} />
            <Route path="/profile/edit" element={<UpdateProfile/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
