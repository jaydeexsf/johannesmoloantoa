import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [portfolioData, setPortfolioData] = useState(null);

    // Function to fetch data
    const getPortfolioData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/data');
            setPortfolioData(response.data); // Set the data to state
        } catch (error) {
            console.log('Error occurred while getting data: ' + error);
        }
    };

    useEffect(() => {
        getPortfolioData();
    }, []); 

    // useEffect(() => {
    //     if (portfolioData) {
    //         console.log(portfolioData);
    //     }
    // }, [portfolioData]);

    return (
        <ModeContext.Provider value={{ portfolioData }}>
            {children}
        </ModeContext.Provider>
    );
};
