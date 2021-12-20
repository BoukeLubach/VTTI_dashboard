import React, { Component } from 'react'
import Plot from "react-plotly.js";
import axios from "axios";

export default class TerminalDetailMap extends Component {
    state = {
        dataLoad: false,
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
        },
    };

    componentDidMount() {

        axios
            .get("http://localhost:8000/api/terminals/")
            .then((res) => {
                var apidata = res.data.results


                let latData = apidata.map(x => x.lattitude);
                let lonData = apidata.map(x => x.longitude);
                let textData = apidata.map(x => x.name);

                var data = this.state.data
                data[0].lat = latData
                data[0].lon = lonData
                data[0].text = textData
                // console.log(data)
                this.setState({ data: data, revision: this.state.revision + 1 })
            });
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-12" style={{ height: "75vh" }}>
                    <Plot
                        revision={this.state.revision}
                        style={{ width: "100%", height: "100%" }}
                        data={this.state.data}
                        layout={this.state.layout}
                        config={this.state.config}
                        frames={this.state.frames}
                        onInitialized={(figure) => this.setState({ figure })}
                        useResizeHandler={true}
                        onUpdate={(figure) => this.setState({ figure })}
                    />
                </div>
            </div>
        )
    }
}
