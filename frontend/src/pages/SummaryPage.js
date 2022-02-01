import React from 'react';
import { Container, Divider, Header, Segment, Grid, Icon } from 'semantic-ui-react';
import RoadmapItems from "../components/Blocks/RoadmapItems"
import TransitionSteps from '../components/Blocks/TransitionSteps';
import ReductionGoalTable from '../components/Tables/ReductionGoalTable';
import "../assets/roadmapitems.css";
import PlannedReductionGraph from '../components/Graphs/PlannedReductionGraph';


function SummaryPage(props) {
    return (
        <Container>
            <Divider />
            <Divider />
            <Segment vertical >
                <div className="header-block">
                    <h2 className='roadmap-header'>VTTI - Greenhouse gas roadmap</h2>
                </div>

            </Segment>
            <Segment>
                <Grid padded >
                    <Grid.Row columns={3} >
                        <Grid.Column width={5}>

                            <h2 className='roadmap-header header-block'>Dot on the horizon</h2>
                            <Segment style={{ backgroundColor: '#e6f3fa' }} vertical>

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
                        <Grid.Column width={1}>

                        </Grid.Column>
                        <Grid.Column width={10} floated='right'>

                            <h2 className='roadmap-header header-block'>Planned reduction</h2>
                            <PlannedReductionGraph />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <div className="header-block">
                    <h2 className='roadmap-header'>Roadmap to zero emissions</h2>
                </div>
                <Segment vertical>
                    <TransitionSteps />
                </Segment>
                <Segment vertical>
                    <RoadmapItems />
                </Segment>
            </Segment>
            <Segment>
                <div className="header-block">
                    <h2 className='roadmap-header'>Key numbers</h2>
                </div>
                <Segment vertical>

                </Segment>
            </Segment>
        </Container >
    );
}

export default SummaryPage;