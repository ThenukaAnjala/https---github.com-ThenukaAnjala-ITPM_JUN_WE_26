import React from 'react';

const names = ['Mihisara Jayasinghe', 'Mihisara Jayasinghe', 'Mihisara Jayasinghe', 'Mihisara Jayasinghe', 'Mihisara Jayasinghe', 'Mihisara Jayasinghe'];

function LeftSection() {
  return (
    <div className="w-1/4 bg-blue-200">
      <ul className="list-none pl-0">
        {names.map((name) => (
          <li key={name} className="py-2">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftSection;
