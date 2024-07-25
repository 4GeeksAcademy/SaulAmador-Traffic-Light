import React, { useState } from "react";

const TraficLight = () => {
    const [color, setColor] = useState("red")

    const turnOn = (color) => {
        setColor(color)
    };

    return (
        <div className="container-fluid">
            <div className="container d-flex flex-column align-items-center">
                <div className="poste"></div>
                <div className="traficLight">
                    <div className={`red ${color === 'red' ? 'light' : ''}`} onClick={() => turnOn("red")}></div>
                    <div className={`yellow ${color === 'yellow' ? 'light' : ''}`} onClick={() => turnOn("yellow")}></div>
                    <div className={`green ${color === 'green' ? 'light' : ''}`} onClick={() => turnOn("green")}></div>
                </div>
            </div>
        </div>
    );
};

export default TraficLight; 
