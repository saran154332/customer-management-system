import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerTable from './components/CustomerTable';

function App() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImludGVybkBleGFtcGxlLmNvbSIsImlhdCI6MTc1MDQwODU2MiwiZXhwIjoxNzUzMDAwNTYyfQ.g4RvauorgdNsvLWvt4YzrAuxQMxBIXEH2sghb0hTwFQ';

    axios.get('https://cg-api-f7misqzora-uc.a.run.app/customer/get-all', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        email: 'intern@example.com'
      },
      params: {
        page: 1,
        limit: 10
      }
    })
      .then(res => {
        console.log('API response:', res.data);

        // Use the correct path for the customer array
        const customerList = res.data?.data || [];
        setCustomers(Array.isArray(customerList) ? customerList : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('API error:', err.response?.data || err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Customer</h2>
      {loading ? <p>Loading...</p> : <CustomerTable customers={customers} />}
    </div>
  );
}

export default App;




