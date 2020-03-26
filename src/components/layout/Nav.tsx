import styled from "styled-components";
import { navItems } from '../../../data/json/nav';
import Link from "next/link";
import { useState, FunctionComponent } from 'react';

const NavWrapper = styled.div`
    @media (min-width: 850px) {
        display: flex;
        justify-content: flex-end;
    }
`;

interface iNav {
    isMenuOpen: boolean;
}
const StyledNav = styled.nav<iNav>`
    display: ${props => props.isMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    @media (min-width: 850px) {
        flex-direction: row;
    }
`;

const MenuItem = styled.a`
    font-family: 'Lato', sans-serif;
    font-size: 2.25rem;
    text-transform: uppercase;
    padding: 20px;
    font-weight: 200;
    text-decoration: none;
    color: var(--color-grey-light);
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    width: 100%;
    justify-content: center;
    
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

    @media (min-width: 850px) {
        padding: 0 10px;
        width: auto;
        justify-content: initial;
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
    flex-direction: column;

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

    @media (min-width: 850px) {
        flex-direction: row;
    }
`;

const SubMenuTitle = styled.span`
    padding: 20px;

    @media (min-width: 850px) {
        padding: 0 10px;
    }
`;

const SubMenu = styled.div`
    display: none;
    min-width: 200px;
    width: 100%;
    top: 100%;
    flex-direction: column;

    @media (min-width: 850px) {
        position: absolute;
        width: auto;
    }
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

const MenuButtonWrapper = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;

    @media (min-width: 850px) {
        display: none;
    }
`;
const MenuButton = styled.button`
    background: var(--color-yellow);
    color: var(--color-grey-light);
    border: 1px solid var(--color-grey-light);
    font-size: 3rem;
`;

const MainNav = () => {
    const [isMenuOpen, setMenuOpen] = useState(true);

    return (
    <NavWrapper>
        <MenuButtonWrapper>
        <MenuButton onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'Close' : 'Menu'}
        </MenuButton>
        </MenuButtonWrapper>
        <StyledNav isMenuOpen={isMenuOpen}>
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
}

export { MainNav}