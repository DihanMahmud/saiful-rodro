import Card from "./Card";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10"
];

export default function Project () {
  return (
    <div id="portfolio" className="max-w-screen-2xl px-6 md:px-12 mx-auto py-24">
      <h1 className=" uppercase pb-12 text-4xl sm:text-7xl text-center text-[#7cfc00]">Portfolio</h1>
      <Card items={items} />
    </div>
  );
};

