import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = process.env.REACT_APP_TOKEN;

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 28.6448,
        longitude: 77.216,
        zoom: 6,
    });

    return (
        <div className="flex-3 bg-yellow-200">
            {/* <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                width="10%"
                height="10%"
                transitionDuration="200 "
                mapStyle="mapbox://styles/thenukaanjala/cludojgss007s01qq3fvy7zub"
                
            ></ReactMapGL> */}
        </div>
    );
}

export default Map;
