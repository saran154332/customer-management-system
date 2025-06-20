import React, { useState } from 'react';
import { FaEye, FaEdit, FaUserSlash } from 'react-icons/fa';

function CustomerTable({ customers }) {
  const [search, setSearch] = useState('');

  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

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
            <th>Manage</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.domain}</td>
              <td><button className="btn btn-outline-secondary btn-sm">Manage Learners</button></td>
              <td><span className="badge bg-success">Active</span></td>
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
