import React from "react";

import { BarChart } from "./components/BarChart";

function App() {
  const barChartData = [
    { label: "Typescript", value: 100 },
    { label: "Javascript", value: 50 },
    { label: "Python", value: 125 }
  ];
  return (
    <div>
      <BarChart data={barChartData} />
    </div>
  );
}

export default App;
