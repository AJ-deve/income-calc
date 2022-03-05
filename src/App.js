import Createcolumn from "./comp/CreateColumn";
import "./App.css";
import "./style/app.scss";
import { useState } from "react";
import Columns from "./comp/Columns";
import { v4 as idgen } from "uuid";

function App() {
  const [list, setList] = useState([
    {
      name: "Nodirbek",
      dailySum: 160000,
      workedDays: 6,
      fare: 30000,
      id: idgen(),
    },
  ]);

  const myComponentStyle = {
    fontSize: "2 rem",
  };
  return (
    <div className="App">
      <h1 className="intro-tag">Income Calculator</h1>
      <div className="column">
        <div className="rows">
          <h1>Name</h1>
        </div>
        <div className="rows">
          <h1>Daily Paid</h1>
        </div>
        <div className="rows">
          <h1>Worked Days</h1>
        </div>
        <div className="rows">
          <h1>Car Fee</h1>
        </div>
        <div className="rows">
          <h1>Total</h1>
        </div>
      </div>
      <Columns list={list} setList={setList} />
      <Createcolumn list={list} setList={setList} />
    </div>
  );
}

export default App;
