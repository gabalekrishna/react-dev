import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./Profile";
import RecentPosts from "./RecentPosts";

function App() {
  return (
    <>
      <Profile
        heading="Hi, I am sandip,
          Creative Technologist"
        button1="Download Resume----"  
      />
      <RecentPosts />
    </>
  );
}

export default App;
