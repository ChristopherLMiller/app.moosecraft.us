import { Page } from "../../src/components/layout/Page";
import { PageTitle } from "../../src/components/elements/PageTitle";
import ReactMarkdown from 'react-markdown';
import ContentBlock from "../../src/components/elements/ContentBlock";

const HistoryMarkdown = require('../../data/markdown/history.md');

const HistoryPage = () => (
    <Page>
        <PageTitle>
            Our History
        </PageTitle>
        <ContentBlock>
            <ReactMarkdown source={HistoryMarkdown.default} />
        </ContentBlock>
    </Page>
);

export default HistoryPage;