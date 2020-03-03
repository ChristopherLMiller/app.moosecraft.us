import styled from 'styled-components';
import { FunctionComponent } from 'react';
import Link from 'next/link';

interface iStyledButton {
    background?: string;
}

const StyledButton = styled.button<iStyledButton>`
    background: var(--color-${props => props.background ? props.background : 'grey'});
    width: 50%;
    text-align: center;
    border: none;
    padding: 15px;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--color-white);
    margin: 10px;
    display: inline-block;
`;

interface iButton {
    background?: string;
    onClick: any;
}

const Button:FunctionComponent<iButton> = ({children, background, onClick}) => (
    <StyledButton background={background} onClick={onClick}>{children}</StyledButton>
)


const StyledLink = styled.a`
    background: var(--color-grey);
    width: 50%;
    text-align: center;
    border: none;
    padding: 15px;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--color-white);
    margin: 10px;
    display: inline-block;
`;

interface iLink {
    url: string;
}

const LinkButton:FunctionComponent<iLink> = ({children, url}) => (
    <Link href={url}>
    <StyledLink>{children}</StyledLink>
    </Link>
)
export {Button, LinkButton};