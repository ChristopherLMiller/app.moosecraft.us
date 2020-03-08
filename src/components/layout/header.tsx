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
    display: grid;
    grid-template-columns: 20% 1fr;
    justify-content: space-between;
    z-index: 99;
    box-shadow: var(--box-shadow);
`;

const LogoWrapper = styled.div`
`;
const Logo = styled.div`
    padding: 15px;
`;
const SiteLogoImg = styled.img`
    width: 100%;
`;
const MenuItems = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
        font-family: 'Lato', sans-serif;
        font-size: 2.25rem;
        text-transform: uppercase;
        padding: 0 10px;
        font-weight: 200;
        position: relative;
        text-decoration: none;
        color: var(--color-grey-light);
        display: flex;
        height: 100%;
        align-items: center;

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

        :hover > div {
            top: 92px;
            opacity: 1;
        }
    }
`;

const SubMenu = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    background: var(--color-green-dark);
    top: -100px;
    justify-content: space-evenly;
    left: 0px;
    width: 100%;
    z-index: -1;
    opacity: 0;
    transition: all 0.25s;

    a:after {
        background: var(--color-brown);
        bottom: -15px;
    }
`;

const SubMenuItem = styled.span`
    margin: 0;
    padding: 15px;
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
                        <a>
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
                            </a>
                    )
                }
                return (
                    <Link key={navItem.text} href={navItem.link || '/'}>
                        <a>{navItem.text}</a>
                    </Link>
                )
            })}
        </MenuItems>
    </Nav>
);

export { Header }