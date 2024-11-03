import React from 'react';

// Dummy data for Settings
const settingsData = [
    {
      title: "General",
      options: ["Dark Mode", "Language"]
    },
    {
      title: "Notifications",
      options: ["Email", "SMS", "Push Notifications"]
    },
    {
      title: "Security",
      options: ["Two-Factor Authentication", "Password Reset"]
    }
  ];


  
  
  const Settings = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          {settingsData.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <span className="mr-2">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
  }
  
  export default Settings