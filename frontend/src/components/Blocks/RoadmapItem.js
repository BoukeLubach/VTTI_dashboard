import React from 'react';
import { Item, Icon, Label } from "semantic-ui-react"

function RoadmapItem(props) {

    return (
        <Item.Group>
            <Item>
                <Item.Image size='mini' src={props.image} />
                <Item.Content>
                    <Item.Header as='a'><p className={props.active ? "text-muted" : "text-primary"}> {props.title}</p></Item.Header>
                    <Item.Meta >{props.text}</Item.Meta>
                    <Item.Description>
                    </Item.Description>
                    <Item.Extra>
                        {props.active ? <></> :
                            <Label as='a' >
                                <Icon name='tasks' /> {props.score}
                            </Label>
                            }
                    </Item.Extra>
                </Item.Content>
            </Item >
        </Item.Group >
    );
}

export default RoadmapItem;