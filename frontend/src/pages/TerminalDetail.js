import React, { useState, useEffect } from 'react'
import { Divider, Breadcrumb } from 'antd';
import EnergyTable from '../components/Tables/EnergyTable';
import TerminalDetailMap from '../components/Maps/TerminalDetailMap';
import { useParams } from "react-router-dom";
import { selectedTerminal, selectedTerminalEnergy } from "../redux/actions/terminalsActions";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import TerminalDescription from '../components/Blocks/TerminalDescription';


function TerminalDetail() {
    const [terminalData, setTerminalData] = useState([])
    const [energydata, setenergydata] = useState([]);
    const { terminalID } = useParams();
    const dispatch = useDispatch();

    const fetchTerminaldata = async () => {
        const response = await axios
            .get("http://localhost:8000/api/terminals/" + terminalID + "/")
            .catch((err) => {
                console.log("Err: ", err);
            });
        setTerminalData(response.data)
        dispatch(selectedTerminal(response.data))
    }   




    const fetchEnergydata = async () => {
        const response = await axios
            .get("http://localhost:8000/api/purchasedutilities/?terminal=" + terminalID)
            .catch((err) => {
                console.log("Err: ", err);

            });

        setenergydata(response.data.results)

        dispatch(selectedTerminalEnergy(response.data.results));
    };




    useEffect(() => {
        fetchTerminaldata()
        fetchEnergydata()
    }, []);


    return (
        <div>
            <div className="row d-flex justify-content-center">
                <TerminalDescription terminal = {terminalData} />
            </div>
            <Divider />
            <div className="row d-flex justify-content-center">
                <EnergyTable tabledata={energydata} />
            </div>
            <Divider />
            <div className="row justify-content-center">
                <TerminalDetailMap />
            </div>
            <div className="row d-flex justify-content-center">

            </div>
        </div>
    )
}

export default TerminalDetail
