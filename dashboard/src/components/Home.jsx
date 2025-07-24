import React from "react";

const Home = () => {
  return (
    <div className="px-5">
      <div className="border-b-1 border-b-gray-400 py-5">
        <h1>Hi,Tarun</h1>
      </div>

      <div className="border-b-1 border-b-gray-400 py-10 flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">Equity</h2>
          <div className="grid grid-cols-2 mt-10 gap-10">
            <div>
              <h2 className="text-5xl">1L</h2>
              <h2>Margin available</h2>
            </div>
            <div>
              <h3>
                Margin Used <span>0</span>
              </h3>
              <h3>
                Opening balance <span>1L</span>
              </h3>
              <h3 className="text-sky-500">view statement</h3>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Commodity</h2>
          <div className="grid grid-cols-2 mt-10">
            <div>
              <h2 className="text-5xl">50K</h2>
              <h2>Margin available</h2>
            </div>
            <div>
              <h3>
                Margin Used <span>0</span>
              </h3>
              <h3>
                Opening balance <span>50K</span>
              </h3>
              <h3 className="text-sky-500">view statement</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-1 border-b-gray-400 py-10"></div>
    </div>
  );
};

export default Home;
