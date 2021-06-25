import React, {useState} from 'react';
import "./Sidebar.css";
import * as TiIcons from "react-icons/ti";
import * as FaIcons from "react-icons/fa";


const SidebarItem = [
    {
        title: "New Course",
        path: "/newcourse",
        icon: <FaIcons.FaPen />,
        isActive: false
    },
    {
        title: "Courses",
        path: "../ListCoursePage",
        icon: <FaIcons.FaBookmark />,
        isActive: false
    }
]

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    function showSidebar() {
        setSidebar(!sidebar);
    }
    return (
        <>
            <nav className={sidebar ? "sidebar active": "sidebar"}>
                <ul className="sidebar-menu">
                    <li className="sidebar-toggle" onClick={showSidebar}>
                        <TiIcons.TiArrowRightThick/>
                    </li>
                    {SidebarItem.map((item, index) => {
                        return (
                            <li key={index} className="sidebar-items">
                                <a href={item.path} className="sidebar-link">
                                    {item.icon}
                                    <span className="sidebar-text">{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            
            </nav>
        </>
        
    );
}

export default Sidebar
