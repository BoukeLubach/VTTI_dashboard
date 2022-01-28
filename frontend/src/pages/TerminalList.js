import React, {useState, useEffect} from 'react'
import {Container, Divider } from "semantic-ui-react"
import axios from 'axios'
import TerminalEquipmentTable from '../components/Tables/TerminalEquipmentTable'


function TerminalList() {

    const [terminalData, setTerminalData] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getterminalData = async () => {
        const response = await axios
            .get("http://localhost:8000/api/terminalequipment/")
            .then(res => {
                setTerminalData(res.data.results)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))

    }
    useEffect(() => {
        getterminalData()
    }, [])

    return (
        <Container textAlign='center'>

            <Divider />
            <Divider />
            <h1>Terminals</h1>
            <TerminalEquipmentTable terminalData={terminalData} />
        </Container>
    )
}

export default TerminalList
