import styled from "styled-components";
import { navItems } from '../../../data/json/nav';
import Link from "next/link";
import { slugify } from "../../utils/functions";
import { Fragment } from "react";

const NavWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

const MenuItem = styled.a`
    font-family: 'Lato', sans-serif;
    font-size: 2.25rem;
    text-transform: uppercase;
    padding: 0 10px;
    font-weight: 200;
    text-decoration: none;
    color: var(--color-grey-light);
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    
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
`;

const MenuItemWithSub = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 2.25rem;
    text-transform: uppercase;
    font-weight: 200;
    text-decoration: none;
    color: var(--color-grey-light);
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    
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
        display: flex;
    }
`;

const SubMenuTitle = styled.span`
    padding: 0 10px;
`;

const SubMenu = styled.div`
    display: none;
    min-width: 200px;
    position: absolute;
    top: 100%;
    flex-direction: column;
`;

const SubMenuItem = styled.a`
    padding: 10px;
    color: var(--color-light-grey);
    text-decoration: none;
    transition: all 0.25s;

    :nth-child(odd) {
        background: var(--color-green-dark);
    }
    :nth-child(even) {
        background: var(--color-green);
    }

    :hover {
        transform: translate3d(10px, 0, 0);
    }
`;

const MainNav = () => (
    <NavWrapper>
        <StyledNav>
            {navItems.map(navItem => {
                // if nav item has children then don't create a link as its just a normal item
                if (navItem.children) {
                    return (
                        <MenuItemWithSub key={navItem.text}>
                            <SubMenuTitle>{navItem.text}</SubMenuTitle>
                            <SubMenu>
                            {navItem.children.map(item => {
                                if (item.link.includes('http')) {
                                    return (
                                        <SubMenuItem key={item.text} href={item.link}>{item.text}</SubMenuItem>
                                    )
                                }

                                return (
                                    <Link key={item.text} href={item.link || '/'}>
                                        <SubMenuItem>{item.text}</SubMenuItem>
                                    </Link>
                                )
                            })}
                            </SubMenu>
                        </MenuItemWithSub>
                    )
                }

                // if the nav item has a http it means its not local to the app, treat as appropriate
                if (navItem.link.includes('http')) {
                    return (
                        <MenuItem key={navItem.text} href={navItem.link}>{navItem.text}</MenuItem>
                    )
                }

                // finally just a normal menu item
                return (
                    <Link key={navItem.text} href={navItem.link || '/'}>
                        <MenuItem>{navItem.text}</MenuItem>
                    </Link>
                )
            })}
        </StyledNav>
    </NavWrapper>
)

export { MainNav}