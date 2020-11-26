import Button from "./ActionButton";

const HomeHero: React.FC = () => {
  return (
    <header className="bg-white flex items-center justify-center h-screen">
      <h1 className="text-center font-serif font-bold text-5xl md:text-6xl lg:text-8xl uppercase text-blue-900">
        vexian
      </h1>
      <div className="blob-1 h-1/2 w-1/2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D60078"
            d="M47.2,-72.9C61.8,-64.1,74.5,-52,82.6,-37C90.7,-21.9,94,-4,90.2,12C86.4,28,75.5,41.9,62.2,49.6C48.9,57.2,33.2,58.6,19.9,58.2C6.5,57.7,-4.5,55.5,-14.3,51.4C-24,47.3,-32.4,41.3,-40.7,34C-49.1,26.7,-57.5,18.1,-60.7,7.6C-63.9,-2.8,-62,-15.2,-57.1,-26.1C-52.1,-37,-44.1,-46.6,-34.1,-57.4C-24,-68.3,-12,-80.5,2.2,-83.8C16.3,-87.2,32.7,-81.7,47.2,-72.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </header>
  );
};

export default HomeHero;
