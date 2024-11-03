import React from 'react';

const Document = ({ plot, onClose }) => {
  const handleDownload = () => {
    window.print(); // Enables simple print/download functionality
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 relative">
        <h2 className="text-2xl font-semibold mb-4">Land Registration Certificate</h2>
        <p className="mb-2"><strong>Title:</strong> {plot.title}</p>
        <p className="mb-2"><strong>Address:</strong> {plot.address}</p>
        <p className="mb-2"><strong>Owner:</strong> {plot.owner}</p>
        <p className="mb-2"><strong>Value:</strong> {plot.value}</p>
        <p className="mb-2"><strong>Status:</strong> {plot.status}</p>
        <button
          onClick={handleDownload}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Download Certificate
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 font-semibold text-lg"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Document;
