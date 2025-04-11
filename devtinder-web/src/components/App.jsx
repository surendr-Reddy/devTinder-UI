import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router";

import Login from "./Login";
import Body from "./Body";
import Profile from "./Profile";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Feed from "./Feed";
import UpdateProfile from "./UpdateProfile";


function App() {
  return (
    <>
     <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={ <Body/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
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
