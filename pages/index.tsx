import styled from "styled-components"
import Link from "next/link";
import { navItems } from '../data/json/nav';
import { GlobalStyles } from "../styles/global";
import { CLOUDINARY_URL } from "../config";
import { Card } from "../src/components/elements/Card";

const StyledHomePage = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${CLOUDINARY_URL}/slider/harbor.png") no-repeat;
  background-size: cover;
`;

const Sign = styled.div`
background: url("${CLOUDINARY_URL}/assets/sign.png") no-repeat;
background-size: cover;
left: 95px;
padding-top: 425px;
position: absolute;
top: -185px;
/*-670px;*/
transform: rotate(-13deg);
transition: all 1s ease 0s;
width: 552px;

@media (max-width: 550px) {
  display: none;
}
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

const ComingSoon = styled.div`
  position: absolute;
  bottom: 5%;
  font-size: 3rem;;
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--color-grey-light);
  background: var(--color-brown);

  text-align: center;

  a, p {
    text-decoration: underline;
    color: var(--color-white);
    font-size: 16px;
  }

  h1 {
    margin-bottom: 0;
  }
`;

const Home = () => (
  <StyledHomePage>
    <GlobalStyles />
    <Sign>
      <FlexBox>
        <Link href="/">
          <a>
            <ImgLink src={`${CLOUDINARY_URL}/assets/logo.png`} />
          </a>
        </Link>
      </FlexBox>
    </Sign>
    <ComingSoon>
      <div>
      <h1>Coming Soon...</h1>
      <p><a href="https://dynmap.moosecraft.us">Dynmap</a> | <Link href="/about-us/ranks"><a>Server Ranks</a></Link> | <Link href="/about-us/history"><a>More Information</a></Link></p>
      </div>
    </ComingSoon>
  </StyledHomePage>
);

/*    <NavWrapper>
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
);*/


export default Home;