import styled from 'styled-components';
import { MainNav} from './Nav';
import { CLOUDINARY_URL } from "../../../config";
import { SiteLogo } from "./SiteLogo";

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;

const Wrapper = styled.div`
    box-shadow: var(--box-shadow);
    background: var(--color-brown);
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 850px) {
        grid-template-columns: 200px 1fr;
    }

    @media (min-width: 950px) {
        grid-template-columns: 300px 1fr;
    }

    @media (min-width: 1025px) {
        grid-template-columns: 350px 1fr;
    }
`;

const LogoWrapper = styled.div``;

const Logo = styled.div`
    padding: 15px;
`;

const SiteLogoImg = styled.img`
    width: 200px;
    
    @media (min-width: 850px) {
        width: 100%;
    }
`;

const Header = () => (
    <StyledHeader>
        <Wrapper>
            <LogoWrapper>
                <Logo>
                    <SiteLogo linkTo={'/'}>
                        <SiteLogoImg src={`${CLOUDINARY_URL}/assets/logo.png`} />
                    </SiteLogo>
                </Logo>
            </LogoWrapper>        
            <MainNav />
        </Wrapper>
    </StyledHeader>
);

export { Header }