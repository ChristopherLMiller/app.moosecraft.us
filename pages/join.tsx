import { Page } from "../src/components/layout/Page";
import { PageTitle } from "../src/components/elements/PageTitle";
import { Card } from "../src/components/elements/Card";
import { Grid, GridItem } from "../src/components/elements/Grid";
import Link from "next/link";
import styled from "styled-components";

interface iImgDiv {
    img: string;
}

const ImgDiv = styled.div<iImgDiv>`
    background: url(${props => props.img}) no-repeat center;
    background-size: cover;
    height: 100%;
    box-shadow: var(--box-shadow);
    min-height: 150px;
`;

const JoinPage = () => (
    <Page>
        <PageTitle>Join Our Server!</PageTitle>
        <Grid columns={3} gap={30}>
            <GridItem start="1" end="3">
                <Card title="Why Join?">
                    <p>Becoming a member of this community is pretty awesome if I say so myself. We are proud to remain a small and very friendly group of people who all enjoy Minecraft. We aren't a very strict place, but there are some basic rules to know and understand and you'll have a great time yourself.</p>
                </Card>
            </GridItem>
            <GridItem><ImgDiv img="https://static.moosecraft.us/v2/img/slider/larry.png" /></GridItem>
            <GridItem><ImgDiv img="https://static.moosecraft.us/v2/img/slider/larry.png" /></GridItem>
            <GridItem start="2" end="4">
                <Card title="Benefits of Joining">
                    <p>What are some of the benefits of joining?</p>
                    <ul>
                        <li>Great community</li>
                        <li>Relaxed building - build what you want where you want</li>
                        <li>Awesome plugins - Some custom to the server!</li>
                        <li>24/7 uptime - We strive to make sure the server is always oneline</li>
                    </ul>
                </Card>
            </GridItem>
        </Grid>
        <Card title="Sign Me Up!">
            <p>One last thing, be sure to read and follow the instructions listed below to start building today!</p>
            <ol>
                <li>Read the rules located <Link href="/about/rules"><a>HERE</a></Link> and be willing to accept and follow them.</li>
                <li>Log onto the server.  This is critical, you must be online to submit application.</li>
                <li>Fill in the form below and submit it.</li>
                <li>Enjoy!</li>
            </ol>
        </Card>
    </Page>
);

export default JoinPage;