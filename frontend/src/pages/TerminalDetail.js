import React, { useState, useEffect } from 'react'
import { Divider, Breadcrumb } from 'antd';
import Terminaldetailstable from '../components/Tables/Terminaldetailstable';
import TerminalDetailMap from '../components/Maps/TerminalDetailMap';
import { useParams } from "react-router-dom";
import { selectedTerminal } from "../redux/actions/terminalsActions";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";

function TerminalDetail() {
    // const [terminaldata, setTerminaldata] = useState([]);
    const { terminalID } = useParams();
    const dispatch = useDispatch();


    
    const fetchEnergydata = async () => {
        const response = await axios
            .get("http://localhost:8000/api/terminals/" + terminalID + "/")
            .catch((err) => {
                console.log("Err: ", err);
            });
        console.log(response.data)
        dispatch(selectedTerminal(response.data));
    };




    useEffect(() => {
        fetchEnergydata()
    }, []);

    // const energyAPIdata = useSelector((state) => state.allTerminals.terminals);

    return (
        <div>
            <div className="row">
                <div className="col-md-8 offset-2">
                    <div className="row d-flex justify-content-center">
                        <h1>Terminal - location</h1>
                        <p>{terminalID}</p>
                    </div>
                    <div className="row">
                        <p>Short description of the location</p>
                    </div>

                </div>
            </div>
            <Divider />
            <div className="row d-flex justify-content-center">
                {/* <Terminaldetailstable tabledata= {energyAPIdata} /> */}
            </div>
            <Divider />
            <div className="row d-flex justify-content-center">
                <TerminalDetailMap />
            </div>
            <div className="row d-flex justify-content-center">

            </div>
        </div>
    )
}

export default TerminalDetail
