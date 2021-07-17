import React, { useState } from 'react';
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

export default function Course(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <Row className="m-0 mb-2 border border-1">
            <Col md="2" sm="4" className="p-0">
                <div className="w-100">
                    <img className="mw-100" alt="123" src={"https://ilearn-19clc3.herokuapp.com/storage/b2288409-42ad-4258-88f6-f61a86fc603b.jpeg"} />
                </div>
            </Col>
            <Col className="m-0">
                <div className="px-2 py-3 h-100 text-start position-relative">
                    <div className="fw-bold">Course name</div>
                    <div>100 Subscribers <FaIcons.FaUserCheck/></div>
                    <div>Public</div>
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} dir="down" size="sm" className="position-absolute" style={{ top: ".5rem", right: ".5rem" }}>
                        <DropdownToggle className="bg-transparent border-0 text-dark px-2 py-1">
                            <BsIcons.BsThreeDotsVertical/>
                        </DropdownToggle>
                        <DropdownMenu right positionFixed>
                            <DropdownItem>
                                Edit
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Sections
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Subscribers
                            </DropdownItem>
                            <DropdownItem>
                                Pending
                            </DropdownItem>
                            <DropdownItem>
                                Banned
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Col>
        </Row>

    )
}

