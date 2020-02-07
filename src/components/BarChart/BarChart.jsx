import React, { useEffect } from "react";
import { draw } from "./d3barChart";

import "./BarChart.css";

export const BarChart = props => {
  const canvasName = "playground";
  const { data } = props;

  useEffect(() => {
    draw({ canvasName, data });
  }, [canvasName, data]);

  return <div className={canvasName} />;
};
