import { FunctionComponent, Fragment } from "react";
import { GlobalStyles } from "../../../styles/global";
import styled from 'styled-components';
import { Header } from "./header";
import { Footer } from "./Footer";

const StyledPage = styled.div`
    margin-top: 175px;
    position: relative;
`;

const Main = styled.main`
    max-width: 1600px;
    margin: 0 auto;
    margin-bottom: 50px;
    font-size: 1.5rem;
    padding: 20px;
`;

interface iPage {
    router?: {
        route: any;
    }
}
const Page: FunctionComponent<iPage> = ({ children }) => (
    <Fragment>
        <StyledPage>
            <Header />
            <Main>
                { children }
            </Main>
            <Footer />
        </StyledPage>
        <GlobalStyles />
    </Fragment>
)

export { Page }