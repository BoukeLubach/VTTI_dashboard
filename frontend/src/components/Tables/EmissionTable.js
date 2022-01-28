import React, { useState } from 'react'
import { Table } from "semantic-ui-react"
import humanize from 'humanize-plus'

function EmissionTable(props) {

    return (
        <Table singleLine structured sortable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell
                        width={3}
                        // sorted={column === 'utility' ? direction : null}
                        // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'utility' })}
                        >
                        Utility
                    </Table.HeaderCell>
                    <Table.HeaderCell width={1}>Terminal</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Year</Table.HeaderCell>
                    <Table.HeaderCell width={4} colSpan='2' textAlign='center'>Purchased energy</Table.HeaderCell>
                    <Table.HeaderCell width={4} colSpan='2' textAlign='center'>Emission factor</Table.HeaderCell>
                    <Table.HeaderCell width={3} textAlign='center' >Emissions</Table.HeaderCell>
                    <Table.HeaderCell width={1}></Table.HeaderCell>
                    <Table.HeaderCell width={1}></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.emissionData.map((item, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.terminalname}</Table.Cell>
                        <Table.Cell>{item.year}</Table.Cell>
                        <Table.Cell textAlign='right'>{humanize.formatNumber(item.amount, 0)}</Table.Cell>
                        <Table.Cell>{item.uom}</Table.Cell>
                        <Table.Cell textAlign='right'>{humanize.formatNumber(item.emission_factor, 5)}</Table.Cell>
                        <Table.Cell>{"ton/" + item.uom} </Table.Cell>
                        <Table.Cell textAlign='right'>{humanize.formatNumber(item.amount * item.emission_factor, 0)}</Table.Cell>
                        <Table.Cell>ton/year</Table.Cell>
                        <Table.Cell><a href="/home">edit</a></Table.Cell>
                    </Table.Row>
                ))}

            </Table.Body>
        </Table>
    )
}

export default EmissionTable
