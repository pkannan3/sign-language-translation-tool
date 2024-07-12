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
        // reset error and response before making a new request
        setErrorMessage('');
        setResponseMessage('');

        // assign apiURL: deployed vs local URLs and add a console.log to debug
        const apiURL = import.meta.env.TRANSLATOR_API_URL || 'http://localhost:5173/';
        console.log('Sending request to: ' + apiURL + '/translator/');

        // send a POST request to API endpoint
        // indicate method, headers, and JSON body



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
