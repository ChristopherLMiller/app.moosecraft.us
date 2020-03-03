import styled from "styled-components";
import { SiteLogo } from "./SiteLogo";
import { navItems } from '../../../data/json';
import Link from "next/link";
import { CLOUDINARY_URL } from "../../../config";

const Nav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--color-brown);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 99;
    box-shadow: var(--box-shadow);
`;

const LogoWrapper = styled.div``;
const Logo = styled.div`
    max-width: 345px;
    padding: 15px;
    height: auto;
`;

const MenuItems = styled.div`
    display: flex;
`;

const MenuItem = styled.span`
    font-family: 'Lato', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 30px 20px;
    font-weight: 200;
    position: relative;
    
    ::after {
        content: '\\A';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 5px;
        background: var(--color-green-dark);
        transition: all 0.25s;
    }

    :hover::after {
        width: 100%;
    }

    a, span {
        text-decoration: none;
        color: var(--color-grey-light);
        cursor: pointer;
        position: relative;
    }

    :hover > div {
        display: flex;
    }
`;

const SubMenu = styled.div`
    position: fixed;
    display: none;
    flex-direction: row;
    background: var(--color-green-dark);
    top: 92px;
    justify-content: space-evenly;
    left: 0px;
    width: 100%;
`;

const SubMenuItem = styled.span`
    margin: 0;
    padding: 15px;
`;

const SiteLogoImg = styled.img`
    height: 60px;
`;

const Header = () => (
    <Nav>
        <LogoWrapper>
            <Logo>
                <SiteLogo linkTo={'/'}>
                    <SiteLogoImg src={`${CLOUDINARY_URL}/moosecraft/assets/logo.png`} />
                </SiteLogo>
            </Logo>
        </LogoWrapper>
        <MenuItems>
            {navItems.map(navItem => {
                if (navItem.children) {
                    return (
                        <MenuItem key={navItem.text}>
                            <span>{navItem.text}</span>
                            <SubMenu>
                                {navItem.children.map(item => (
                                    <SubMenuItem>
                                    <Link href={item.link || '/'}>
                                        <a>{item.text}</a>
                                    </Link>
                                    </SubMenuItem>
                                ))}
                            </SubMenu>
                        </MenuItem>
                    )
                }
                return (
                    <MenuItem key={navItem.text}>
                        <Link href={navItem.link || '/'}>
                            <a>{navItem.text}</a>
                        </Link>
                    </MenuItem>
                )
            })}
        </MenuItems>
    </Nav>
);

export { Header }