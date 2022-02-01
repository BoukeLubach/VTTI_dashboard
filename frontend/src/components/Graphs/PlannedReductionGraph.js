import React, { useState, useEffect} from 'react';
import Plot from 'react-plotly.js';

function PlannedReductionGraph(props) {


    const [figure, setFigure] = useState({
        data: [

        ],
        layout: {


            dragmode: "zoom",

            // hoverlabel: {
            //     bgcolor: "#FFF",
            //     font: {
            //         size: 20,
            //         color: "black",
            //     },
            // },
            margin: { r: 50, t: 50, b: 50, l: 100 },
        },
        config: {
            displaylogo: false,
            displayModeBar: false

        }
    })
    useEffect(() => {
        setFigure({
            ...figure,
            data: [
                {
                    x: props.xdata,
                    y: props.ydata,
                    name: "Trace title",
                    type: 'scatter',
                    mode: "markers",
                    marker: { color: 'orange', size: 15 },
                    text: props.hovertext ? props.hovertext : "",
                    hovertemplate: '<b>%{text}</b><br>' +
                        'Profit: %{x:.2f} gp/h' +
                        '<br>Slayer: %{y} xp/h'

                },

            ],
            layout: {
                title: "figure title",
                xaxis: {
                    range: [-500000, 1000000]
                },
                yaxis: {
                    range: [0, 100000]
                },
            }
        })
        console.log(props)
    }, [props])

    return (
        <div className="">


            <h1>Graph example</h1>

            <Plot
                revision={figure.revision}
                style={{ width: "90%", height: "100%" }}
                data={figure.data}
                layout={figure.layout}
                config={figure.config}
                frames={figure.frames}
                // onInitialized={(figure) => setFigure({figure})}
                useResizeHandler={true}
            // onUpdate={(figure) => setFigure({figure})}
            />
        </div>


    )
}


export default PlannedReductionGraph;