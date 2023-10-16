"use client"
import { SetStateAction, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, PieChart, Pie, Bar, ResponsiveContainer } from "recharts";

export default function Home() {
  // dummy data for different types of charts
  const productsData = {
    "Product A": {
      lineChartData: [
        { name: "A", uv: 400, pv: 1200, amt: 1200 },
        { name: "B", uv: 200, pv: 2400, amt: 2400 },
        { name: "C", uv: 700, pv: 3700, amt: 3700 },
        { name: "D", uv: 300, pv: 4200, amt: 4200 },
      ],
      barChartData: [
        { name: "A", uv: 400 },
        { name: "B", uv: 200 },
        { name: "C", uv: 700 },
        { name: "D", uv: 300 },
      ],
      pieChartData: [
        { name: "A", value: 400 },
        { name: "B", value: 200 },
        { name: "C", value: 700 },
        { name: "D", value: 300 },
      ],
    },
    "Product B": {
      lineChartData: [
        { name: "A", uv: 800, pv: 2200, amt: 2200 },
        { name: "B", uv: 400, pv: 3400, amt: 3400 },
        { name: "C", uv: 900, pv: 4700, amt: 4700 },
        { name: "D", uv: 500, pv: 5200, amt: 5200 },
      ],
      barChartData: [
        { name: "A", uv: 800 },
        { name: "B", uv: 400 },
        { name: "C", uv: 900 },
        { name: "D", uv: 500 },
      ],
      pieChartData: [
        { name: "A", value: 800 },
        { name: "B", value: 400 },
        { name: "C", value: 900 },
        { name: "D", value: 500 },
      ],
    },
    "Product C": {
      lineChartData: [
        { name: "A", uv: 600, pv: 1600, amt: 1600 },
        { name: "B", uv: 300, pv: 2800, amt: 2800 },
        { name: "C", uv: 800, pv: 3900, amt: 3900 },
        { name: "D", uv: 400, pv: 4200, amt: 4200 },
      ],
      barChartData: [
        { name: "A", uv: 600 },
        { name: "B", uv: 300 },
        { name: "C", uv: 800 },
        { name: "D", uv: 400 },
      ],
      pieChartData: [
        { name: "A", value: 600 },
        { name: "B", value: 300 },
        { name: "C", value: 800 },
        { name: "D", value: 400 },
      ],
    },
    "Product D": {
      lineChartData: [
        { name: "A", uv: 1000, pv: 3200, amt: 3200 },
        { name: "B", uv: 500, pv: 4400, amt: 4400 },
        { name: "C", uv: 1200, pv: 5700, amt: 5700 },
        { name: "D", uv: 600, pv: 6200, amt: 6200 },
      ],
      barChartData: [
        { name: "A", uv: 1000 },
        { name: "B", uv: 500 },
        { name: "C", uv: 1200 },
        { name: "D", uv: 600 },
      ],
      pieChartData: [
        { name: "A", value: 1000 },
        { name: "B", value: 500 },
        { name: "C", value: 1200 },
        { name: "D", value: 600 },
      ],
    },
  };


  const [selectedChart, setSelectedChart] = useState("line");
  const [selectedProduct, setSelectedProduct] = useState<keyof typeof productsData>("Product A");


  
  const handleChartChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedChart(event.target.value);
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value as keyof typeof productsData);
  };
  
  
  return (
    <main className="p-4 bg-main h-[100vh] flex flex-col justify-center items-center gap-12">

      <div className="p-4 rounded shadow flex justify-center items-center w-screen ">
        {selectedChart === "line" && (
          <ResponsiveContainer width="70%" height={400}>
            <LineChart  data={productsData[selectedProduct].lineChartData} >
              <Line type="monotone" dataKey="uv" stroke="#fecb0b" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        )}
        {selectedChart === "bar" && (
          <ResponsiveContainer width="70%" height={400}>
            <BarChart  data={productsData[selectedProduct].barChartData}>
              <Bar dataKey="uv" fill="#fecb0b" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        )}
        {selectedChart === "pie" && (
          <ResponsiveContainer width="70%" height={400}>
            <PieChart >
              <Pie data={productsData[selectedProduct].pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#fecb0b" label />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* ----------------------------select boxes -----------------------------------*/}
      <div className="flex justify-between gap-12 min-w-[40%] ">

        {/* --------------------------select product----------------------------------*/}
        <div className="mb-4 flex  flex-col gap-3">
          <label htmlFor="product" className="mr-2 text-text1 text-sm">
            Select Product:
          </label>
          <select
            id="product"
            className="p-2 rounded focus:outline-none bg-secondary text-text3 text-sm "
            value={selectedProduct}
            onChange={handleProductChange}
          >
            {Object.keys(productsData).map((product) => (
              <option key={product} value={product} >
                {product}
              </option>
            ))}
          </select>
        </div>

        {/* -------------------------select chart type--------------------------------*/}
        <div className="mb-4 flex  flex-col gap-3">
          <label htmlFor="chartType" className="mr-2 text-text1 text-sm">
            Select Chart Type:
          </label>
          <select
            id="chartType"
            className="p-2  rounded focus:outline-none  bg-secondary text-text3"
            value={selectedChart}
            onChange={handleChartChange}
          >
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>

      </div>

    </main>
  );
}
