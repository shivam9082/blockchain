import React from 'react';

// Dummy data for Current Activity
const currentActivityData = [
    {
      title: "Land Registration Updated",
      description: "John Doe registered a new plot of land.",
      timestamp: "Just now"
    },
    {
      title: "Property Taxes Paid",
      description: "Jane Smith paid her property taxes for the month.",
      timestamp: "2 hours ago"
    }
  ];

  
  const CurrentActivity = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Current Activity</h2>
          {currentActivityData.map((item, index) => (
            <div key={index} className="mb-2 border-b pb-2 last:border-b-0">
              <span className="font-medium">{item.title}</span>
              <span className="text-gray-600 text-sm">{item.description}</span>
              <span className="text-gray-400 text-xs">{item.timestamp}</span>
            </div>
          ))}
        </div>
      );
  }
  
  export default CurrentActivity

