import styled from 'styled-components';
import { FunctionComponent } from 'react';

interface iGridLayout {
    columns?: number;
    rows?: number;
    gap?: number;
}

const GridLayout = styled.div<iGridLayout>`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${props => props.gap}px;
    max-width: 1600px;
    margin: 0 auto;
    margin-bottom: 50px;

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(${props => props.columns}, 1fr);
    }
`;

interface iGrid {
    columns?: number;
    rows?: number;
    gap?: number;
}

const Grid:FunctionComponent<iGrid> = ({columns, rows, gap, children}) => (
    <GridLayout columns={columns} rows={rows} gap={gap}>
        {children}
    </GridLayout>
)

const GridColumn = styled.div``;


const Column:FunctionComponent = ({children}) => (
    <GridColumn>
        {children}
    </GridColumn>
)

interface iGridItem {
    start?: string;
    end?: string;
}
const GridItem = styled.div<iGridItem>`

    @media screen and (min-width: 900px) {
    grid-column-start: ${props => props.start};
    grid-column-end: ${props => props.end};
    }
`;

export { Grid, Column, GridItem }

