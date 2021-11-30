import React, { useState } from 'react'
import { Divider, Breadcrumb } from 'antd';
import Terminaldetailstable from '../components/Tables/Terminaldetailstable';
import TerminalDetailMap from '../components/Maps/TerminalDetailMap';

function TerminalDetail() {
    const [terminaldata, setTerminaldata] = useState([]);

    return (
        <div>
            <div className="row">
                <div className="col-md-8 offset-2">
                    <div className="row d-flex justify-content-center">
                        <h1>Terminal - location</h1>
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
