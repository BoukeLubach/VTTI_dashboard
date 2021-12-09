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


    console.log(dataSource)

    // const dataSource = [
    //     {
    //         key: '1',
    //         name: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //     },
    //     {
    //         key: '2',
    //         name: 'John',
    //         age: 42,
    //         address: '10 Downing Street',
    //     },
    // ];





    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default EnergyTable
