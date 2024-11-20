import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WatchFirst = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://mernapp-tt2l.onrender.com/watch')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const slicedData = data.slice(0, 4);

    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}>SmartWatchs</h1>
            <div className="row">
                {slicedData.map((watch, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={watch.img} className="img-fluid rounded-start" alt={watch.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{watch.name}</h5>
                                        <p className="card-text">{watch.description}</p>
                                        <p className="card-text"><small className="text-muted">${watch.price}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchFirst;
