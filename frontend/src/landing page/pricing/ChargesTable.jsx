import React, { useEffect, useState } from "react";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";

const ChargesTable = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleHashChange = (hash) => {
    window.location.hash = hash;

    setActiveTab(hash);
  };

  useEffect(() => {
    let hash = window.location.hash;

    if (hash === "") {
      window.location.hash = "equity";
      setActiveTab("equity");
    } else {
      hash = hash.replace("#", "");
      setActiveTab(hash);
    }
  }, []);

  return (
    <div>
      <div className="flex gap-10 text-2xl border-b-1 border-b-gray-400 text-sky-600 mb-10">
        <button
          className={` p-3 hover:cursor-pointer ${
            activeTab == "equity"
              ? "text-gray-400 border-b-2 border-b-sky-600"
              : " "
          }`}
          onClick={() => handleHashChange("equity")}
        >
          Equity
        </button>
        <button
          className={` p-3 hover:cursor-pointer ${
            activeTab == "currency"
              ? "text-gray-400 border-b-2 border-b-sky-600"
              : " "
          }`}
          onClick={() => handleHashChange("currency")}
        >
          Currency
        </button>
        <button
          className={`p-3 hover:cursor-pointer ${
            activeTab == "commodity"
              ? "text-gray-400 border-b-2 border-b-sky-600"
              : " "
          }`}
          onClick={() => handleHashChange("commodity")}
        >
          Commodity
        </button>
      </div>

      {activeTab === "equity" && <Equity />}
      {activeTab === "currency" && <Currency />}
      {activeTab === "commodity" && <Commodity />}

      <h1 className="text-xl text-center mt-10 mb-10">
        {" "}
        <span className="text-sky-600">Calculate your costs upfront</span> using
        our brokerage calculator
      </h1>
    </div>
  );
};

export default ChargesTable;
