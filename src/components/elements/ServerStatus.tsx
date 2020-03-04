import styled from 'styled-components';
import { FC, useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

interface iStatusBadge {
    color?: string;
}

const StatusBadge = styled.span<iStatusBadge>`
    background: var(--color-${props => props.color || 'grey'});
    width: 50%;
    text-align: center;
    border: none;
    padding: 15px;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--color-white);
    margin: 10px;
`;

interface iServerStatus {
    url: string;
    text: string;
}
const ServerStatus:FC<iServerStatus> = ({url, text}) => {
    const [status, setStatus] = useState('grey');

    useEffect(() => {
        // function to load the data for the status
        async function loadData() {
            // fetch the result of the status
            const res = await fetch(url);
            const data = await res.json();
            setStatus(data.status);
        }

        // timer to run every 5 seconds to re-fetch the status
        const timer = window.setInterval(() => {
            loadData();
        }, 5000);

        // get the data loaded immediately for first render
        loadData();

        // cleanup the effect
        return () => {
            window.clearInterval(timer);
        };
    }, []);  

    return (
        <StatusBadge color={status}>{text}</StatusBadge>
    )
}

export { ServerStatus }