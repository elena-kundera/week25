import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работка", 11],
  ["Еда", 2],
  ["Транспорт", 2],
  ["Отдых", 2],
  ["Сон", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};



function App() {
  return (
    <div className="App">
      


      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />


    </div>
  );
}

export default App;
