import React from 'react'
import { Table } from "antd"




const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Units',
        dataIndex: 'uom',
        key: 'uom',
    },
    {
        title: 'Emission factor',
        dataIndex: 'emission_factor',
        key: 'emission_factor',
    },
    {
        title: 'GHG emissions',
        dataIndex: 'ghgemissions',
        key: 'ghgemissions',
    },
];


function EnergyTable(props) {

    var dataSource = []
    props.tabledata.map((item, index) => {
        dataSource.push({
            key: item.id,
            name: item.name,
            year: item.year,
            amount: item.amount,
            uom: item.uom,
            emission_factor: item.emission_factor,
        })
    })



    return (

        <div className="col-md-10 offset-1">
            <Table dataSource={dataSource} columns={columns} />
        </div>

    )
}

export default EnergyTable
