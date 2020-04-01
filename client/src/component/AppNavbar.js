import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class AppNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink href="https://github.com/hacetheworld">GitHub</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;