import React from 'react'

function TerminalDescription(props) {
    console.log(props.terminal.name)
    
    return (
        <div className="col-md-8 offset-2">
            <div className="row d-flex justify-content-center">
                <h1>{props.terminal.name} - {props.terminal.country} </h1>
                
                
            </div>
            <div className="row">
                <p>Short description of the location</p>
            </div>

        </div>
    )
}

export default TerminalDescription
