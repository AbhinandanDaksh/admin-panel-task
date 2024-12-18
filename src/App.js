// import React from 'react';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import Table from './components/Table';

// const App = () => {
//   return (
//     <div className="flex md:flex-row ">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <div className="p-5 bg-gray-100 flex-1">
//           <Table />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <div className="p-3 bg-gray-100 flex-1">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
