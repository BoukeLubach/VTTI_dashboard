
import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTerminals } from "../redux/actions/terminalsActions";



function Home() {
    const terminals = useSelector((state) => state.allTerminals.terminals);
    const dispatch = useDispatch();
    const fetchTerminals = async () => {
        const response = await axios
            .get("http://localhost:8000/api/terminals/")
            .catch((err) => {
                console.log("Err: ", err);
            });
        console.log(response.data.results)
        dispatch(setTerminals(response.data.results));
    };
    // const fetchTerminals = () => {
    //     axios.get("http://localhost:8000/api/terminals/")
    //         .then(dispatch(setTerminals(response.data)))
    //         .catch((err) => {
    //             console.log("Err: ", err);
    //         })
    // }


    useEffect(() => {
        fetchTerminals();
      }, []);


    return (
        <div>

        </div>
    )
}

export default Home
