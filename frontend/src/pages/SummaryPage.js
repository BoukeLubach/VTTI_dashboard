import React from 'react';
import { Container, Divider, Header, Segment, Grid, Icon } from 'semantic-ui-react';
import RoadmapItems from "../components/Blocks/RoadmapItems"
import TransitionSteps from '../components/Blocks/TransitionSteps';
import ReductionGoalTable from '../components/Tables/ReductionGoalTable';


function SummaryPage(props) {
    return (
        <Container>
            <Divider />
            <Divider />
            <Segment>
                <Header>VTTI - Greenhouse gas roadmap</Header>
            </Segment>
            <Segment vertical width={3}>
                <Grid padded >
                    <Grid.Row columns={3} >
                        <Grid.Column width={5} color="blue">
                            <h2>Dot on the horizon</h2>
                        </Grid.Column>
                        <Grid.Column width={10} floated='right' color="blue">
                            <h2>Roadmap to zero emissions</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} >
                        <Grid.Column width={5}>
                            <Segment vertical>

                                <p>Provide sustainable storage of fuels by complete removal of greenhouse gas emissions, both on-site and for energy consumption used by VTTI terminals.</p>
                            </Segment>
                            <Segment vertical>
                                <Header as='h4' textAlign='center'>
                                    <Icon name='chart line' size='small' />
                                    <Header.Content >Reduction goals</Header.Content>
                                </Header>
                                <ReductionGoalTable />
                            </Segment>
                        </Grid.Column>

                        <Grid.Column floated='right' width={10}>
                            <Segment vertical>
                                <TransitionSteps />
                            </Segment>
                            <Segment vertical>
                                <RoadmapItems />
                            </Segment>
                        </Grid.Column>

                    </Grid.Row>

                </Grid>
            </Segment>
            <Segment>

            </Segment>
        </Container>
    );
}

export default SummaryPage;