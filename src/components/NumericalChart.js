import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CategoryChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"90%"} height={1000}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="average_teacher"
          scale="auto"
          tickSize={50}
          minTickGap={0}
          angle={-90}
          height={150}
          padding={{ left: 0, right: 0 }}
          label={{ value: "Teachers", position: "bottom", offset: -20 }}
        />
        <YAxis
          stroke="#8884d8"
          tickCount={100}
          label={{
            value: "students_per_teacher",
            position: "left",
            offset: 0,
            angle: -90,
          }}
        />

        <Tooltip />

        <Bar dataKey="students_per_teacher" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CategoryChart;
