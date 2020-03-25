import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { Grid, GridItem } from './Grid';

const StyledBanner = styled.h3`
    background: var(--color-grey-light);
    color: var(--color-green-dark);
    padding: 20px;
    font-size: var(--h3-responsive);
    min-width: 500px;
    text-align: center;
    text-transform: capitalize;
    box-shadow: var(--box-shadow);
`

const Banner:FunctionComponent = ({children}) => (
    <Grid columns={3}>
        <GridItem start="2">
            <StyledBanner>
                {children}
            </StyledBanner>
        </GridItem>
    </Grid>
);

export { Banner }