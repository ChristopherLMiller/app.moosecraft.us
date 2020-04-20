import { ReactChildren, FunctionComponent } from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    background: var(--color-white-transparent);
    box-shadow: var(--box-shadow);
    height: min-content;
`;

const CardTitle = styled.h3`
    color: var(--color-yellow);
    background: var(--color-grey);
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
    text-align: center;

    a {
        font-weight: bold;
        color: var(--color-green);
    }

    h2,h3,h4,h5,h6 {
        text-align: center;
        color: var(--color-green);
        text-transform: capitalize;
    }
    h4 {
        margin: 15px 0;
    }

    li, ol {
        text-align: left;
    }
`;

interface iCard {
    title?: string;
    id?: string;
}

const Card:FunctionComponent<iCard> = ({title, id, children}) => (
    <StyledCard id={id}>
        <CardTitle>{title}</CardTitle>
        {children && <ContentBlock>
            {children}
        </ContentBlock>}
    </StyledCard>
)

export { Card }