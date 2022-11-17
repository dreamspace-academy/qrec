import React, { useState } from 'react';
// import {
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList,
//     FaUser
// }from "react-icons/fa";
import { Link } from 'react-router-dom';


const DASH = ({children}) => {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);
    // const menuItem=[
    //     {
    //         path:"/",
    //         name:"Dashboard",
    //         icon:<FaUser/>
    //     },
    //     {
    //         path:"/about",
    //         name:"About",
    //         icon:<FaUserAlt/>
    //     },
    //     {
    //         path:"/analytics",
    //         name:"Analytics",
    //         icon:<FaRegChartBar/>
    //     },
    //     {
    //         path:"/comment",
    //         name:"Comment",
    //         icon:<FaCommentAlt/>
    //     },
    //     {
    //         path:"/product",
    //         name:"Product",
    //         icon:<FaShoppingBag/>
    //     },
    //     {
    //         path:"/productList",
    //         name:"Product List",
    //         icon:<FaThList/>
    //     }
    // ]
    return (
        // <div className="container">
        //    <div style={{width: isOpen ? "340px" : "50px"}} className="sidebar">
        //        <div className="top_section">
        //            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">QRec</h1>
        //            <div style={{marginLeft: isOpen ? "90px" : "0px"}} className="bars">
        //                <FaBars onClick={toggle}/>
        //            </div>
        //        </div>
        //        {
        //            menuItem.map((item, index)=>(
        //                <Link to={item.path} key={index} className="link" activeclassName="active">
        //                    <div className="icon">{item.icon}</div>
        //                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
        //                </Link>
        //            ))
        //        }
        //    </div>
        //    <main>{children}</main>
        // </div>
    );
};

export default DASH;