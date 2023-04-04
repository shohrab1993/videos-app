import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./comonent/Layout";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="video/:videoId" element={<VideoPlayer />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
