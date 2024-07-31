"use client";
import { useState } from "react";

export default function Card({ items }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredItem, setHoveredItem] = useState(null);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="bg-slate-200 rounded-md h-80 relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item}
            {hoveredItem === index && (
              <div className="absolute rounded inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                <div className="text-center px-2">
                  <h3>Project Name</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum accusamus aliquam officia et adipisci sed harum voluptate, optio ea eaque voluptatibus voluptas quisquam nemo reprehenderit saepe natus magni excepturi.</p>
                  <button className="px-4 py-2 mt-2 bg-white text-black rounded-md">
                    See More
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center py-6">
        {items.length > visibleCount && (
          <button
            id="view-more"
            className="w-fit px-6 py-3 font-medium text-lg hover:scale-105 rounded-md border-2 border-[#7cfc00]"
            onClick={showMoreItems}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
}
