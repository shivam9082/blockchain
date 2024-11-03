import React from 'react';

// Dummy data for Help & Support
const helpSupportData = [
    {
      title: "FAQ",
      link: "#faq"
    },
    {
      title: "Contact Support",
      link: "#support"
    },
    {
      title: "Terms of Service",
      link: "#terms"
    },
    {
      title: "Privacy Policy",
      link: "#privacy"
    }
  ];

const HelpSupport = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Help & Support</h2>
          <ul className="space-y-2">
            {helpSupportData.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="block py-2 px-4 hover:bg-blue-50 transition duration-300">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default HelpSupport