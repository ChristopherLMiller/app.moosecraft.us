import { Page } from "../../src/components/layout/Page";
import { PageTitle } from "../../src/components/elements/PageTitle";
import { Grid, Column } from "../../src/components/elements/Grid";
import { Card } from "../../src/components/elements/Card";
import { Accordian } from "../../src/components/elements/Accordian";
import { ServerRules } from "../../data/server_rules";

const RulesPage = () => {    
    return (
    <Page>
        <PageTitle>Server Rules</PageTitle>
        <Grid columns={2} gap={30}>
            <Card title="Fair Play">
                <p>At Moosecraft we believe in fair play for all players. The following rules have come about from various situations over time involving players and situations we have come across.</p>
                <p>These rules can and will be changed over time and as such we have built in a method to let you the player know very easily when something has changed.</p>
                <p>With that said we ask that you take the time to read them now to avoid issues in the future.</p>
            </Card>
            <Card title="Staff Ruling">
                <p>At the end of the day our moderation staff have th final say in anything listed here.  It is up to them to interpret the rules and apply them as fairly as possible.  If you don't agree with a ruling from a staff member you may always submit a ticket for another staff member to review.</p>
            </Card>
        </Grid>
        <Grid columns={3} gap={30}>
            {ServerRules.categories.map(categories => (
                <Column key={categories.id}>
                    <Card title={categories.name}></Card>
                    {categories.rules.map(rule => (
                    <Accordian title={rule.name} key={rule.id}>
                    <p>{rule.description}</p>
                </Accordian>
                ))}
                </Column>
            ))}
        </Grid>
    </Page>
)}

export default RulesPage;