import React from 'react'
import {Table, Icon } from "semantic-ui-react"
import humanize from 'humanize-plus'
{/* <Icon color='green' name='checkmark' size='large' /> */}

function TerminalEquipmentTable(props) {
    return (
        <Table singleLine structured>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={2}>Terminal</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Fire fighting equipment</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Diesel generator</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Electric process pumps</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Diesel process pumps</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Air compressor(s)</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Heated product storage</Table.HeaderCell>
                    <Table.HeaderCell width={2}>VCU</Table.HeaderCell>
                    <Table.HeaderCell width={2}>RTO</Table.HeaderCell>
                    <Table.HeaderCell width={2}>VRU</Table.HeaderCell>


                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.terminalData.map((item, index) => (
                    <Table.Row key={index}>
                        <Table.Cell > <a href={"/terminal/" + item.id}>{item.terminalname}</a></Table.Cell>
                        <Table.Cell textAlign='center'>{item.dieselGenerator ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>
                        <Table.Cell textAlign='center'>{item.fireFightEquipment ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>
                        <Table.Cell textAlign='center'>{item.processPumpsElectric ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>
                        <Table.Cell textAlign='center'>{item.processPumpsDiesel ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>
                        <Table.Cell textAlign='center'>{item.airCompressor ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>
                        <Table.Cell textAlign='center'>{item.heatedStorage ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>
                        <Table.Cell textAlign='center'>{item.VCU ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>
                        <Table.Cell textAlign='center'>{item.RTO ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>
                        <Table.Cell textAlign='center'>{item.VRU ? <Icon color='green' name='checkmark' size='small' /> : ""}</Table.Cell>

                    </Table.Row>
                ))}

            </Table.Body>
        </Table>
    )
}

export default TerminalEquipmentTable


