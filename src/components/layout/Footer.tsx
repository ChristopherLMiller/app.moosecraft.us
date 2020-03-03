import styled from 'styled-components';
import { Grid, Column } from '../elements/Grid';
import { Fragment } from 'react';
import { ServerStatus } from '../elements/ServerStatus';
import { Button } from '../elements/Button';

const StyledFooter = styled.footer`
    background: var(--color-grey-dark);
    color: var(--color-white);
    text-align: center;
    padding: 50px;
    padding-top: 20px;

    h4 {
        font-family: 'Raleway', sans-serif;
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: bolder;
        margin: 30px 0;
    }

    p {
        font-size: 1.75rem;
        font-family: 'Lato';
        font-weight: 100;
        letter-spacing: -0.5px;
    }
`;

const ServerStatuses = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CopyrightBar = styled.div`
    background: var(--color-grey);
    color: var(--color-white);
    font-size: 2rem;
    padding: 10px;
    text-align: right;
`;

const Footer = () => (
    <Fragment>
    <StyledFooter>
        <Grid columns={2}>
            <Column>
                <h4>Play Now</h4>
                <p>IP: MC.MOOSECRAFT.US</p>
                <h4>Current Server Status</h4>
                <ServerStatuses>
                    <ServerStatus url="/api/server/status" text="Moosecraft Server" />
                    <ServerStatus url="/api/server/mojang?address=authserver.mojang.com" text="Mojang Servers" />
                </ServerStatuses>
            </Column>
            <Column>
                <h4>Support Our Server</h4>
                <p>While we run this server because we love the game and wouldn't trade it for anything else in the world, hosting this server isn't exactly cheap. Regardless of player donations this server will always be here but we certainly appreciate anything given.</p>
                <p>All donations received stay to the server itself, whether it be towards the internet bill, new hardware to allow more players to connect, or even professional builders, it all stays here!</p>
                <Button background="yellow" onClick={() => { alert('Woohoo'); }}>Donate Now</Button>
            </Column>
        </Grid>
        
    </StyledFooter>
    <CopyrightBar>
    &copy; Copyright {new Date().getFullYear()}
</CopyrightBar>
</Fragment>
);

export { Footer }