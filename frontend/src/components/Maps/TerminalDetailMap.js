import React, { Component, useState } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import { useSelector } from "react-redux";


function TerminalDetailMap() {
    const [figure, setFigure] = useState(
        {
            revision: 0,
            data: [
                {
                    type: "scattermapbox",
                    marker: {
                        color: "orange",
                        size: 10
                    },

                    hovertemplate: "<b>%{text}</b><extra></extra>",
                },
            ],
            layout: {
                dragmode: "zoom",
                mapbox: {
                    style: "satellite",// 'mapbox://styles/bouke7/cktjx82107l7l17pp047hikrb',// "carto-positron",
                    center: { lat: 1.350527, lon: 103.534443 },
                    zoom: 14,
                },
                autosize: true,
                hoverlabel: {
                    bgcolor: "#FFF",
                    font: {
                        size: 20,
                        color: "black",
                    },
                },
                margin: { r: 0, t: 0, b: 0, l: 0 },
            },
            frames: [],
            config: {
                displaylogo: false,
                mapboxAccessToken:
                    "pk.eyJ1IjoiYm91a2U3IiwiYSI6ImNrbW1rNGJmcTBncnkycGxlaGgydWRwMDAifQ.ZHw_sV76t1TGmMxWxOYpDg",
            }
        }
    )

    console.log(figure.figure)


    return (
        <div className="row">
            <div className="col-md-12" style={{ height: "75vh" }}>
                <Plot
                    revision={figure.revision}
                    style={{ width: "100%", height: "100%" }}
                    data={figure.data}
                    layout={figure.layout}
                    config={figure.config}
                    frames={figure.frames}
                    // onInitialized={(figure) => setFigure({figure})}
                    useResizeHandler={true}
                    // onUpdate={(figure) => setFigure({figure})}
                />
            </div>
        </div>
    )
}

export default TerminalDetailMap


// export default class TerminalDetailMap extends Component {
//     state = {
//         dataLoad: false,
//         revision: 0,
//         data: [
//             {
//                 type: "scattermapbox",
//                 marker: {
//                     color: "orange",
//                     size: 10
//                 },

//                 hovertemplate: "<b>%{text}</b><extra></extra>",
//             },
//         ],
//         layout: {
//             dragmode: "zoom",
//             mapbox: {
//                 style: "satellite",// 'mapbox://styles/bouke7/cktjx82107l7l17pp047hikrb',// "carto-positron",
//                 center: { lat: 1.350527, lon: 103.534443 },
//                 zoom: 14,
//             },
//             autosize: true,
//             hoverlabel: {
//                 bgcolor: "#FFF",
//                 font: {
//                     size: 20,
//                     color: "black",
//                 },
//             },
//             margin: { r: 0, t: 0, b: 0, l: 0 },
//         },
//         frames: [],
//         config: {
//             displaylogo: false,
//             mapboxAccessToken:
//                 "pk.eyJ1IjoiYm91a2U3IiwiYSI6ImNrbW1rNGJmcTBncnkycGxlaGgydWRwMDAifQ.ZHw_sV76t1TGmMxWxOYpDg",
//         },
//     };

//     componentDidMount() {

//         // const terminalLattitude = selectedTerminal.lattitude
//         // const terminalLongitude = selectedTerminal.longitude
//         var newLayout = this.state.layout
//         newLayout.mapbox.center = { lat: 52, lon: 10 }
//         this.setState({ layout: newLayout })

//     }


//     render() {
//         return (
//             <div className="row">
//                 <div className="col-md-12" style={{ height: "75vh" }}>
//                     <Plot
//                         revision={this.state.revision}
//                         style={{ width: "100%", height: "100%" }}
//                         data={this.state.data}
//                         layout={this.state.layout}
//                         config={this.state.config}
//                         frames={this.state.frames}
//                         onInitialized={(figure) => this.setState({ figure }, console.log(figure))}
//                         useResizeHandler={true}
//                         onUpdate={(figure) => this.setState({ figure })}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }
