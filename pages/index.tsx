import styled from "styled-components"
import Link from "next/link";
import { navItems } from '../data/json/nav';
import { GlobalStyles } from "../styles/global";

const StyledHomePage = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("https://static.moosecraft.us/v2/img/hero-home.png") no-repeat;
  background-size: cover;
`;

const Sign = styled.div`
background: url("https://static.moosecraft.us/v2/img/sign.png") no-repeat;
background-size: cover;
left: 95px;
padding-top: 425px;
position: absolute;
top: -185px;
/*-670px;*/
transform: rotate(-13deg);
transition: all 1s ease 0s;
width: 552px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgLink = styled.img`
  width: 450px;
  margin-bottom: 80px;
  transition: all 0.25s;

  :hover {
    transform: rotate3d(0, 0, 1, -13deg);
  }
`;

const NavWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  width: var(--max-width);
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  background: var(--color-brown);
  padding: 15px;

  a {
    font-size: var(--p-responsive);
    color: var(--color-white);
    text-decoration: none;
  }
`;
const SubMenu = styled.div`
  display: none;
`;
const SubMenuItem = styled.div`
  display: none;
`;

const Home = () => (
  <StyledHomePage>
    <GlobalStyles />
    <Sign>
      <FlexBox>
        <Link href="/">
          <a>
            <ImgLink src="https://static.moosecraft.us/v2/img/logo.png" />
          </a>
        </Link>
      </FlexBox>
    </Sign>
    <NavWrapper>
      <Nav>
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
    </Nav>
    </NavWrapper>
  </StyledHomePage>
);


export default Home;