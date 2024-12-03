import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './feature/store'
import Navbar from './component2/Navbar'
import TaskDashboard from './component2/TaskDashboard'
import Sidebar from './component/sidebar'
const App = () => {
  return (
    <Provider store={store}>
    <HashRouter>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/dashboard" element={<TaskDashboard />} />
        </Routes>
      </div>
    </HashRouter>
  </Provider>

    
  );
};

export default App;
