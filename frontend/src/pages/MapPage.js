import React from 'react'
import Terminalmap from "../components/Maps/Terminalmap"
import { Breadcrumb } from 'antd';
function MapPage() {
    return (
        <div className="col-md-12">
            <div className="row">
                <div class="d-inline-flex p-2">
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>VTTI global</Breadcrumb.Item>
                        <Breadcrumb.Item>Map</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>

            <div className="row">
                <div className="col-md-12">
                    <Terminalmap />
                </div>
            </div>

        </div>
    )
}

export default MapPage
