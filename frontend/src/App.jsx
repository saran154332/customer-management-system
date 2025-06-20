import React, { useState } from 'react';
import { customers as sampleCustomers } from './data';
import CustomerTable from './CustomerTable';

function App() {
  const [customers, setCustomers] = useState(sampleCustomers);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Customer</h2>
      <CustomerTable customers={customers} />
    </div>
  );
}

export default App;

