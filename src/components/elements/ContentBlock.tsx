import styled from 'styled-components';
import { FunctionComponent } from 'react';

const StyledContent = styled.div`
    font-size: var(--p-responsive);
    background: var(--color-blue-opposite);
    padding: 20px;
    box-shadow: var(--box-shadow);

    color: var(--color-brown);

    h2 {
        text-decoration: underline;
        text-align: center;
        color: var(--color-green-dark);
    }

`;

const ContentBlock:FunctionComponent = ({children}) => (
    <StyledContent>
        {children}
    </StyledContent>
)

export default ContentBlock;