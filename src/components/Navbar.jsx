// const Navbar = () => {
//     return (
//       <div className="bg-gray-800 text-white  top-0 w-full p-3 flex justify-between items-center">
//         <div className="text-xl font-bold">Admin Panel</div>
//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="rounded p-2 text-black"
//           />
//           <div className="ml-4">Profile</div>
//         </div>
//       </div>
//     );
//   };

//   export default Navbar;


import React from 'react';
import { FaBars } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Navbar = ({ setIsSidebarOpen }) => {
    return (
        <div className="sticky  bg-gray-800 text-white z-50">
            <div className="flex items-center justify-between p-4">

                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="text-white focus:outline-none md:hidden"
                >
                    <FaBars size={24} />
                </button>


                <div className="text-xl font-bold">Admin Panel</div>


                <div className="hidden md:block "><CgProfile size={32} /></div>
            </div>
        </div>
    );
};

export default Navbar;
