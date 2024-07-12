import React, { useState } from 'react';
import "../App.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
        console.log(`Request sent to: ${apiURL}/translator/`);

        // send a POST request to API endpoint
        // indicate method, headers, and JSON body
        try {
            const response = await fetch(`${apiURL}/translator/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            // if response is successful (200)
            if (response.ok) {
                // save response as a JSON
                // update response message to message attached to response data
                const validData = await response.json();
                setResponseMessage(validData.message);
            } else {
                // save response as a JSON
                // set the error useState to error message attached to response data
                const invalidData = await response.json();
                setErrorMessage(invalidData.message);
            }
        } catch (errorMessage) {
            setErrorMessage('An error occured while fetching data.')
            console.log(error)
        }
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    Translator
                </Card.Title>
                <Form.Control size="lg" type="text" placeholder="Input Text for Translation Here" />
                <Button variant="secondary" size="lg">
                    Block level button
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Translator;
