import React, { useState } from 'react';
import Document from './Document';

const landRegistryData = [
  {
    title: "Plot A12345",
    address: "123 Main Street, Anytown USA",
    owner: "John Doe",
    value: "$500,000",
    status: "Active"
  },
  {
    title: "Plot B67890",
    address: "456 Elm Street, Othertown USA",
    owner: "Jane Smith",
    value: "$750,000",
    status: "Pending Sale"
  },
  {
    title: "Plot A12345",
    address: "123 Main Street, Anytown USA",
    owner: "John Doe",
    value: "$500,000",
    status: "Active"
  },
  {
    title: "Plot B67890",
    address: "456 Elm Street, Othertown USA",
    owner: "Jane Smith",
    value: "$750,000",
    status: "Pending Sale"
  },
  {
    title: "Plot A12345",
    address: "123 Main Street, Anytown USA",
    owner: "John Doe",
    value: "$500,000",
    status: "Active"
  },
  {
    title: "Plot B67890",
    address: "456 Elm Street, Othertown USA",
    owner: "Jane Smith",
    value: "$750,000",
    status: "Pending Sale"
  },
  {
    title: "Plot A12345",
    address: "123 Main Street, Anytown USA",
    owner: "John Doe",
    value: "$500,000",
    status: "Active"
  },
  {
    title: "Plot B67890",
    address: "456 Elm Street, Othertown USA",
    owner: "Jane Smith",
    value: "$750,000",
    status: "Pending Sale"
  },
  {
    title: "Plot A12345",
    address: "123 Main Street, Anytown USA",
    owner: "John Doe",
    value: "$500,000",
    status: "Active"
  },
  {
    title: "Plot B67890",
    address: "456 Elm Street, Othertown USA",
    owner: "Jane Smith",
    value: "$750,000",
    status: "Pending Sale"
  }
];

const LandRegistry = () => {
  const [selectedPlot, setSelectedPlot] = useState(null);

  const handleViewCertificate = (plot) => {
    setSelectedPlot(plot);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Land Registry</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2">Title</th>
            <th className="py-2">Address</th>
            <th className="py-2">Owner</th>
            <th className="py-2">Value</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {landRegistryData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-2">{item.title}</td>
              <td className="py-2 px-4">{item.address}</td>
              <td className="py-2 px-4">{item.owner}</td>
              <td className="py-2 px-4">{item.value}</td>
              <td className="py-2 px-4 text-green-500">{item.status}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleViewCertificate(item)}
                  className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                >
                  View Certificate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPlot && (
        <Document plot={selectedPlot} onClose={() => setSelectedPlot(null)} />
      )}
    </div>
  );
};

export default LandRegistry;
