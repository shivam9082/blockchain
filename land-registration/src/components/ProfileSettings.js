// Dummy data for Profile Settings
import React from 'react';
const profileSettingsData = [
    {
      field: "Name",
      value: "John Doe"
    },
    {
      field: "Email",
      value: "john.doe@example.com"
    },
    {
      field: "Phone",
      value: "(555) 123-4567"
    }
  ];

  
  
  const ProfileSettings = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
          {profileSettingsData.map((setting, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{setting.field}</span>
              <span>{setting.value}</span>
            </div>
          ))}
        </div>
      );
  }
  
  export default ProfileSettings