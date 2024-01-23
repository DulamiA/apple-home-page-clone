import React, { useState } from "react";
import AppleLogo from '../../images/icons/apple.svg';
import SearchLogo from '../../images/icons/search.svg';
import BagLogo from '../../images/icons/bag.svg';
import { Nav, NavLink, Bars, NavMenue, NavLogoLink, Container, Container2} from './NavBarElements'

function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <Nav>
                <Container>
                    <NavLogoLink to = '/'>
                        <img 
                            src={AppleLogo}
                            className="nav-logo"
                            alt="appleLogo"
                        />
                    </NavLogoLink>
                    <Bars onClick={toggle}/>
                    <NavMenue isOpen={isOpen}>
                        <NavLink to = '/store' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            Store
                        </NavLink>
                        <NavLink to = '/mac' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            Mac
                        </NavLink>
                        <NavLink to = '/ipad' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            iPad
                        </NavLink>
                        <NavLink to = '/iphone' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            iPhone
                        </NavLink>
                        <NavLink to = '/watch' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            Watch
                        </NavLink>
                        <NavLink to = '/vision' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            Vision
                        </NavLink>
                        <NavLink to = '/airpods' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            AirPods
                        </NavLink>
                        <NavLink to = '/tv&home' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            TV & Home
                        </NavLink>
                        <NavLink to = '/entertainment' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            Entertainment
                        </NavLink>
                        <NavLink to = '/accessories' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            Accessories
                        </NavLink>
                        <NavLink to = '/support' activeStyle isOpen={isOpen} onClick={closeMenu}>
                            Support
                        </NavLink>
                    </NavMenue>
                    <Container2 isOpen={isOpen}>
                        <NavLogoLink to = '/search' >
                            <img
                                src={SearchLogo}
                                className="nav-logo"
                                alt="searchLogo"
                            />
                        </NavLogoLink>
                        <NavLogoLink to = '/bag'>
                            <img
                                src={BagLogo}
                                className="nav-logo"
                                alt="bagLogo"
                            />
                        </NavLogoLink>
                    </Container2>
                </Container>
            </Nav>
        </>
    )
}

export default NavBar