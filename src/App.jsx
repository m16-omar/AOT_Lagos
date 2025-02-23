import React from 'react';
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;


// import React from "react";
// import Header from "./Components/Header/Header"; // Ensure the correct path

// function App() {
//   return (
//     <div>
//       <Header />
//       <h1>Welcome to My App</h1>
//     </div>
//   );
// }

// export default App;

