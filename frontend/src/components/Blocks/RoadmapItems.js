import React, { useLayoutEffect } from 'react';
import { Table } from "semantic-ui-react"
import operationicon from "../../assets/images/operationalexcellenceicon.gif"
import ghgemissionicon from "../../assets/images/ghgemissionicon.gif"
import edistributionicon from "../../assets/images/edistributionicon.gif"
import producttankicon from "../../assets/images/producttankicon.gif"
import greenfuelicon from "../../assets/images/greenfuelicon.gif"
import vaporicon from "../../assets/images/vaporicon.gif"
import gridicon from "../../assets/images/gridicon.gif"
import waveicon from "../../assets/images/waveicon.gif"
import windturbine from "../../assets/images/windturbine.gif"
import solarpanelicon from "../../assets/images/solarpanelicon.gif"
import RoadmapItem from './RoadmapItem';


const scores = {
    "id":1,
    "ghgscope1": 10, 
    "ghgscope2": 7, 
    "edistribution": 5,  
    "productemission": 3, 
    "operations": 7, 
    "productheating": 0, 
    "vaporhandling": 4, 
    "electrification": 8, 
    "fuels": 7,
    "solar": 3,
    "wind": 4,
    "wave": 0,
}


function RoadmapItems(props) {
    console.log(scores.ghgscope1)
    return (

        <Table basic='very'>

            <Table.Body >
                <Table.Row>
                    <Table.Cell width={5}>
                        <RoadmapItem
                            image={ghgemissionicon}
                            title="GHG emission - Scope 1"
                            text="Direct emissions of CO2 as a consequence on-site processes"
                            score={scores.ghgscope1}
                            id={1}
                        />


                    </Table.Cell>
                    <Table.Cell width={5}>
                        <RoadmapItem
                            image={operationicon}
                            title="Operations"
                            text="Improved insight reduces wasteful energy consumption"
                            score={scores.operations}
                            id={2}
                        />


                    </Table.Cell >
                    <Table.Cell width={5}>

                        <RoadmapItem
                            image={greenfuelicon}
                            title="Fuels"
                            text={<ul><li>Biodiesel </li><li>LNG </li><li>Hydrogen</li></ul>}
                            id={3}
                            score={scores.fuels}
                        />

                    </Table.Cell>
                </Table.Row >
                <Table.Row>
                    <Table.Cell>
                        <RoadmapItem
                            image={ghgemissionicon}
                            title="GHG emission - Scope 2"
                            text="Indirect emissions of CO2 by external parties required for VTTI processes"
                            score={scores.ghgscope2}
                            id={4}

                        />


                    </Table.Cell>
                    <Table.Cell>
                        <RoadmapItem
                            image={producttankicon}
                            title="Product heating"
                            text="Tank insulation or improved heating systems"
                            score={scores.productheating}
                            id={5}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <RoadmapItem
                            image={solarpanelicon}
                            title="Solar panels"
                            text="PV panels installed on-site or cooporation with external solar energy suppliers"
                            score={scores.solar}
                            id={6}
                        />
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <RoadmapItem
                            image={edistributionicon}
                            title="Energy consumption"
                            text="Allocate energy consumption to processes in VTTI "
                            score={scores.edistribution}
                            id={6}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <RoadmapItem
                            image={vaporicon}
                            title="Vapor handling"
                            text="Product vapor recovery or treatment before emitting"
                            score={scores.vaporhandling}
                            id={7}
                  
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <RoadmapItem
                            image={windturbine}
                            title="Wind turbine"
                            text="Turbines on-site or external wind electricity supply"
                            score={scores.wind}
                            id={8}
                        />
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <RoadmapItem
                            image={ghgemissionicon}
                            title="Product emission"
                            text="Insight in product emissions during loading/unloading"
                            score={scores.productemission}
                            active="false"
                            id={9}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <RoadmapItem
                            image={gridicon}
                            title="(smart) electrification"
                            text="Electricity to reduce emissions caused by combustion of fuels"
                            score={scores.electrification}
                            id={10}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <RoadmapItem
                            image={waveicon}
                            title="Wave energy"
                            text="Innovative wave energy harvesting for electricity production"
                            score={scores.wave}
                            
                            id={12}
                        />
                    </Table.Cell>
                </Table.Row>
            </Table.Body >

        </Table >

    );
}



export default RoadmapItems;