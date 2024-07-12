import React, { useState } from 'react';
import "../App.css";

function Translator() {
    const [input, setInput] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // send a POST request to API endpoint
        // indicate method, headers, and JSON body

        // reset error and response before making a new request

        // assign apiURL: deployed vs local URLs and add a console.log to debug

        // if response is successful (200)
            // save response as a JSON
            // update response message to message attached to response data
        // esle
            // save response as a JSON
            // set the error useState to error message attached to response data

    }

    return (
        pass
    );
}

export default Translator;
