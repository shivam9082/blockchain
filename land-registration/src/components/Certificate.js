import React from "react";

const Certificate = ({ transaction, onClose }) => {
  const handleDownload = () => {
    window.print(); // For simple print/download functionality
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 relative">
        <h2 className="text-2xl font-semibold mb-4">Land Registration Certificate</h2>
        <p className="mb-2"><strong>Type:</strong> {transaction.type}</p>
        <p className="mb-2"><strong>Status:</strong> {transaction.status}</p>
        <p className="mb-2"><strong>Details:</strong> {transaction.details}</p>
        <p className="mb-2"><strong>Timestamp:</strong> {transaction.timestamp}</p>
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

export default Certificate;
