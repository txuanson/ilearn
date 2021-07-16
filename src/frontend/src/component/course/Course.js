import React, { useState } from 'react';
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import * as BsIcons from "react-icons/bs";

export default function Course(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <Row className="m-0 mb-2 rounded border border-1">
            <Col md="2" xs="4" className="p-0">
                <img className="mw-100 rounded-start" alt="123" src={"https://ilearn-19clc3.herokuapp.com/storage/b2288409-42ad-4258-88f6-f61a86fc603b.jpeg"} />
            </Col>
            <Col className="m-0">
                <div className="px-2 py-3 h-100 text-start position-relative">
                    <div>Course name</div>
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} dir="down" size="sm" className="position-absolute" style={{ top: ".5rem", right: ".5rem" }}>
                        <DropdownToggle>
                            <BsIcons.BsThreeDotsVertical />
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
                    <div className="position-absolute" style={{ bottom: ".5rem" }}>Public</div>
                </div>
            </Col>
        </Row>

    )
}

