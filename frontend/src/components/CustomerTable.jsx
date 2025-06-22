import React, { useState } from 'react';
import { FaEye, FaEdit, FaUserSlash } from 'react-icons/fa';

function CustomerTable({ customers }) {
  const [search, setSearch] = useState('');

  const filtered = customers.filter(c => {
    const name = c.name || '';
    const email = c.email || '';
    const domain = c.domain || '';
    const phone = c.phone || '';
    const searchLower = search.toLowerCase();
    return (
      name.toLowerCase().includes(searchLower) ||
      email.toLowerCase().includes(searchLower) ||
      domain.toLowerCase().includes(searchLower) ||
      phone.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search for Customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary">+ Add Customer</button>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Domain</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, i) => (
            <tr key={i}>
              <td>{c.name || 'N/A'}</td>
              <td>{c.email || 'N/A'}</td>
              <td>{c.domain || 'N/A'}</td>
              <td>{c.phone || 'N/A'}</td>
              <td>
                <span className={`badge ${c.isActive ? 'bg-success' : 'bg-secondary'}`}>{c.isActive ? 'Active' : 'Inactive'}</span>
              </td>
              <td>
                <FaEye className="me-2 text-primary cursor-pointer" />
                <FaEdit className="me-2 text-success cursor-pointer" />
                <FaUserSlash className="text-danger cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CustomerTable;
