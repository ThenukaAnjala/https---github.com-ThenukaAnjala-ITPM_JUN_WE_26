import React, { useState, useEffect } from 'react';

const Home = () => {
    const [mapData, setMapData] = useState(null);

    useEffect(() => {
        const fetchGoogleMapData = async () => {
            try {
                //some code to fetch google Map data
                // Assuming fetchData is the function to fetch data
                const data = await fetchData(); // Corrected from fetchData to fetchGoogleMapData
                setMapData(data);
            } catch (error) {
                console.error('Error fetching Google Map data:', error);
            }
        };

        fetchGoogleMapData(); // Call the fetchGoogleMapData function

        // Update data every 3 seconds (adjust the interval as needed)
        const interval = setInterval(fetchGoogleMapData, 3000);

        // Cleanup function to clear interval
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            {mapData ? (
                <div id="root" style={{ width: '100%', height: '400px' }}></div>
            ) : (
                <p>Loading map...</p>
            )}
        </div>
    );
};

export default Home;