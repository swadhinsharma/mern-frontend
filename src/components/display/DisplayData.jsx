import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get('https://mernapp-tt2l.onrender.com/api_mobile')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load data.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Fetched Data</h2>
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item._id} style={{ marginBottom: '20px' }}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Brand:</strong> {item.brand}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <p><strong>Discount:</strong> {item.discount}</p>
              <p><strong>Warranty:</strong> {item.warranty}</p>
              <p><strong>Image:</strong></p>
              {item.img ? (
                <img
                  src={`https://mernapp-tt2l.onrender.com/${item.img}`} // Adjust if your server serves static files
                  alt={item.name}
                  style={{ maxWidth: '200px', maxHeight: '150px' }}
                />
              ) : (
                <p>No image available</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayData;
