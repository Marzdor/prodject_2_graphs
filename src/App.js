import "./App.css";
import CategoryChart from "./components/CategoryChart";
import NumericalChart from "./components/NumericalChart";
import {
  createCategoryChartData,
  createNumericalChartData,
} from "./static/helperFunctions";
import { data } from "./static/data";
import ScatterTable from "./components/ScatterTable";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Expenditure Per Student By County</h1>
        <CategoryChart data={createCategoryChartData(data)} />
      </div>
      <div>
        <h1>Students Per Teacher By Average Teachers</h1>
        <NumericalChart data={createNumericalChartData(data)} />
      </div>
      <div>
        <h1>Students Per Teacher Expenditure Per Student By County</h1>
        <ScatterTable
          data1={createCategoryChartData(data)}
          data2={createNumericalChartData(data)}
        />
      </div>
    </div>
  );
}

export default App;
