import { ReactChildren, FunctionComponent } from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    background: var(--color-white);
    box-shadow: var(--box-shadow);
`;

const CardTitle = styled.h3`
    color: var(--color-green-dark);
    background: var(--color-grey-light);
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    font-size: var(--h3-responsive);
    padding: 5px;
    margin:0;
    font-weight: 600;
`;
const ContentBlock = styled.div`
    font-size: var(--p-responsive);
    display: inline-block;
    padding: 0 20px;

    a {
        font-weight: bold;
        color: var(--color-green);
    }
`;

interface iCard {
    title?: string;
}

const Card:FunctionComponent<iCard> = ({title, children}) => (
    <StyledCard>
        <CardTitle>{title}</CardTitle>
        {children && <ContentBlock>
            {children}
        </ContentBlock>}
    </StyledCard>
)

export { Card }