import Card from "./Card";

const items = [
  {
    image: "/img.jpeg",
    name: "Code Collab",
    url: "/code-collab"
  },
  {
    image: "/dice.jpg",
    name: "Code Collab",
        url: "/code-collab"
  },
  {
    image: "/img.jpeg",
    name: "Code Collab",
        url: "/code-collab"
  },
  {
    image: "/dice.jpg",
    name: "Code Collab",
        url: "/code-collab"
  },
  {
    image: "/img.jpeg",
    name: "Code Collab",
        url: "/code-collab"
  },
];

export default function Project () {
  return (
    <div id="portfolio" className="max-w-screen-2xl px-6 md:px-12 mx-auto py-24">
      <h1 className=" uppercase pb-12 text-4xl sm:text-7xl text-center text-[#7cfc00]">Portfolio</h1>
      <Card items={items} />
    </div>
  );
};

