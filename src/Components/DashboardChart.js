import React, { useState, useEffect } from "react";
import data from "../data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";

const DaashboardChart = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const sortedDataByDate = data
      .sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      })
      .map((item) => {
        return {
          date: moment(item.date).format("YYYY-MM-DD"),
          impressions: parseInt(item.impressions),
          clicks: parseFloat(item.clicks),
        };
      });
    setFilteredData(sortedDataByDate);
    setGraphData(sortedDataByDate);
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      console.log(graphData, "graphData");
      const filterDataByDates = graphData.filter((item) => {
        const itemDate = moment(item.date).format("YYYY-MM-DD");
        console.log("itemDate", itemDate, startDate, endDate);
        return itemDate >= startDate && itemDate <= endDate;
      });
      setFilteredData(filterDataByDates);
    }
  }, [startDate, endDate]);

  console.log("filteredData", filteredData);

  const getTotalClicks = () => {
    let total = 0;
    filteredData.forEach((item) => {
      total += item.clicks;
    });
    return total.toFixed(2);
  };
  const getTotalImpressions = () => {
    let total = 0;
    filteredData.forEach((item) => {
      total += item.impressions;
    });
    return total.toFixed(2);
  };

  return (
    <div className="m-t-6">
      <div className="filter-view ml-16 mt-10">
        <input
          type="date"
          value={startDate}
          className="border border-black m-3 p-2 rounded-lg "
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          value={endDate}
          className="border border-black m-3 p-2 rounded-lg "
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="flex ml-20 mt-10 ">
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="w-[300px] p-4 md:p-4">
            <h1 className="text-sm  text-gray-800 dark:text-white">
              Total Clicks
            </h1>
            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 md:text-2xl">
                {getTotalClicks()}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex max-w-md overflow-hidden mx-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="w-[300px]  p-4 md:p-4">
            <h1 className="text-sm   text-gray-800 dark:text-white">
              Total Impressions
            </h1>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 md:text-2xl">
                {getTotalImpressions()}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-10 mt-10 mx-auto justify-center w-full">
        <div className="my-4 ml-5">
          <h1 className="text-2xl my-4 font-bold text-gray-700 dark:text-gray-200 md:text-2xl">
            Product Trends By Month
          </h1>
        </div>
        <LineChart
          width={1200}
          height={600}
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="impressions" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default DaashboardChart;
