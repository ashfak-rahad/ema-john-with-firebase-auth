import React from "react";

const Home = () => {
  return (
    <div>
      
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            New{" "}
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Collection
            </mark>{" "}
            For Fall
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            SHOP NOW
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            className="h-auto w-full object-cover rounded-lg shadow-md"
            src="https://images.pexels.com/photos/7643772/pexels-photo-7643772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
