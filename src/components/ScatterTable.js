import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  Legend,
} from "recharts";

const ScatterTable = ({ data1, data2 }) => {
  return (
    <ResponsiveContainer width={"90%"} height={1000}>
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis
          allowDuplicatedCategory={false}
          dataKey="county"
          scale="auto"
          tickSize={50}
          minTickGap={0}
          angle={-90}
          height={150}
          padding={{ left: 0, right: 0 }}
          label={{ value: "County", position: "bottom", offset: -20 }}
        />

        <YAxis
          yAxisId="left"
          type="number"
          dataKey="students_per_teacher"
          name="students_per_teacher"
          stroke="#8884d8"
          label={{
            value: "students_per_teacher",
            position: "left",
            offset: 0,
            angle: -90,
          }}
        />
        <YAxis
          yAxisId="right"
          type="number"
          dataKey="average_spent_per_student"
          name="average_spent_per_student"
          unit="$"
          orientation="right"
          stroke="#82ca9d"
          label={{
            value: "average_spent_per_student",
            position: "right",
            offset: 0,
            angle: -90,
          }}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter yAxisId="left" name="A school" data={data2} fill="#8884d8" />
        <Scatter yAxisId="right" name="A school" data={data1} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterTable;
