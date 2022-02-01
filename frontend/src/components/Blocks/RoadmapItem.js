import React from 'react';
import { Item, Icon, Label } from "semantic-ui-react"


function RoadmapItem(props) {


    if (props.score===0 || props.disabled) {
        return (
            < div  >
                <Item.Group className='roadmapitem-disabled'>
                    <Item>
                        <Item.Image size='mini' src={props.image} />
                        <Item.Content className='tex'>
                            <Item.Header ><p className="roadmapitem-text-disabled"> {props.title}</p></Item.Header>
                            <Item.Meta >{props.text}</Item.Meta>
                            <Item.Description>
                            </Item.Description>
                            <Item.Extra>

                            </Item.Extra>
                        </Item.Content>
                    </Item >
                </Item.Group >
            </div >
        )
    } else {


        return (
            < div >
                <Item.Group>
                    <Item>
                        <Item.Image size='mini' src={props.image} />
                        <Item.Content>
                            <Item.Header as='a' href={"/roadmap/" + props.id}><p className='roadmap-header-link'> {props.title}</p></Item.Header>
                            <Item.Meta >{props.text}</Item.Meta>
                            <Item.Description>
                            </Item.Description>
                            <Item.Extra>
                                <Label as='a' color={props.score<5 ?  'red' : props.score<7 ? 'orange' : 'olive'} >
                                    <Icon name='tasks' /> {props.score} /10
                                </Label>
                            </Item.Extra>
                            
                        </Item.Content>
                    </Item >
                </Item.Group >
            </div >
        )
    }
}

export default RoadmapItem;