import React, { useEffect, useState } from "react";
import Certificate from "./Certificate";

const RecentTransactions = () => {
  const [recentTransactionsData, setRecentTransactionsData] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/transactions");
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const data = await response.json();
        setRecentTransactionsData(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  const handleViewDocument = (transaction) => {
    setSelectedTransaction(transaction);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
      {recentTransactionsData.map((item, index) => (
        <div key={index} className="mb-2 border-b pb-2 last:border-b-0 flex justify-between items-center">
          <span className="font-medium">{item.type}</span>
          <span
            className={`px-2 py-1 text-xs ${item.status === "Completed" ? "bg-green-100" : item.status === "Pending" ? "bg-yellow-100" : ""}`}
          >
            {item.status}
          </span>
          <span className="text-gray-600 text-sm">{item.details}</span>
          <span className="text-gray-400 text-xs">{item.timestamp}</span>
          <button
            onClick={() => handleViewDocument(item)}
            className="bg-blue-500 text-white px-2 py-1 rounded text-xs ml-2"
          >
            View Document
          </button>
        </div>
      ))}
      
      {selectedTransaction && (
        <Certificate transaction={selectedTransaction} onClose={() => setSelectedTransaction(null)} />
      )}
    </div>
  );
};

export default RecentTransactions;
