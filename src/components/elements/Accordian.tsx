import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const StyledAccordian = styled.div`
    margin: 20px 0;
`;

const AccordianTitle = styled.button`
    border: none;
    width: 100%;
    font-size: var(--h5-responsive);
    background: var(--color-green-dark);
    color: var(--color-white);
    text-transform: uppercase;
    text-align: left;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 10px;
    margin: 0;
    cursor: pointer;
`;

interface iAccordianContent {
    isOpen: boolean;
}
const AccordianContent = styled.div<iAccordianContent>`
    background: rgba(105,100,29,.5);
    font-size: var(--p-responsive);
    color: var(--color-white);
    margin: 0;
    transition: height 0.25s;
    
    visibility: ${props => props.isOpen ? 'visibile' : 'hidden'};
    height: ${props => props.isOpen ? 'auto' : '0px'};

    p {
        margin: 0;
        padding: 20px;
    }
`;

interface iAccordian {
    title: String;
}

const Accordian:FunctionComponent<iAccordian> = ({title, children}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <StyledAccordian>
            <AccordianTitle onClick={() => setOpen(!isOpen)}>{title}</AccordianTitle>
            <AccordianContent isOpen={isOpen}>   
                {children}
            </AccordianContent>
        </StyledAccordian>
    );
}

export { Accordian }