import React, { useState } from 'react'
import { Divider, Breadcrumb } from 'antd';
import Terminaldetailstable from '../components/Tables/Terminaldetailstable';
import TerminalDetailMap from '../components/Maps/TerminalDetailMap';
import { useParams } from "react-router-dom";

function TerminalDetail() {
    const [terminaldata, setTerminaldata] = useState([]);
    const { terminalID } = useParams();
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
                <Terminaldetailstable />
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
