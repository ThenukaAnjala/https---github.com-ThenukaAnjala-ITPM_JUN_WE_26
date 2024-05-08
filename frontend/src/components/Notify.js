// UpperRightSection.js
import React from 'react';

function Notify() {
  return (
    <div className="flex-1 bg-green-200">
      <div className="flex flex-row space-x-2">
      <button className="bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
        Need Help
      </button>
      <button className="bg-orange-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700">
        Not Responded
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
        Sleep/Rest Mode
      </button>
      <button className="bg-green-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700">
        Safe
      </button>
      <button className="bg-gray-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
        Signal Lost
      </button>
    </div>

    </div>
  );
}

export default Notify;
