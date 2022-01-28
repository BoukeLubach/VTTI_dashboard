import React, {useState, useEffect} from 'react'
import { Container, Divider } from "semantic-ui-react"
import EmissionTable from '../components/Tables/EmissionTable'
import axios from "axios"

function EmissionPage() {
    const [emissionData, setemissionData] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getEmissionData = async () => {
        const response = await axios
            .get("http://localhost:8000/api/purchasedutilities/")
            .then(res => {
                setemissionData(res.data.results)
                setLoading(false)
                console.log(res)
            }
            )
            .catch(err => console.log(err))

    }
    useEffect(() => {
        getEmissionData()
    }, [])
    return (
        <Container textAlign='center'>

            <Divider />
            <Divider />
            <h1>Processes</h1>
            <EmissionTable emissionData={emissionData} />
        </Container>
    )
}

export default EmissionPage
