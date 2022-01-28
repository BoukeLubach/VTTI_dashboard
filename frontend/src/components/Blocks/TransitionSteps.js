import React from 'react';
import { Step, Icon } from "semantic-ui-react"

function TransitionSteps(props) {
    return (
        <Step.Group widths={3}>
            <Step >
                <Step.Content>
                    <Step.Title>Insight</Step.Title>
                  
                </Step.Content>
            </Step>

            <Step >
                <Step.Content>
                    <Step.Title>Reduction</Step.Title>
                  
                </Step.Content>
            </Step>

            <Step >
                <Step.Content>
                    <Step.Title>Transition</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
    );
}

export default TransitionSteps;