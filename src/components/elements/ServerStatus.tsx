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
    const [status, setStatus] = useState('RED');

    useEffect(() => {
        async function loadData() {
            // fetch the result of the status
            const res = await fetch(url);
            const data = await res.json();
            setStatus(data.status);
        }
        loadData();
    }, []);  

    return (
        <StatusBadge color={status}>{text}</StatusBadge>
    )
}

export { ServerStatus }