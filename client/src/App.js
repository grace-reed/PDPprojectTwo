import React from "react";
import FileUpload from "./components/FileUpload";
import "./App.css";

const App = () => (
  <div className="container mt-4">
    <h4 className="display-4 text-center mb-4">
      <i class="fa-solid fa-laptop-file"></i> File Upload
    </h4>

    <FileUpload />
  </div>
);

export default App;
