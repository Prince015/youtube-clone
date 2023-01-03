
// Project Console: https://console.firebase.google.com/project/clone-54066/overview
// Hosting URL: https://clone-54066.web.app

import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import VideoPlayer from "./components/VideoPlayer";
import RecommendedVideos_category from "./components/RecommendedVideos_category";
import { useStateValue } from "./components/StateProvider";
import LoadingBar from 'react-top-loading-bar';


function App() {
  const apiKey= process.env.REACT_APP_YT_API_KEY
  // console.log(process.env)
  const [state, dispatch] = useStateValue()
  const {toggle, user} = state


  const [state2, setState2] =useState({
    progress :10
  })

  const setProgress =(progress)=>{
    setState2({
      progress : progress
    })
    // console.log("progress")
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header user={user} />
                <LoadingBar
                color='#f11946'
                progress={state2.progress}
                // onLoaderFinished={() => setProgress(0)}
                />
                <div className= 'app_page'>
                  <Sidebar user={user} />
                  <RecommendedVideos apiKey={apiKey} setProgress={setProgress} />
                </div>
                <Footer />
              </>
            }
          />
          <Route exact path="/signIn" element={<Login />} />
          <Route
            exact
            path="/play/:videoId"
            element={
              <>
                <Header user={user} />
                <LoadingBar
                color='#f11946'
                progress={state2.progress}
                // onLoaderFinished={() => setProgress(0)}
                />
                <div className="app_page">
                  <Sidebar user={user} />
                  <div className={`app_play ${toggle && 'toggled' }`}>
                    <RecommendedVideos_category />
                    <VideoPlayer setProgress={setProgress} />
                  </div>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
