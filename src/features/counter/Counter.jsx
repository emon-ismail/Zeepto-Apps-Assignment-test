import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  // Array of card data with individual counts
  const initialCardData = [
    {
      img: "/docs/images/blog/image-1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far.",
      count: 0, // Initial count for each card
    },
    {
      img: "/docs/images/blog/image-2.jpg",
      title: "Emerging AI trends in 2022",
      description: "Artificial intelligence has made significant strides in 2022.",
      count: 0, // Initial count for each card
    },
    {
      img: "/docs/images/blog/image-3.jpg",
      title: "Top 10 tech companies to watch in 2023",
      description: "The future of technology in 2023 is promising, with these 10 companies leading the charge.",
      count: 0, // Initial count for each card
    },
    {
      img: "/docs/images/blog/image-4.jpg",
      title: "The rise of blockchain technology",
      description: "Blockchain is reshaping industries, with its secure and decentralized approach.",
      count: 0, // Initial count for each card
    },
  ];

  const [cardData, setCardData] = useState(initialCardData); // State for card data

  const dispatch = useDispatch(); // To dispatch actions

  // Function to handle increment for a specific card
  const handleIncrement = (index) => {
    const newCardData = [...cardData];
    newCardData[index].count += 1; // Increment the count for the specific card
    setCardData(newCardData); // Update state
    dispatch(increment()); // Optional: Dispatch global increment if needed
  };

  // Function to handle decrement for a specific card
  const handleDecrement = (index) => {
    const newCardData = [...cardData];
    if (newCardData[index].count > 0) {
      newCardData[index].count -= 1; // Decrement the count for the specific card
      setCardData(newCardData); // Update state
      dispatch(decrement()); // Optional: Dispatch global decrement if needed
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img className="rounded-t-lg" src={card.img} alt={`Card ${index + 1}`} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
          </div>
          <div className="flex justify-center items-center p-5">
            <button
              aria-label="Increment value"
              onClick={() => handleIncrement(index)} // Increment for this card
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Increment
            </button>
            <span className="mx-4 text-xl">{card.count}</span> {/* Display count for this card */}
            <button
              aria-label="Decrement value"
              onClick={() => handleDecrement(index)} // Decrement for this card
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Decrement
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Counter;
