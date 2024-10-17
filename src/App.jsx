import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';  // Make sure RouterProvider is imported
import router from './Router/router';  // Import the router from your router.js file

function App() {
  return (
    <div className="App">
      {/* Render the RouterProvider with the router */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
