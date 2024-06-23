// src/components/Poll.js
import React, { useState } from 'react';

const Poll = ({question}) => {
  const [votes, setVotes] = useState([0, 0, 0, 0]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const totalVotes = votes.reduce((total, num) => total + num, 0);

  return (
    <div className="p-4 max-w-sm mx-auto bg-blue-100 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold  text-black">{question}</h2>
      <div className="space-y-2">
        {['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4'].map((option, index) => (
          <button
            key={index}
            onClick={() => handleVote(index)}
            className="w-full px-4 py-2 text-left bg-black rounded-lg hover:bg-gray-800"
          >
            {option} <span className="text-gray-500"> {votes[index] > 0 && `(${votes[index]} votes, ${((votes[index] / (totalVotes || 1)) * 100).toFixed(0)}%)`}</span>
          </button>
        ))}
      </div>
      <p className="text-gray-500">{totalVotes} votes</p>
    </div>
  );
};

export default Poll;
