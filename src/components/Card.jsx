"use client";

import Link from "next/link";
import { useState } from "react";

export default function Card({ items }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="relative rounded-md h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }} // Assuming each item has an image property
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-md"></div>
            <div className="absolute bottom-0 p-4 text-white z-10">
              <h3 className="text-lg font-bold line-clamp-1">{item.name}</h3> {/* Assuming each item has a name property */}
              <Link href={`/${item.url}`} className="inline-block px-4 py-2 mt-2 bg-white text-black rounded-md">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center py-6">
        {items.length > visibleCount && (
          <button
            id="view-more"
            className="w-fit px-6 py-3 font-medium transition-all text-lg hover:scale-105 rounded-md border-2 border-[#7cfc00]"
            onClick={showMoreItems}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
}
