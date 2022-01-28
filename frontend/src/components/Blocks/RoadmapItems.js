import React, { useLayoutEffect } from 'react';
import { Table } from "semantic-ui-react"
import operationicon from "../../assets/images/operationalexcellenceicon.gif"
import ghgemissionicon from "../../assets/images/ghgemissionicon.gif"
import RoadmapItem from './RoadmapItem';

function RoadmapItems(props) {
    return (

        <Table basic='very'>

            <Table.Body>
                <Table.Row>
                    <Table.Cell active width={5}>

                        <RoadmapItem
                            image={ghgemissionicon}
                            title="Product emission"
                            text="Insight in product emissions during loading/unloading"
                            score="4/10"
                            active="false"
                        />

                    </Table.Cell>
                    <Table.Cell width={5}>

                        <RoadmapItem
                            image={operationicon}
                            title="Operations"
                            text="Improved insight reduces wasteful energy consumption"
                            score="7/10"
                        />

                    </Table.Cell >
                    <Table.Cell width={5}>

                        <RoadmapItem image={operationicon} title="Fuels" text={<ul><li>- Biodiesel </li><li> - LNG </li><li>- Hydrogen</li></ul>} />

                    </Table.Cell>
                </Table.Row >
                <Table.Row>
                    <Table.Cell>

                        <RoadmapItem image={ghgemissionicon} title="Energy consumption" text="Allocate energy consumption to processes in VTTI " />

                    </Table.Cell>
                    <Table.Cell><RoadmapItem image={ghgemissionicon} title="Vapor handling" text="Product vapor recovery or treatment before emitting" /></Table.Cell>
                    <Table.Cell><RoadmapItem image={ghgemissionicon} title="Vapor handling" text="Product vapor recovery or treatment before emitting" /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>

                        <RoadmapItem image={ghgemissionicon} title="Energy consumption" text="Allocate energy consumption to processes in VTTI " />

                    </Table.Cell>
                    <Table.Cell><RoadmapItem image={ghgemissionicon} title="Vapor handling" text="Product vapor recovery or treatment before emitting" /></Table.Cell>
                    <Table.Cell><RoadmapItem image={ghgemissionicon} title="Vapor handling" text="Product vapor recovery or treatment before emitting" /></Table.Cell>
                </Table.Row>

            </Table.Body >

        </Table >

    );
}

export default RoadmapItems;