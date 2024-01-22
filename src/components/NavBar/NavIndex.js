import React from "react";
import AppleLogo from '../../images/icons/apple.svg';
import SearchLogo from '../../images/icons/search.svg';
import BagLogo from '../../images/icons/bag.svg';
import { Nav, NavLink, Bars, NavMenue, NavLogoLink, Container} from './NavBarElements'

function NavBar(){
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
                    <Bars/>
                    <NavMenue>
                        <NavLink to = '/store' activeStyle>
                            Store
                        </NavLink>
                        <NavLink to = '/mac' activeStyle>
                            Mac
                        </NavLink>
                        <NavLink to = '/ipad' activeStyle>
                            iPad
                        </NavLink>
                        <NavLink to = '/iphone' activeStyle>
                            iPhone
                        </NavLink>
                        <NavLink to = '/watch' activeStyle>
                            Watch
                        </NavLink>
                        <NavLink to = '/vision' activeStyle>
                            Vision
                        </NavLink>
                        <NavLink to = '/airpods' activeStyle>
                            AirPods
                        </NavLink>
                        <NavLink to = '/tv&home' activeStyle>
                            TV & Home
                        </NavLink>
                        <NavLink to = '/entertainment' activeStyle>
                            Entertainment
                        </NavLink>
                        <NavLink to = '/accessories' activeStyle>
                            Accessories
                        </NavLink>
                        <NavLink to = '/support' activeStyle>
                            Support
                        </NavLink>
                    </NavMenue>
                    <div style={{display:'flex'}}>
                        <NavLogoLink to = '/search'>
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
                                style={{marginRight:"10px"}}
                            />
                        </NavLogoLink>
                    </div>
                </Container>
            </Nav>
        </>
    )
}

export default NavBar