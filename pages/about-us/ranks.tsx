import { Page } from "../../src/components/layout/Page";
import { PageTitle } from "../../src/components/elements/PageTitle";
import { Grid, GridItem } from "../../src/components/elements/Grid";
import { Card } from "../../src/components/elements/Card";
import { server_ranks } from "../../data/json/server_ranks";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const InfoBox = styled.div`
    p {
        margin: 0;
    }
`;
const RanksPage = () => (
    <Page>
        <PageTitle>Server Ranks</PageTitle>
        {server_ranks.map(rankType => (
            <Fragment>
                <Grid columns={3}>
                    <GridItem start="2">
                        <Card title={rankType.name}>
                            <p>{rankType.description}</p>
                        </Card>
                    </GridItem>
                </Grid>
                <Grid columns={3} gap={30}>
                    {rankType.ranks.map(rank => (
                        <Card title={rank.name} id={rank.perms_rank}>
                            <InfoBox>
                                <h4>About Rank</h4>
                                <p>Previous Rank: <a href={`#${rank.previous_rank || 'None'}`}>{rank.previous_rank || 'None'}</a></p>
                                <p>Next Rank: <a href={`#${rank.next_rank || 'None'}`}>{rank.next_rank || 'None'}</a></p>
                            </InfoBox>
                            <h4>Description</h4>
                            <ReactMarkdown source={rank.description} />
                        </Card>
                    ))}
                </Grid>
            </Fragment>
        ))}
    </Page>
)

export default RanksPage;