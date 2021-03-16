import "./App.css";
import CategoryChart from "./components/CategoryChart";
import NumericalChart from "./components/NumericalChart";
import {
  createCategoryChartData,
  createNumericalChartData,
  mode,
  quartile,
} from "./static/helperFunctions";
import { data } from "./static/data";
import ScatterTable from "./components/ScatterTable";

function App() {
  const categoryData = createCategoryChartData(data);
  const numericalData = createNumericalChartData(data);
  return (
    <div className="App">
      <div>
        <h1>Expenditure Per Student By County</h1>
        <CategoryChart data={categoryData} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            margin: "auto",
          }}
        >
          <p>{`Mode : ${mode(categoryData, "average_spent_per_student")}`}</p>
          <p>{`Range : ${
            categoryData[categoryData.length - 1].average_spent_per_student -
            categoryData[0].average_spent_per_student
          }`}</p>
          <p>{`Q1 : ${quartile(
            categoryData,
            0.25,
            "average_spent_per_student"
          )}`}</p>
          <p>{`Q3 : ${quartile(
            categoryData,
            0.75,
            "average_spent_per_student"
          )}`}</p>
          <p>{`IQR : ${
            quartile(categoryData, 0.75, "average_spent_per_student") -
            quartile(categoryData, 0.25, "average_spent_per_student")
          }`}</p>
        </div>
      </div>
      <div>
        <h1>Students Per Teacher By Average Teachers</h1>
        <NumericalChart data={numericalData} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            margin: "auto",
          }}
        >
          <p>{`Mode : ${mode(numericalData, "students_per_teacher")}`}</p>
          <p>{`Range : ${
            numericalData[numericalData.length - 1].students_per_teacher -
            numericalData[0].students_per_teacher
          }`}</p>
          <p>{`Q1 : ${quartile(
            numericalData,
            0.25,
            "students_per_teacher"
          )}`}</p>
          <p>{`Q3 : ${quartile(
            numericalData,
            0.75,
            "students_per_teacher"
          )}`}</p>
          <p>{`IQR : ${
            quartile(numericalData, 0.75, "students_per_teacher") -
            quartile(numericalData, 0.25, "students_per_teacher")
          }`}</p>
        </div>
      </div>
      <div>
        <h1>Students Per Teacher Expenditure Per Student By County</h1>
        <ScatterTable data1={categoryData} data2={numericalData} />
      </div>
    </div>
  );
}

export default App;
