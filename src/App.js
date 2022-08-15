import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// Lazy Load
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Header />
          <Routes>
            <Route path="*" element={<Navigate replace to="/photos" />} />
            <Route path="/photos/*" element={<Photo />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
