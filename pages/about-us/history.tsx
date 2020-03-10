import { Page } from "../../src/components/layout/Page";
import { PageTitle } from "../../src/components/elements/PageTitle";
import ReactMarkdown from 'react-markdown';
import styled from "styled-components";

const HistoryMarkdown = require('../../data/markdown/history.md');

const StyledContent = styled.div`
    font-size: var(--p-responsive);
    background: var(--color-grey-light);
    padding: 20px;
    box-shadow: var(--box-shadow);
`;

const HistoryPage = () => (
    <Page>
        <PageTitle>
            Our History
        </PageTitle>
        <StyledContent>
            <ReactMarkdown source={HistoryMarkdown.default} />
        </StyledContent>
    </Page>
);

export default HistoryPage;