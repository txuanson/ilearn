import React, { useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Nav, NavItem } from 'reactstrap';
import * as TiIcons from "react-icons/ti";
import * as FaIcons from "react-icons/fa";
import NewCourse from './DashBoard/NewCourse';
import ListCourse from './DashBoard/ListCourse';
import './DashBoard.css'
import DashBoardFooter from '../component/footer/DashBoardFooter';

const SidebarItem = [
    {
        title: " New Course",
        path: "/dashboard/create-course",
        icon: <FaIcons.FaPen />,
        isActive: false
    },
    {
        title: " Courses",
        path: "/dashboard",
        icon: <FaIcons.FaBook />,
        isActive: false
    }
]

function DashBoard() {

    const [showSideBar, setShowSideBar] = useState(true)

    const toggleSideBar = () => setShowSideBar(!showSideBar)

    return (
        <Container fluid className="p-0 d-flex flex-row min-vh-100">
            <aside className="bg-dark flex-col position-relative" style={{ width: showSideBar ? "180px" : "50px", transition: ".2s" }}>
                <Nav vertical>
                    {SidebarItem.map((item) => (
                        <Link to={item.path} className="sidebar-item">
                            <NavItem>
                                {item.icon}
                                {showSideBar ? item.title : ""}
                            </NavItem>
                        </Link>
                    ))}
                </Nav>
                <div className={"bg-primary sidebar-item position-fixed bottom-0 d-flex align-items-center justify-content-center"} onClick={toggleSideBar} style={{ width: showSideBar ? "180px" : "50px", transition: ".2s" }}>
                    <TiIcons.TiArrowRight style={{ transform: showSideBar ? "rotate(0deg)" : "rotate(-180deg)", fontSize:"30px"}} />
                </div>
            </aside>
            <Col className="bg-secondary p-0 m-0">
                <Switch>
                    <Route path="/dashboard/create-course">
                        <NewCourse />
                    </Route>
                    <Route path="/dashboard">
                        <ListCourse />
                    </Route>
                </Switch>
                <DashBoardFooter />
            </Col>

        </Container>
    );
}

export default DashBoard;
