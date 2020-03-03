import { FC } from "react"
import styled from "styled-components"

const StyledPageTitle = styled.div`
    background: var(--color-tan);
    border: 15px solid var(--color-brown);
    padding: 30px 0;
    text-align: center;
    color: var(--color-yellow);
    margin-bottom: 50px;
`;

const Title = styled.h1`
    font-size: var(--h1-responsive);
    font-weight: 600;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-grey-dark);
`;

interface iPageTitle {
    children: string;
}

const PageTitle:FC<iPageTitle> = ({children}) => (
    <StyledPageTitle>
        <Title>{children}</Title>
    </StyledPageTitle>
)

export { PageTitle}