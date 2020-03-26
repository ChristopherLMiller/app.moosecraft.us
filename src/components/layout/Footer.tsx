import styled from 'styled-components';
import { Grid, Column } from '../elements/Grid';
import { Fragment } from 'react';
import { ServerStatus } from '../elements/ServerStatus';
import { Button } from '../elements/Button';
import { CLOUDINARY_URL } from '../../../config';

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

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 75px;
        padding: 10px;
    }
`;

const Footer = () => (
    <Fragment>
    <StyledFooter>
        <Grid columns={3}>
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
            <Column>
                <h4>Connect with us</h4>
                <SocialIcons>
                <a href="https://discord.gg/9tYt4pP"><img src={`${CLOUDINARY_URL}/social/discord`} /></a>
                </SocialIcons>
            </Column>
        </Grid>
        
    </StyledFooter>
    <CopyrightBar>
    &copy; Copyright {new Date().getFullYear()}
</CopyrightBar>
</Fragment>
);

export { Footer }