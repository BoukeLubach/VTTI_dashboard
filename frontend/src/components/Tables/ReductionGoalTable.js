import React from 'react';
import { Header, Grid, Icon, Segment, Table } from "semantic-ui-react"
function ReductionGoalTable(props) {
    return (
        <div className="">




            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={10}>Year</Table.HeaderCell>
                        <Table.HeaderCell width={6}>Reduction</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>2024</Table.Cell>
                        <Table.Cell>18%</Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2030</Table.Cell>
                        <Table.Cell>45%</Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2050</Table.Cell>
                        <Table.Cell>100%</Table.Cell>

                    </Table.Row>
                </Table.Body>

            </Table>

        </div>

    );
}

export default ReductionGoalTable;