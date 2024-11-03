import React from "react";

// Dummy data for Quick Links
const quickLinksData = [
    { label: "Register New Land", href: "#" },
    { label: "Update Ownership", href: "#" },
    { label: "View Documents", href: "#" },
    { label: "Check Property Value", href: "#" },
    { label: "Contact Support", href: "#" }
  ];

  
  
  const QuickLinks = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinksData.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block py-2 px-4 hover:bg-blue-50 transition duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
  }
  
  export default QuickLinks