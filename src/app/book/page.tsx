"use client";

import { useState } from 'react';

const Book = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedFloor, setSelectedFloor] = useState('ground');
  const [fullName, setFullName] = useState('');
  const [reservationTime, setReservationTime] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Reservation for ${numberOfPeople} people on the ${selectedFloor === 'ground' ? 'Ground Floor' : '1st Floor'} by ${fullName} at ${reservationTime}`);
  };

  return (
    <div className="bg-[#312d2d] rounded-lg shadow-lg max-w-md mx-auto p-5 mt-8 mb-12">
      <h1 className="text-orange-500 text-xl font-bold mb-2">Book Your Seat</h1>
      <p className="text-[#ddd7d7] mb-4">Reserve your table online for a great dining experience!</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1 font-bold">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="p-2 border border-[#221f1f] rounded-md w-full text-base"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="people" className="block mb-1 font-bold">Number of People:</label>
          <input
            type="number"
            id="people"
            value={numberOfPeople}
            min="1"
            onChange={(e) => setNumberOfPeople(Number(e.target.value))}
            required
            className="p-2 border border-[#221f1f] rounded-md w-full text-base"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reservationTime" className="block mb-1 font-bold">Reservation Time:</label>
          <input
            type="time"
            id="reservationTime"
            value={reservationTime}
            onChange={(e) => setReservationTime(e.target.value)}
            required
            className="p-2 border border-[#221f1f] rounded-md w-full text-base"
          />
        </div>

        <div className="mb-4">
          <label className="font-bold">Floor:</label>
          <div className="flex flex-col">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                value="ground"
                checked={selectedFloor === 'ground'}
                onChange={() => setSelectedFloor('ground')}
                className="mr-2"
              />
              Ground Floor
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="first"
                checked={selectedFloor === 'first'}
                onChange={() => setSelectedFloor('first')}
                className="mr-2"
              />
              1st Floor
            </label>
          </div>
        </div>

        <button type="submit" className="bg-[#262726] text-orange-500 py-2 px-4 rounded-md text-base cursor-pointer transition-colors duration-300 hover:bg-[#1d1f1d]">
          Reserve
        </button>
      </form>
    </div>
  );
};

export default Book;