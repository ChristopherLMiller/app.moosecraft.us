import styled from "styled-components"
import Link from "next/link";

const StyledHomePage = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("https://static.moosecraft.us/v2/img/hero-home.png") no-repeat;
  background-size: cover;
`;

const Sign = styled.div`
background: url(https://static.moosecraft.us/v2/img/sign.png) no-repeat;
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

const Home = () => (
  <StyledHomePage>
    <Sign>
      <FlexBox>
        <Link href="/">
          <a>
            <ImgLink src="https://static.moosecraft.us/v2/img/logo.png" />
          </a>
        </Link>
      </FlexBox>
    </Sign>
  </StyledHomePage>
);


export default Home;