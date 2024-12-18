// import React, { useState } from 'react';
// import { FaBars, FaHome, FaBox, FaUsers, FaCog } from 'react-icons/fa';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true); // State to toggle the sidebar

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <div className="flex">
//     
//       <div
//         className={`bg-gray-800 text-white h-screen transition-all duration-300 ${
//           isOpen ? 'w-64' : 'w-16'
//         }`}
//       >
//         
//         <button
//           onClick={toggleSidebar}
//           className="text-white p-4 focus:outline-none md:hidden"
//         >
//           <FaBars />
//         </button>

//     
//         <nav className="flex flex-col mt-4">
//           <a
//             href="#"
//             className="flex items-center p-4 hover:bg-gray-700"
//           >
//             <FaHome className="mr-2" />
//             {isOpen && <span>Dashboard</span>}
//           </a>
//           <a
//             href="#"
//             className="flex items-center p-4 hover:bg-gray-700"
//           >
//             <FaBox className="mr-2" />
//             {isOpen && <span>Products</span>}
//           </a>
//           <a
//             href="#"
//             className="flex items-center p-4 hover:bg-gray-700"
//           >
//             <FaUsers className="mr-2" />
//             {isOpen && <span>Users</span>}
//           </a>
//           <a
//             href="#"
//             className="flex items-center p-4 hover:bg-gray-700"
//           >
//             <FaCog className="mr-2" />
//             {isOpen && <span>Settings</span>}
//           </a>
//         </nav>
//       </div>

//      
//       {/* <div className="flex-1 bg-gray-100 p-4">
//         <h1 className="text-2xl font-bold">Main Content</h1>
//       </div> */}
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { FaHome, FaBox, FaUsers, FaCog, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}


            <div
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:relative md:translate-x-0 md:w-64`}
            >

                <button
                    className="text-white p-4 focus:outline-none md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaTimes />
                </button>


                <nav className="flex flex-col">
                    <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                        <FaHome className="mr-2" />
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                        <FaBox className="mr-2" />
                        <span>Products</span>
                    </a>
                    <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                        <FaUsers className="mr-2" />
                        <span>Users</span>
                    </a>
                    <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                        <FaCog className="mr-2" />
                        <span>Settings</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
