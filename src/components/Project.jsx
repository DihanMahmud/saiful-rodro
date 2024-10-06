import Card from "./Card";

const items = [
  {
    image: "/NasaAPI.png",
    name: "NASA Mission Control",
    url: "nasa-mission-control",
  },
  {
    image: "/CodeCollab.png",
    name: "Code Collab",
    url: "code-collab",
  },
  {
    image: "/nasstore.png",
    name: "NasStore",
    url: "nasstore",
  },
  {
    image: "/IteliTalk.png",
    name: "InteliTalk",
    url: "intelitalk",
  },
  {
    image: "/shoppingCart.png",
    name: "Basic Shopping Cart",
    url: "basic-shopping-cart",
  },
  {
    url: "travel-recommendation-website",
    name: "Travel Recommendation Website",
    image: "/laptop.png",
  },
  {
    url: "health-census-website",
    name: "Health Census Website",
    image: "/health.png",
  },
  {
    url: "tasklist",
    name: "TaskList",
    image: "/tasklist.png",
  },
  {
    url: "loan-calculator",
    name: "Loan Calculator",
    image: "/loan.png",
  },
  {
    url: "robofriends",
    name: "RoboFriends",
    image: "/robofriends.png",
  },
  {
    url: "number-guessing-game",
    name: "Number Guessing Game",
    image: "/img.jpeg",
  },
  {
    url: "profile-scroller",
    name: "Profile Scroller",
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
