import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Work from "./components/Work/Work";
import RecentPosts from "./RecentPosts";
import Counter from "./components/Counter";
import UserList from "./components/UserList";

function App() {
  return (
    <>
       <UserList />
    </>
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/work" element={<Work />}/>
    //   <Route path="/blog" element={<RecentPosts />}/>
    // </Routes>
  );
}

export default App;


// App => profile, recentpost => postcard

// props parent to child 
// props are immutable 
// one way data flow => undirectional data flow 