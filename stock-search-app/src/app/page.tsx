"use client";
import InputField from "./components/inputField/inputField";
import { useState } from "react";
import { getStock } from "./utis";

export default function Home() {
  const [searchStock, setSearchStock] = useState("");

  const setStock = function (e: React.ChangeEvent<HTMLInputElement>) {
    setSearchStock(e.target.value);
  };

console.log(searchStock)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <InputField
            handleChange={setStock}
            name="stockSearch"
            title="Searched Stock"
            type="text"
            value={searchStock}
            placeholder="Stock name or symbol"
          />
          <button
          onClick={() =>
            getStock(searchStock)
          }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search Stock
        </button>

        </div>
      </div>
    </main>
  );
}
