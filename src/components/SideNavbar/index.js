import { Component } from 'react';
import { FiHome } from "react-icons/fi";
import {FaBars} from 'react-icons/fa';
import { GoOrganization } from "react-icons/go";
import { IoCubeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { TbMobiledata } from "react-icons/tb";
import { BiHistory } from "react-icons/bi";

import './style.css'

class Sidebar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        const menuItem = [
            {
                path: "/",
                name: "Home",
                icon: <FiHome />
            },
            {
                path: "/organization",
                name: "Organization",
                icon: <GoOrganization/>
            },
            {
                path: "/assets",
                name: "Assets",
                icon: <IoCubeOutline/>
            },
            {
                path: "/trade",
                name: "Trade",
                icon: <TbMobiledata  />
            },
            {
                path: "/history",
                name: "History",
                icon: <BiHistory />
            }
        ];

        return (
            <div className="container">
                <div style={{ width: this.state.isOpen ? "200px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <img src="https://media.istockphoto.com/id/1386674264/vector/progress-chart-with-a-leaf-icon-company-growth-with-an-up-arrow.jpg?s=612x612&w=0&k=20&c=qLuI-OG6dkBwmUrV58krdFiBhxQio59v6SYJ1xZ7FM0=" style={{ display: this.state.isOpen ? "block" : "none" }} className="logo"/>
                        <div style={{ marginLeft: this.state.isOpen ? "50px" : "0px" }} className="bars">
                            <FaBars onClick={this.toggle} />
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: this.state.isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Sidebar;