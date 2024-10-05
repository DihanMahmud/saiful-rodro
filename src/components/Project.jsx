import Card from "./Card";

const items = [
  {
    image: "/img.jpeg",
    name: "InteliTalk",
    url: "intelitalk",
  },
  {
    image: "/dice.jpg",
    name: "Code Collab",
    url: "code-collab",
  },
  {
    image: "/img.jpeg",
    name: "NasStore",
    url: "nasstore",
  },
  {
    image: "/dice.jpg",
    name: "NASA Mission Control",
    url: "nasa-mission-control",
  },
  {
    image: "/img.jpeg",
    name: "Basic Shopping Cart",
    url: "basic-shopping-cart",
  },
  {
    url: "travel-recommendation-website",
    name: "Travel Recommendation Website",
    image: "/img.jpeg",
  },
  {
    url: "health-census-website",
    name: "Health Census Website",
    image: "/img.jpeg",
  },
  {
    url: "tasklist",
    name: "TaskList",
    image: "/img.jpeg",
  },
  {
    url: "profile-scroller",
    name: "Profile Scroller",
    image: "/img.jpeg",
  },
  {
    url: "robofriends",
    name: "RoboFriends",
    image: "/img.jpeg",
  },
  {
    url: "number-guessing-game",
    name: "Number Guessing Game",
    image: "/img.jpeg",
  },
  {
    url: "loan-calculator",
    name: "Loan Calculator",
    image: "/img.jpeg",
  },
];

export default function Project() {
  return (
    <div
      id="portfolio"
      className="max-w-screen-2xl px-6 md:px-12 mx-auto py-24"
    >
      <h1 className=" uppercase pb-12 text-4xl sm:text-7xl text-center text-[#7cfc00]">
        Portfolio
      </h1>
      <Card items={items} />
    </div>
  );
}
