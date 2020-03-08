import Error from 'next/error';
import { Page } from '../src/components/layout/Page';
import { PageTitle } from '../src/components/elements/PageTitle';
import { Grid, GridItem } from '../src/components/elements/Grid';
import { Card } from '../src/components/elements/Card';
import styled from 'styled-components';
import { NextPageContext } from 'next';
import { FunctionComponent } from 'react';

const LeftCreeper = styled(GridItem)`
    text-align: right;

    img {
        height: 400px;
        transform: rotate3d(0, 1, 0, 180deg);
    }
`;

const RightCreeper = styled(GridItem)`
    img {
        height: 400px;
    }
`;

const ErrorPage:FunctionComponent = () => (
    <Page>
        <Grid columns={5} gap={30}>
            <LeftCreeper>
                <img src="https://static.moosecraft.us/v2/img/creeper.png" />
            </LeftCreeper>
            <GridItem start="2" end="5">
                <Card title={`404 Not Found`}>
                    <p>The page your are looking for can't seem to be found. Maybe those pesky creepers got into the computer again!</p>
                    <p>If you feel this is in error please report this to <a href="mailto:admin@moosecraft.us">admin@moosecraft.us</a></p>
                    <p>Additionally for reference the page requested was:</p>
                    <p>URL HERE</p>
                </Card>
            </GridItem>
            <RightCreeper>
            <img src="https://static.moosecraft.us/v2/img/creeper.png" />
            </RightCreeper>
        </Grid>
    </Page>
)

export default ErrorPage;