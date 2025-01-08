"use client";

import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState({ message: '', timestamp: '' });

    useEffect(() => {
        fetch('http://localhost:8080/')
            .then(response => response.json())
            .then(data => {
                setData({ message: data.message, timestamp: data.timestamp });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Message: {data.message}</h1>
            <p>Timestamp: {data.timestamp}</p>
        </div>
    );
};

export default App;