import { useState } from "react";
import Link from "../Link/Link";

//import { FaBeer } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {

    const [open, setOpen] = useState (false)

    const routes = [
         { path: '/', name: 'Home', id: 'route-001' },
        { path: '/about', name: 'About', id: 'route-002' },
        { path: '/products', name: 'Products', id: 'route-003' },
        { path: '/contact', name: 'Contact', id: 'route-004' },
        { path: '/profile/:userId', name: 'UserProfile', id: 'route-005' }
    ];




    return (
        <nav className="text-white p-6 bg-yellow-300">
            {/* <FaBeer></FaBeer> */}
           <div className="md:hidden text-5xl" onClick={() => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose className=""></AiOutlineClose> : 
                <IoMdMenu className="  "></IoMdMenu>
            }
           
           
           </div>
          <ul className={`md:flex duration-1000 absolute md:static text-red-700
            ${ open ? 'top-24':'-top-60'}
            bg-green-300 px-6 shadow-lg`}>
          {
            routes.map(route => <Link key={route.id} route={route} ></Link>)
           }    
        </ul> 
        </nav>
    );
};

export default NavBar;